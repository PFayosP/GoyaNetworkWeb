  // ====== I18N ======
  let CURRENT_LANG = localStorage.getItem('lang') || 'en';

  const I18N = {
    en: {
      BTN_NETWORK:"Network", BTN_ABOUT:"About", BTN_PEOPLE:"People", BTN_PARTNERS:"Partners",
      BTN_ARTWORKS:"Artworks", BTN_BIB:"Bibliography", BTN_CITE:"How to cite", BTN_NEWIN:"New in",
      SEARCH_PH:"Search...", FILTER_PROF_ALL:"All professions", FILTER_NAT_ALL:"All nationalities",
      MEMBERS_TITLE:"Members (A–Z by surname)", LOADING:"Loading network…", LAST_UPDATE:"Last update", HELP_TEXT_1: "Click a node (an individual) or edge (a connection between two individuals) to view the data they contain.", HELP_TEXT_2: "(It might take a few seconds for the website to show the network)", SITE_TITLE: "Goya Network", SITE_SUBTITLE: "Mapping Goya's Impact in 19th-Century France and Spain", CONTRIBUTIONS_TITLE: "Contributions", CONTRIBUTIONS_TEXT: "The Goya Network is conceived as a collaborative, crowd-sourced database. Contributions and suggestions are welcome and encouraged, and contributors will be credited if requested.",

      "Life dates":"Life dates","Full name":"Full name","Also known as":"Also known as","Other names":"Other names","Pseudonyms":"Pseudonyms", "Profession":"Profession","Nationality":"Nationality","Born in":"Born in","Dies in":"Dies in","Considered as":"Considered as", "Political views":"Political views","Military activity":"Military activity","Participates in":"Participates in", "Aristocratic titles":"Aristocratic titles","Ties with slavery/colonialism":"Ties with slavery/colonialism","Curiosities":"Curiosities", "Parents":"Parents","Siblings":"Siblings","Married to":"Married to","Partners/lovers":"Partners/lovers","Children":"Children", "Friends":"Friends","Rivals":"Rivals","Correspondence":"Correspondence","Meets":"Meets","Studies in":"Studies in", "Works as":"Works as","Works for":"Works for","Influenced by":"Influenced by","Follower of":"Follower of","Masters":"Masters","Students":"Students", "Member of":"Member of","Founder of":"Founder of","Editor of":"Editor of","Writes in":"Writes in","Collaborates with":"Collaborates with", "Registered in":"Registered in","Mentioned in the French press":"Mentioned in the French press","Decorations/awards":"Decorations/awards", "Tertulia":"Tertulia","Literary salon or tertulia":"Literary salon or tertulia","Author of":"Author of","Collection":"Collection", "Patronage":"Patronage","Portraits":"Portraits","Exhibitions":"Exhibitions","Bibliography":"Bibliography","Websites":"Websites", "Podcasts":"Podcasts","Newspaper archive":"Newspaper archive","Archives":"Archives","Added":"Added","Last modified":"Last modified", "Identity and Personal Data":"Identity and Personal Data", "Family and Personal Relationships":"Family and Personal Relationships", "Education, Profession and Institutions":"Education, Profession and Institutions", "Artistic/Literary Production and Collection":"Artistic/Literary Production and Collection", "Exhibitions and Public Reception":"Exhibitions and Public Reception", "Relationship with Goya":"Relationship with Goya", "Copies after Spanish artworks":"Copies after Spanish artworks", "Sources and Documentation":"Sources and Documentation", "Connections":"Connections", "Artistic Activity, Art Collecting and Patronage":"Artistic Activity, Art Collecting and Patronage", "Geographic Presence and Movement":"Geographic Presence and Movement", "Relationship to Goya and His Work":"Relationship to Goya and His Work", 
      "Portrayed by":"Portrayed by", "Image source":"Image source", "In Spain":"In Spain", "Knows Goya's works":"Knows Goya's works", "Address":"Address", "Link to Goya's work":"Link to Goya's work", "Interest in Spanish art":"Interest in Spanish art", "Mentions of Goya":"Mentions of Goya", "Collector of Goya's works":"Collector of Goya's works", "In Paris":"In Paris", "Mentions":"Mentions", "Conferences/seminars":"Conferences/seminars", "Trips":"Trips", "Lives in":"Lives in", "Patrons": "Patrons", "Collector of":"Collector of", "Copies after Goya":"Copies after Goya", "Writes about Goya":"Writes about Goya", "Mentions of Goya":"Mentions of Goya", "Connection": "Connection", "Type of connection": "Type of connection", "Type of relationship": "Type of relationship", "Know each other since": "Know each other since", "Search": "Search", "Collaborations": "Collaborations", "They met": "They met", "direct": "direct", "Artworks bought/sold": "Artworks bought/sold", "Interactions": "Interactions", "Employment/patronage": "Employment/patronage", "Between": "Between", "and": "and", "Between [X] and [Y]": "Between [X] and [Y]", "In France": "In France", "In Italy": "In Italy", "direct": "direct", "secondary": "secondary", "portraitist-sitter": "portraitist-sitter", "employer-employee": "employer-employee", "family": "family", "friends": "friends", "acquaintances": "acquaintances", "acquaintances?": "acquaintances?", "direct?": "direct?", "secondary?": "secondary?", "master-student": "master-student", "partners/lovers": "lovers", "artworks influenced by Goya": "influenced by Goya", "knows Goya's works": "knows Goya's works", "Sales": "Sales", "colleagues": "colleagues", "copies": "copies", "Nodes": "Nodes", "Connections": "Connections", "Access form": "Access form",
    },
    es: {
      BTN_NETWORK:"Red", BTN_ABOUT:"Acerca de", BTN_PEOPLE:"Equipo", BTN_PARTNERS:"Socios",
      BTN_ARTWORKS:"Obras", BTN_BIB:"Bibliografía", BTN_CITE:"Cómo citar", BTN_NEWIN:"Novedades",
      SEARCH_PH:"Buscar…", FILTER_PROF_ALL:"Todas las profesiones", FILTER_NAT_ALL:"Todas las nacionalidades",
      MEMBERS_TITLE:"Miembros (A–Z por apellido)", LOADING:"Cargando la red…", LAST_UPDATE:"Última actualización", HELP_TEXT_1: "Haz clic en un nodo (un individuo) o en una arista (una conexión entre dos individuos) para ver los datos que contienen.", HELP_TEXT_2: "(La red puede tardar unos segundos en mostrarse)", SITE_TITLE: "Red Goya", SITE_SUBTITLE: "Cartografiar el impacto de Goya en la Francia y la España del siglo XIX", CONTRIBUTIONS_TITLE: "Contribuciones", CONTRIBUTIONS_TEXT: "La Red Goya se concibe como una base de datos colaborativa y abierta. Las contribuciones y sugerencias son bienvenidas, y los colaboradores serán acreditados si así lo desean.",

      "Life dates":"Fechas de vida","Full name":"Nombre completo","Also known as":"También conocido/a como","Other names":"Otros nombres","Pseudonyms":"Seudónimos", "Profession":"Profesión","Nationality":"Nacionalidad","Born in":"Nace en","Dies in":"Fallece en","Considered as":"Considerado/a como", "Political views":"Ideas políticas","Military activity":"Actividad militar","Participates in":"Participa en", "Aristocratic titles":"Títulos nobiliarios","Ties with slavery/colonialism":"Vínculos con esclavitud/colonialismo","Curiosities":"Curiosidades", "Parents":"Padres","Siblings":"Hermanos/as","Married to":"Casado/a con","Partners/lovers":"Parejas/amantes","Children":"Hijos/as", "Friends":"Amigos/as","Rivals":"Rivales","Correspondence":"Correspondencia","Meets":"Encuentros","Studies in":"Estudia en", "Works as":"Trabaja como","Works for":"Trabaja para","Influenced by":"Influido/a por","Follower of":"Seguidor/a de","Masters":"Maestros/as","Students":"Alumnos/as", "Member of":"Miembro de","Founder of":"Fundador/a de","Editor of":"Editor/a de","Writes in":"Escribe en","Collaborates with":"Colabora con", "Registered in":"Registrado/a en","Mentioned in the French press":"Mencionado/a en la prensa francesa","Decorations/awards":"Condecoraciones/premios", "Tertulia":"Tertulia","Literary salon or tertulia":"Salón literario o tertulia","Author of":"Autor/a de","Collection":"Colección", "Patronage":"Mecenazgo","Portraits":"Retratos","Exhibitions":"Exposiciones", "Bibliography":"Bibliografía","Websites":"Webs", "Podcasts":"Podcasts","Newspaper archive":"Hemeroteca","Archives":"Archivos","Added":"Añadido","Last modified":"Última modificación", "Identity and Personal Data":"Identidad y datos personales", "Family and Personal Relationships":"Familia y relaciones personales", "Education, Profession and Institutions":"Formación, profesión e instituciones", "Artistic/Literary Production and Collection":"Producción artística/literaria y colección", "Exhibitions and Public Reception":"Exposiciones y recepción pública", "Relationship with Goya":"Relación con Goya", "Copies after Spanish artworks":"Copias de obras españolas", 
      "Sources and Documentation":"Fuentes y documentación", "Connections":"Conexiones", "Artistic Activity, Art Collecting and Patronage":"Actividad artística, coleccionismo y mecenazgo", "Geographic Presence and Movement":"Presencia geográfica y desplazamientos", "Relationship to Goya and His Work":"Relación con Goya y su obra", "Portrayed by":"Retratado/a por", "Image source":"Fuente de la imagen", "In Spain":"En España", "Knows Goya's works":"Conoce la obra de Goya", "Address":"Dirección", "Link to Goya's work":"Vínculo con la obra de Goya", "Interest in Spanish art":"Interés en el arte español", "Mentions of Goya":"Menciones de Goya", "Collector of Goya's works":"Coleccionista de la obra de Goya", "In Paris":"En París", "Mentions":"Menciones", "Conferences/seminars":"Conferencias/seminarios", "Trips":"Viajes", "Lives in":"Vive en", "Patrons": "Mecenas", "Collector of":"Coleccionista de", "Copies after Goya":"Copias de Goya", "Writes about Goya":"Escribe sobre Goya", "Mentions of Goya":"Menciones de Goya", "Connection": "Conexión", "Type of connection": "Tipo de conexión", "Type of relationship": "Tipo de relación", "Know each other since": "Se conocen desde", "Search": "Buscar", "Collaborations": "Colaboraciones", "They met": "Se encontraron", "direct": "directa", "Artworks bought/sold": "Compraventa de obras", "Interactions": "Interacciones", "Employment/patronage": "Empleo/patronazgo", "Between": "Entre", "and": "y", "Between [X] and [Y]": "Entre [X] y [Y]", "In France": "En Francia", "In Italy": "En Italia", "direct": "directa", "secondary": "secundaria", "acquaintances?": "¿conocidos?", "direct?": "¿directa?", "secondary?": "¿secundaria?", "portraitist-sitter": "retratista-retratado", "employer-employee": "empleador-empleado", "family": "familia", "friends": "amigos", "acquaintances": "conocidos", "master-student": "maestro-alumno", "partners/lovers": "parejas/amantes", "artworks influenced by Goya": "influenciado por Goya", "knows Goya's works": "conoce la obra de Goya", "Sales": "Ventas", "colleagues": "colegas", "copies": "copias", "Nodes": "Nodos", "Connections": "Conexiones", "Access form": "Acceder al formulario",
    }
  };

  function t(k){ return (I18N[CURRENT_LANG] && I18N[CURRENT_LANG][k]) || k; }

  function applyUIStrings(){
    // Botones del menú superior
    const map = [
      ['.nav-buttons button[onclick*="network"]','BTN_NETWORK'],
      ['.nav-buttons button[onclick*="about"]','BTN_ABOUT'],
      ['.nav-buttons button[onclick*="people"]','BTN_PEOPLE'],
      ['.nav-buttons button[onclick*="partners"]','BTN_PARTNERS'],
      ['.nav-buttons button[onclick*="artworks"]','BTN_ARTWORKS'],
      ['.nav-buttons button[onclick*="bibliography"]','BTN_BIB'],
      ['.nav-buttons button[onclick*="cite"]','BTN_CITE'],
      ['#newInBtn','BTN_NEWIN'],
      ['#searchInput::placeholder','SEARCH_PH']
    ];
    map.forEach(([sel,key])=>{
      if (sel.endsWith('::placeholder')) {
        const id = sel.replace('::placeholder','');
        const el = document.querySelector(id);
        if (el) el.setAttribute('placeholder', t(key));
      } else {
        const el = document.querySelector(sel);
        if (el) el.textContent = t(key);
      }
    });

    // Filtros
    const profAll = document.querySelector('#professionFilter option[value=""]');
    if (profAll) profAll.textContent = t('FILTER_PROF_ALL');
    const natAll = document.querySelector('#nationalityFilter option[value=""]');
    if (natAll) natAll.textContent = t('FILTER_NAT_ALL');

    // Título “Members …”
    const membersHeading = document.querySelector('#membersSection .section-heading');
    if (membersHeading) membersHeading.textContent = t('MEMBERS_TITLE');

    // Mensaje de carga
    const loading = document.getElementById('loadingMessage');
    if (loading) loading.firstChild.textContent = t('LOADING')+' ';

    // Guarda etiqueta para “Last update”
    window.LAST_UPDATE_LABEL = t('LAST_UPDATE');

    // Textos declarados con data-i18n (p.ej. HELP_TEXT_1/2)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });
  }

  window.setLanguage = function(lang='en') {
    CURRENT_LANG = (lang === 'es') ? 'es' : 'en';
    localStorage.setItem('lang', CURRENT_LANG);
    applyUIStrings();
    if (typeof window.refreshNodeInfoLabels === 'function') window.refreshNodeInfoLabels();
  };

  // Helper para traducir labels de panel
  function labelI18N(label){ return t(label); }
  // ====== /I18N ======

  // --- Forzar re-render del panel lateral con el idioma actual ---
  window.__lastSelection = null; // guardaremos el último nodo/arista mostrados

  window.refreshNodeInfoLabels = function () {
    const info = document.getElementById('nodeInfo');
    if (!info) return;

    // Si teníamos un nodo seleccionado, re-emite el click para regenerar el HTML con t(...)
    if (window.__lastSelection && window.__lastSelection.type === 'node' && window.__lastSelection.id) {
      window.VIS_NETWORK.emit('click', { nodes: [window.__lastSelection.id], edges: [] });
      return;
    }

    // Si teníamos una arista seleccionada, re-emite el click para regenerar
    if (window.__lastSelection && window.__lastSelection.type === 'edge' && window.__lastSelection.id) {
      window.VIS_NETWORK.emit('click', { nodes: [], edges: [window.__lastSelection.id] });
      return;
    }

    // Si no había selección, vuelve al panel por defecto y re-aplica los textos
    if (typeof window.showDefaultNodeInfo === 'function') window.showDefaultNodeInfo();
    applyUIStrings(); // actualiza “Members (A–Z…)”, placeholder, etc.
  };

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
    window.VIS_NETWORK.focus(matchingNodes[0].id, { animation: true });
    // Select the node
    window.VIS_NETWORK.selectNodes([matchingNodes[0].id]);
    // Show node info
    window.VIS_NETWORK.emit('click', { nodes: [matchingNodes[0].id] });
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
    const id = matchingNodes[0].id;
    const scale = window.VIS_NETWORK.getScale();
    const pos = window.VIS_NETWORK.getPosition(id);
    window.VIS_NETWORK.moveTo({ position: pos, scale, animation: { duration: 500 } });
    lastHighlightedNodes = matchingNodes.map(node => node.id);
  } else {
    alert('No nodes match the selected filters');
  }
};

document.addEventListener('DOMContentLoaded', async function () {
  applyUIStrings();
  const sel = document.getElementById('langSwitcher');
  if (sel) sel.value = CURRENT_LANG;

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
            size: Math.min(15 + degree * 1.2, 50),  // ↑ MÁS DIFERENCIACIÓN (1.2 vs 0.65)
            mass: 1 + degree * 0.06,   // ← antes 0.15
            font: {
              size: Math.min(11 + degree * 0.6, 24),
              color: '#ffffff',
              strokeWidth: 3,
              strokeColor: '#111111', 
              face: 'EB Garamond, serif',
              align: 'center',
              bold: true,
              vadjust: -10
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
        color: { color: level === "secondary" ? "rgba(255,215,0,0.4)" : "rgba(200,200,200,0.25)" },
        width: 1.5
      };
    }));
    window.edges = edges;

    const lastModified = response.headers.get("Last-Modified");

    const formattedUpdate = lastModified
      ? new Date(lastModified).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
      : 'unknown';

    document.getElementById("networkStats").innerHTML =
      `${t('Nodes')}: ${data.nodes.length} | ${t('Connections')}: ${data.edges.length}<br>
      <span style="font-size: 0.8rem; color: #999;">${window.LAST_UPDATE_LABEL}: ${formattedUpdate}</span>`;

    /* ---- NEW IN: funciones para la pestaña "New in" ---- */

    function showNewInPanel(show = true) {
      const panel = document.getElementById('newInPanel');
      if (!panel) return;
      panel.style.display = show ? 'block' : 'none';
    }

    // Construye la lista "New in" a partir de data.nodes (solo nodos desde mayo 2025)
    function buildNewInList(data) {
      const container = document.getElementById('newInList');
      if (!container) return;

      // ✅ Mostrar SOLO NODOS añadidos desde 1 abril 2025 (UTC)
      const CUTOFF_STR = '2025-04-01'; // comparar como string ISO YYYY-MM-DD

      const items = (data.nodes || [])
        .filter(n => typeof n.added === 'string' && n.added >= CUTOFF_STR)

        .map(n => ({
          type: 'node',
          id: n.id,
          label: n.label || n.id,
          date: n.added
        }))
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      if (!items.length) {
        container.innerHTML =
          '<em>No hay nodos con "added" desde mayo de 2025. Añade "added" en goya_network.json (ISO) para que aparezcan aquí.</em>';
        return;
      }

      // Limitar y renderizar
      container.innerHTML = '';
      items.forEach(item => {
        const wrapper = document.createElement('div');
        wrapper.style.marginBottom = '0.4rem';

        // enlace (solo el label)
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'newin-link';
        a.style.color = '#66ccff';
        a.textContent = item.label;

        // fecha (texto normal)
        const dateSpan = document.createElement('span');
        const dateStr = new Date(item.date + 'T00:00:00Z')
          .toLocaleDateString('es-ES', { day:'2-digit', month:'short', year:'numeric' });
        dateSpan.textContent = ` — ${dateStr}`;
        dateSpan.style.color = '#bbb';

        // click en el link (solo nodos)
        a.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation(); // ⬅️ evita que el click cierre el panel antes de tiempo

          if (typeof focusNode === 'function') {
            focusNode(item.id);
          }
          showNewInPanel(false);
        };

        wrapper.appendChild(a);
        wrapper.appendChild(dateSpan);
        container.appendChild(wrapper);
        });
        }

    // Conectar el botón (pon esto en el mismo scope que tu otro JS)
    document.addEventListener('click', function (e) {
      if (e.target && e.target.id === 'newInBtn') {
        const panel = document.getElementById('newInPanel');
        if (!panel) return;
        // Evita que el clic se propague y cierre el panel inmediatamente
        e.stopPropagation();
        showNewInPanel(panel.style.display === 'block' ? false : true);
      }
    });

    // Cerrar "New in" al hacer clic en cualquier parte fuera del panel
    document.addEventListener('click', function (e) {
      const panel = document.getElementById('newInPanel');
      const btn = document.getElementById('newInBtn');
      
      // Si el clic NO fue en el panel NI en el botón, cerrar el panel
      if (panel && panel.style.display === 'block' && 
          !panel.contains(e.target) && 
          e.target !== btn && 
          !btn.contains(e.target)) {
        showNewInPanel(false);
      }
    });

    // Construir la lista inicial de “New in”
    buildNewInList(data);

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
    let activeEdgeIds = new Set();   // Edges activos (los conectados al nodo resaltado)

    // ——— limpia SOLO el “rojo” de nodos; no toca edges ni estados globales ———
    function clearNodeHighlightsOnly() {
      const nodeUpdates = [];

      if (lastHighlightedNode) {
        nodeUpdates.push({
          id: lastHighlightedNode,
          color: { border: '#2B7CE9' },
          borderWidth: 2,
          opacity: 1
        });
      }

      if (lastHighlightedNodes && lastHighlightedNodes.length > 0) {
        lastHighlightedNodes.forEach(id => {
          nodeUpdates.push({
            id,
            color: { border: '#2B7CE9' },
            borderWidth: 2,
            opacity: 1
          });
        });
      }

      if (nodeUpdates.length > 0) nodes.update(nodeUpdates);

      // reset SOLO de nodos
      lastHighlightedNode = null;
      lastHighlightedNodes = [];
    }


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
      
      // 🔁 Reset de estados
      lastHighlightedNode = null;
      lastHighlightedNodes = [];
      lastNonHighlightedNodes = [];
      activeEdgeIds = new Set();
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
        width: 1,
        selectionWidth: 5, // aumenta el área clicable al seleccionar
        hoverWidth: 3,     // facilita el clic al pasar el ratón
        smooth: { type: 'continuous' } // ← más rápido y visualmente igual en tu caso (antes: dynamic)
      },

      physics: {
        enabled: true,
        solver: 'repulsion',
          repulsion: {
            nodeDistance: 450,         // ↑ AUMENTADO de 350 a 450 (más separación)
            centralGravity: 0.025,     // ↓ DISMINUIDO de 0.03 a 0.025 (menos centro apelotonado)
            springLength: 150,         // ↑ AUMENTADO de 120 a 150 (resortes más largos)
            springConstant: 0.015,     // ↓ DISMINUIDO de 0.02 a 0.015 (resortes más suaves)
            damping: 0.5               // ← MANTENIDO
          }
        },

        // 🔥 AÑADE ESTA NUEVA OPCIÓN (ANTI-OVERLAP INTEGRADO):
        layout: {
          improvedLayout: false,
          randomSeed: 1912,
          hierarchical: {
            enabled: false
          }
        },

        // 🔥 Y ESTA OPCIÓN CRUCIAL:
        interaction: {
          dragNodes: true,
          hideEdgesOnDrag: false,
          hideNodesOnDrag: false,
          zoomView: true,          // ✅ permite hacer zoom
          dragView: true,          // ✅ permite mover la vista (pan)
          navigationButtons: true  // opcional: añade iconos de zoom y movimiento
        },
        
        // 🔥 Y ESTA MÁS:
        configure: {
          enabled: false,
          filter: 'physics'
        }
      });
    window.VIS_NETWORK = network;

    // 🔥 SOLUCIÓN NUCLEAR ANTI-OVERLAP
    // Empuja pares de nodos que se solapan una sola pasada
    function nudgeOverlapsOnce(network, nodes) {
      const ids = nodes.getIds();
      const pos = network.getPositions(ids);

      // radio visual aproximado; ajústalo si hace falta
      const R = 22; // px

      for (let i = 0; i < ids.length; i++) {
        for (let j = i + 1; j < ids.length; j++) {
          const a = ids[i], b = ids[j];
          const pA = pos[a], pB = pos[b];
          if (!pA || !pB) continue;

          const dx = pB.x - pA.x;
          const dy = pB.y - pA.y;
          const d  = Math.hypot(dx, dy) || 1;

          const minD = R * 2;
          if (d < minD) {
            const push = (minD - d) / 2;
            const ux = dx / d, uy = dy / d;

            // desplazar ambos en sentidos opuestos
            network.moveNode(a, pA.x - ux * push, pA.y - uy * push);
            network.moveNode(b, pB.x + ux * push, pB.y + uy * push);
          }
        }
      }
    }

    // ——— Loading progress (vis-network physics) ———
    const loadingEl = document.getElementById('loadingMessage');
    const loadingPct = document.getElementById('loadingProgress');

    network.on('stabilizationProgress', function (params) {
      if (!loadingEl || !loadingPct) return;
      const pct = Math.max(1, Math.min(100, Math.round((params.iterations / params.total) * 100)));
      loadingPct.textContent = pct + '%';
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

    // 💥 Cargar las imágenes ANTES de apagar la física
    loadFullImages();

    function highlightNeighborhood(nodeId) {
      // 1) Obtener edges conectados
      const connectedEdges = edges.get({
        filter: edge => edge.from === nodeId || edge.to === nodeId
      });

      // 2) Conjunto de nodos conectados (vecinos directos)
      const connectedNodes = new Set();
      connectedEdges.forEach(edge => {
        connectedNodes.add(edge.from === nodeId ? edge.to : edge.from);
      });

      // 3) Listas de ids
      const allNodeIds = nodes.getIds();
      const nonConnected = allNodeIds.filter(
        id => id !== nodeId && !connectedNodes.has(id)
      );

      const allEdges = edges.get();
      const connectedEdgeIds = new Set(connectedEdges.map(e => e.id));
      activeEdgeIds = new Set(connectedEdgeIds); // por si lo usas en otros sitios

      // 4) Actualizar NODOS en un solo batch
      const nodeUpdates = [];

      // Nodo clicado: rojo
      nodeUpdates.push({
        id: nodeId,
        color: { border: 'red' },
        borderWidth: 4,
        opacity: 1
      });

      // Vecinos: naranja
      connectedNodes.forEach(id => {
        nodeUpdates.push({
          id,
          color: { border: '#ffa500' },
          borderWidth: 3,
          opacity: 1
        });
      });

      // No conectados: atenuados (pero visibles)
      nonConnected.forEach(id => {
        nodeUpdates.push({
          id,
          opacity: 0.4
        });
      });

      nodes.update(nodeUpdates);

      // 5) Actualizar EDGES en un solo batch
      const edgeUpdates = allEdges.map(edge => {
        const isConnected = connectedEdgeIds.has(edge.id);
        return {
          id: edge.id,
          color: {
            color: isConnected
              ? 'rgba(255, 0, 0, 0.9)'    // rojo fuerte para edges del vecindario
              : 'rgba(200, 200, 200, 0.15)' // un poco más atenuado el resto
          },
          width: isConnected ? 3 : 1.5
        };
      });

      edges.update(edgeUpdates);

      // 6) Guardar estado para clearHighlights()
      lastHighlightedNode = nodeId;
      lastHighlightedNodes = Array.from(connectedNodes);
      lastNonHighlightedNodes = nonConnected;
    }
    
    function pointToSegmentDistance(px, py, x1, y1, x2, y2) {
      const vx = x2 - x1, vy = y2 - y1;
      const wx = px - x1, wy = py - y1;
      const c1 = vx * wx + vy * wy;
      if (c1 <= 0) return Math.hypot(px - x1, py - y1);
      const c2 = vx * vx + vy * vy;
      if (c2 <= c1) return Math.hypot(px - x2, py - y2);
      const t = c1 / c2;
      const projx = x1 + t * vx, projy = y1 + t * vy;
      return Math.hypot(px - projx, py - projy);
    }

    network.on("click", function (params) {
      // Cerrar "New in" solo cuando se hace clic en nodos o edges
      if ((params.nodes.length > 0 || params.edges.length > 0) && typeof showNewInPanel === 'function') {
        showNewInPanel(false);
      }

      if (params.nodes.length > 0) {
        const node = nodes.get(params.nodes[0]);
        updateURL(node.id);  // This line should be here

        clearHighlights();
        highlightNeighborhood(node.id);
        lastHighlightedNode = node.id;

        const degree = edgeCount[node.id] || 0;
        let html = `<div class="node-info">`;

        // ——— Barra de logos de autoridades junto a la foto (vertical, a la derecha) ———
        {
          const ICON_SRC = {
            'wikidata':     'images/Wikidata_logo.svg',
            'getty ulan':   'images/Getty_logo.jpg',
            'bnf':          'images/BnF_logo.jpg'
          };

          // Merge: objeto authorities + posibles campos sueltos
          const authorities = Object.assign({}, node.authorities || {});
          if (node['wikidata'])     authorities['wikidata']   = node['wikidata'];
          if (node['getty ulan'])   authorities['getty ulan'] = node['getty ulan'];
          if (node['bnf'])          authorities['bnf']        = node['bnf'];

          const badges = Object.entries(authorities)
            .filter(([_, url]) => url)
            .map(([key, url]) => {
              const k = String(key).toLowerCase();
              const src = ICON_SRC[k] || ICON_SRC['getty ulan'];
              const title =
                (k === 'getty ulan' || k === 'ulan' || k === 'getty') ? 'Getty (ULAN)' :
                (k === 'bnf' ? 'BnF' :
                (k === 'wikidata' ? 'Wikidata' : key));
              // 👇 Importante: SIN height inline (que pisaba el CSS)
              return `
                <a href="${url}" target="_blank" rel="noopener noreferrer" title="${title}" style="display:block;">
                  <img src="${src}" alt="${title}">
                </a>`;
            }).join('');

          if (node.image) {
            html += `
              <div class="portrait-row" style="display:flex; align-items:flex-start; gap:10px;">
                <img src="${node.image}" alt="${node.id}" style="max-width:150px; display:block;">
                ${badges ? `<div class="authority-badges">${badges}</div>` : ``}
              </div>
            `;
          } else if (badges) {
            html += `<div class="authority-badges">${badges}</div>`;
          }

          // Flag global para no repetir los enlaces en el cuerpo
          window.__hasAuthoritiesBar = !!badges;
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
          { type: "field", key: "ties with slavery/colonialism", label: "Ties with slavery/colonialism" },
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
          { type: "field", key: "mentions", label: "Mentions" },
          { type: "field", key: "archives", label: "Archives" },
          { type: "field", key: "bibliography", label: "Bibliography" },
          { type: "field", key: "conferences/seminars", label: "Conferences/seminars" },
          { type: "field", key: "newspaper archive", label: "Newspaper archive" },
          { type: "field", key: "websites", label: "Websites" },
          { type: "field", key: "podcasts", label: "Podcasts" },
          { type: "field", key: "image source", label: "Image source" },
          { type: "field", key: "wikidata", label: "Wikidata" },
          { type: "field", key: "getty ulan", label: "Getty ULAN" },
          { type: "field", key: "bnf", label: "BnF" },
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
            html += `<h3 class="section-heading">${t(field.label)}</h3>`;
          }
        } else if (field.type === "field" && node[field.key]) {
            // 🔗 Caso especial: Wikidata / Getty ULAN / BnF
            if (field.key === 'wikidata' || field.key === 'getty ulan' || field.key === 'bnf') {
              // Si ya mostramos la barra de logos arriba, NO repetir aquí
              if (window.__hasAuthoritiesBar) {
                return; // evita duplicado
              }

              // Si NO hay barra (porque no había imagen o logos), renderiza como enlace con icono
              const url = String(node[field.key]).trim();

              let iconClass, linkLabel;
              if (field.key === 'wikidata') {
                iconClass = 'fa-brands fa-wikipedia-w';
                linkLabel = 'Wikidata';
              } else if (field.key === 'getty ulan') {
                iconClass = 'fa-solid fa-landmark';
                linkLabel = 'Getty (ULAN)';
              } else { // 'bnf'
                iconClass = 'fa-solid fa-book'; // o 'fa-solid fa-landmark'
                linkLabel = 'BnF';
              }

              html += `<p style="margin-top:0.3rem;">
                <a href="${url}" target="_blank" rel="noopener noreferrer" style="color:#66ccff;">
                  <i class="${iconClass}" style="margin-right:6px;"></i>${linkLabel}
                </a>
              </p>`;
              return; // evita el formateo genérico
            }


          let value = node[field.key];
          let htmlText;
      
          // helper: traduce valores “cortos” tipo direct/acquaintances/etc.
          function translateValue(v) {
            if (typeof v !== "string") return v;
            const raw = v.trim();
            // 1) intento literal
            let out = t(raw);
            // 2) fallback por si en JSON viene con mayúsculas (Direct) o variantes
            if (out === raw) out = t(raw.toLowerCase());
            return out;
          }

          if (Array.isArray(value)) {
            const processedItems = value.map(item => {
              if (typeof item === "object") {
                const caption = item.caption
                  ? autoLinkNames(processMarkdownLinks(item.caption), nodesMap)
                  : "";
                const url = item.url ? item.url : "";
                return `<li>${caption}${url ? `<img src="${url}" alt="Portrait" style="max-width:100%; margin-left: 0.5rem; vertical-align: middle;">` : ""}</li>`;
              } else {
                const translatedItem = translateValue(item);
                return `<li>${autoLinkNames(processMarkdownLinks(translatedItem), nodesMap)}</li>`;
              }
            });

            htmlText = `<ul>${processedItems.join("")}</ul>`;

          } else {
            const translatedValue = translateValue(value);
            htmlText = autoLinkNames(processMarkdownLinks(translatedValue), nodesMap);
          }

          html += `<p style="margin-top:0.3rem;"><strong>${labelI18N(field.label)}:</strong> ${htmlText}</p>`;
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
        html += `<p><strong>${t('Connections')}:</strong> ${degreeCalc}</p><ul>`;

        connections
          .sort((a, b) => a.name.localeCompare(b.name))
          .forEach(conn => {
            html += `<li><a href="#" style="color:#66ccff" onclick="focusNode('${conn.id}')">${conn.name}</a></li>`;
          });

        html += `</ul></div>`;
        document.getElementById("nodeInfo").innerHTML = html;
        addShareButton(node.label);

        // recordar esta selección para refrescar en cambios de idioma
        window.__lastSelection = { type: 'node', id: node.id };

        
          } else if (params.edges.length > 0) {

            // === Smart selection: elegir el edge correcto entre varios candidatos ===
            let selectedEdgeId = params.edges[0];

            if (params.edges.length > 1) {
              const pointer = (params.pointer && params.pointer.canvas) ? params.pointer.canvas : null;

              // 1) Prioriza los edges activos (conectados al nodo resaltado)
              let pool = params.edges.filter(id => activeEdgeIds.has(id));
              if (pool.length === 0) pool = params.edges.slice();

              // 2) Si sigue habiendo varios, elige el más cercano al cursor
              if (pointer) {
                let best = pool[0];
                let bestDist = Infinity;
                for (const id of pool) {
                  const eObj = edges.get(id);
                  if (!eObj) continue;
                  const pos = network.getPositions([eObj.from, eObj.to]);
                  const p1 = pos[eObj.from], p2 = pos[eObj.to];
                  if (!p1 || !p2) continue;
                  const d = pointToSegmentDistance(pointer.x, pointer.y, p1.x, p1.y, p2.x, p2.y);
                  if (d < bestDist) { bestDist = d; best = id; }
                }
                selectedEdgeId = best;
              }
            }

      // Fuerza la selección de ese edge “mejor”
      network.selectEdges([selectedEdgeId]);
      // === Fin smart selection ===
      clearNodeHighlightsOnly();   //  limpia el rojo de nodos del edge anterior

      const edge = edges.get(selectedEdgeId);
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

        // Título traducible
        html += `<h3 class="section-heading">${t('Connection')}</h3>`;

        // Línea “Between … and …” traducible
        const betweenLabel = t('Between');
        const andWord = t('and');

        html += `<p><strong>${betweenLabel}:</strong> 
          <a href="#" style="color:#66ccff" onclick="focusNode('${fromNodeMap.id}')">${fromNodeMap.id}</a> 
          ${andWord} 
          <a href="#" style="color:#66ccff" onclick="focusNode('${toNodeMap.id}')">${toNodeMap.id}</a>
        </p>`;

        const edgeFields = [
          { key: "connection_level", label: "Type of connection" },
          { key: "relationship type", label: "Type of relationship" },
          { key: "know each other since", label: "Know each other since" },
          { key: "correspondence", label: "Correspondence" },
          { key: "they met", label: "They met" },
          { key: "shared", label: "Shared" },
          { key: "they shared", label: "They shared" },
          { key: "interactions", label: "Interactions" },
          { key: "introductions", label: "Introductions" },
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
          { key: "artworks bought/sold", label: "Artworks bought/sold" },
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
            console.log("Raw value:", value);
        
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
              // ✅ Si es string normal: pásalo por el diccionario i18n
              let translatedValue = value;
              if (typeof translatedValue === "string") {
                translatedValue = t(translatedValue.trim());
              }
              htmlText = autoLinkNames(processMarkdownLinks(translatedValue), nodesMap);
            }

            // Debugging: Check the processed HTML
            console.log("Processed HTML:", htmlText);
        
            html += `<p style="margin-top:0.3rem;"><strong>${labelI18N(field.label)}:</strong> ${htmlText}</p>`;
          }
        });

        document.getElementById("nodeInfo").innerHTML = html;
        // recordar esta selección para refrescar en cambios de idioma
        window.__lastSelection = { type: 'edge', id: selectedEdgeId };
      }

      if (params.nodes.length === 0 && params.edges.length === 0) {
        clearHighlights();
        window.__lastSelection = null; // nada seleccionado
        return;
      }

    });

    window.focusNode = function (nodeId) {
      clearHighlights();

      const scale = window.VIS_NETWORK.getScale();
      const pos = window.VIS_NETWORK.getPosition(nodeId);

      window.VIS_NETWORK.moveTo({
        position: pos,
        scale,                         // ← conserva el zoom actual
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
            }, 300); // Changed from 1000 to 300
          } else {
            resolve(false);
          }
        } else {
          resolve(false);
        }
      });
    }

      // Después de crear el network, usa el hook de estabilización:
      network.once('stabilizationIterationsDone', () => {
        document.getElementById('loadingMessage').style.display = 'none';

        const doLater = (fn) =>
          (window.requestIdleCallback ? requestIdleCallback(fn, { timeout: 800 }) : setTimeout(fn, 200));

        // 1) Hash inicial (rápido)
        handleInitialHash();

        // 2) Members list (medio)
        doLater(() => buildMembersList(data));

        // 3) New in (medio)
        doLater(() => buildNewInList(data));

        // 4) Cargar imágenes (lo más pesado) + snapshot del panel por defecto
        doLater(() => {
          __defaultNodeInfoHTML = document.getElementById('nodeInfo').innerHTML;
        });
      });

      // Restaura el panel nodeInfo a su estado por defecto (texto + Members list)
      window.showDefaultNodeInfo = function () {
        const el = document.getElementById('nodeInfo');
        if (!el) return;

        // Restaura el HTML inicial guardado
        if (__defaultNodeInfoHTML) {
          el.innerHTML = __defaultNodeInfoHTML;
        }

        // Por si el snapshot no incluyera la lista (edge case), reconstruimos
        if (!document.getElementById('membersList')) {
          buildMembersList(data);
        }
      };

      }, 300);

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
  /*network.on("dragStart", () => {
    network.setOptions({ physics: { enabled: true } });
  });
  
  network.on("dragEnd", () => {
    network.setOptions({ physics: { enabled: false } });
  });*/
    
  } catch (err) {
    console.error("Error cargando o renderizando la red:", err);
  }
});
