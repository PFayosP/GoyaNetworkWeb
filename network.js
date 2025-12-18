  // ====== I18N ======
  let CURRENT_LANG = localStorage.getItem('lang') || 'en';
  function getDataFileForLang(lang) {
    return (lang === 'es') ? 'goya_network_ES.json' : 'goya_network.json';
  }

  const I18N = {
    en: {
      BTN_NETWORK:"Network", BTN_ABOUT:"About", BTN_PEOPLE:"People", BTN_PARTNERS:"Partners",
      BTN_ARTWORKS:"Artworks", BTN_BIB:"Bibliography", BTN_CITE:"How to cite", BTN_NEWIN:"New in",
      SEARCH_PH:"Search...", FILTER_PROF_ALL:"All professions", FILTER_NAT_ALL:"All nationalities",
      MEMBERS_TITLE:"Members (A–Z by surname)", LOADING:"Loading network…", LAST_UPDATE:"Last update", HELP_TEXT_1: "Click a node (an individual) or edge (a connection between two individuals) to view the data they contain.", HELP_TEXT_2: "(It might take a few seconds for the website to show the network)", SITE_TITLE: "Goya Network", SITE_SUBTITLE: "Mapping Goya's Impact in 19th-Century France and Spain", 
      BTN_SEARCH: "Search",
      
      CONTRIBUTIONS_TITLE: "Contributions", 
      CONTRIBUTIONS_TEXT: `
      <p>The Goya Network is conceived as a collaborative, crowd-sourced database.</p>
      <p>Contributions and suggestions are welcome and encouraged, and contributors will be credited if requested.</p>
      `,
      
      RIGHTS_LABEL: "Rights:",
      NOTARIAL_PROTECTION: "Protected by notarial deed (Madrid, 2025)",
      ACCESS_FORM: "Access form",

      CITE_TITLE: "How to cite The Goya Network",
      BIB_TITLE: "Bibliography", BIB_INTRO: "This section lists the bibliographic sources used throughout the project. References in nodes and edges appear as short citations (e.g. Adhémar 1958).",

      //professions and nationalities
      "Actor":"Actor","Archaeologist":"Archaeologist","Anthropologist":"Anthropologist","Architect":"Architect", "Aristocrat":"Aristocrat","Art critic":"Art critic", "Art dealer":"Art dealer","Art patron":"Art patron","Art historian":"Art historian","Art theorist":"Art theorist","Artist":"Artist","Banker":"Banker","Bibliographer":"Bibliographer","Bibliophile":"Bibliophile","Businessman":"Businessman","Caricaturist":"Caricaturist","Ceramist":"Ceramist","Civil servant":"Civil servant","Clergyman":"Clergyman","Collector":"Collector","Composer":"Composer","Critic":"Critic", "Curator":"Curator", "Designer":"Designer","Diplomat":"Diplomat","Draughtsman":"Draughtsman","Economist":"Econimist","Editor":"Editor","Engraver":"Engraver","Essayist":"Essaysit","Femme de lettres":"Femme de lettres","Hispanist":"Hispanist", "Historian":"Historian","Illustrator":"Illustrator", "Journalist":"Journalist","Jurist":"Jurist","Lawyer":"Lawyer","Librarian":"Librarian","Librettist":"Librettist","Lithographer":"Lithographer","Lithographic printer":"Lithographic printer","Medical doctor":"Medical doctor","Military member":"Military member","Musician":"Musician","Novelist":"Novelist","Painter":"Painter","Philanthropist":"Philanthropist","Philosopher":"Philosopher","Photographer":"Photographer","Pianist":"Pianist","Playwright":"Playwright","Poet":"Poet","Politician":"Politician", "Printer":"Printer", "Real estate agent":"Real estate agent","Salonnière":"Salonnière","Scholar":"Scholar","Scientist":"Scientist","Sculptor":"Sculptor","Secret agent":"Secret agent","Singer":"Singer","Socialite":"Socialite","Teacher":"Teacher","Translator":"Translator","Traveller":"Traveller", "Writer":"Writer",
      
      //nationalities
      "Spanish":"Spanish","French":"French","British":"British","English":"English","Scottish":"Scottish","Irish":"Irish","Italian":"Italian","German":"German","Swiss":"Swiss","Belgian":"Belgian","Dutch":"Dutch","Austrian":"Austrian","Portuguese":"Portuguese","American":"American", "Cuban":"Cuban", "Polish":"Polish",

      "Life dates":"Life dates","Full name":"Full name","Also known as":"Also known as","Other names":"Other names","Pseudonyms":"Pseudonyms", "Profession":"Profession","Nationality":"Nationality","Born in":"Born in","Dies in":"Dies in","Considered as":"Considered as", "Political views":"Political views","Military activity":"Military activity","Participates in":"Participates in", "Aristocratic titles":"Aristocratic titles","Ties with slavery/colonialism":"Ties with slavery/colonialism","Curiosities":"Curiosities", "Parents":"Parents","Siblings":"Siblings","Married to":"Married to","Partners/lovers":"Partners/lovers","Children":"Children", "Friends":"Friends","Rivals":"Rivals","Correspondence":"Correspondence","Meets":"Meets","Studies in":"Studies in", "Works as":"Works as","Works for":"Works for","Influenced by":"Influenced by","Follower of":"Follower of","Masters":"Masters","Students":"Students", "Member of":"Member of","Founder of":"Founder of","Editor of":"Editor of","Writes in":"Writes in","Collaborates with":"Collaborates with", "Registered in":"Registered in","Mentioned in the French press":"Mentioned in the French press","Decorations/awards":"Decorations/awards", "Tertulia":"Tertulia","Literary salon or tertulia":"Literary salon or tertulia","Author of":"Author of","Collection":"Collection", "Patronage":"Patronage","Portraits":"Portraits","Exhibitions":"Exhibitions","Bibliography":"Bibliography","Websites":"Websites", "Podcasts":"Podcasts","Newspaper archive":"Newspaper archive","Archives":"Archives","Added":"Added","Last modified":"Last modified", "Identity and Personal Data":"Identity and Personal Data", "Family and Personal Relationships":"Family and Personal Relationships", "Education, Profession and Institutions":"Education, Profession and Institutions", "Artistic/Literary Production and Collection":"Artistic/Literary Production and Collection", "Exhibitions and Public Reception":"Exhibitions and Public Reception", "Relationship with Goya":"Relationship with Goya", "Copies after Spanish artworks":"Copies after Spanish artworks", "Sources and Documentation":"Sources and Documentation", "Connections":"Connections", "Artistic Activity, Art Collecting and Patronage":"Artistic Activity, Art Collecting and Patronage", "Geographic Presence and Movement":"Geographic Presence and Movement", "Relationship to Goya and His Work":"Relationship to Goya and His Work", 
      "Portrayed by":"Portrayed by", "Image source":"Image source", "In Spain":"In Spain", "Knows Goya's works":"Knows Goya's works", "Address":"Address", "Link to Goya's work":"Link to Goya's work", "Interest in Spanish art":"Interest in Spanish art", "Mentions of Goya":"Mentions of Goya", "Collector of Goya's works":"Collector of Goya's works", "In Paris":"In Paris", "mentions": "Mentions", "Conferences/seminars":"Conferences/seminars", "Trips":"Trips", "Lives in":"Lives in", "Patrons": "Patrons", "Collector of":"Collector of", "Copies after Goya":"Copies after Goya", "Writes about Goya":"Writes about Goya", "Mentions of Goya":"Mentions of Goya", "Connection": "Connection", "Type of connection": "Type of connection", "Type of relationship": "Type of relationship", "Know each other since": "Know each other since", "Search": "Search", "Collaborations": "Collaborations", "They met": "They met", "direct": "direct", "Artworks bought/sold": "Artworks bought/sold", "Interactions": "Interactions", "Employment/patronage": "Employment/patronage", "Between": "Between", "and": "and", "Between [X] and [Y]": "Between [X] and [Y]", "In France": "In France", "In Italy": "In Italy", "direct": "direct", "secondary": "secondary", "portraitist-sitter": "portraitist-sitter", "employer-employee": "employer-employee", "family": "family", "friends": "friends", "acquaintances": "acquaintances", "acquaintances?": "acquaintances?", "direct?": "direct?", "secondary?": "secondary?", "master-student": "master-student", "partners/lovers": "lovers", "artworks influenced by Goya": "influenced by Goya", "knows Goya's works": "knows Goya's works", "Sales": "Sales", "colleagues": "colleagues", "copies": "copies", "Nodes": "Nodes", "Connections": "Connections", "Access form": "Access form", "Unknown": "unknown", "Visits the Prado Museum": "Visits the Prado Museum",

      ARTWORKS_TITLE: "Goya's work",
      ARTWORKS_BODY: `
      <p>
      <strong>The issue of attribution in Goya:</strong><br>
      When studying Goya, it is important to bear in mind that, due to the enormous demand for his work since the artist's death (which far exceeds the supply of authentic pieces), countless copies, imitations and pastiches have been produced, particularly in 19th-century Spain and France. Many of these continue to be exhibited as genuine 'Goyas' (more euphemistically, 'attributed to Goya', or even 'Goya's workshop') in museums around the world, driven by economic interests and social status. And new 'Goyas' appear every year in art galleries, dealers, and private collections.
      </p>

      <p>
      <strong>Catalogues raisonnés, key exhibition catalogues, and biography</strong> (see the Bibliography section):<br>
      <ul>
        <li><strong>Full oeuvre:</strong> Juliet Wilson-Bareau & Pierre Gassier. <em>Vie et œuvre de Francisco Goya. L'œuvre complet illustré. Peintures, dessins, gravure</em>, 1970 (French); <em>The Life and Complete Work of Francisco Goya: With a Catalogue Raisonné of the Paintings, Drawings and Engravings</em>, 1971 (English); <em>Vida y obra de Francisco Goya: reproducción de su obra completa, pinturas, dibujos y grabados</em>, 1974 (Spanish). See also the catalogue of the retrospective exhibition <i>Goya</i>, Martin Schwander (ed.), Fondation Beyeler, 2021 (English/Spanish/German).</li>
        <li><strong>Drawings:</strong> Manuela Mena-Marqués & José Manuel Matilla, <em>Catálogo Razonado de los Dibujos de Francisco de Goya, vol. 2 (1771-1792)</em>, with G. Maurer, G. Solache, J. Carrete, J. Wilson & V. Albarrán, 2018 (Spanish); <em>Goya: dibujos. 'Solo la voluntad me sobra'</em>, exh. cat., 2019 (Spanish/English); and Pierre Gassier, <em>Les dessins de Goya. Les albums</em>, 1973 (French), <em>Francisco Goya. Drawings. The Complete Albums</em>, 1973 (English).</li>
        <li><strong>Prints:</strong> Tomas Harris, <em>Goya. Engravings and Lithographs</em>, 1964. Also Juan Carrete Parrondo & Jesusa Vega, <em>Goya grabador</em>, 1991.</li>
        <li><strong>Biography</strong>: Janis Tomlinson, <em>Goya: A Portrait of the Artist</em>, 2020 Princeton UP (English), 2022 Cátedra (Spanish).</li>
      </ul>
      </p>

      <p>
      <strong>Online resources:</strong><br>
      <ul>
        <li><strong>Wikipedia:</strong> a comprehensive, crowd-sourced overview of Goya's works displayed in a table, showing title, image, date, location and attribution. <a href="https://en.wikipedia.org/wiki/List_of_works_by_Francisco_Goya" target="_blank"> List of Works by Francisco de Goya</a> (English) - Paintings and Prints; <a href="https://es.wikipedia.org/wiki/Anexo:Cuadros_de_Goya" target="_blank"> Cuadros de Goya</a> (Spanish) - Paintings (non exhaustive).</li><br>
        <li><a href="https://fundaciongoyaenaragon.es/" target="_blank"><strong>Fundación Goya en Aragón:</strong></a> an online catalogue of Goya's works collated by the Fundación Goya en Aragón (part of the Government of Aragón), that includes descriptions, provenance, bibliography, and images. This catalogue, however, collects <em>all</em> works ever attributed to Goya, including copies and pastiches.</li><br>
      </ul>
      </p>

      <p>
      <strong>GOYA COLLECTIONS: museums, libraries, churches, and private collections:</strong><br>
        <br>
        SPAIN
        <li><a href="https://www.museodelprado.es/coleccion/artista/goya-y-lucientes-francisco-de/39568a17-81b5-4d6f-84fa-12db60780812" target="_blank"><strong>Museo del Prado</strong></a> (<em>Goya en el Prado</em>): artworks (paintings, prints and drawings) held at the Prado Museum, documents, printed references, and digital library.</li>
        <li><a href="https://www.realacademiabellasartessanfernando.com/goya/la-academia-y-goya/" target="_blank"><strong>Real Academia de Bellas Artes de San Fernando</strong></a> (RABASF): history of Goya's link with the Academy, catalogue of works, <em>Calcografía Nacional</em> (production of Goya's prints).</li>
        <li><strong>Patrimonio Nacional</strong> (Spanish national heritage): different paintings such as <a href="https://www.patrimonionacional.es/colecciones-reales/pintura/retrato-de-carlos-iv-como-cazador" target="_blank"><em>Portrait of Carlos IV as a Hunter</em></a> and <a href="https://www.galeriadelascoleccionesreales.es/obra-de-arte/retrato-de-maria-luisa-de-parma-en-traje-de-corte/19602330-5985-4e7e-81f7-25dce124b6a9" target="_blank"><em>Portrait of María Luisa de Parma in Court Dress</em></a>, as well as all the tapestries based on Goya's cartoons, such as <a href="https://www.patrimonionacional.es/colecciones-reales/textiles-y-tapiceria/la-era-o-el-verano" target="_blank"><em>The Summer</em></a>.</li>
        <li><a href="https://www.bne.es/es/blog/blog-bne/post-80" target="_blank"><strong>Biblioteca Nacional de España</strong></a> (BNE): history of Goya's collections and catalogue.</li>
        <li><a href="https://coleccion.bde.es/wca/es/secciones/coleccion/artistas/francisco-de-goya-y-lucientes-896.obras.html" target="_blank"><strong>Banco de España</strong></a> (Madrid): paintings (such as the portraits of Francisco Cabarrús, Count of Floridablanca, XI Count of Altamira and Carlos III) and prints (<em>Desastres de la guerra</em>, <em>Tauromaquia</em>, <em>Disparates</em>).</li>
        <li><a href="https://www.museolazarogaldiano.es/obras-goya-museo-lazaro-galdiano" target="_blank"><strong>Museo Lázaro Galdiano</strong></a> (Madrid): its collection includes the paintings <i>El Aquelarre</i> (1797-98) and <i>Las Brujas/El conjuro</i> (1797-98), the oil sketches <i>Santa Isabel de Portugal curando a una enferma</i> (c.1799) and <i>San Hermenegildo en la prisión</i> (1800), and the preparatory sketch <i>El verano</i> (1786); prints like <i>El can</i> (c.1820-27); and drawings like <i>Felipe III</i> (1778), <i>Retrato ecuestre del Conde-Duque de Olivares</i> (c.1776-78), <i>Portrait of Giambattista Casti</i> (c.1802-03), <i>Modo de volar</i> (1815-16), <i>Mendigo ciego con un perro</i> (c.1824) and <i>Mendigo con acordeón</i> (c.1824-28).</li>
        <li><a href="https://www.museothyssen.org/coleccion/artistas/goya-francisco" target="_blank"><strong>Museo Thyssen Bornemisza</strong></a> (Madrid): biography and collection, which includes the paintings <i>Retrato de Asensio Julià</i> (c.1798), <i>Retrato de Fernando VII</i> (1814-15), and <i>El Tío Paquete</i> (c.1819-20).</li>
        <li><a href="https://museogoya.fundacionibercaja.es/goya-en-zaragoza.php" target="_blank"><strong>Museo Goya - Colección Fundación Ibercaja - Museo Camón Aznar</strong></a> (Zaragoza).</li>
        <li><a href="https://fundacionfuendetodosgoya.org/museo-del-grabado/" target="_blank"><strong>Museo del Grabado</strong></a> (Fuendetodos, Zaragoza): museum of printmaking at Goya's birth house.</li>
        <li><strong>CHURCHES AND CATHEDRALS</strong>: Ermita de San Antonio de la Florida (Madrid), Real Basílica de San Francisco el Grande (Madrid), Valencia Cathedral, Sevilla Cathedral, Basílica del Pilar (Zaragoza), Cartuja del Aula Dei (Zaragoza).</li>
        <li><strong>PRIVATE COLLECTIONS</strong> (selection): colección Abelló; colección Marqués de la Romana; Duke of Alba (Palacio de Liria); Dukes of Osuna (Alameda de Osuna); Carderera collection; Fundación María Cristina Masaveu Peterson; Fundación BBVA (Madrid, Palacio del Marqués de Salamanca): <a href="https://www.coleccionbbva.com/es/pintura/443-retrato-de-carlos-iii-cazador/" target="_blank"><em>Carlos III as a Hunter</em></a> and <a href="https://www.coleccionbbva.com/es/pintura/444-don-pantaleon-perez-de-nenin/" target="_blank"><em>Portrait of Don Pantaleón Pérez de Nenín</em></a>.</li><br>
        
        FRANCE<br>
        <li><a href="https://collections.louvre.fr/en/recherche?q=Francisco%20de%20Goya" target="_blank"><strong>Musée du Louvre</strong>:</a> paintings, prints, and drawings.</li>
        <li><a href="https://www.museegoya.fr/fr/search?p=1&query=Goya" target="_blank"><strong>Musée Goya Castres</strong>:</a> paintings, prints, copies after Goya, and documents. Its collection includes <a href="https://www.museegoya.fr/fr/notice/894-5-4-l-assemblee-de-la-compagnie-royale-des-philippines-dite-la-junte-des-philippines-7dc13026-e99a-4d4d-a924-afa2204705e9" target="_blank"><i>La Junta de Filipinas</i></a> (L'Assemblée de la Compagnie Royale des Philippines) (1815) (894-5-4), the <a href="https://www.museegoya.fr/fr/notice/894-5-3-portrait-de-francisco-del-mazo-a3f16ab8-79d5-46ea-b3e8-5fb553468f2c" target="_blank"><i>Portrait of Francisco del Mazo</i></a> (1815-19) (894-5-3), and a <a href="https://www.museegoya.fr/fr/notice/894-5-2-autoportrait-aux-lunettes-36227304-cf57-402d-a357-5c5647a9aa7c" target="_blank"><i>Self-portrait with Glasses</i></a> (c.1800) (894-5-2).</li>
        <li><a href="https://gallica.bnf.fr/selections/fr/html/francisco-de-goya" target="_blank"><strong>Bibliothèque nationale de France</strong></a> (BnF): history of the Goya collections, and catalogue (prints).</li>
        <li>Palais des Beaux-arts de Lille: <a href="https://pba.lille.fr/Collections/Chefs-d-OEuvre/Peintures-XVI-sup-e-sup-XXI-sup-e-sup-siecles/Les-Vieilles-Le-Temps" target="_blank"><em>Les vieilles/Le temps</em></a> and <a href="https://pba.lille.fr/Collections/Chefs-d-OEuvre/Peintures-XVI-sup-e-sup-XXI-sup-e-sup-siecles/Les-Jeunes-La-Lettre" target="_blank"><em>Les jeunes/La lettre</em></a>. Also a set of the <em>Caprichos</em>.</li>
        <li><a href="https://www.mbaa.besancon.fr/les-collections/peinture/" target="_blank"><strong>Musée des Beaux-Arts de Besançon</strong></a>: <em>Cannibals watching human remains</em> and <em>Cannibals preparing their victims</em>.</li>
        <li>Musée des Beaux-Arts de Strasbourg: <a href="https://musees-strasbourg.skin-web.org/document/portrait-de-don-bernardo-iriarte/5ee338d7461cda28a3ab1e90?q=Goya&pos=14&pgn=0" target="_blank"><em>Portrait de Don Bernardo de Iriarte</em></a>, as well as prints (after Velázquez, <em>Caprichos</em>, <em>Disparates</em>, isolated prints like <em>El agarrotado</em>).</li>
        <li><a href="https://www.musee-agen.fr/recherche?q=Goya&tx_indexedsearch%5Bsubmit_button%5D=OK" target="_blank"><strong>Musée des Beaux-Arts d'Agen</strong></a>: some paintings attributed to Goya, such as a self-portrait and <em>Le Ballon</em>.</li>
        <li><a href="https://mbh.bayonne.fr/" target="_blank"><strong>Musée Bonnat-Helleu</strong></a> (Bayonne): works such as the drawing <em>Dos mujeres abrazándose</em> and portrait of Goya with glasses (attributed).</li>
        <li>PRIVATE COLLECTIONS: Unknown Paris collection (the twin portraits of Javier Goya and Gumersinda Goicoechea).</li><br>

        USA<br>
        <li><a href="https://collections.mfa.org/search/Objects/*/Goya/images?page=1" target="_blank"><strong>Boston Museum of Fine Arts</strong></a> (MoFA): paintings (<a href="https://www.metmuseum.org/art/collection/search?q=Goya&sortBy=Relevance&searchField=ArtistCulture" target="_blank"><em>Portrait of a Young Man in Brown, possibly Javier Goya</em></a>, 48.558), <a href="https://collections.mfa.org/collections/315210/dpdprints-by-goya/objects" target="_blank">prints</a> and <a href="https://collections.mfa.org/collections/315215/dpddrawings-by-goya;jsessionid=7527C5D8C33C9415AF5A65EC964E77C1/objects" target="_blank">drawings</a>.</li>
        <li><a href="https://www.metmuseum.org/art/collection/search?q=Goya&sortBy=Relevance&searchField=ArtistCulture" target="_blank"><strong>Metropolitan Museum</strong></a> (New York): paintings, prints, and drawings.</li>
        <li><a href="https://www.nortonsimon.org/art/in-focus/goya" target="_blank"><strong>Norton Simon Museum</strong></a> (Pasadena): history of the Goya collections, and catalogue.</li>
        <li><a href="https://www.frick.org/art/artists/goya" target="_blank"><strong>The Frick Collection</strong></a> (New York): history of the Goya collections, and catalogue.</li>
        <li><a href="https://hispanicsociety.emuseum.com/search/Goya*" target="_blank"><strong>The Hispanic Society of America</strong></a> (New York): Goya collection, including paintings (<i>Portrait of the Duchess of Alba in black</i>, 1797, A102; <i>Portrait of Pedro Mocarte</i>, c.1805, A1890; <i>Portrait of Don Manuel Lapeña</i>, 1799, A99), prints (<i>Los Caprichos</i>), </i>and drawings (<i>Majas fighting, a Mano observing</i>, 1796-07, A3309; <i>Majas y majos conversing</i>, 1796-97, A3310; <i>Hay pulgas?</i>, 1796-97, A3316; <i>Buena gente somos los moralistas</i>, 1796-97, A3317; <i>Juan Fernández Navarrete</i>, 1798, LA2223; <i>Tiene prisa de escapar</i>, 1808-14, A3318; <i>Torture of a man</i>, c.1812-20, A3312; <i>Peasant carrying woman</i>, 1812-20, A3315; <i>Tuti li mundi</i>, c.1808-14, A3314; <i>Regocijo</i>, 1819-23, A3308; <i>Old man on a swing</i>, 1823-28, A3313; <i>Woman with 2 children</i>, 1823-28, A3311).</li>
        <li><a href="https://www.nga.gov/artists/1353-francisco-goya" target="_blank"><strong>National Gallery of Art</strong></a> (Washington, D.C.): paintings, prints, and drawings.</li>
        <li><a href="https://meadowsmuseumdallas.org/collections/pages/objects-1/portfolio/?records=9&query=mfs%20any%20%22Goya%22&sort=0" target="_blank"><strong>The Meadows Museum</strong></a> (Dallas): paintings (including copies and pastiches).</li>
        <li><a href="https://www.artic.edu/artists/40615/francisco-jose-de-goya-y-lucientes" target="_blank"><strong>Art Institute of Chicago</strong></a>: paintings, prints, and drawings (including pastiches).</li>
        <li><a href="https://harvardartmuseums.org/collections/person/23169?person=23169" target="_blank"><strong>Harvard Art Museums</strong></a> (Cambridge, Mass.): paintings, prints and drawings (including pastiches).</li>
        <li><strong>Museo de Arte de Ponce</strong> (Puerto Rico): <a href="https://museoarteponce.org/obras/retrato-de-martin-zapater-portrait-of-martin-zapater/" target="_blank"><em>Portrait of Martín Zapater</em></a>.</li><br>

        UK<br>
        <li><a href="https://www.nationalgallery.org.uk/artists/francisco-de-goya" target="_blank"><strong>National Gallery</strong></a> (London): <a href="https://www.nationalgallery.org.uk/paintings/francisco-de-goya-a-picnic" target="_blank"><em>A Picnic</em></a>, <a href="https://www.nationalgallery.org.uk/paintings/francisco-de-goya-a-scene-from-the-forcibly-bewitched" target="_blank"><em>A Scene from 'The Forcibly Bewitched'</em></a>, <a href="https://www.nationalgallery.org.uk/paintings/francisco-de-goya-don-andres-del-peral" target="_blank"><em>Don Andrés del Peral</em></a>, and <a href="https://www.nationalgallery.org.uk/paintings/francisco-de-goya-the-duke-of-wellington" target="_blank"><em>The Duke of Wellington</em></a>. Also <a href="https://www.nationalgallery.org.uk/paintings/francisco-de-goya-dona-isabel-de-porcel" target="_blank"><em>Portrait of Isabel de Porcel</em></a> (attributed).</li>
        <li><a href="https://thebowesmuseum.org.uk/discover-the-spanish-collection-held-by-the-bowes-museum/" target="_blank"><strong>The Bowes Museum</strong></a> (Durham): paintings including the portrait of Juan Meléndez Valdés and <i>Interior of a Prison</i>.</li>
        <li><strong>English Heritage</strong>: The Wellington Collection, Apsley House (London) (<a href="https://artuk.org/discover/artworks/equestrian-portrait-of-the-1st-duke-of-wellington-17691852-144183" target="_blank">Equestrian Portrait of the 1st Duke of Wellington</a>).</li>
        <li><a href="https://artuk.org/discover/artworks/el-medico-the-doctor-210121" target="_blank"><strong>National Galleries of Scotland</strong></a> (Edinburgh): <em>The Doctor</em>.</li>
        <li><strong>The Courtauld Gallery</strong> (London): the drawing <a href="https://courtauld.ac.uk/highlights/cantar-y-bailar-singing-and-dancing/" target="_blank"><em>Singing and Dancing</em></a> and the painting <a href="https://courtauld.ac.uk/highlights/portrait-of-francisco-de-saavedra/" target="_blank"><em>Portrait of Francisco de Saavedra</em></a>.</li>
        <li><strong>Pollok House</strong> (Glasgow): series of small 6 paintings of scenes with children, including <a href="https://artuk.org/discover/artworks/boys-playing-at-see-saw-84159" target="_blank"><em>Boys Playing at See-Saw</em></a> and <a href="https://artuk.org/discover/artworks/boys-playing-at-soldiers-84160" target="_blank"><em>Boys Playing at Soldiers</em></a>.</li>
        <li><a href="https://artuk.org/discover/artworks/disparate-de-miedo-261946" target="_blank"><strong>The Higgins</strong></a> (Bedford): 'Disparate de miedo' (<em>Disparates</em>).</li><br> 

        IRELAND<br>
        <li><strong>National Gallery of Ireland</strong> (Dublin): <a href="https://www.nationalgallery.ie/art-and-artists/highlights-collection/dona-antonia-zarate-francisco-jose-de-goya-y-lucientes-1746" target="_blank"><em>Portrait of Doña Antonia de Zárate</em></a>.</li><br>

        SWITZERLAND<br>
        <li><strong>Emil Bührle Collection</strong> (Zurich): <a href="https://buehrle.ch/en/artworks/procession-in-valencia/" target="_blank"><em>Procession in Valencia</em></a>.</li>
        <li>PRIVATE COLLECTIONS: Rothschild (including the authentic version of <em>Majas on the Balcony</em>).</li><br>

        GERMANY<br>
        <li><a href="https://recherche.smb.museum/?language=de&limit=15&sort=relevance&controls=none&conditions=AND%2BinvolvedParties%2B%22Francisco+Jos%C3%A9+de+Goya+y+Lucientes%22&collectionKey=NG*" target="_blank"><strong>Staatliche Museen zu Berlin</strong></a>: catalogue of artworks, including <em>La Cucaña</em>.</li>
        <li><a href="https://www.sammlung.pinakothek.de/de/search?phrase=Goya#filters={}" target="_blank"><strong>Alte Pinakothek</strong></a> (Munich): paintings, prints, and drawings (including pastiches).</li><br>

        ITALY<br>
        <li><strong>Uffizi</strong> (Florence): <a href="https://www.virtualuffizi.com/es/retrato-de-la-condesa-de-chinc%C3%B3n.html" target="_blank"><em>Equestrian portrait of María Teresa de Vallabriga</em></a>.</li>
        <li><strong>Fondazione Magnani Rocca</strong> (Parma): <a href="https://www.magnanirocca.it/goya-la-famiglia-dell-infante-don-luis/" target="_blank"><em>The Family of Infante Don Luis</em></a>.</li><br>

      </p>
      `,

      PEOPLE_TITLE: "People",
      PEOPLE_BODY: `
      <p><strong>Project Director:</strong> Paula Fayos-Pérez, PhD (University of Cambridge, 2019). Postdoctoral researcher in History of Art. Associate member of ARCHE (Université de Strasbourg) and SU+MA (Universidad Complutense de Madrid).</p>

      <p><strong>Scientific Committee:</strong> The content of the Goya Network is periodically reviewed and discussed with the members of a scientific committee composed of external consultants renowned for their scholarly prestige, who provide guidance and advice on specific aspects of the project.</p>
      <ul style="margin-top: 0.5rem; line-height: 1.6;">
        <li><strong>Jean Michel Massing</strong>: Professor Emeritus of Art History at the University of Cambridge, King's College. Specialist in the history of printmaking, iconography, and African art.</li> <br>
        <li><strong>Aurélie Pétiot</strong>: Lecturer at the Université Paris Nanterre. Specialist in nineteenth-century art, decorative arts, gender studies, and the Pre-Raphaelites.</li> <br>
        <li><strong>Stephanie Loeb Stepanek</strong>: Curator Emerita of Prints and Drawings at the Museum of Fine Arts, Boston. Specialist in Goya's prints and the history of Goya collecting in the United States.</li> <br>
        <li><strong>Anita L. Verő</strong>: PhD in Artificial Intelligence (University of Cambridge, 2022), computer scientist and founder of <a href="https://www.consonant-ai.com" target="_blank">ConsonantAI</a>. Support with the technical development of the website.</li>
      </ul>

      <p class="section-heading">Contributors</p>
      <ul>
        <li><strong>Manuela B. Mena-Marqués</strong>: PhD in Art History (Complutense University of Madrid, 1976). Curator of the Prints and Drawings Department (1979-1981), Deputy Director (1981-1996) and Head of the Curatorial Department for 18th-Century Painting and Goya at the Prado Museum (1996-2019). Contribution: feedback on the website (June 2025).</li> <br>
        <li><strong>Joëlle Arches</strong>, Chief Curator and Director of the <a href="https://www.museegoya.fr/" target="_blank">Musée Goya</a> and Jean Jaurès Museum, and <strong>Cécile Berthoumieu</strong>, Senior Heritage Curator (Attachée principale de conservation du patrimoine). Contribution: website feedback; suggested adding Marcel Briguiboul to the network (September 2025).</li> <br>
        <li><strong>Stephanie Loeb Stepanek</strong>: Curator Emerita of Prints and Drawings, Boston Museum of Fine Arts. Contribution: information on an early edition of <i>Disasters of War</i>, printed by Laureano Potenciano (October 2025).</li>
      </ul>
      `,

      ABOUT_TITLE: "About the Goya Network",
      ABOUT_BODY: `
      <p style="background: #333; color: white; padding: 1rem; border-left: 5px solid #66ccff; font-size: 1.1rem;">
        <span style="font-weight: bold;">📣 Forthcoming: Fayos-Pérez & Verő, "The Goya Network: Mapping Goya's Impact in 19th-Century France and Spain"</span>, to be published in 
        <a href="https://leonardo.info/leonardo/" target="_blank" style="color: #66ccff; font-weight: bold;"><em>Leonardo</em></a>, a peer-reviewed academic journal published by the 
        <span style="font-weight: bold;">MIT Press</span> covering the application of contemporary science and technology to the arts and music.
      </p>

      <p><strong>Introduction:</strong> Throughout the 18th and 19th centuries, networks of artists, writers, collectors and intellectuals were crucial for artistic production, as well as for the dissemination and understanding of historical figures. Mapping these connections allows us to better understand the dynamics of sociability and the circulation of ideas. In recent years, projects in the Digital Humanities have demonstrated the potential of network analysis to illuminate historical artistic milieus, such as the <a href="https://arkivet.thorvaldsensmuseum.dk/en" target="_blank">Thorvaldsen Letter Archive</a>, <a href="http://republicofletters.stanford.edu/casestudies/index.html" target="_blank">Mapping the Republic of Letters</a> (University of Stanford), <a href="http://emlo.bodleian.ox.ac.uk/home" target="_blank">Early Modern Letters Online (EMLO)</a> (University of Oxford), <a href="https://mappingrome.com/" target="_blank">Mapping Rome</a>, and <a href="https://womensbios.lib.virginia.edu/index.html" target="_blank">Collective Biographies of Women</a> (Alison Booth, University of Virginia).</p> 

      <p><em>The Goya Network</em> builds on these methods, offering an interactive database that maps the social and professional relationships surrounding the Spanish artist Francisco de Goya, focusing on his connections with artists, critics, and collectors in 19th-century Spain and France. Unlike traditional studies of his work, this project emphasizes the relational context that shaped Goya’s legacy, offering a novel tool for the study of historical artists' social networks. As a 'living' database, it facilitates cross-disciplinary collaboration and serves as both a research tool and a public resource, providing insight into the scope of Goya’s influence and the reception of his work.</p>

      <p><strong>Origin:</strong> This is a research-based digital project developed by Paula Fayos-Pérez as part of her postdoctoral work on Goya's social and professional networks. It is a continuation of the research done during her PhD (University of Cambridge, 2018) <a href="https://www.repository.cam.ac.uk/items/8d9751ce-aca1-4d35-9436-0820ecbc98d4" target="_blank">(repository)</a>, which was later transformed into a book: <a href="https://www.ceeh.es/en/publicacion/goyas-caprichos-in-nineteenth-century-france-politics-of-the-grotesque/" target="_blank"><em>Goya’s Caprichos in Nineteenth-Century France. Politics of the Grotesque</em></a> (CEEH, 2024).</p>

      <p><strong>Funding:</strong> Work produced with the support of a 2024 Leonardo Grant (<a href="https://www.redleonardo.es/beneficiario/paula-fayos-perez/" target="_blank">Beca Leonardo</a>) for Scientific Research and Cultural Creation, <a href="https://www.fbbva.es/" target="_blank">BBVA Foundation.</a> The Foundation takes no responsibility for the opinions, statements and contents of this project, which are entirely the responsibility of its authors.</p>

      <p><strong>User guide:</strong> There is data contained in each node (individual) and edge (connection between two individuals). On the nodes, users can see biographic information as well as artistic/literary production, art collection and link to Goya's work. On the edges, one can see the relationship type, correspondence, collaborations, and others. Edges in grey/silver colour are direct connections (friends, colleagues, relatives, acquaintances, etc.), while edges in golden colour are secondary connections (e.g. artists and writers who copied or wrote about Goya but never met him in person). The size of the nodes is proportional to the number of edges (connections) they hold.</p>

      <p><strong>Nature of the project:</strong> The Goya Network is conceived as a collaborative, crowd-sourced database with the aim of becoming a useful tool for scholars, students and the general public of Goya. We welcome contributions by art historians, historians, Hispanists, lecturers and curators specialised in Goya, 19th-century Spain, 19th-century France and in any of the members of the network (e.g. Federico Madrazo, Prosper Mérimée, Eugène Delacroix, etc.). To submit a contribution, please see the Contributions section on the website below.</p>

      <p><strong>Methodology:</strong> Art historical research: based on bibliographic and archival sources.<br>
      Web development: built using HTML and JavaScript, with structured data in JSON, and version control and deployment through GitHub, developed with the assistance of ChatGPT (OpenAI) and DeepSeek (High-Flyer).</p>

      <p><strong>Copyright and License:</strong> The Goya Network is protected by notarial deed (Madrid, 2025), documenting the research and development process from 2018 to 2025.  
      Its code and structure are licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" style="color:#66ccff;">CC BY-NC 4.0</a>, allowing non-commercial academic use with proper attribution to the author.</p>

      <p><strong>Data and cookies:</strong> This website uses cookies exclusively for Google Analytics, which anonymously tracks visitor behaviour. We use this information only to understand how the site is being used and to improve its content and navigation. You can opt out of Google Analytics cookies across all websites by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" style="color:#66ccff;">Google Analytics Opt-out Browser Add-on</a>. For more information on how Google uses cookies, visit the <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" style="color:#66ccff;">Cookies & Google Analytics</a> page.</p>
      `,
    },
    es: {
      BTN_NETWORK:"Red", BTN_ABOUT:"Acerca de", BTN_PEOPLE:"Equipo", BTN_PARTNERS:"Socios",
      BTN_ARTWORKS:"Obras", BTN_BIB:"Bibliografía", BTN_CITE:"Cómo citar", BTN_NEWIN:"Novedades",
      SEARCH_PH:"Buscar…", FILTER_PROF_ALL:"Todas las profesiones", FILTER_NAT_ALL:"Todas las nacionalidades",
      MEMBERS_TITLE:"Miembros (A–Z por apellido)", LOADING:"Cargando la red…", LAST_UPDATE:"Última actualización", HELP_TEXT_1: "Haz clic en un nodo (un individuo) o en una arista (una conexión entre dos individuos) para ver los datos que contienen.", HELP_TEXT_2: "(La red puede tardar unos segundos en mostrarse)", SITE_TITLE: "Red Goya", SITE_SUBTITLE: "Cartografiar el impacto de Goya en la Francia y la España del siglo XIX", 
      BTN_SEARCH: "Buscar",
      
      CONTRIBUTIONS_TITLE: "Contribuciones", 
      CONTRIBUTIONS_TEXT: `
      <p>La Red Goya se concibe como una base de datos colaborativa y abierta.</p>
      <p>Las contribuciones y sugerencias son bienvenidas, y los colaboradores serán acreditados si así lo desean.</p>
      `,

      NOTARIAL_PROTECTION: "Protegido por acta notarial (Madrid, 2025)",
      ACCESS_FORM: "Formulario de acceso",
      RIGHTS_LABEL: "Derechos:",

      CITE_TITLE: "Cómo citar la Red Goya",
      BIB_TITLE: "Bibliografía", BIB_INTRO: "Esta sección reúne las fuentes bibliográficas empleadas a lo largo del proyecto. Las referencias que aparecen en los nodos y en las conexiones se presentan en forma de citas abreviadas (por ejemplo, Adhémar 1958).",

      //profesiones
      "Actor":"Actor/Actriz","Archaeologist":"Arqueólogo/a","Anthropologist":"Antropólogo/a","Architect":"Arquitecto/a",  "Aristocrat":"Aristócrata","Art critic":"Crítico de arte","Art dealer":"Marchante de arte","Art patron":"Mecenas","Art historian":"Historiador/a del arte","Art theorist":"Teórico/a del arte","Artist":"Artista","Banker":"Banquero/a","Bibliographer":"Bibliógrafo","Bibliophile":"Bibliófilo","Businessman":"Empresario/a","Caricaturist":"Caricaturista","Ceramist":"Ceramista","Civil servant":"Funcionario","Clergyman":"Clérigo","Collector":"Coleccionista","Composer":"Compositor/a","Critic":"Crítico/a", "Curator":"Conservador de museo", "Designer":"Diseñador/a","Diplomat":"Diplomático/a","Draughtsman":"Dibujante","Economist":"Economista","Editor":"Editor/a","Engraver":"Grabador/a","Essayist":"Ensayista","Femme de lettres":"Mujer de letras","Hispanist":"Hispanista", "Historian":"Historiador","Illustrator":"Ilustrador", "Printer":"Impresor","Journalist":"Periodista","Jurist":"Jurista","Lawyer":"Abogado","Librarian":"Bibliotecario/a","Librettist":"Libretista","Lithographer":"Litógrafo/a","Lithographic printer":"Impresor/a litográfico/a","Medical doctor":"Médico/a","Military member":"Militar","Musician":"Músico/a","Novelist":"Novelista","Painter":"Pintor/a","Philanthropist":"Filántropo/a","Philosopher":"Filósofo/a","Photographer":"Fotógrafo/a","Pianist":"Pianista","Playwright":"Dramaturgo/a","Poet":"Poeta","Politician":"Político/a","Real estate agent":"Agente inmobiliario/a","Salonnière":"Salonnière","Scholar":"Académico/a","Scientist":"Científico/a","Sculptor":"Escultor/a","Secret agent":"Agente secreto/a","Singer":"Cantante","Socialite":"Figura social","Teacher":"Profesor","Translator":"Traductor/a", "Traveller":"Viajero", "Writer":"Escritor/a",
      
      //nacionalidades
      "Spanish":"Española","French":"Francesa","British":"Británica","English":"Inglesa","Scottish":"Escocesa","Irish":"Irlandesa","Italian":"Italiana","German":"Alemana","Swiss":"Suiza","Belgian":"Belga","Dutch":"Neerlandesa","Austrian":"Austríaca","Portuguese":"Portuguesa","American":"Estadounidense", "Cuban":"Cubana", "Polish":"Polaca",

      //Categorías en nodos y edges
      "Life dates":"Fechas de vida","Full name":"Nombre completo","Also known as":"También conocido/a como","Other names":"Otros nombres","Pseudonyms":"Seudónimos", "Profession":"Profesión","Nationality":"Nacionalidad","Born in":"Nace en","Dies in":"Fallece en","Considered as":"Considerado/a como", "Political views":"Ideas políticas","Military activity":"Actividad militar","Participates in":"Participa en", "Aristocratic titles":"Títulos nobiliarios","Ties with slavery/colonialism":"Vínculos con esclavitud/colonialismo","Curiosities":"Curiosidades", "Parents":"Padres","Siblings":"Hermanos/as","Married to":"Casado/a con","Partners/lovers":"Parejas/amantes","Children":"Hijos/as", "Friends":"Amigos/as","Rivals":"Rivales","Correspondence":"Correspondencia","Meets":"Encuentros","Studies in":"Estudia en", "Works as":"Trabaja como","Works for":"Trabaja para","Influenced by":"Influido/a por","Follower of":"Seguidor/a de","Masters":"Maestros/as","Students":"Alumnos/as", "Member of":"Miembro de","Founder of":"Fundador/a de","Editor of":"Editor/a de","Writes in":"Escribe en","Collaborates with":"Colabora con", "Registered in":"Registrado/a en","Mentioned in the French press":"Mencionado/a en la prensa francesa","Decorations/awards":"Condecoraciones/premios", "Tertulia":"Tertulia","Literary salon or tertulia":"Salón literario o tertulia","Author of":"Autor/a de","Collection":"Colección", "Patronage":"Mecenazgo","Portraits":"Retratos","Exhibitions":"Exposiciones", "Bibliography":"Bibliografía","Websites":"Páginas web", "Podcasts":"Podcasts","Newspaper archive":"Hemeroteca","Archives":"Archivos","Added":"Añadido","Last modified":"Última modificación", "Identity and Personal Data":"Identidad y datos personales", "Family and Personal Relationships":"Familia y relaciones personales", "Education, Profession and Institutions":"Formación, profesión e instituciones", "Artistic/Literary Production and Collection":"Producción artística/literaria y colección", "Exhibitions and Public Reception":"Exposiciones y recepción pública", "Relationship with Goya":"Relación con Goya", "Copies after Spanish artworks":"Copias de obras españolas", 
      "Sources and Documentation":"Fuentes y documentación", "Connections":"Conexiones", "Artistic Activity, Art Collecting and Patronage":"Actividad artística, coleccionismo y mecenazgo", "Geographic Presence and Movement":"Presencia geográfica y desplazamientos", "Relationship to Goya and His Work":"Relación con Goya y su obra", "Portrayed by":"Retratado/a por", "Image source":"Origen de la imagen", "In Spain":"En España", "Knows Goya's works":"Conoce la obra de Goya", "Address":"Dirección", "Link to Goya's work":"Vínculo con la obra de Goya", "Interest in Spanish art":"Interés en el arte español", "Mentions of Goya":"Menciones de Goya", "Collector of Goya's works":"Coleccionista de la obra de Goya", "In Paris":"En París", "mentions": "Menciones", "Conferences/seminars":"Conferencias/seminarios", "Trips":"Viajes", "Lives in":"Vive en", "Patrons": "Mecenas", "Collector of":"Coleccionista de", "Copies after Goya":"Copias de Goya", "Writes about Goya":"Escribe sobre Goya", "Mentions of Goya":"Menciones de Goya", "Connection": "Conexión", "Type of connection": "Tipo de conexión", "Type of relationship": "Tipo de relación", "Know each other since": "Se conocen desde", "Search": "Buscar", "Collaborations": "Colaboraciones", "They met": "Se encontraron", "direct": "directa", "Artworks bought/sold": "Compraventa de obras", "Interactions": "Interacciones", "Employment/patronage": "Empleo/patronazgo", "Between": "Entre", "and": "y", "Between [X] and [Y]": "Entre [X] y [Y]", "In France": "En Francia", "In Italy": "En Italia", "direct": "directa", "secondary": "secundaria", "acquaintances?": "¿conocidos?", "direct?": "¿directa?", "secondary?": "¿secundaria?", "portraitist-sitter": "retratista-retratado", "employer-employee": "empleador-empleado", "family": "familia", "friends": "amigos", "acquaintances": "conocidos", "master-student": "maestro-alumno", "partners/lovers": "parejas/amantes", "artworks influenced by Goya": "influenciado por Goya", "knows Goya's works": "conoce la obra de Goya", "Sales": "Ventas", "colleagues": "colegas", "copies": "copias", "Nodes": "Nodos", "Connections": "Conexiones", "Access form": "Acceder al formulario", "Unknown": "desconocida", "Visits the Prado Museum": "Visita el Museo del Prado",

      ARTWORKS_TITLE: "La obra de Goya",
      ARTWORKS_BODY: `
      <p>
      <strong>La cuestión de la atribución en Goya:</strong><br>
      Al estudiar a Goya conviene tener presente que, debido a la enorme demanda de su obra desde la muerte del artista (que supera con creces la oferta de piezas auténticas), se han producido innumerables copias, imitaciones y pastiches, especialmente en la España y la Francia del siglo XIX. Muchas de estas continúan exhibiéndose como auténticos «Goyas» (más eufemísticamente, «atribuido a Goya», o incluso «taller de Goya») en museos de todo el mundo, impulsadas por intereses económicos y por el prestigio social. Y cada año aparecen nuevos «Goyas» en galerías, entre marchantes y en colecciones privadas.
      </p>

      <p>
      <strong>Catálogos razonados, catálogos de exposiciones fundamentales y biografía</strong> (véase la sección Bibliography):<br>
      <ul>
        <li><strong>Obra completa:</strong> Juliet Wilson-Bareau & Pierre Gassier. <em>Vie et œuvre de Francisco Goya. L'œuvre complet illustré. Peintures, dessins, gravure</em>, 1970 (francés); <em>The Life and Complete Work of Francisco Goya: With a Catalogue Raisonné of the Paintings, Drawings and Engravings</em>, 1971 (inglés); <em>Vida y obra de Francisco Goya: reproducción de su obra completa, pinturas, dibujos y grabados</em>, 1974 (español). Véase también el catálogo de la exposición retrospectiva <i>Goya</i>, Martin Schwander (ed.), Fondation Beyeler, 2021 (inglés/español/alemán).</li>
        <li><strong>Dibujos:</strong> Manuela Mena-Marqués & José Manuel Matilla, <em>Catálogo Razonado de los Dibujos de Francisco de Goya, vol. 2 (1771-1792)</em>, con G. Maurer, G. Solache, J. Carrete, J. Wilson & V. Albarrán, 2018 (español); <em>Goya: dibujos. 'Solo la voluntad me sobra'</em>, cat. exp., 2019 (español/inglés); y Pierre Gassier, <em>Les dessins de Goya. Les albums</em>, 1973 (francés), <em>Francisco Goya. Drawings. The Complete Albums</em>, 1973 (inglés).</li>
        <li><strong>Estampas:</strong> Tomas Harris, <em>Goya. Engravings and Lithographs</em>, 1964. Véase también Juan Carrete Parrondo & Jesusa Vega, <em>Goya grabador</em>, 1991.</li>
        <li><strong>Biografía</strong>: Janis Tomlinson, <em>Goya: A Portrait of the Artist</em>, 2020 Princeton UP (inglés), 2022 Cátedra (español).</li>
      </ul>
      </p>

      <p>
      <strong>Recursos en línea:</strong><br>
      <ul>
        <li><strong>Wikipedia:</strong> una panorámica amplia y colaborativa de las obras de Goya presentada en forma de tabla, con título, imagen, fecha, localización y atribución. <a href="https://en.wikipedia.org/wiki/List_of_works_by_Francisco_Goya" target="_blank"> List of Works by Francisco de Goya</a> (inglés) – pinturas y estampas; <a href="https://es.wikipedia.org/wiki/Anexo:Cuadros_de_Goya" target="_blank"> Cuadros de Goya</a> (español) – pintura (no exhaustivo).</li><br>
        <li><a href="https://fundaciongoyaenaragon.es/" target="_blank"><strong>Fundación Goya en Aragón:</strong></a> catálogo en línea de la obra de Goya elaborado por la Fundación Goya en Aragón (Gobierno de Aragón), que incluye descripciones, procedencia, bibliografía e imágenes. Este catálogo, sin embargo, reúne <em>todas</em> las obras que en algún momento se han atribuido a Goya, incluidas copias y pastiches.</li><br>
      </ul>
      </p>

      <p>
      <strong>COLECCIONES GOYA: museos, bibliotecas, iglesias y colecciones privadas:</strong><br>
        <br>
        ESPAÑA
        <li><a href="https://www.museodelprado.es/coleccion/artista/goya-y-lucientes-francisco-de/39568a17-81b5-4d6f-84fa-12db60780812" target="_blank"><strong>Museo del Prado</strong></a> (<em>Goya en el Prado</em>): obras (pintura, estampa y dibujo) conservadas en el Museo del Prado, documentos, referencias impresas y biblioteca digital.</li>
        <li><a href="https://www.realacademiabellasartessanfernando.com/goya/la-academia-y-goya/" target="_blank"><strong>Real Academia de Bellas Artes de San Fernando</strong></a> (RABASF): historia del vínculo de Goya con la Academia, catálogo de obras, <em>Calcografía Nacional</em> (producción de las estampas de Goya).</li>
        <li><strong>Patrimonio Nacional</strong> (patrimonio nacional español): pinturas como <a href="https://www.patrimonionacional.es/colecciones-reales/pintura/retrato-de-carlos-iv-como-cazador" target="_blank"><em>Portrait of Carlos IV as a Hunter</em></a> y <a href="https://www.galeriadelascoleccionesreales.es/obra-de-arte/retrato-de-maria-luisa-de-parma-en-traje-de-corte/19602330-5985-4e7e-81f7-25dce124b6a9" target="_blank"><em>Portrait of María Luisa de Parma in Court Dress</em></a>, así como los tapices basados en cartones de Goya, como <a href="https://www.patrimonionacional.es/colecciones-reales/textiles-y-tapiceria/la-era-o-el-verano" target="_blank"><em>The Summer</em></a>.</li>
        <li><a href="https://www.bne.es/es/blog/blog-bne/post-80" target="_blank"><strong>Biblioteca Nacional de España</strong></a> (BNE): historia de las colecciones de Goya y catálogo.</li>
        <li><a href="https://coleccion.bde.es/wca/es/secciones/coleccion/artistas/francisco-de-goya-y-lucientes-896.obras.html" target="_blank"><strong>Banco de España</strong></a> (Madrid): pinturas (como los retratos de Francisco Cabarrús, Conde de Floridablanca, XI Conde de Altamira y Carlos III) y estampas (<em>Desastres de la guerra</em>, <em>Tauromaquia</em>, <em>Disparates</em>).</li>
        <li><a href="https://www.museolazarogaldiano.es/obras-goya-museo-lazaro-galdiano" target="_blank"><strong>Museo Lázaro Galdiano</strong></a> (Madrid): su colección incluye las pinturas <i>El Aquelarre</i> (1797-98) y <i>Las Brujas/El conjuro</i> (1797-98), los bocetos al óleo <i>Santa Isabel de Portugal curando a una enferma</i> (c.1799) y <i>San Hermenegildo en la prisión</i> (1800), y el boceto preparatorio <i>El verano</i> (1786); estampas como <i>El can</i> (c.1820-27); y dibujos como <i>Felipe III</i> (1778), <i>Retrato ecuestre del Conde-Duque de Olivares</i> (c.1776-78), <i>Portrait of Giambattista Casti</i> (c.1802-03), <i>Modo de volar</i> (1815-16), <i>Mendigo ciego con un perro</i> (c.1824) y <i>Mendigo con acordeón</i> (c.1824-28).</li>
        <li><a href="https://www.museothyssen.org/coleccion/artistas/goya-francisco" target="_blank"><strong>Museo Thyssen Bornemisza</strong></a> (Madrid): biografía y colección, que incluye <i>Retrato de Asensio Julià</i> (c.1798), <i>Retrato de Fernando VII</i> (1814-15) y <i>El Tío Paquete</i> (c.1819-20).</li>
        <li><a href="https://museogoya.fundacionibercaja.es/goya-en-zaragoza.php" target="_blank"><strong>Museo Goya - Colección Fundación Ibercaja - Museo Camón Aznar</strong></a> (Zaragoza).</li>
        <li><a href="https://fundacionfuendetodosgoya.org/museo-del-grabado/" target="_blank"><strong>Museo del Grabado</strong></a> (Fuendetodos, Zaragoza): museo de obra gráfica en la casa natal de Goya.</li>
        <li><strong>IGLESIAS Y CATEDRALES</strong>: Ermita de San Antonio de la Florida (Madrid), Real Basílica de San Francisco el Grande (Madrid), Catedral de Valencia, Catedral de Sevilla, Basílica del Pilar (Zaragoza), Cartuja del Aula Dei (Zaragoza).</li>
        <li><strong>COLECCIONES PRIVADAS</strong> (selección): colección Abelló; colección Marqués de la Romana; Duke of Alba (Palacio de Liria); Dukes of Osuna (Alameda de Osuna); colección Carderera; Fundación María Cristina Masaveu Peterson; Fundación BBVA (Madrid, Palacio del Marqués de Salamanca): <a href="https://www.coleccionbbva.com/es/pintura/443-retrato-de-carlos-iii-cazador/" target="_blank"><em>Carlos III as a Hunter</em></a> y <a href="https://www.coleccionbbva.com/es/pintura/444-don-pantaleon-perez-de-nenin/" target="_blank"><em>Portrait of Don Pantaleón Pérez de Nenín</em></a>.</li><br>
        
        FRANCIA<br>
        <li><a href="https://collections.louvre.fr/en/recherche?q=Francisco%20de%20Goya" target="_blank"><strong>Musée du Louvre</strong>:</a> pinturas, estampas y dibujos.</li>
        <li><a href="https://www.museegoya.fr/fr/search?p=1&query=Goya" target="_blank"><strong>Musée Goya Castres</strong>:</a> pinturas, estampas, copias tras Goya y documentos. Su colección incluye <a href="https://www.museegoya.fr/fr/notice/894-5-4-l-assemblee-de-la-compagnie-royale-des-philippines-dite-la-junte-des-philippines-7dc13026-e99a-4d4d-a924-afa2204705e9" target="_blank"><i>La Junta de Filipinas</i></a> (L'Assemblée de la Compagnie Royale des Philippines) (1815) (894-5-4), el <a href="https://www.museegoya.fr/fr/notice/894-5-3-portrait-de-francisco-del-mazo-a3f16ab8-79d5-46ea-b3e8-5fb553468f2c" target="_blank"><i>Portrait of Francisco del Mazo</i></a> (1815-19) (894-5-3), y el <a href="https://www.museegoya.fr/fr/notice/894-5-2-autoportrait-aux-lunettes-36227304-cf57-402d-a357-5c5647a9aa7c" target="_blank"><i>Self-portrait with Glasses</i></a> (c.1800) (894-5-2).</li>
        <li><a href="https://gallica.bnf.fr/selections/fr/html/francisco-de-goya" target="_blank"><strong>Bibliothèque nationale de France</strong></a> (BnF): historia de las colecciones de Goya y catálogo (estampas).</li>
        <li>Palais des Beaux-arts de Lille: <a href="https://pba.lille.fr/Collections/Chefs-d-OEuvre/Peintures-XVI-sup-e-sup-XXI-sup-e-sup-siecles/Les-Vieilles-Le-Temps" target="_blank"><em>Les vieilles/Le temps</em></a> y <a href="https://pba.lille.fr/Collections/Chefs-d-OEuvre/Peintures-XVI-sup-e-sup-XXI-sup-e-sup-siecles/Les-Jeunes-La-Lettre" target="_blank"><em>Les jeunes/La lettre</em></a>. También un conjunto de los <em>Caprichos</em>.</li>
        <li><a href="https://www.mbaa.besancon.fr/les-collections/peinture/" target="_blank"><strong>Musée des Beaux-Arts de Besançon</strong></a>: <em>Cannibals watching human remains</em> y <em>Cannibals preparing their victims</em>.</li>
        <li>Musée des Beaux-Arts de Strasbourg: <a href="https://musees-strasbourg.skin-web.org/document/portrait-de-don-bernardo-iriarte/5ee338d7461cda28a3ab1e90?q=Goya&pos=14&pgn=0" target="_blank"><em>Portrait de Don Bernardo de Iriarte</em></a>, así como estampas (tras Velázquez, <em>Caprichos</em>, <em>Disparates</em>, estampas sueltas como <em>El agarrotado</em>).</li>
        <li><a href="https://www.musee-agen.fr/recherche?q=Goya&tx_indexedsearch%5Bsubmit_button%5D=OK" target="_blank"><strong>Musée des Beaux-Arts d'Agen</strong></a>: algunas pinturas atribuidas a Goya, como un autorretrato y <em>Le Ballon</em>.</li>
        <li><a href="https://mbh.bayonne.fr/" target="_blank"><strong>Musée Bonnat-Helleu</strong></a> (Bayona): obras como el dibujo <em>Dos mujeres abrazándose</em> y un retrato de Goya con gafas (atribuido).</li>
        <li>COLECCIONES PRIVADAS: colección parisina desconocida (los retratos gemelos de Javier Goya y Gumersinda Goicoechea).</li><br>

        EE. UU.<br>
        <li><a href="https://collections.mfa.org/search/Objects/*/Goya/images?page=1" target="_blank"><strong>Boston Museum of Fine Arts</strong></a> (MoFA): pinturas (<a href="https://www.metmuseum.org/art/collection/search?q=Goya&sortBy=Relevance&searchField=ArtistCulture" target="_blank"><em>Portrait of a Young Man in Brown, possibly Javier Goya</em></a>, 48.558), <a href="https://collections.mfa.org/collections/315210/dpdprints-by-goya/objects" target="_blank">estampas</a> y <a href="https://collections.mfa.org/collections/315215/dpddrawings-by-goya;jsessionid=7527C5D8C33C9415AF5A65EC964E77C1/objects" target="_blank">dibujos</a>.</li>
        <li><a href="https://www.metmuseum.org/art/collection/search?q=Goya&sortBy=Relevance&searchField=ArtistCulture" target="_blank"><strong>Metropolitan Museum</strong></a> (Nueva York): pinturas, estampas y dibujos.</li>
        <li><a href="https://www.nortonsimon.org/art/in-focus/goya" target="_blank"><strong>Norton Simon Museum</strong></a> (Pasadena): historia de las colecciones de Goya y catálogo.</li>
        <li><a href="https://www.frick.org/art/artists/goya" target="_blank"><strong>The Frick Collection</strong></a> (Nueva York): historia de las colecciones de Goya y catálogo.</li>
        <li><a href="https://hispanicsociety.emuseum.com/search/Goya*" target="_blank"><strong>The Hispanic Society of America</strong></a> (Nueva York): colección de Goya, que incluye pinturas (<i>Portrait of the Duchess of Alba in black</i>, 1797, A102; <i>Portrait of Pedro Mocarte</i>, c.1805, A1890; <i>Portrait of Don Manuel Lapeña</i>, 1799, A99), estampas (<i>Los Caprichos</i>), </i>y dibujos (<i>Majas fighting, a Mano observing</i>, 1796-07, A3309; <i>Majas y majos conversing</i>, 1796-97, A3310; <i>Hay pulgas?</i>, 1796-97, A3316; <i>Buena gente somos los moralistas</i>, 1796-97, A3317; <i>Juan Fernández Navarrete</i>, 1798, LA2223; <i>Tiene prisa de escapar</i>, 1808-14, A3318; <i>Torture of a man</i>, c.1812-20, A3312; <i>Peasant carrying woman</i>, 1812-20, A3315; <i>Tuti li mundi</i>, c.1808-14, A3314; <i>Regocijo</i>, 1819-23, A3308; <i>Old man on a swing</i>, 1823-28, A3313; <i>Woman with 2 children</i>, 1823-28, A3311).</li>
        <li><a href="https://www.nga.gov/artists/1353-francisco-goya" target="_blank"><strong>National Gallery of Art</strong></a> (Washington, D.C.): pinturas, estampas y dibujos.</li>
        <li><a href="https://meadowsmuseumdallas.org/collections/pages/objects-1/portfolio/?records=9&query=mfs%20any%20%22Goya%22&sort=0" target="_blank"><strong>The Meadows Museum</strong></a> (Dallas): pinturas (incluidas copias y pastiches).</li>
        <li><a href="https://www.artic.edu/artists/40615/francisco-jose-de-goya-y-lucientes" target="_blank"><strong>Art Institute of Chicago</strong></a>: pinturas, estampas y dibujos (incluidos pastiches).</li>
        <li><a href="https://harvardartmuseums.org/collections/person/23169?person=23169" target="_blank"><strong>Harvard Art Museums</strong></a> (Cambridge, Mass.): pinturas, estampas y dibujos (incluidos pastiches).</li>
        <li><strong>Museo de Arte de Ponce</strong> (Puerto Rico): <a href="https://museoarteponce.org/obras/retrato-de-martin-zapater-portrait-of-martin-zapater/" target="_blank"><em>Portrait of Martín Zapater</em></a>.</li><br>

        REINO UNIDO<br>
        <li><a href="https://www.nationalgallery.org.uk/artists/francisco-de-goya" target="_blank"><strong>National Gallery</strong></a> (Londres): <a href="https://www.nationalgallery.org.uk/paintings/francisco-de-goya-a-picnic" target="_blank"><em>A Picnic</em></a>, <a href="https://www.nationalgallery.org.uk/paintings/francisco-de-goya-a-scene-from-the-forcibly-bewitched" target="_blank"><em>A Scene from 'The Forcibly Bewitched'</em></a>, <a href="https://www.nationalgallery.org.uk/paintings/francisco-de-goya-don-andres-del-peral" target="_blank"><em>Don Andrés del Peral</em></a>, y <a href="https://www.nationalgallery.org.uk/paintings/francisco-de-goya-the-duke-of-wellington" target="_blank"><em>The Duke of Wellington</em></a>. También <a href="https://www.nationalgallery.org.uk/paintings/francisco-de-goya-dona-isabel-de-porcel" target="_blank"><em>Portrait of Isabel de Porcel</em></a> (atribuido).</li>
        <li><a href="https://thebowesmuseum.org.uk/discover-the-spanish-collection-held-by-the-bowes-museum/" target="_blank"><strong>The Bowes Museum</strong></a> (Durham): pinturas, incluido el retrato de Juan Meléndez Valdés y <i>Interior of a Prison</i>.</li>
        <li><strong>English Heritage</strong>: Wellington Collection, Apsley House (Londres) (<a href="https://artuk.org/discover/artworks/equestrian-portrait-of-the-1st-duke-of-wellington-17691852-144183" target="_blank">Equestrian Portrait of the 1st Duke of Wellington</a>).</li>
        <li><a href="https://artuk.org/discover/artworks/el-medico-the-doctor-210121" target="_blank"><strong>National Galleries of Scotland</strong></a> (Edimburgo): <em>The Doctor</em>.</li>
        <li><strong>The Courtauld Gallery</strong> (Londres): el dibujo <a href="https://courtauld.ac.uk/highlights/cantar-y-bailar-singing-and-dancing/" target="_blank"><em>Singing and Dancing</em></a> y la pintura <a href="https://courtauld.ac.uk/highlights/portrait-of-francisco-de-saavedra/" target="_blank"><em>Portrait of Francisco de Saavedra</em></a>.</li>
        <li><strong>Pollok House</strong> (Glasgow): serie de 6 pinturas pequeñas de escenas con niños, entre ellas <a href="https://artuk.org/discover/artworks/boys-playing-at-see-saw-84159" target="_blank"><em>Boys Playing at See-Saw</em></a> y <a href="https://artuk.org/discover/artworks/boys-playing-at-soldiers-84160" target="_blank"><em>Boys Playing at Soldiers</em></a>.</li>
        <li><a href="https://artuk.org/discover/artworks/disparate-de-miedo-261946" target="_blank"><strong>The Higgins</strong></a> (Bedford): «Disparate de miedo» (<em>Disparates</em>).</li><br> 

        IRLANDA<br>
        <li><strong>National Gallery of Ireland</strong> (Dublín): <a href="https://www.nationalgallery.ie/art-and-artists/highlights-collection/dona-antonia-zarate-francisco-jose-de-goya-y-lucientes-1746" target="_blank"><em>Portrait of Doña Antonia de Zárate</em></a>.</li><br>

        SUIZA<br>
        <li><strong>Emil Bührle Collection</strong> (Zúrich): <a href="https://buehrle.ch/en/artworks/procession-in-valencia/" target="_blank"><em>Procession in Valencia</em></a>.</li>
        <li>COLECCIONES PRIVADAS: Rothschild (incluida la versión auténtica de <em>Majas on the Balcony</em>).</li><br>

        ALEMANIA<br>
        <li><a href="https://recherche.smb.museum/?language=de&limit=15&sort=relevance&controls=none&conditions=AND%2BinvolvedParties%2B%22Francisco+Jos%C3%A9+de+Goya+y+Lucientes%22&collectionKey=NG*" target="_blank"><strong>Staatliche Museen zu Berlin</strong></a>: catálogo de obras, incluidas <em>La Cucaña</em>.</li>
        <li><a href="https://www.sammlung.pinakothek.de/de/search?phrase=Goya#filters={}" target="_blank"><strong>Alte Pinakothek</strong></a> (Múnich): pinturas, estampas y dibujos (incluidos pastiches).</li><br>

        ITALIA<br>
        <li><strong>Uffizi</strong> (Florencia): <a href="https://www.virtualuffizi.com/es/retrato-de-la-condesa-de-chinc%C3%B3n.html" target="_blank"><em>Equestrian portrait of María Teresa de Vallabriga</em></a>.</li>
        <li><strong>Fondazione Magnani Rocca</strong> (Parma): <a href="https://www.magnanirocca.it/goya-la-famiglia-dell-infante-don-luis/" target="_blank"><em>La familia del Infante Don Luis</em></a>.</li><br>

      </p>
      `,

      PEOPLE_TITLE: "Equipo",
      PEOPLE_BODY: `
      <p><strong>Directora del proyecto:</strong> Paula Fayos-Pérez, PhD (Universidad de Cambridge, 2019). Investigadora postdoctoral en Historia del arte. Miembro asociado de ARCHE (Université de Strasbourg) y de SU+MA (Universidad Complutense de Madrid).</p>

      <p><strong>Comité científico:</strong> El contenido de la Goya Network se revisa y debate periódicamente con los miembros de un comité científico integrado por consultores externos de reconocido prestigio académico, que aportan orientación y asesoramiento sobre aspectos específicos del proyecto.</p>
      <ul style="margin-top: 0.5rem; line-height: 1.6;">
        <li><strong>Jean Michel Massing</strong>: profesor emérito de Historia del arte en la Universidad de Cambridge, King's College. Especialista en historia del grabado, iconografía y arte africano.</li> <br>
        <li><strong>Aurélie Pétiot</strong>: profesora (lecturer) en la Université Paris Nanterre. Especialista en arte del siglo XIX, artes decorativas, estudios de género y prerrafaelismo.</li> <br>
        <li><strong>Stephanie Loeb Stepanek</strong>: conservadora emérita de Estampas y Dibujos en el Museum of Fine Arts, Boston. Especialista en la obra gráfica de Goya y en la historia del coleccionismo de Goya en Estados Unidos.</li> <br>
        <li><strong>Anita L. Verő</strong>: doctora en Inteligencia Artificial (Universidad de Cambridge, 2022), informática y fundadora de <a href="https://www.consonant-ai.com" target="_blank">ConsonantAI</a>. Apoyo en el desarrollo técnico del sitio web.</li>
      </ul>

      <p class="section-heading">Colaboradores</p>
      <ul>
        <li><strong>Manuela B. Mena-Marqués</strong>: doctora en Historia del arte (Universidad Complutense de Madrid, 1976). Conservadora del Gabinete de Dibujos y Estampas (1979-1981), subdirectora (1981-1996) y jefa del Área de Conservación de Pintura del siglo XVIII y Goya del Museo del Prado (1996-2019). Contribución: comentarios sobre el sitio web (junio de 2025).</li> <br>
        <li><strong>Joëlle Arches</strong>, conservadora jefe y directora del <a href="https://www.museegoya.fr/" target="_blank">Musée Goya</a> y del Museo Jean Jaurès, y <strong>Cécile Berthoumieu</strong>, conservadora principal de patrimonio (Attachée principale de conservation du patrimoine). Contribución: comentarios sobre el sitio web; sugerencia de incorporar a Marcel Briguiboul a la red (septiembre de 2025).</li> <br>
        <li><strong>Stephanie Loeb Stepanek</strong>: conservadora emérita de Estampas y Dibujos, Boston Museum of Fine Arts. Contribución: información sobre una edición temprana de <i>Disasters of War</i>, impresa por Laureano Potenciano (octubre de 2025).</li>
      </ul>
      `,

      ABOUT_TITLE: "Acerca de la Goya Network / Red Goya",
      ABOUT_BODY: `
      <p style="background: #333; color: white; padding: 1rem; border-left: 5px solid #66ccff; font-size: 1.1rem;">
        <span style="font-weight: bold;">📣 Próximamente: Fayos-Pérez & Verő, "The Goya Network: Mapping Goya's Impact in 19th-Century France and Spain"</span>, que se publicará en 
        <a href="https://leonardo.info/leonardo/" target="_blank" style="color: #66ccff; font-weight: bold;"><em>Leonardo</em></a>, revista académica revisada por pares publicada por 
        <span style="font-weight: bold;">MIT Press</span> dedicada a la aplicación de la ciencia y la tecnología contemporáneas a las artes y la música.
      </p>

      <p><strong>Introducción:</strong> A lo largo de los siglos XVIII y XIX, las redes de artistas, escritores, coleccionistas e intelectuales fueron cruciales tanto para la producción artística como para la difusión y comprensión de figuras históricas. Cartografiar estas conexiones permite entender mejor las dinámicas de sociabilidad y la circulación de ideas. En los últimos años, diversos proyectos en Humanidades Digitales han demostrado el potencial del análisis de redes para iluminar contextos artísticos históricos, como el <a href="https://arkivet.thorvaldsensmuseum.dk/en" target="_blank">Thorvaldsen Letter Archive</a>, <a href="http://republicofletters.stanford.edu/casestudies/index.html" target="_blank">Mapping the Republic of Letters</a> (Universidad de Stanford), <a href="http://emlo.bodleian.ox.ac.uk/home" target="_blank">Early Modern Letters Online (EMLO)</a> (Universidad de Oxford), <a href="https://mappingrome.com/" target="_blank">Mapping Rome</a> y <a href="https://womensbios.lib.virginia.edu/index.html" target="_blank">Collective Biographies of Women</a> (Alison Booth, University of Virginia).</p> 

      <p><em>The Goya Network</em> se apoya en estos métodos y ofrece una base de datos interactiva que cartografía las relaciones sociales y profesionales en torno al artista español Francisco de Goya, con especial atención a sus conexiones con artistas, críticos y coleccionistas en la España y la Francia del siglo XIX. A diferencia de los estudios tradicionales centrados en su obra, este proyecto pone el énfasis en el contexto relacional que configuró el legado de Goya, y ofrece una herramienta novedosa para el estudio de las redes sociales de artistas históricos. Como base de datos «viva», facilita la colaboración interdisciplinar y funciona tanto como herramienta de investigación como recurso público, proporcionando una visión del alcance de la influencia de Goya y de la recepción de su obra.</p>

      <p><strong>Origen:</strong> Se trata de un proyecto digital basado en investigación, desarrollado por Paula Fayos-Pérez en el marco de su trabajo postdoctoral sobre las redes sociales y profesionales de Goya. Constituye una continuación de la investigación realizada durante su doctorado (Universidad de Cambridge, 2018) <a href="https://www.repository.cam.ac.uk/items/8d9751ce-aca1-4d35-9436-0820ecbc98d4" target="_blank">(repositorio)</a>, que posteriormente se transformó en un libro: <a href="https://www.ceeh.es/en/publicacion/goyas-caprichos-in-nineteenth-century-france-politics-of-the-grotesque/" target="_blank"><em>Goya’s Caprichos in Nineteenth-Century France. Politics of the Grotesque</em></a> (CEEH, 2024).</p>

      <p><strong>Financiación:</strong> Trabajo realizado con el apoyo de una Beca Leonardo 2024 (<a href="https://www.redleonardo.es/beneficiario/paula-fayos-perez/" target="_blank">Beca Leonardo</a>) para Investigación Científica y Creación Cultural, <a href="https://www.fbbva.es/" target="_blank">Fundación BBVA.</a> La Fundación no asume responsabilidad alguna por las opiniones, afirmaciones y contenidos de este proyecto, que son enteramente responsabilidad de sus autores.</p>

      <p><strong>Guía de uso:</strong> Cada nodo (individuo) y cada arista/conexión (vínculo entre dos individuos) contiene datos. En los nodos, los usuarios pueden consultar información biográfica, así como producción artística/literaria, coleccionismo y enlaces a la obra de Goya. En las conexiones se muestra el tipo de relación, correspondencia, colaboraciones y otros datos. Las conexiones en color gris/plateado son conexiones directas (amistades, colegas, familiares, conocidos, etc.), mientras que las conexiones en color dorado son conexiones secundarias (por ejemplo, artistas y escritores que copiaron o escribieron sobre Goya pero no llegaron a conocerlo en persona). El tamaño de los nodos es proporcional al número de conexiones (aristas) que tienen.</p>

      <p><strong>Naturaleza del proyecto:</strong> La Goya Network está concebida como una base de datos colaborativa y de contribución abierta, con el objetivo de convertirse en una herramienta útil para especialistas, estudiantes y el público general interesado en Goya. Se acogen contribuciones de historiadores del arte, historiadores, hispanistas, docentes y conservadores especializados en Goya, en la España del siglo XIX, en la Francia del siglo XIX o en cualquiera de los miembros de la red (por ejemplo, Federico Madrazo, Prosper Mérimée, Eugène Delacroix, etc.). Para enviar una contribución, véase la sección Contributions en el sitio web (más abajo).</p>

      <p><strong>Metodología:</strong> Investigación en Historia del arte: basada en fuentes bibliográficas y de archivo.<br>
      Desarrollo web: realizado con HTML y JavaScript, con datos estructurados en JSON, y control de versiones y despliegue mediante GitHub; desarrollado con el apoyo de ChatGPT (OpenAI) y DeepSeek (High-Flyer).</p>

      <p><strong>Derechos de autor y licencia:</strong> La Goya Network está protegida por acta notarial (Madrid, 2025), que documenta el proceso de investigación y desarrollo entre 2018 y 2025.  
      Su código y estructura están licenciados bajo <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" style="color:#66ccff;">CC BY-NC 4.0</a>, lo que permite el uso académico no comercial con la debida atribución a la autora.</p>

      <p><strong>Datos y cookies:</strong> Este sitio web utiliza cookies exclusivamente para Google Analytics, que registra de forma anónima el comportamiento de los visitantes. Utilizamos esta información únicamente para comprender cómo se usa el sitio y mejorar su contenido y navegación. Puedes desactivar las cookies de Google Analytics en todos los sitios web instalando el <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" style="color:#66ccff;">complemento de inhabilitación para navegadores de Google Analytics</a>. Para más información sobre el uso de cookies por parte de Google, consulta la página <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" style="color:#66ccff;">Cookies & Google Analytics</a>.</p>
      `,
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
      ['#searchInput::placeholder','SEARCH_PH'],
      ['.search-button','BTN_SEARCH'],
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

    // Traduce el texto visible de cada opción (sin tocar el value)
    document.querySelectorAll('#professionFilter option').forEach(opt => {
      if (!opt.value) return;
      opt.textContent = t(opt.value).toLowerCase();
    });

    document.querySelectorAll('#nationalityFilter option').forEach(opt => {
      if (!opt.value) return;
      opt.textContent = t(opt.value);
    });

    // Título "Members …"
    const membersHeading = document.querySelector('#membersSection .section-heading');
    if (membersHeading) membersHeading.textContent = t('MEMBERS_TITLE');

    // Mensaje de carga
    const loading = document.getElementById('loadingMessage');
    if (loading) loading.firstChild.textContent = t('LOADING')+' ';

    // Guarda etiqueta para "Last update"
    window.LAST_UPDATE_LABEL = t('LAST_UPDATE');

    // Textos declarados con data-i18n
    const HTML_I18N_KEYS = new Set([
      'ARTWORKS_BODY',
      'PEOPLE_BODY',
      'ABOUT_BODY',
      'CONTRIBUTIONS_TEXT',
      // añade aquí futuras secciones largas con HTML, ej:
      // 'ABOUT_BODY', 'PARTNERS_BODY'
    ]);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;

      const val = t(key);

      // Si el string contiene HTML, hay que usar innerHTML
      if (HTML_I18N_KEYS.has(key)) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
  }

  window.setLanguage = function(lang='en') {
    CURRENT_LANG = (lang === 'es') ? 'es' : 'en';
    localStorage.setItem('lang', CURRENT_LANG);
    applyUIStrings();
    if (typeof window.refreshNodeInfoLabels === 'function') window.refreshNodeInfoLabels();
    location.reload();
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
    applyUIStrings(); // actualiza "Members (A–Z…)", placeholder, etc.
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

function isImageUrl(u) {
  if (!u) return false;
  const s = String(u).trim();
  return /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(s);
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
        const response = await fetch(getDataFileForLang(CURRENT_LANG));
        if (!response.ok) throw new Error('Error cargando datos');
        const data = await response.json();
        window.__GN_DATA = data;
        
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

      // Muestra etiqueta solo si es "direct" o "secondary".
      // Si termina en "?" (p. ej. "direct?") NO la pintamos y la ponemos como tooltip.
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

    // ===================== MINI-FAMILIAS (anchors invisibles) =====================
    // NOTA: esto NO toca tus edges reales. Añade nodos/edges "fantasma" para compactar grupos.

    const CLUSTERS = {
      "MADRAZO_FAMILY": {
        members: [
          "José de Madrazo",
          "Federico de Madrazo",
          "Pedro de Madrazo",
          "Luis de Madrazo",
          "Raimundo de Madrazo",
          "Cecilia de Madrazo",
          "Román Garreta",
          "Mariano Fortuny y Madrazo",
          "Mariano Fortuny y Marsal"
        ],
        radius: 55
      },

      "HUGO_CENACLE": {
        members: [
          "Victor Hugo",
          "Théophile Gautier",
          "Alfred de Musset",
          "George Sand",
          "Alexandre Dumas père",
          "Charles Nodier",
          "Louis Boulanger",
          "Charles-Augustin Sainte-Beuve",
          "Antoine Fontaney"
        ],
        radius: 60
      },

      "OSUNA_FAMILY": {
        members: [
          "IX Duke of Osuna",
          "X Duke of Osuna",
          "VIII Duchess of Abrantes",
          "X Marchioness of Santa Cruz"
        ],
        radius: 50
      },

      "BORBONS": {
        members: [
          "Carlos III",
          "Carlos IV",
          "María Luisa de Parma",
          "Fernando VII",
          "Isabel II",
          "XV Countess of Chinchón",
          "María Teresa de Vallabriga",
          "Luis de Borbón"
        ],
        radius: 75
      },

      "GOYA_FAMILY": {
        members: [
          "Francisco de Goya",
          "Javier Goya",
          "Mariano Goya",
          "Gumersinda Goicoechea",
          "Josefa Bayeu"
        ],
        radius: 35,
        pulls: 5
      }
    };

    window.__clusterOf = {}; // nodeId -> clusterId

    (function addClusterAnchors(nodes, edges, clusters) {
      const anchorNodes = [];
      const anchorEdges = [];

      Object.entries(clusters).forEach(([clusterId, cfg]) => {
        const members = (cfg?.members || []).filter(id => nodes.get(id));
        members.forEach(id => { window.__clusterOf[id] = clusterId; });
        if (members.length < 2) return;

        const anchorId = `ANCHOR__${clusterId}`;

        // Nodo-ancla invisible (no aparece en pantalla)
        anchorNodes.push({
          id: anchorId,
          label: "",
          shape: "dot",
          size: 1,
          mass: 0.01,
          clusterAnchor: true,
          physics: true,
          color: { border: "rgba(0,0,0,0)", background: "rgba(0,0,0,0)" }
        });

        const L = typeof cfg.radius === "number" ? cfg.radius : 60;

        // Aristas invisibles cortas hacia cada miembro
        members.forEach(memberId => {
          const pulls = cfg?.pulls ?? 3; // nº de “muelles” paralelos (más = más compacto)
          for (let k = 0; k < pulls; k++) {
            anchorEdges.push({
              id: `AEDGE__${clusterId}__${memberId}__${k}`,
              from: anchorId,
              to: memberId,
              physics: true,
              smooth: false,
              _isClusterEdge: true,
              length: L,
              width: 0.1,
              selectionWidth: 0,
              hoverWidth: 0,
              color: { color: "rgba(0,0,0,0)" }
            });
          }
        });
      });

      if (anchorNodes.length) nodes.add(anchorNodes);
      if (anchorEdges.length) edges.add(anchorEdges);
    })(nodes, edges, CLUSTERS);
    // =================== /MINI-FAMILIAS (anchors invisibles) ===================


    const lastModified = response.headers.get("Last-Modified");

    const locale = (CURRENT_LANG === 'es') ? 'es-ES' : 'en-GB';

    const formattedUpdate = lastModified
      ? new Date(lastModified).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
      : t('Unknown');

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

    // Construir la lista inicial de "New in"
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

      // Normaliza a "base": quita paréntesis y corta por coma (para eliminar títulos)
      let base = String(name)
        .replace(/\(.*?\)/g, '')   // (widow), (husband of), etc.
        .split(',')[0]             // ", Duke of Alba" fuera
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

      // 1) Si hay un título con "of …" (Duchess of Abrantes), coge el último token
      if (tf.some(t => titles.has(t)) && tf.includes('of') && tokens.length >= 2) {
        return fold(tokens[tokens.length - 1]);
      }

      // 2) Caso "X y Y": toma el anterior a 'y' (apellido español tradicional)
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

        // "Antoine-Jean" u otros compuestos: si todas las partes están forzadas como nombre → usa el segundo
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

      // 6) Fallback: último token "tal cual"
      return tf[tf.length - 1];
    }

    function buildMembersList(data = window.__GN_DATA) {
      const container = document.getElementById('membersList');
      if (!container) return;

      const items = (data?.nodes || [])
        .map(n => ({
          id: n.id,
          display: (CURRENT_LANG === 'es' && n['display name es']) ? n['display name es'] : n.id
        }))
        .filter(x => x.id);

      const collator = new Intl.Collator(undefined, { sensitivity: 'base' });
      items.sort((a,b) => collator.compare(surnameKey(a.id), surnameKey(b.id)));

      const esc = s => String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'");

      let html = '';
      let currentLetter = '';
      items.forEach(({id, display}) => {
        const key = surnameKey(id);
        const letter = (key.charAt(0) || '#').toUpperCase();
        if (letter !== currentLetter) {
          if (currentLetter) html += '</ul>';
          html += `<div class="section-heading" style="margin-top:0.8rem;">${letter}</div><ul style="list-style:none; padding-left:0.5rem; margin:0;">`;
          currentLetter = letter;
        }
        html += `<li style="margin:0.1rem 0;"><a href="#" onclick="focusNode('${esc(id)}'); return false;" style="color:#66ccff; text-decoration:none;">${display}</a></li>`;
      });
      if (items.length) html += '</ul>';

      container.innerHTML = html;
    }


    let lastHighlightedNode = null;
    let lastHighlightedNodes = [];
    let lastNonHighlightedNodes = [];
    let activeEdgeIds = new Set();   // Edges activos (los conectados al nodo resaltado)

    // ——— limpia SOLO el "rojo" de nodos; no toca edges ni estados globales ———
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

    // 🔥 SOLUCIÓN NUCLEAR ANTI-OVERLAP (MULTI-PASS, RADIO REAL)
    function nudgeOverlaps(network, nodes, clusterOf = null, passes = 5) {
      for (let p = 0; p < passes; p++) {
        const ids = nodes.getIds().filter(id => !String(id).startsWith('ANCHOR__'));
        const pos = network.getPositions(ids);

        for (let i = 0; i < ids.length; i++) {
          for (let j = i + 1; j < ids.length; j++) {
            const a = ids[i], b = ids[j];
            // No romper mini-familias: si ambos están en el mismo cluster, no los separes
            if (clusterOf && clusterOf[a] && clusterOf[a] === clusterOf[b]) continue;
            const pA = pos[a], pB = pos[b];
            if (!pA || !pB) continue;

            const nodeA = nodes.get(a);
            const nodeB = nodes.get(b);

            const rA = nodeA?.size || 25;
            const rB = nodeB?.size || 25;
            const minD = rA + rB + 6;

            const dx = pB.x - pA.x;
            const dy = pB.y - pA.y;
            const d = Math.hypot(dx, dy) || 1;

            if (d < minD) {
              const push = (minD - d) / 2;
              const ux = dx / d, uy = dy / d;

              network.moveNode(a, pA.x - ux * push, pA.y - uy * push);
              network.moveNode(b, pB.x + ux * push, pB.y + uy * push);
            }
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

    // 1) Carga imágenes
    loadFullImages();

    // 2) Apaga física para fijar posiciones
    network.setOptions({ physics: { enabled: false } });

    // 3) Empujón anti-overlap cuando ya están puestas las imágenes
    setTimeout(() => {
      if (!window.__didNudgeOnce) {
        window.__didNudgeOnce = true;
        nudgeOverlaps(network, nodes, window.__clusterOf, 10);
        network.redraw();
      }
    }, 150);
  });

    function highlightNeighborhood(nodeId) {
      // 1) Obtener edges conectados
      const connectedEdges = edges.get({
        filter: edge => !edge._isClusterEdge && (edge.from === nodeId || edge.to === nodeId)
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


        const displayName =
          (CURRENT_LANG === 'es' && node['display name es'])
            ? node['display name es']
            : node.id;

        html += `<h2>${displayName}</h2>`;

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
      
          // helper: traduce valores "cortos" tipo direct/acquaintances/etc.
          const isProfessionField = (field.key === "works as" || field.key === "profession");
          function translateValue(v) {
            if (typeof v !== "string") return v;

            const raw = v.trim();
            if (!raw) return raw;

            // 1) intento literal (por si ya viene "Poet", "Spanish", etc.)
            let out = t(raw);
            if (out !== raw) return isProfessionField ? out.toLowerCase() : out;

            const capFirst = raw.charAt(0).toUpperCase() + raw.slice(1);
            out = t(capFirst);
            if (out !== capFirst) return isProfessionField ? out.toLowerCase() : out;

            // 3) sin traducción
            return isProfessionField ? raw.toLowerCase() : raw;
          }

          if (Array.isArray(value)) {
            const processedItems = value.map(item => {

              if (typeof item === "string") {
                const translatedItem = translateValue(item);
                return `<li>${autoLinkNames(processMarkdownLinks(translatedItem), nodesMap)}</li>`;
              }

              if (typeof item === "object" && item !== null) {
                const u = item.url ? String(item.url).trim() : "";

                // Links (websites)
                if (u && !isImageUrl(u)) {
                  const text = item.label || item.caption || u;
                  const lab = autoLinkNames(processMarkdownLinks(text), nodesMap);
                  return `<li><a href="${u}" target="_blank" rel="noopener noreferrer" style="color:#66ccff;">${lab}</a></li>`;
                }

                // Images
                if (u && isImageUrl(u)) {
                  const caption = item.caption
                    ? autoLinkNames(processMarkdownLinks(item.caption), nodesMap)
                    : "";
                  return `<li>${caption}${caption ? " " : ""}<img src="${u}" alt="Image" style="max-width:100%; margin-left:0.5rem; vertical-align:middle;"></li>`;
                }
              }

              return null;
            }).filter(Boolean);

            htmlText = `<ul>${processedItems.join("")}</ul>`;
          } else {
            let translatedValue = value;

            // Solo para profession/nationality: traducir item por item si viene como "a, b, c"
            if (typeof value === "string" && (field.key === "profession" || field.key === "nationality")) {
              translatedValue = value
                .split(',')
                .map(v => translateValue(v.trim()))
                .join(', ');
            } else {
              translatedValue = translateValue(value);
            }

            htmlText = autoLinkNames(processMarkdownLinks(translatedValue), nodesMap);
          }

          html += `<p style="margin-top:0.3rem;"><strong>${labelI18N(field.label)}:</strong> ${htmlText}</p>`;
        }
      });

        const connections = [];
        edges.get().forEach(edge => {
          if (edge._isClusterEdge) return;
          if (edge.from === node.id || edge.to === node.id) {
            const otherId = edge.from === node.id ? edge.to : edge.from;
            if (String(otherId).startsWith('ANCHOR__')) return;
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

      // Fuerza la selección de ese edge "mejor"
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

        // Línea "Between … and …" traducible
        const betweenLabel = t('Between');
        const andWord = t('and');

        html += `<p><strong>${betweenLabel}:</strong> 
          <a href="#" style="color:#66ccff; text-transform:none;" onclick="focusNode('${fromNodeMap.id}')">${fromNodeMap.id}</a> 
          ${andWord} 
          <a href="#" style="color:#66ccff; text-transform:none;" onclick="focusNode('${toNodeMap.id}')">${toNodeMap.id}</a>
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
              const processedItems = value
                .map(item => {

                  // ✅ Caso 1: array de strings
                  if (typeof item === "string") {
                    return `<li>${autoLinkNames(processMarkdownLinks(item), nodesMap)}</li>`;
                  }

                  // ✅ Caso 2: objetos (y no null)
                  if (typeof item === "object" && item !== null) {

                    // ✅ websites: {label, url}
                    if (item.label && item.url) {
                      const lab = autoLinkNames(processMarkdownLinks(item.label), nodesMap);
                      const u = String(item.url).trim();
                      return `<li><a href="${u}" target="_blank" rel="noopener noreferrer" style="color:#66ccff;">${lab}</a></li>`;
                    }

                    // ✅ portraits/images: {caption, url}
                    const caption = item.caption
                      ? autoLinkNames(processMarkdownLinks(item.caption), nodesMap)
                      : "";
                    const url = item.url ? item.url : "";
                    return `<li>${caption}${url ? `<img src="${url}" alt="Portrait" style="max-width:100%; margin-left: 0.5rem; vertical-align: middle;">` : ""}</li>`;
                  }

                  return null;
                })
                .filter(Boolean);

              htmlText = `<ul>${processedItems.join("")}</ul>`;
            
            } else {
              let translatedValue = value;

              if (typeof value === "string") {
                translatedValue = value
                  .split(',')
                  .map(v => {
                    const raw = v.trim();

                    // 1) intento literal
                    let out = t(raw);
                    if (out !== raw) return out;

                    // 2) intento con mayúscula inicial: "poet" → "Poet"
                    const cap = raw.charAt(0).toUpperCase() + raw.slice(1);
                    out = t(cap);
                    if (out !== cap) return out;

                    // 3) fallback
                    return raw.toLowerCase();
                  })
                  .join(', ');
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
