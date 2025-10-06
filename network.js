console.log("✅ network.js CARGADO desde VS Code");

let nodes, edges; // 👈 Hacemos estas variables globales

function autoLinkNames(text, nodesMap) {
  if (!text || typeof text !== "string") return text;

  // Sustituye saltos de línea invisibles por espacio
  text = text.replace(/\r?\n|\r/g, " ");

  // Divide el texto en partes: enlaces HTML intactos y el resto
  const splitParts = text.split(/(<a [^>]+>.*?<\/a>)/g);

  const processed = splitParts.map(part => {
    if (part.startsWith('<a ')) return part; // ya es un enlace, no tocar

    Object.keys(nodesMap).forEach(name => {
      const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(?<![\\w>])(${escapedName})(?![\\w<])`, "g");
      part = part.replace(
        regex,
        `<a href="#" style="color:#66ccff" onclick="focusNode('${nodesMap[name].id}')">$1</a>`
      );
    });

    return part;
  });

  return processed.join('');
}

function processMarkdownLinks(text) {
  if (!text || typeof text !== "string") return text;
  
  // Preserve italics
  text = text.replace(/<i>/g, '%%%ITALIC_OPEN%%%').replace(/<\/i>/g, '%%%ITALIC_CLOSE%%%');
  
  // Format 1: [text](url)
  text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, 
    '<a href="$2" target="_blank" style="color:#66ccff;">$1</a>');
  
  // Format 2: (text)[url]
  text = text.replace(/\(([^)]+)\)\[(https?:\/\/[^\]]+)\]/g, 
    '(<a href="$2" target="_blank" style="color:#66ccff;">$1</a>)');
    
  // Format 3: text [url] (fallback)
  text = text.replace(/(\b[^\s\[\]]+\b)\s*\[(https?:\/\/[^\]]+)\]/g, 
    '<a href="$2" target="_blank" style="color:#66ccff;">$1</a>');
  
  // Restore italics
  text = text.replace(/%%%ITALIC_OPEN%%%/g, '<i>').replace(/%%%ITALIC_CLOSE%%%/g, '</i>');
  
  return text;
}

// Add these two functions at the top of network.js
window.search = function() {
  const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!searchInput) return;

  // Find matching nodes
  const matchingNodes = nodes.get().filter(node => 
    node.id.toLowerCase().includes(searchInput) || 
    (node.label && node.label.toLowerCase().includes(searchInput))
  );

  if (matchingNodes.length > 0) {
    // Focus on first match
    network.focus(matchingNodes[0].id, { animation: true });
    // Select the node
    network.selectNodes([matchingNodes[0].id]);
    // Show node info
    network.emit('click', { nodes: [matchingNodes[0].id] });
  } else {
    alert('No matching nodes found');
  }
};

window.filterGraph = function() {
  const professionFilter = document.getElementById('professionFilter').value;
  const nationalityFilter = document.getElementById('nationalityFilter').value;
  
  // Clear previous highlights
  clearHighlights();

  if (!professionFilter && !nationalityFilter) return;

  const matchingNodes = nodes.get().filter(node => {
    const professionMatch = !professionFilter || 
      (node.profession && node.profession.includes(professionFilter));
    const nationalityMatch = !nationalityFilter || 
      (node.nationality && node.nationality.includes(nationalityFilter));
    return professionMatch && nationalityMatch;
  });

  if (matchingNodes.length > 0) {
    // Highlight matching nodes
    matchingNodes.forEach(node => {
      nodes.update({ 
        id: node.id, 
        color: { ...node.color, border: 'red' }, 
        borderWidth: 4 
      });
    });
    
    // Focus on the first matching node
    network.focus(matchingNodes[0].id, { animation: true });
    lastHighlightedNodes = matchingNodes.map(node => node.id);
  } else {
    alert('No nodes match the selected filters');
  }
};

// === FUNCIONES GLOBALES PARA MEMBERS LIST Y NEW IN ===

function buildMembersList(data) {
  const container = document.getElementById('membersList');
  if (!container) {
    console.error("❌ No se encontró #membersList");
    return;
  }

  // Recoge nombres desde data.nodes
  const names = (data.nodes || []).map(n => n.id).filter(Boolean);

  // Ordena por clave de "apellido" (usa la función surnameKey que ya existe)
  const collator = new Intl.Collator(undefined, { sensitivity: 'base' });
  names.sort((a,b) => collator.compare(surnameKey(a), surnameKey(b)));

  // Escapa comillas para usar en onclick inline
  const esc = s => String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'");

  // Render A–Z con cabeceras por letra
  let html = '';
  let currentLetter = '';
  names.forEach(id => {
    const key = surnameKey(id);
    const letter = (key.charAt(0) || '#').toUpperCase();
    if (letter !== currentLetter) {
      if (currentLetter) html += '</ul>';
      html += `<div class="section-heading" style="margin-top:0.8rem;">${letter}</div><ul style="list-style:none; padding-left:0.5rem; margin:0;">`;
      currentLetter = letter;
    }
    html += `<li style="margin:0.1rem 0;"><a href="#" onclick="focusNode('${esc(id)}'); return false;" style="color:#66ccff; text-decoration:none;">${id}</a></li>`;
  });
  if (names.length) html += '</ul>';

  container.innerHTML = html;
}

function buildNewInList(data) {
  const container = document.getElementById('newInList');
  if (!container) {
    console.error("❌ No se encontró #newInList");
    return;
  }

  // Recolectar nodos/edges que tengan 'added' o 'last_modified'
  const nodesWithDates = (data.nodes || []).filter(n => n.added || n.last_modified)
    .map(n => ({ type: 'node', id: n.id, label: n.label || n.id, date: n.added || n.last_modified }));

  const edgesWithDates = (data.edges || []).filter(e => e.last_modified)
    .map(e => ({ type: 'edge', from: e.from, to: e.to, label: `${e.from} ↔ ${e.to}`, date: e.last_modified, edgeObj: e }));

  const items = nodesWithDates.concat(edgesWithDates)
    .sort((a,b) => new Date(b.date) - new Date(a.date));

  if (!items.length) {
    container.innerHTML = '<em>No hay marcas de fecha por nodo/edge.</em>';
    return;
  }

  // Limitar a 30 items y renderizar
  container.innerHTML = '';
  items.slice(0, 30).forEach(item => {
    const wrapper = document.createElement('div');
    wrapper.style.marginBottom = '0.4rem';

    const a = document.createElement('a');
    a.href = '#';
    a.className = 'newin-link';
    a.style.color = '#66ccff';
    a.textContent = item.type === 'node' ? item.label : `${item.label} (edge)`;

    const dateSpan = document.createElement('span');
    const dateStr = new Date(item.date).toLocaleDateString('es-ES', { day:'2-digit', month:'short', year:'numeric' });
    dateSpan.textContent = ` — ${dateStr}`;
    dateSpan.style.color = '#bbb';

    a.onclick = (e) => {
      e.preventDefault();
      if (item.type === 'node') {
        if (typeof focusNode === 'function') {
          focusNode(item.id);
        }
      } else {
        const match = window.edges.get().find(ed => ed.from === item.from && ed.to === item.to);
        if (match) {
          network.selectEdges([match.id]);
          network.emit('click', { edges: [match.id], nodes: [] });
        }
      }
      showNewInPanel(false);
    };

    wrapper.appendChild(a);
    wrapper.appendChild(dateSpan);
    container.appendChild(wrapper);
  });
}

// También hacer global la función showNewInPanel
function showNewInPanel(show = true) {
  const panel = document.getElementById('newInPanel');
  if (!panel) {
    console.error("❌ No se encontró #newInPanel");
    return;
  }
  panel.style.display = show ? 'block' : 'none';
}

// === FIN DE FUNCIONES GLOBALES ===

document.addEventListener('DOMContentLoaded', async function () {
  // ——— Default snapshot del panel lateral (nodeInfo)
  let __defaultNodeInfoHTML = null;
  // Add this right after: document.addEventListener('DOMContentLoaded', async function () {
  try {
        // ADD THESE LINES:
        const preloadImages = (nodes) => {
            const promises = nodes
                .filter(node => node.image)
                .map(node => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = node.image;
                        img.onload = resolve;
                        img.onerror = resolve;
                    });
                });
            return Promise.all(promises);
        };
    
        // Load the network data
        const response = await fetch('goya_network.json');
        if (!response.ok) throw new Error('Error cargando datos');
        const data = await response.json();
        
        // Start image preloading
        // const imagePreload = preloadImages(data.nodes);

        // Existing setup code
        const nodeInfo = document.getElementById('nodeInfo');
        nodeInfo.style.maxHeight = '810px';
        nodeInfo.style.overflowY = 'auto';

        const edgeCount = {};
        data.edges.forEach(edge => {
          edgeCount[edge.from] = (edgeCount[edge.from] || 0) + 1;
          edgeCount[edge.to] = (edgeCount[edge.to] || 0) + 1;
        });

        const nodesMap = {};
        const labelToId = {};
        // Ajustes de nodos
        nodes = new vis.DataSet(data.nodes.map(node => {
          labelToId[node.label] = node.id;
          const degree = edgeCount[node.id] || 1;
          const config = {
            ...node,
            size: Math.min(14 + degree * 0.45, 34),   //antes: 20 + degree * 0.65, 46
            mass: 1 + degree * 0.15,
            font: {
              size: Math.min(11 + degree * 0.4, 20),    //antes: 11 + degree * 0.6, 24
              color: '#ffffff',
              strokeWidth: 3,
              strokeColor: '#111111', 
              face: 'EB Garamond, serif',
              align: 'center',
              bold: true,
              vadjust: -6    //antes: -10
            },
            color: { border: '#2B7CE9' },
            borderWidth: 2,
            shape: node.image ? 'circularImage' : 'dot',
            labelHighlightBold: false,
            margin: -10
          };
          config._imageUrl = node.image;
          nodesMap[node.id] = config;
          return config;
        }));
    
    // ——— RELACIONES FUERTES: estarán físicamente más cerca ———
    const STRONG_TIE_KEYWORDS = [
      'spouse',          // spouses
      'married',         // married to, married in
      'sibling',         // siblings
      'partner',
      'lover',
      'brother', 'sister',
      'father', 'mother', 'son', 'daughter', // father-son, mother-daughter, etc.
      'master', 'student',                   // master-student
      'friend'                               // friends
    ];

    // Devuelve true si el edge es “fuerte”
    function isStrongTie(edge) {
      const t = String(edge['relationship type'] || edge.title || '').toLowerCase();
      return STRONG_TIE_KEYWORDS.some(k => t.includes(k));
    }

    const STRONG_PAIRS = new Set();
    (data.edges || []).forEach(e => {
      if (isStrongTie(e)) {
        const a = String(e.from), b = String(e.to);
        STRONG_PAIRS.add(a < b ? `${a}|${b}` : `${b}|${a}`);
      }
    });


    // Longitud por tipo de relación y nivel de conexión
    function getEdgeLength(edge) {
      // más cerca si es relación fuerte
      if (isStrongTie(edge)) return 70;             // << muy cerca
      // para tus “secondary” dejamos algo más largo
      if (edge.connection_level === 'secondary') return 220;
      // resto (direct, etc.)
      return 140;                                   // ~ un poco más corto que tu springLength global
    }


    // Edges más transparentes (general)
    edges = new vis.DataSet(data.edges.map(edge => {

      const level = edge.connection_level || "direct";

      // Muestra etiqueta solo si es “direct” o “secondary”.
      // Si termina en “?” (p. ej. “direct?”) NO la pintamos y la ponemos como tooltip.
      const label =
        edge.label === 'direct' || edge.label === 'secondary'
          ? edge.label
          : undefined;

      const title =
        edge.label && /\?$/.test(edge.label)
          ? edge.label  // aparecerá al pasar el ratón
          : edge.title;

      return {
        ...edge,
        label,
        title,
        length: getEdgeLength(edge),             // ← NUEVO: acerca o aleja según relación
        color: { color: level === "secondary" ? "rgba(255,215,0,0.4)" : "rgba(200,200,200,0.25)" },
        width: 1.5
      };
    }));

    // Refuerzo físico para relaciones fuertes: “muelles” invisibles y cortos
    const helperEdges = [];
    data.edges.forEach(e => {
      if (isStrongTie(e)) {
        helperEdges.push({
          id: `__phys_${e.from}__${e.to}`,
          from: e.from,
          to: e.to,
          length: 80,         // antes: 60
          physics: true,      // participa en física
          hidden: true,       // no se dibuja
          width: 0
        });
      }
    });
    edges.add(helperEdges);        // ← ANCLA

    // --- Hub invisible por componente de relaciones fuertes ---
    const familyHubs = [];     // nodos invisibles
    const familyHubEdges = []; // aristas invisibles al hub

    // 1) Construir componentes con edges fuertes (union-find muy simple)
    const parent = {};
    const find = x => (parent[x] ?? x) === x ? x : (parent[x] = find(parent[x] ?? x));
    const unite = (a,b) => { a=find(a); b=find(b); if(a!==b) parent[a]=b; };

    (data.edges || []).forEach(e => {
      if (isStrongTie(e)) {
        parent[e.from] ??= e.from;
        parent[e.to]   ??= e.to;
        unite(e.from, e.to);
      }
    });

    // 2) Agrupar por raíz
    const groups = {};
    Object.keys(parent).forEach(id => {
      const root = find(id);
      (groups[root] ??= []).push(id);
    });

    // 3) Crear un hub por grupo con ≥3 miembros (ajusta el umbral si quieres)
    Object.values(groups).forEach(members => {
      if (members.length < 3) return; // para parejas/duplas basta con los muelles 1:1
      const hubId = `__fam__${members.slice(0,2).join('_')}_${members.length}`;
      familyHubs.push({
        id: hubId,
        hidden: true,
        physics: true,
        mass: 0.5,
        size: 1
      });
      members.forEach(id => {
        familyHubEdges.push({
          id: `__fam_e__${hubId}__${id}`,
          from: hubId,
          to: id,
          hidden: true,
          physics: true,
          length: 95,    // tira del grupo hacia un centro “blando”
          width: 0
        });
      });
    });

    // Añadir a los datasets
    if (familyHubs.length) nodes.add(familyHubs);
    if (familyHubEdges.length) edges.add(familyHubEdges);


    const lastModified = response.headers.get("Last-Modified");

    const formattedUpdate = lastModified
      ? new Date(lastModified).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
      : 'unknown';

    document.getElementById("networkStats").innerHTML = `Nodes: ${data.nodes.length} | Connections: ${data.edges.length}<br><span style="font-size: 0.8rem; color: #999;">Last update: ${formattedUpdate}</span>`;
    document.getElementById('distanceStats')?.remove();


    /* ---- NEW IN: funciones para la pestaña "New in" ---- */

    function showNewInPanel(show = true) {
      const panel = document.getElementById('newInPanel');
      if (!panel) return;
      panel.style.display = show ? 'block' : 'none';
    }

    // Construye la lista "New in" a partir de data.nodes y data.edges
    function buildNewInList(data) {
      const container = document.getElementById('newInList');
      if (!container) return;

      // Recolectar nodos/edges que tengan 'added' o 'last_modified'
      const nodesWithDates = (data.nodes || []).filter(n => n.added || n.last_modified)
        .map(n => ({ type: 'node', id: n.id, label: n.label || n.id, date: n.added || n.last_modified }));

      const edgesWithDates = (data.edges || []).filter(e => e.last_modified)
        .map(e => ({ type: 'edge', from: e.from, to: e.to, label: `${e.from} ↔ ${e.to}`, date: e.last_modified, edgeObj: e }));

      const items = nodesWithDates.concat(edgesWithDates)
        .sort((a,b) => new Date(b.date) - new Date(a.date));

      if (!items.length) {
        container.innerHTML = '<em>No hay marcas de fecha por nodo/edge. Añade "added" o "last_modified" en goya_network.json para activar esta lista.</em>';
        return;
      }

      // Limitar (p. ej. 30 items) y renderizar
      container.innerHTML = '';
      items.slice(0, 30).forEach(item => {
        const wrapper = document.createElement('div');
        wrapper.style.marginBottom = '0.4rem';

        // enlace (solo el label)
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'newin-link';
        a.style.color = '#66ccff';
        a.textContent = item.type === 'node' ? item.label : `${item.label} (edge)`;

        // fecha (texto normal)
        const dateSpan = document.createElement('span');
        const dateStr = new Date(item.date).toLocaleDateString('es-ES', { day:'2-digit', month:'short', year:'numeric' });
        dateSpan.textContent = ` — ${dateStr}`;
        dateSpan.style.color = '#bbb';

        // click en el link
        a.onclick = (e) => {
          e.preventDefault();
          if (item.type === 'node') {
            if (typeof focusNode === 'function') {
              focusNode(item.id);
            }
          } else {
            const match = window.edges.get().find(ed => ed.from === item.from && ed.to === item.to);
            if (match) {
              network.selectEdges([match.id]);
              network.emit('click', { edges: [match.id], nodes: [] });
            }
          }
          showNewInPanel(false);
        };

        wrapper.appendChild(a);
        wrapper.appendChild(dateSpan);
        container.appendChild(wrapper);
      });
    }

    // Listener para "New in" - versión mejorada
    document.addEventListener('click', function(e) {
      if (e.target && e.target.id === 'newInBtn') {
        const panel = document.getElementById('newInPanel');
        if (!panel) {
          console.error("❌ No se encontró #newInPanel");
          return;
        }
        const isVisible = panel.style.display === 'block';
        showNewInPanel(!isVisible);
        e.preventDefault();
      }
    });

    // Llamada a buildNewInList(data) — inserta esto donde llamas a handleInitialHash() / loadFullImages()
    // En tu archivo ya existe un setTimeout que hace handleInitialHash() y loadFullImages(); añade buildNewInList(data) allí.
    // Ejemplo (edita la llamada existente para incluir buildNewInList):
    /*
    setTimeout(() => {
      handleInitialHash();
      loadFullImages();
      buildNewInList(data); // <-- nueva llamada
    }, 500);
    */

    // ---- MEMBERS LIST: manual overrides (edit these if needed) ----
    // 1) Para nombres completos donde quieras forzar el apellido clave (usa la grafía exacta)

    // Declarar una sola vez (arriba, antes de surnameKey)
    const SURNAME_FORCE_BY_FULLNAME = Object.create(null);
    const GIVEN_FORCE_TOKENS = new Set();
    const SURNAME_FORCE_TOKENS = new Set();

    // Rellenar el diccionario/sets (puedes repetir este bloque en otros sitios sin problema)
    Object.assign(SURNAME_FORCE_BY_FULLNAME, {
      'Weiss Zorrilla': 'weiss',
      'Prince Antoine, Duke of Montpensier': 'montpensier',
      'Juan Agustín Ceán Bermúdez': 'cean',
      'II Duke of San Carlos': 'san carlos',
      'X Marchioness of Santa Cruz': 'santa cruz',
      'María Antonia Gonzaga, Marchioness of Villafranca (widow)': 'villafranca',
      'Berthe Morisot': 'morisot',
      'Antoine-Jean Gros': 'gros',
      'Francisco Álvarez de Toledo, XII Marquis of Villafranca': 'villafranca',
      'José Álvarez de Toledo, Duke of Alba': 'alba',
      'María Teresa de Silva, XIII Duchess of Alba': 'alba',
      'María Cristina de Borbón-Dos Sicilias': 'borbon',
      'Rosario Weiss Zorrilla': 'weiss',
      'Isabel II': 'isabel',
      'Carlos III': 'carlos',
      'Carlos IV': 'carlos',
      'Fernando VII': 'fernando',
      'Louis Philippe I': 'louis',
      'Dominique Vivant Denon': 'vivant',
      'María Tomasa Palafox, Marchioness of Villafranca': 'villafranca',
      'María Gabriela de Palafox, Marchioness of Lazán': 'lazan',
      'Eugenio Eulalio Palafox, VII Count of Montijo': 'montijo',
      'Cipriano Portocarrero, VIII Count of Montijo': 'montijo',
      'María Francisca de Sales Portocarrero, VI Countess of Montijo': 'montijo',
      'Alexandre Dumas père': 'dumas',
      'Francisco Martínez de la Rosa': 'martinez',
      'Juan Meléndez Valdés': 'melendez',
      'Jenaro Pérez Villaamil': 'perez'
    });

    /* ---- MEMBERS LIST: alphabetical index of nodes (A–Z by surname) ---- */
    function surnameKey(name) {
      if (!name) return '';

      // Normaliza a “base”: quita paréntesis y corta por coma (para eliminar títulos)
      let base = String(name)
        .replace(/\(.*?\)/g, '')   // (widow), (husband of), etc.
        .split(',')[0]             // “, Duke of Alba” fuera
        .replace(/[.]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      // Helper: quitar acentos y pasar a minúsculas
      const fold = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

      // 0) Override por nombre completo (y por base limpia)
      const override = SURNAME_FORCE_BY_FULLNAME[name] || SURNAME_FORCE_BY_FULLNAME[base];
      if (override) {
        return fold(override);
      }

      const tokens = base.split(' ').filter(Boolean);
      if (!tokens.length) return '';

      const tf = tokens.map(fold);

      const particles = new Set([
        'de',"d'",'del','de-la','de-las','de-los','la','las','los','le','les',
        'du','des','d','da','di','do','dos','van','von','der','den','zu','zur',
        'y','e','the','of'
      ]);

      const suffixes = new Set(['jr','junior','fils','hijo']);
      const titles = new Set([
        'duchess','duke','count','countess','marquis','marchioness',
        'queen','king','prince','princess','emperor','empress'
      ]);
      const roman = /^[IVXLCDM]+$/i;

      // 1) Si hay un título con “of …” (Duchess of Abrantes), coge el último token
      if (tf.some(t => titles.has(t)) && tf.includes('of') && tokens.length >= 2) {
        return fold(tokens[tokens.length - 1]);
      }

      // 2) Caso “X y Y”: toma el anterior a 'y' (apellido español tradicional)
      const yIndex = tf.indexOf('y');
      if (yIndex > 0 && yIndex < tf.length - 1) {
        return fold(tokens[yIndex - 1]);
      }

      // Helper para validar tokens como posibles apellidos
      const normalizeToken = (raw) => {
        const t = fold(raw).replace(/['’]/g,'');
        if (!t) return '';
        if (particles.has(t)) return '';
        if (suffixes.has(t)) return '';
        if (roman.test(t)) return '';
        return t;
      };

      // 3) Fuerza de apellido por token (opcional)
      if (SURNAME_FORCE_TOKENS.has(tf[tf.length - 1])) {
        return tf[tf.length - 1];
      }

      // 4) Dos tokens: por defecto usa el ÚLTIMO (Nombre Apellido),
      //    salvo que el primero esté marcado como nombre (forzado) o compuesto de nombres.
      if (tokens.length === 2) {
        const first = tf[0];
        const second = normalizeToken(tokens[1]) || tf[1];

        // “Antoine-Jean” u otros compuestos: si todas las partes están forzadas como nombre → usa el segundo
        const isHyphenGiven = first.includes('-') &&
          first.split('-').every(p => GIVEN_FORCE_TOKENS.has(p));

        const firstForcedGiven = GIVEN_FORCE_TOKENS.has(first) || isHyphenGiven;

        // Si el segundo está forzado como apellido, úsalo
        if (SURNAME_FORCE_TOKENS.has(second)) return second;

        // En casi todos los casos de 2 tokens queremos el ÚLTIMO (Apellido).
        // EXCEPCIÓN: si quieres que un caso 2-apellidos españoles cuente por el primero,
        //            añade el nombre completo arriba en SURNAME_FORCE_BY_FULLNAME.
        if (firstForcedGiven) {
          return second; // Nombre compuesto forzado → usa Apellido
        }
        return second;    // default: último token como apellido
      }

      // 5) General: recorre desde el final buscando un token válido
      for (let i = tokens.length - 1; i >= 0; i--) {
        const n = normalizeToken(tokens[i]);
        if (n) return n;
      }

      // 6) Fallback: último token “tal cual”
      return tf[tf.length - 1];
    }

    function buildMembersList(data) {
      const container = document.getElementById('membersList');
      if (!container) return;

      // Recoge nombres desde data.nodes (el mismo que se muestra en la red)
      const names = (data.nodes || []).map(n => n.id).filter(Boolean);

      // Ordena por clave de "apellido"
      const collator = new Intl.Collator(undefined, { sensitivity: 'base' });
      names.sort((a,b) => collator.compare(surnameKey(a), surnameKey(b)));

      // Escapa comillas para usar en onclick inline
      const esc = s => String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'");

      // Render A–Z con cabeceras por letra
      let html = '';
      let currentLetter = '';
      names.forEach(id => {
        const key = surnameKey(id);
        const letter = (key.charAt(0) || '#').toUpperCase();
        if (letter !== currentLetter) {
          if (currentLetter) html += '</ul>';
          html += `<div class="section-heading" style="margin-top:0.8rem;">${letter}</div><ul style="list-style:none; padding-left:0.5rem; margin:0;">`;
          currentLetter = letter;
        }
        // Igual que en la lista de conexiones: enfoca el nodo
        html += `<li style="margin:0.1rem 0;"><a href="#" onclick="focusNode('${esc(id)}'); return false;" style="color:#66ccff; text-decoration:none;">${id}</a></li>`;
      });
      if (names.length) html += '</ul>';

      container.innerHTML = html;
    }


    let lastHighlightedNode = null;
    let lastHighlightedNodes = [];
    let lastNonHighlightedNodes = [];

        function clearHighlights() {
      // Batch update nodes
      const nodeUpdates = [];
      if (lastHighlightedNode) {
        nodeUpdates.push({ 
          id: lastHighlightedNode, 
          color: { border: '#2B7CE9' }, 
          borderWidth: 2,
          opacity: 1 // Reset opacity
        });
      }
      
      if (lastHighlightedNodes.length > 0) {
        lastHighlightedNodes.forEach(id => {
          nodeUpdates.push({ 
            id, 
            color: { border: '#2B7CE9' }, 
            borderWidth: 2,
            opacity: 1 // Reset opacity
          });
        });
      }
      
      // Reset opacity for non-highlighted nodes
      if (lastNonHighlightedNodes.length > 0) {
        lastNonHighlightedNodes.forEach(id => {
          nodeUpdates.push({ 
            id, 
            opacity: 1 // Reset to fully opaque
          });
        });
      }
      
      if (nodeUpdates.length > 0) nodes.update(nodeUpdates);
    
      // Batch update edges
      const edgeUpdates = edges.get().map(edge => ({
        id: edge.id,
        color: { color: edge.connection_level === "secondary" ? "rgba(255,215,0,0.25)" : "rgba(200,200,200,0.15)" },
        width: 1.5
      }));

      edges.update(edgeUpdates);
    
      lastHighlightedNode = null;
      lastHighlightedNodes = [];
      lastNonHighlightedNodes = [];
    }
    
    const container = document.getElementById('network');
    if (!container) {
      console.error("❌ No se encontró el contenedor #network.");
      return;
}
    const network = new vis.Network(container, { nodes, edges }, {
      nodes: { 
        borderWidth: 2,
        shapeProperties: {
          useBorderWithImage: true
        }
      },
      edges: {
        color: 'rgba(200,200,200,0.2)',
        width: 1
      },

      physics: {
        enabled: true,
        solver: 'repulsion',
        repulsion: {
          nodeDistance: 190,
          centralGravity: 0.10,
          springLength: 100,
          springConstant: 0.03,
          damping: 0.58
        },
        stabilization: {
          enabled: true,
          iterations: 120,     // antes 80
          updateInterval: 10
        }
      },

      layout: {
        improvedLayout: false,
        randomSeed: 1912  // Consistent layout
      }
    });

    // ——— Nudge anti-overlap (suave, una sola pasada) ———
    function nudgeOverlapsOnce(network, nodesDS) {
      const ids = nodesDS.getIds();
      if (!ids.length) return;

      const dataById = {};
      nodesDS.get(ids).forEach(n => (dataById[n.id] = n));

      const pos = network.getPositions(ids);
      const minSepFactor = 1.05; // antes: 0.90

      for (let i = 0; i < ids.length; i++) {
        for (let j = i + 1; j < ids.length; j++) {
          const a = ids[i], b = ids[j];
          const pa = pos[a], pb = pos[b];
          if (!pa || !pb) continue;

          const dx = pb.x - pa.x, dy = pb.y - pa.y;
          const dist = Math.hypot(dx, dy) || 1;
          const ra = (dataById[a].size || 20);
          const rb = (dataById[b].size || 20);
          const minDist = (ra + rb) * minSepFactor;

          const key = a < b ? `${a}|${b}` : `${b}|${a}`;
          if (STRONG_PAIRS.has(key)) continue; // 👈 no separamos parejas/amistades fuertes

          if (dist < minDist) {
            const push = (minDist - dist) / 2;
            const ux = dx / dist, uy = dy / dist;
            // Mueve muy poco a cada uno en sentidos opuestos
            network.moveNode(a, pa.x - ux * push, pa.y - uy * push);
            network.moveNode(b, pb.x + ux * push, pb.y + uy * push);
          }
        }
      }
    }

    network.once('stabilizationIterationsDone', function () {
      // pequeño retraso para asegurar posiciones finales
      setTimeout(() => nudgeOverlapsOnce(network, nodes), 60);
    });


    function loadFullImages() {
      const imageUpdates = data.nodes
        .filter(node => node.image)
        .map(node => ({ id: node.id, image: node.image }));
      
      if (imageUpdates.length > 0) {
        nodes.update(imageUpdates);
      }
    }
    
  network.once("stabilizationIterationsDone", function () {
    document.getElementById('loadingMessage').style.display = 'none';
  
    // 1. Separar nodos que están demasiado cerca
    const MIN_DISTANCE = 120;
    const positions = network.getPositions();
    const updates = [];
    const nodeArray = nodes.get();

    for (let i = 0; i < nodeArray.length; i++) {
      const node1 = nodeArray[i];
      const p1 = positions[node1.id];
      
      for (let j = i + 1; j < nodeArray.length; j++) {
        const node2 = nodeArray[j];
        const p2 = positions[node2.id];
          // ⛔ Si alguno de los nodos no tiene posición, saltar
          if (!p1 || !p2) continue;
        const key = node1.id < node2.id ? `${node1.id}|${node2.id}` : `${node2.id}|${node1.id}`;
        if (STRONG_PAIRS.has(key)) continue; // 👈 no separar relaciones fuertes
        
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < MIN_DISTANCE && distance > 0.5) {
          const push = (MIN_DISTANCE - distance) * 1.2;
          updates.push({ 
            id: node1.id, 
            x: p1.x - dx * push / distance, 
            y: p1.y - dy * push / distance 
          });
          updates.push({ 
            id: node2.id, 
            x: p2.x + dx * push / distance, 
            y: p2.y + dy * push / distance 
          });
        }
      }
    }

    if (updates.length > 0) {
      nodes.update(updates);
    }

    // 🔁 Ahora sí: detener la física
    network.setOptions({ physics: { enabled: false } });

    function highlightNeighborhood(nodeId) {
      const connectedEdges = edges.get({
        filter: edge => edge.from === nodeId || edge.to === nodeId
      });
      
      const connectedNodes = new Set();
      connectedEdges.forEach(edge => {
        connectedNodes.add(edge.from === nodeId ? edge.to : edge.from);
      });

      const allEdgeIds = edges.getIds();
      const connectedEdgeIds = new Set(connectedEdges.map(e => e.id));
      
      const fadedEdges = allEdgeIds.filter(id => !connectedEdgeIds.has(id)).map(id => ({
        id,
        color: { color: 'rgba(200,200,200,0.3)' },
        width: 1
      }));

      const allNodeIds = nodes.getIds();
      const nonConnected = allNodeIds.filter(id => id !== nodeId && !connectedNodes.has(id));
      nodes.update(nonConnected.map(id => ({ id, opacity: 0.3 })));

      // Atenuar edges no conectados
      const edgeIds = edges.getIds();
      edges.update(edgeIds.map(id => {
        const isConnected = connectedEdgeIds.has(id);
        return {
          id,
          color: { color: isConnected ? 'red' : 'rgba(200,200,200,0.05)' },
          width: isConnected ? 3 : 0.5
        };
      }));

      // Batch updates
      const updates = [
        { id: nodeId, color: { border: 'red' }, borderWidth: 4 }
      ];
      
      // Highlight connected nodes
      Array.from(connectedNodes).forEach(id => {
        updates.push({ id, color: { border: '#ffa500' }, borderWidth: 3 });
      });
    
      const nonConnectedUpdates = nonConnected.map(id => ({
        id,
        opacity: 0.3
      }));
      
      nodes.update(updates);
      nodes.update(nonConnectedUpdates);
      
      lastHighlightedNode = nodeId;
      lastHighlightedNodes = Array.from(connectedNodes);
      lastNonHighlightedNodes = nonConnected;
    }
    
    network.on("click", function (params) {
      if (params.nodes.length > 0) {
        const node = nodes.get(params.nodes[0]);
        updateURL(node.id);  // This line should be here

        clearHighlights();
        highlightNeighborhood(node.id);
        lastHighlightedNode = node.id;

        const degree = edgeCount[node.id] || 0;
        let html = `<div class="node-info">`;

        if (node.image) {
          html += `<img src="${node.image}" alt="${node.id}" style="max-width: 150px;"><br>`;
        }

        html += `<h2>${node.id}</h2>`;

        const fieldsToShow = [
          { type: "section", label: "Identity and Personal Data" },
          { type: "field", key: "life dates", label: "Life dates" },
          { type: "field", key: "full name", label: "Full name" },
          { type: "field", key: "also known as", label: "Also known as" },
          { type: "field", key: "other names", label: "Other names" },
          { type: "field", key: "pseudonyms", label: "Pseudonyms" },
          { type: "field", key: "profession", label: "Profession" },
          { type: "field", key: "nationality", label: "Nationality" },
          { type: "field", key: "born in", label: "Born in" },
          { type: "field", key: "dies in", label: "Dies in" },
          { type: "field", key: "considered as", label: "Considered as" },
          { type: "field", key: "political views", label: "Political views" },
          { type: "field", key: "military activity", label: "Military activity" },
          { type: "field", key: "participates in", label: "Participates in" },
          { type: "field", key: "aristocratic titles", label: "Aristocratic titles" },
          { type: "field", key: "curiosities", label: "Curiosities" },
        
          { type: "section", label: "Family and Personal Relationships" },
          { type: "field", key: "parents", label: "Parents" },
          { type: "field", key: "siblings", label: "Siblings" },
          { type: "field", key: "married to", label: "Married to" },
          { type: "field", key: "partners/lovers", label: "Partners/lovers" },
          { type: "field", key: "children", label: "Children" },
          { type: "field", key: "friends", label: "Friends" },
          { type: "field", key: "rivals", label: "Rivals" },
          { type: "field", key: "correspondence", label: "Correspondence" },
          { type: "field", key: "meets", label: "Meets" },
        
          { type: "section", label: "Education, Profession and Institutions" },
          { type: "field", key: "studies in", label: "Studies in" },
          { type: "field", key: "works as", label: "Works as" },
          { type: "field", key: "works for", label: "Works for" },
          { type: "field", key: "influenced by", label: "Influenced by" },
          { type: "field", key: "follower of", label: "Follower of" },
          { type: "field", key: "masters", label: "Masters" },
          { type: "field", key: "students", label: "Students" },
          { type: "field", key: "member of", label: "Member of" },
          { type: "field", key: "founder of", label: "Founder of" },
          { type: "field", key: "editor of", label: "Editor of" },
          { type: "field", key: "writes in", label: "Writes in" },
          { type: "field", key: "collaborates with", label: "Collaborates with" },
          { type: "field", key: "registered in", label: "Registered in" },
          { type: "field", key: "mentions", label: "Mentions" },
          { type: "field", key: "mentioned in the French press", label: "Mentioned in the French press" },
          { type: "field", key: "decorations/awards", label: "Decorations/awards" },
          { type: "field", key: "tertulia", label: "Tertulia" },

          { type: "section", label: "Artistic Activity, Art Collecting and Patronage" },
          { type: "field", key: "literary salon or tertulia", label: "Literary salon or tertulia" },
          { type: "field", key: "author of", label: "Author of" },
          { type: "field", key: "patrons", label: "Patrons" },
          { type: "field", key: "patronage", label: "Patronage" },
          { type: "field", key: "portrayed by", label: "Portrayed by" },
          { type: "field", key: "collection", label: "Collection" },
          { type: "field", key: "art collection", label: "Art collection" },
          { type: "field", key: "collector of", label: "Collector of" },
          { type: "field", key: "sales", label: "Sales" },
          { type: "field", key: "exhibitions", label: "Exhibitions" },
          { type: "field", key: "museum collections", label: "Museum collections" },

          { type: "section", label: "Geographic Presence and Movement" },
          { type: "field", key: "lives in", label: "Lives in" },
          { type: "field", key: "address", label: "Address" },
          { type: "field", key: "trips", label: "Trips" },
          { type: "field", key: "in Spain", label: "In Spain" },
          { type: "field", key: "in Madrid", label: "In Madrid" },
          { type: "field", key: "visits the Prado Museum", label: "Visits the Prado Museum" },
          { type: "field", key: "in France", label: "In France" },
          { type: "field", key: "in Paris", label: "In Paris" },
          { type: "field", key: "in Italy", label: "In Italy" },
        
          { type: "section", label: "Relationship to Goya and His Work" },
          { type: "field", key: "link to Goya's work", label: "Link to Goya's work" },
          { type: "field", key: "discovers Goya's works", label: "Discovers Goya's works" },
          { type: "field", key: "knows Goya's works", label: "Knows Goya's works" },
          { type: "field", key: "copies after Goya", label: "Copies after Goya" },
          { type: "field", key: "writes about Goya", label: "Writes about Goya" },
          { type: "field", key: "mentions of Goya", label: "Mentions of Goya" },
          { type: "field", key: "commissions Goya with", label: "Commissions Goya with" },
          { type: "field", key: "influence of Goya", label: "Influence of Goya" },
          { type: "field", key: "collector of Goya's works", label: "Collector of Goya's works" },
          { type: "field", key: "disseminates Goya's works", label: "Disseminates Goya's works" },
          { type: "field", key: "shows Goya", label: "Shows Goya" },
          { type: "field", key: "mentions the Prado commentaries", label: "Mentions the Prado commentaries" },
          { type: "field", key: "interest in Spanish art", label: "Interest in Spanish art" },
          { type: "field", key: "copies after Spanish artworks", label: "Copies after Spanish artworks" },
        
          { type: "section", label: "Sources and Documentation" },
          { type: "field", key: "archives", label: "Archives" },
          { type: "field", key: "bibliography", label: "Bibliography" },
          { type: "field", key: "conferences/seminars", label: "Conferences/seminars" },
          { type: "field", key: "newspaper archive", label: "Newspaper archive" },
          { type: "field", key: "websites", label: "Websites" },
          { type: "field", key: "podcasts", label: "Podcasts" },
          { type: "field", key: "image source", label: "Image source" },
          { type: "field", key: "added", label: "Added" },
          { type: "field", key: "last_modified", label: "Last modified" },
        ];

      const nodesMapByLabel = {};
      nodes.get().forEach(n => nodesMapByLabel[n.label] = n);

      fieldsToShow.forEach((field, idx) => {
        if (field.type === "section") {
          // 🔧 Buscar los campos que pertenecen solo a esta sección
          const fieldsInThisSection = [];
          for (let i = idx + 1; i < fieldsToShow.length; i++) {
            if (fieldsToShow[i].type === "section") break;
            fieldsInThisSection.push(fieldsToShow[i]);
          }
      
          const hasData = fieldsInThisSection.some(f => node[f.key]);
          if (hasData) {
            html += `<h3 class="section-heading">${field.label}</h3>`;
          }
        } else if (field.type === "field" && node[field.key]) {
          let value = node[field.key];
          let htmlText;
      
          if (Array.isArray(value)) {
            const processedItems = value.map(item => {
              if (typeof item === 'string' && (item.includes('<img') || item.includes('<div'))) {
                return `<li>${item}</li>`; // Ya es HTML, no volver a procesar
              } else {
                return `<li>${autoLinkNames(processMarkdownLinks(item), nodesMap)}</li>`;
              }
            });
            htmlText = `${processedItems.join("")}`; // sin <ul> ni <li>

          } else {
            if (typeof value === 'string' && (value.includes('<img') || value.includes('<div'))) {
              htmlText = value; // Ya es HTML
            } else {
              htmlText = autoLinkNames(processMarkdownLinks(value), nodesMap);
            }
          }
          html += `<p style="margin-top:0.3rem;"><strong>${field.label}:</strong> ${htmlText}</p>`;
        }
      });

        const connections = [];
        edges.get().forEach(edge => {
          if (edge.from === node.id || edge.to === node.id) {
            const otherId = edge.from === node.id ? edge.to : edge.from;
            const otherNode = nodes.get(otherId);
            if (otherNode) {
              connections.push({ id: otherId, name: otherNode.id });
            }
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
        addShareButton(node.label);
        
            } else if (params.edges.length > 0) {
      clearHighlights();
      const edge = edges.get(params.edges[0]);
      if (!edge) return;
      const fromNode = nodes.get(edge.from);
      const toNode = nodes.get(edge.to);
      
      if (fromNode && toNode) {
        nodes.update([
          { id: fromNode.id, color: { border: 'red' }, borderWidth: 4 },
          { id: toNode.id, color: { border: 'red' }, borderWidth: 4 }
        ]);
        lastHighlightedNodes = [fromNode.id, toNode.id];
      }
      
        // ❌ Aquí viene el error: ya declaraste fromNode y toNode arriba
        // 🔁 Solución: elimina "const"
        const fromNodeMap = nodesMap[edge.from];
        const toNodeMap = nodesMap[edge.to];


        let html = `<div style="display:flex; align-items:center; gap:1rem; padding-bottom:1rem;">`;

        if (fromNodeMap?.image) {
          html += `<img src="${fromNodeMap.image}" style="max-height:80px;">`;
        }
        if (toNodeMap?.image) {
          html += `<img src="${toNodeMap.image}" style="max-height:80px;">`;
        }

        html += `</div>`;
        html += `<h3>Connection</h3>`;
        html += `<p><strong>Between:</strong> <a href="#" style="color:#66ccff" onclick="focusNode('${fromNodeMap.id}')">${fromNodeMap.id}</a> and <a href="#" style="color:#66ccff" onclick="focusNode('${toNodeMap.id}')">${toNodeMap.id}</a></p>`;

        const edgeFields = [
          { key: "connection_level", label: "Type of connection" },
          { key: "relationship type", label: "Type of relationship" },
          { key: "know each other since", label: "Know each other since" },
          { key: "correspondence", label: "Correspondence" },
          { key: "they met", label: "They met" },
          { key: "shared", label: "Shared" },
          { key: "they shared", label: "They shared" },
          { key: "interactions", label: "Interactions" },
          { key: "feuds", label: "Feuds" },
          { key: "common friends", label: "Common friends" },
          { key: "mentions", label: "Mentions" },
          { key: "collaborations", label: "Collaborations" },
          { key: "curiosities", label: "Curiosities" },
          { key: "children", label: "Children" },
          { key: "married in", label: "Married in" },
          { key: "link to Goya's work", label: "Link to Goya's work" },
          { key: "link to Goya", label: "Link to Goya" },
          { key: "copies after Goya", label: "Copies after Goya" },
          { key: "copies", label: "Copies" },
          { key: "commissions Goya with", label: "Commissions Goya with" },
          { key: "writes about Goya", label: "Writes about Goya" },
          { key: "mentions of Goya", label: "Mentions of Goya" },
          { key: "quotations of Goya", label: "Quotations of Goya" },
          { key: "influence of Goya", label: "Influence of Goya" },
          { key: "collector of Goya's works", label: "Collector of Goya's works" },
          { key: "disseminates Goya's works", label: "Disseminates Goya's works" },
          { key: "discovers Goya's works", label: "Discovers Goya's works" },
          { key: "knows Goya's works", label: "Knows Goya's works" },
          { key: "mentions the Prado commentaries", label: "Mentions the Prado commentaries" },
          { key: "shows Goya", label: "Shows Goya" },
          { key: "artworks influenced by Goya", label: "Artworks influenced by Goya" },
          { key: "interest in Spanish art", label: "Interest in Spanish art" },
          { key: "artworks bought/sold/given", label: "Artworks bought/sold/given" },
          { key: "comparisons", label: "Comparisons" },
          { key: "criticism", label: "Criticism" },
          { key: "rivalry", label: "Rivalry" },
          { key: "employment/patronage", label: "Employment/patronage" },
          { key: "commissions", label: "Commissions" },
          { key: "influence", label: "Influence" },
          { key: "exchanges", label: "Exchanges" },
          { key: "collection", label: "Collection" },
          { key: "patronage", label: "Patronage" },
          { key: "portraits", label: "Portraits" },
          { key: "exhibitions", label: "Exhibitions" },
          { key: "bibliography", label: "Bibliography" },
          { key: "websites", label: "Websites" },
          { key: "podcasts", label: "Podcasts" },
          { key: "newspaper archive", label: "Newspaper archive" },
          { key: "archives", label: "Archives" },
          { key: "added", label: "Added" },
          { key: "last_modified", label: "Last modified" }
        ];

        edgeFields.forEach(field => {
          if (edge[field.key]) {
            let value = edge[field.key];
            let htmlText;
        
            // Debugging: Check the raw value
            // console.log("Raw value:", value);
        
            if (Array.isArray(value)) {
              // ✅ Si es un array de strings u objetos con imagen
              const processedItems = value.map(item => {
                if (typeof item === "object") {
                  const caption = item.caption
                    ? autoLinkNames(processMarkdownLinks(item.caption), nodesMap)
                    : "";
                  const url = item.url ? item.url : "";

                  return `<li>${caption}${url ? `<img src="${url}" alt="Portrait" style="max-width:100%; margin-left: 0.5rem; vertical-align: middle;">` : ""}</li>`;
                } else {
                  return `<li>${autoLinkNames(processMarkdownLinks(item), nodesMap)}</li>`;
                }
              });

              htmlText = `<ul>${processedItems.join("")}</ul>`;
            
            } else {
              // ✅ Si es string normal
              htmlText = autoLinkNames(processMarkdownLinks(value), nodesMap);
            }

            // Debugging: Check the processed HTML
            // console.log("Processed HTML:", htmlText);
        
            html += `<p style="margin-top:0.3rem;"><strong>${field.label}:</strong> ${htmlText}</p>`;
          }
        });

        document.getElementById("nodeInfo").innerHTML = html;
      }

      if (params.nodes.length === 0 && params.edges.length === 0) {
        clearHighlights();
        return; // Add this to exit early
      }

    });

    window.focusNode = function (nodeId) {
      clearHighlights();
    
      network.focus(nodeId, {
        scale: 1.2,
        animation: { duration: 500 }
      });
    
      nodes.update({ id: nodeId, color: { border: 'red' }, borderWidth: 4 });
      lastHighlightedNode = nodeId;
    };

    function showShareModal(label = '') {
      const modal = document.getElementById('shareModal');
      const hash = '#' + label.replace(/ /g, '_');
      const shareUrl = `${window.location.origin}${window.location.pathname}${hash}`;
      const text = `Check out ${label} on the Goya Network`;
    
      document.getElementById('shareUrl').value = shareUrl;
    
      document.getElementById('twitterShare').href =
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    
      document.getElementById('linkedinShare').href =
        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(text)}`;
    
      document.getElementById('facebookShare').href =
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(text)}`;
    
      modal.style.display = 'flex';
    }

    // Crear y añadir botón
    function addShareButton(nodeName) {
      const shareBtn = document.createElement('button');
      shareBtn.innerHTML = '<i class="fas fa-share-alt"></i> Share';
      shareBtn.style.marginTop = '1rem';
      shareBtn.style.padding = '0.5rem 1rem';
      shareBtn.style.background = '#333';
      shareBtn.style.color = 'white';
      shareBtn.style.border = '1px solid #555';
      shareBtn.style.borderRadius = '4px';
      const label = nodes.get(nodeName)?.label || nodeName;
      shareBtn.onclick = () => showShareModal(label);

      const nodeInfo = document.getElementById('nodeInfo');
      if (nodeInfo) {
        const existingShareBtn = nodeInfo.querySelector('.share-btn');
        if (existingShareBtn) existingShareBtn.remove();
        shareBtn.className = 'share-btn';
        nodeInfo.appendChild(shareBtn);
      }
    }

    // Update URL when a node is clicked
    function updateURL(nodeId) {
      const node = nodes.get(nodeId);
      const label = node?.label || nodeId;
      const newUrl = window.location.pathname + '#' + label.replace(/ /g, '_');
      window.history.pushState({}, '', newUrl);
    }

    // Handle initial URL hash
    function handleInitialHash() {
      return new Promise((resolve) => {
        const hash = window.location.hash.substring(1);
        if (hash) {
          const decodedHash = decodeURIComponent(hash).replace(/_/g, ' ');
          const idFromLabel = labelToId[decodedHash];
          const node = idFromLabel ? nodes.get(idFromLabel) : null;

          if (node) {

            // Wait for network to stabilize
            setTimeout(() => {
              network.selectNodes([node.id]);
              network.emit("click", { nodes: [node.id] });
              resolve(true);
            }, 1000);
          } else {
            resolve(false);
          }
        } else {
          resolve(false);
        }
      });
    }

    function measureStrongTieStats() {
      const pos = network.getPositions(nodes.getIds());
      let strongSum = 0, strongN = 0, weakSum = 0, weakN = 0;

      edges.get().forEach(e => {
        // ignora los muelles invisibles
        if (String(e.id).startsWith('__phys_')) return;

        const a = pos[e.from], b = pos[e.to];
        if (!a || !b) return;
        const d = Math.hypot(a.x - b.x, a.y - b.y);

        if (isStrongTie(e)) { strongSum += d; strongN++; }
        else { weakSum += d; weakN++; }
      });

      const strongAvg = strongN ? (strongSum/strongN) : 0;
      const weakAvg   = weakN   ? (weakSum/weakN)   : 0;

      //console.log(`Strong ties avg distance: ${Math.round(strongAvg)} px | Others: ${Math.round(weakAvg)} px`);
      //const statsEl = document.getElementById("networkStats");
      //if (statsEl) {
        //let extraEl = document.getElementById("distanceStats");
        //if (!extraEl) {
          //extraEl = document.createElement("div");
          //extraEl.id = "distanceStats";
          //extraEl.style.fontSize = "0.8rem";
          //statsEl.appendChild(extraEl);
        //}
        //extraEl.innerHTML = `Strong≈${Math.round(strongAvg)}px · Others≈${Math.round(weakAvg)}px`;
      //}
    }

      // Después de crear el network, usa el hook de estabilización:
      network.once('stabilizationIterationsDone', () => {
        document.getElementById('loadingMessage').style.display = 'none';

        const doLater = (fn) =>
          (window.requestIdleCallback ? requestIdleCallback(fn, { timeout: 1500 }) : setTimeout(fn, 200));

        // 1) Hash inicial (rápido) primero
        handleInitialHash();

        // 2) Ejecutar las tareas relacionadas con el panel lateral
        //    EN UN ÚNICO callback diferido para garantizar orden determinista:
        doLater(() => {
          try {
            // construir listas (Members + New in)
            buildMembersList(data);
            buildNewInList(data);
          } catch (err) {
            // no romper el resto si algo falla; deja rastro en consola
            console.error('Error building members/new-in lists:', err);
          }

          // luego carga las imágenes pesadas
          loadFullImages();

          // AHORA capturamos el snapshot por defecto — incluirá las listas
          __defaultNodeInfoHTML = document.getElementById('nodeInfo').innerHTML;
        });
      });

      // Restaura el panel nodeInfo a su estado por defecto (texto + Members list)
      window.showDefaultNodeInfo = function () {
        const el = document.getElementById('nodeInfo');
        if (!el) return;

        // Restaura el contenido por defecto
        el.innerHTML = `
          <p>Click a <strong>node</strong> (an individual) or <strong>edge</strong> (a connection between two individuals) to view the data they contain.</p>
          <p style="color: #ccc; margin-top: 1em;">(It might take a few seconds for the website to show the network)</p>

          <!-- Members list -->
          <div id="membersSection" style="margin-top: 1rem;">
            <div class="section-heading">Members (A–Z by surname)</div>
            <div id="membersList"></div>
          </div>
        `;

        // Reconstruye las listas
        if (window.data) {
          buildMembersList(window.data);
        }
      };

      }, 2000);

    // Búsqueda funcional
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('.search-button');

    // Replace the existing searchButton event listener with this:
    searchButton.addEventListener('click', () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) return;
    
      // Clear previous highlights
      clearHighlights();
    
      // 1. Buscar primero en nodos (prioridad)
      let found = data.nodes.find(n =>
        n.id.toLowerCase() === query || 
        (typeof n.label === 'string' && n.label.toLowerCase() === query)
      );
      
      // 2. Si no hay coincidencia exacta, buscar por startsWith
      if (!found) {
        found = data.nodes.find(n =>
          n.id.toLowerCase().startsWith(query) || 
          (typeof n.label === 'string' && n.label.toLowerCase().startsWith(query))
        );
      }
      
      // 3. Si aún no, buscar por contiene
      if (!found) {
        found = data.nodes.find(n =>
          n.id.toLowerCase().includes(query) || 
          (typeof n.label === 'string' && n.label.toLowerCase().includes(query))
        );
      }
      
      // 4. Si no está en id o label, buscar en otros campos del nodo
      if (!found) {
        found = data.nodes.find(n =>
          Object.entries(n).some(([key, value]) =>
            typeof value === 'string' &&
            !key.includes('image') &&
            !value.includes('PFayos') &&
            value.toLowerCase().includes(query)
          )
        );
      }
      
      // 5. Si aún no hay nodo, buscar en los edges
      if (!found) {
        const matchingEdge = data.edges.find(edge =>
          Object.entries(edge).some(([key, value]) => {
            if (key === "from" || key === "to" || key === "portraits") return false;
            return typeof value === 'string' &&
                  !key.includes('image') &&
                  value.toLowerCase().includes(query);
          })
        );
      
        if (matchingEdge) {
          const edge = edges.get().find(e =>
            e.from === matchingEdge.from && e.to === matchingEdge.to
          );
          
          if (edge) {
            network.selectEdges([edge.id]);
            network.emit('click', { edges: [edge.id], nodes: [] });
            return;
          }
        }
      }
      
      // 6. Mostrar resultado o alerta
      if (found) {
        focusNode(found.id);
      } else {
        alert("No match found.");
      }
    });

    // Add Enter key support
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchButton.click();
      }
    });

    document.getElementById('professionFilter').addEventListener('change', function () {
  const selected = this.value.toLowerCase();

  // Quitar anteriores
  clearHighlights();

  if (!selected) return;

  const matchingNodes = [];

      nodes.get().forEach(n => {
        const profession = (n["profession"] || "").toLowerCase();
        if (profession.includes(selected)) {
          nodes.update({ id: n.id, color: { ...n.color, border: 'red' }, borderWidth: 4 });
          matchingNodes.push(n.id);
        }
      });
    
      lastHighlightedNodes = matchingNodes;
    });

    document.getElementById('nationalityFilter').addEventListener('change', function () {
      const selected = this.value.toLowerCase();
    
      clearHighlights();
    
      if (!selected) return;
    
      const matchingNodes = [];
    
      nodes.get().forEach(n => {
        const nationality = (n["nationality"] || "").toLowerCase();
        if (nationality.includes(selected)) {
          nodes.update({ id: n.id, color: { ...n.color, border: 'red' }, borderWidth: 4 });
          matchingNodes.push(n.id);
        }
      });
    
      lastHighlightedNodes = matchingNodes;
    });

        window.toggleFullScreen = function () {
          const elem = document.documentElement;
          if (!document.fullscreenElement) {
            elem.requestFullscreen().catch(err => {
              alert(`Error trying to enable full-screen mode: ${err.message}`);
            });
          } else {
            document.exitFullscreen();
          }
        }

  // Activar física solo mientras se arrastra un nodo
  network.on("dragStart", () => {
    network.setOptions({ physics: { enabled: true } });
  });
  
  network.on("dragEnd", () => {
    network.setOptions({ physics: { enabled: false } });
  });
    
  } catch (err) {
    console.error("Error cargando o renderizando la red:", err);
  }
});
