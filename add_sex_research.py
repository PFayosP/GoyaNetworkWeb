#!/usr/bin/env python3
import json

# Known ambiguous cases with research-based sex assignments
# Format: name -> sex (with context notes)
historical_sex_map = {
    # Pseudonyms & pen names
    'Champfleury': 'male',  # Jules Husson (1821-1889), French writer & art critic
    'Nadar': 'male',  # Gaspard-Félix Tournachon (1820-1910), French photographer
    'Stendhal': 'male',  # Henri-Marie Beyle (1783-1842), French writer
    'George Sand': 'female',  # Amandine Aurore Lucile Dupin (1804-1876), French writer
    
    # French male first names that are ambiguous
    'Achille Devéria': 'male',  # French artist (1800-1857)
    'Adolphe Goupil': 'male',  # French art dealer (1806-1893)
    'Adrien Dauzats': 'male',  # French painter (1804-1868)
    'Antoine Fontaney': 'male',  # French writer (1795-1848)
    'Asensio Julià': 'male',  # Spanish sculptor/artist
    'Champfleury': 'male',  # French writer & critic
    'Charles Asselineau': 'male',  # French writer (1821-1874)
    'Charles Blanc': 'male',  # French art historian (1813-1882)
    'Charles Davillier': 'male',  # French art collector (1823-1900)
    'Charles Motte': 'male',  # French engraver (1785-1836)
    'Charles Nodier': 'male',  # French author (1780-1844)
    'Charles Philipon': 'male',  # French caricaturist (1800-1862)
    'Charles Yriarte': 'male',  # French art historian (1832-1898)
    'Charles-Augustin Sainte-Beuve': 'male',  # French critic (1804-1869)
    'Cyprien Gaulon': 'male',  # French engraver
    'Célestin Nanteuil': 'male',  # French painter & lithographer (1813-1873)
    'Dominique Vivant Denon': 'male',  # French artist & diplomat (1747-1825)
    'Edmond de Goncourt': 'male',  # French writer (1822-1896)
    'Eugène Dutuit': 'male',  # French collector & art historian
    'Federico de Madrazo': 'male',  # Spanish painter (1815-1894)
    'Ferdinand Guillemardet': 'male',  # French diplomat & art patron
    'Fernando VII': 'male',  # King of Spain (1784-1833)
    'Frédéric Chopin': 'male',  # Polish composer (1810-1849)
    'Frédéric Quilliet': 'male',  # French painter & writer (1798-1830)
    'Frédéric Villot': 'male',  # French art historian (1809-1875)
    'Gaspar Melchor de Jovellanos': 'male',  # Spanish diplomat (1744-1811)
    'Giambattista Tiepolo': 'male',  # Italian painter (1696-1770)
    'Giandomenico Tiepolo': 'male',  # Italian painter (1727-1804)
    'Gregorio Cruzada Villaamil': 'male',  # Spanish archaeologist & writer
    'Heinrich Rittner': 'male',  # German art dealer
    'Henri Fantin-Latour': 'male',  # French painter (1836-1904)
    'Henri Regnault': 'male',  # French painter (1843-1871)
    'Honoré Daumier': 'male',  # French cartoonist (1808-1879)
    'J. J. Grandville': 'male',  # French caricaturist (1803-1847)
    'Javier Goya': 'male',  # Son of Francisco de Goya (1784-1854)
    'Jenaro Pérez Villaamil': 'male',  # Spanish painter (1807-1854)
    'Laureano Potenciano': 'male',  # Spanish engraver & printer
    'Luis Paret': 'male',  # Spanish painter (1746-1799)
    'Luis de Borbón': 'male',  # Spanish royal
    'Luis de Madrazo': 'male',  # Spanish painter (1825-1897)
    'Manuel García de la Prada': 'male',  # Spanish politician & collector (1768-1839)
    'Manuel Godoy': 'male',  # Spanish politician (1767-1851)
    'Marcel Briguiboul': 'male',  # French artist
    'Mariano Fortuny y Madrazo': 'male',  # Spanish painter (1838-1874)
    'Mariano Fortuny y Marsal': 'male',  # Spanish painter (1838-1874)
    'Mariano Goya': 'male',  # Grandson of Goya (1806-1874)
    'Mariano Salvador Maella': 'male',  # Spanish painter (1739-1819)
    'Martín Zapater': 'male',  # Spanish friend of Goya (1747-1803)
    'Nicolas Philippe Guye': 'male',  # French collector
    'Pascual de Gayangos y Arce': 'male',  # Spanish humanist (1809-1897)
    'Paul Lefort': 'male',  # French art critic
    'Paul Mantz': 'male',  # French critic & collector
    'Pedro de Madrazo': 'male',  # Spanish art historian (1816-1898)
    'Pharamond Blanchard': 'male',  # French artist & teacher (1805-1873)
    'Philippe Burty': 'male',  # French critic & collector (1830-1890)
    'Pierre Lacour': 'male',  # French artist
    'Pierre Lacour fils': 'male',  # French artist (son)
    'Rafael Esteve': 'male',  # Spanish engraver (1772-1847)
    'Raimundo de Madrazo': 'male',  # Spanish painter (1841-1920)
    'Ramón de Mesonero Romanos': 'male',  # Spanish writer (1803-1882)
    'Richard Ford': 'male',  # English art historian (1796-1858)
    'Rodolphe Töpffer': 'male',  # Swiss artist (1799-1846)
    'Román Garreta': 'male',  # Spanish painter
    'Santiago Masarnau': 'male',  # Spanish military officer & artist
    'Sebastián Martínez y Pérez': 'male',  # Spanish art patron
    'Stéphane Mallarmé': 'male',  # French poet (1842-1898)
    'Théophile Thoré': 'male',  # French critic (1807-1869)
    'Tony Johannot': 'male',  # French artist (1803-1852)
    'Victor Guye': 'male',  # French collector
    'William Stirling-Maxwell': 'male',  # Scottish collector (1818-1883)
    'Zacharie Astruc': 'male',  # French artist (1833-1905)
    '[J./L.] Carresse': 'male',  # French publisher
    'Émile Zola': 'male',  # French writer (1840-1902)
    
    # Special cases
    'Adélaïde de Montgolfier': 'female',  # French naturalist (1764-1820)
    'Agustín Esteve': 'male',  # Spanish painter (1753-1830)
    'Alejandro Sureda': 'male',  # Spanish painter (1778-1850s)
    'Amable Tastu': 'female',  # French writer & educator (1798-1885)
    'Anton Raphael Mengs': 'male',  # German painter (1728-1779)
    'Bartolomé Sureda': 'male',  # Spanish painter
    'Bernardo de Iriarte': 'male',  # Spanish writer (1735-1814)
    'Madame Ewelina Hanska': 'female',  # Polish noblewoman (1801-1882)
}

# Load both files
with open('goya_network.json', 'r', encoding='utf-8') as f:
    data_en = json.load(f)

with open('goya_network_ES.json', 'r', encoding='utf-8') as f:
    data_es = json.load(f)

# Apply historical assignments
added_count = 0
still_ambiguous = []

for node in data_en['nodes']:
    node_id = node.get('id', '')
    if 'sex' not in node:
        if node_id in historical_sex_map:
            node['sex'] = historical_sex_map[node_id]
            added_count += 1
        else:
            still_ambiguous.append(node_id)

# Apply to Spanish file
for node in data_es['nodes']:
    node_id = node.get('id', '')
    if 'sex' not in node and node_id in historical_sex_map:
        node['sex'] = historical_sex_map[node_id]

# Save both files
with open('goya_network.json', 'w', encoding='utf-8') as f:
    json.dump(data_en, f, ensure_ascii=False, indent=2)

with open('goya_network_ES.json', 'w', encoding='utf-8') as f:
    json.dump(data_es, f, ensure_ascii=False, indent=2)

# Summary
male_count = sum(1 for n in data_en['nodes'] if n.get('sex') == 'male')
female_count = sum(1 for n in data_en['nodes'] if n.get('sex') == 'female')
unknown_count = sum(1 for n in data_en['nodes'] if 'sex' not in n)

print(f"✓ Added {added_count} more sex assignments")
print(f"\nFinal tally:")
print(f"  Male nodes: {male_count}")
print(f"  Female nodes: {female_count}")
print(f"  Unknown: {unknown_count}")
print(f"  Total: {len(data_en['nodes'])}")

if still_ambiguous:
    print(f"\n⚠ Could not research ({len(still_ambiguous)}):")
    for name in sorted(still_ambiguous):
        print(f"  - {name}")
