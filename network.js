
document.addEventListener('DOMContentLoaded', async function () {
  try {
    const nodeInfo = document.getElementById('nodeInfo');
    nodeInfo.style.maxHeight = '600px';
    nodeInfo.style.overflowY = 'auto';

    const response = await fetch('goya_network.json');
    if (!response.ok) throw new Error('Error cargando datos');
    const data = await response.json();

    const edgeCount = {};
    data.edges.forEach(edge => {
      edgeCount[edge.from] = (edgeCount[edge.from] || 0) + 1;
      edgeCount[edge.to] = (edgeCount[edge.to] || 0) + 1;
    });

    const nodesMap = {};
    const nodes = new vis.DataSet(data.nodes.map(node => {
      const degree = edgeCount[node.id] || 1;
      const config = {
        ...node,
        size: Math.min(20 + degree * 2, 60),
        font: { size: 14, strokeWidth: 3, strokeColor: '#ffffff' },
        shape: node.image ? 'circularImage' : 'dot'
      };
      if (node.image) config.image = node.image;
      nodesMap[node.id] = config;
      return config;
    }));

    const edges = new vis.DataSet(data.edges);

    const container = document.getElementById('network');
    const network = new vis.Network(container, { nodes, edges }, {
      nodes: { borderWidth: 2 },
      edges: { color: 'lightgray' },
      physics: { solver: 'forceAtlas2Based', stabilization: true }
    });

  network.on("click", function (params) {
    if (params.nodes.length > 0) {
      const node = nodes.get(params.nodes[0]);
      const degree = edgeCount[node.id] || 0;
      let html = `<div class="node-info">`;

      if (node.image) {
        html += `<img src="${node.image}" alt="${node.id}" style="max-width: 150px;"><br>`;
      }

      html += `<h2>${node.id}</h2>`;

      const fieldsToShow = [
        { key: "life dates", label: "Life dates" },
        { key: "profession", label: "Profession" },
        { key: "author of", label: "Author of" },
        { key: "portrayed by", label: "Portrayed by" },
        { key: "Image source", label: "Image source" },
        { key: "image source", label: "Image source" }
      ];

      fieldsToShow.forEach(field => {
        if (node[field.key]) {
          html += `<p><strong>${field.label}:</strong> ${node[field.key]}</p>`;
        }
      });

      const connections = [];
      edges.get().forEach(edge => {
        if (edge.from === node.id || edge.to === node.id) {
          const otherId = edge.from === node.id ? edge.to : edge.from;
          const otherNode = nodes.get(otherId);
          connections.push({ id: otherId, name: otherNode.id });
        }
      });

      const degreeCalc = connections.length;
      html += `<p><strong>Connections:</strong> ${degreeCalc}</p><ul>`;

      connections
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach(conn => {
          html += `<li><a href="#" style="color:#66ccff" onclick="focusNode('${conn.id}')">${conn.name}</a></li>`;
        });

      html += `</ul></div>`;
      document.getElementById("nodeInfo").innerHTML = html;

      } else if (params.edges.length > 0) {
        const edge = edges.get(params.edges[0]);
        const fromNode = nodesMap[edge.from];
        const toNode = nodesMap[edge.to];
        let html = `<h3>Connection</h3>`;
      
        html += `<div style="display:flex; align-items:center; gap:1rem;">`;
        if (fromNode?.image) {
          html += `<img src="${fromNode.image}" style="max-height:80px;">`;
        }
        if (toNode?.image) {
          html += `<img src="${toNode.image}" style="max-height:80px;">`;
        }
        html += `</div>`;
        
        if (edge.since) {
          html += `<p><strong>Known each other since:</strong> ${edge.since}</p>`;
        }
        if (edge.correspondence) {
          html += `<p><strong>Correspondence:</strong> ${edge.correspondence}</p>`;
        }
        if (edge.relationship) {
          html += `<p><strong>Type of relationship:</strong> ${edge.relationship}</p>`;
        }

        html += `<p><strong>Between:</strong> <a href="#" style="color:#66ccff" onclick="focusNode('${edge.from}')">${edge.from}</a> and <a href="#" style="color:#66ccff" onclick="focusNode('${edge.to}')">${edge.to}</a></p>`;

        document.getElementById("nodeInfo").innerHTML = html;
      }
    });

    window.focusNode = function (nodeId) {
      network.focus(nodeId, {
        scale: 1.2,
        animation: { duration: 500 }
      });
      network.selectNodes([nodeId]);
    };

    // Búsqueda funcional
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) return;
      const found = data.nodes.find(n => n.id.toLowerCase() === query);
      if (found) {
        focusNode(found.id);
      } else {
        alert("No match found.");
      }
    });

  } catch (err) {
    console.error("Error cargando o renderizando la red:", err);
  }
});
