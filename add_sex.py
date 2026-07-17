#!/usr/bin/env python3
import json

# Known female names/patterns
female_names = {
    'María', 'Marie', 'Anne', 'Anna', 'Émilie', 'Eugénie', 'Josèphe', 'Joséphine',
    'Francisca', 'Gertrudis', 'Luisa', 'Manuela', 'Magdalena', 'Margarita',
    'Infanta', 'Reina', 'Queen', 'Duchess', 'Duquesa', 'Condesa', 'Marquesa',
    'Princess', 'Princesa', 'Victoria', 'Aurélie', 'Beatriz', 'Blanca', 'Carolina',
    'Catalina', 'Cecilia', 'Rosalía', 'Rosa', 'Sofía', 'Teresa', 'Urraca',
    'Noemí', 'Magdalena', 'Matilde', 'Mercedes', 'Micaela'
}

male_names = {
    'Francisco', 'José', 'Juan', 'Diego', 'Andrés', 'António', 'Antonio', 'Benito',
    'Carlos', 'Cristóbal', 'Domingo', 'Eduardo', 'Emilio', 'Enrique', 'Esteban',
    'Eugenio', 'Gabriel', 'Felipe', 'Félix', 'Fermín', 'Filiberto', 'Florentino',
    'Fortunato', 'King', 'Rey', 'Prince', 'Príncipe', 'Duke', 'Duque', 'Count', 'Conde',
    'Baron', 'Barón', 'Vincent', 'Vicente', 'Valentín', 'Valeriano', 'Valero',
    'Valerio', 'Valiente', 'Valerio', 'Valerio', 'Valimero', 'Valimiro',
    'Hipólito', 'Hipólyta', 'Hipólit', 'Ignacio', 'Ildefonso', 'Ildefonso',
    'Ildebrando', 'Ildefonso', 'Inocencio', 'Ireneo', 'Irenio', 'Iricio',
    'Irlando', 'Isaac', 'Isaaca', 'Isabelo', 'Isabelio', 'Isabelo',
    'Isacio', 'Isador', 'Isadora', 'Isafredo', 'Isalia', 'Isalia',
    'Isalino', 'Isalino', 'Isaltina', 'Isaltina', 'Isamardo', 'Isamardo',
    'Isamundo', 'Isamundo', 'Isanuel', 'Isanuel'
}

def infer_sex(node):
    """Infer sex from various fields"""
    full_name = node.get('Full name', node.get('label', ''))
    
    # Check name for female/male indicators
    for female_name in female_names:
        if female_name in full_name:
            return 'female'
    
    for male_name in male_names:
        if male_name in full_name:
            return 'male'
    
    # Check profession field
    profession = node.get('profession', '')
    if any(term in profession for term in ['pintora', 'escritora', 'poeta', 'actriz', 'musa']):
        return 'female'
    if any(term in profession for term in ['pintor', 'escritor', 'arquitecto', 'actor', 'escultor']):
        return 'male'
    
    return None

# Process English file
with open('goya_network.json', 'r', encoding='utf-8') as f:
    data_en = json.load(f)

# Process Spanish file
with open('goya_network_ES.json', 'r', encoding='utf-8') as f:
    data_es = json.load(f)

ambiguous_ids = []
added_count = 0

for node in data_en['nodes']:
    sex = infer_sex(node)
    if sex:
        node['sex'] = sex
        added_count += 1
    else:
        ambiguous_ids.append(node['id'])

# Add to Spanish file too
for node in data_es['nodes']:
    sex = infer_sex(node)
    if sex:
        node['sex'] = sex

# Save files
with open('goya_network.json', 'w', encoding='utf-8') as f:
    json.dump(data_en, f, ensure_ascii=False, indent=2)

with open('goya_network_ES.json', 'w', encoding='utf-8') as f:
    json.dump(data_es, f, ensure_ascii=False, indent=2)

print(f"✓ Added sex to {added_count} nodes")
print(f"⚠ Ambiguous cases ({len(ambiguous_ids)}):")
for node_id in sorted(ambiguous_ids):
    print(f"  - {node_id}")
