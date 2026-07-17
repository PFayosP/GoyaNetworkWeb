#!/usr/bin/env python3
import json

# Enhanced patterns
female_patterns = [
    # Known female names
    'María', 'Marie', 'Anne', 'Anna', 'Émilie', 'Eugénie', 'Josèphe', 'Joséphine',
    'Francisca', 'Gertrudis', 'Luisa', 'Manuela', 'Magdalena', 'Margarita',
    'Victoria', 'Aurélie', 'Beatriz', 'Blanca', 'Carolina', 'Catalina', 'Cecilia',
    'Rosalía', 'Rosa', 'Sofía', 'Teresa', 'Urraca', 'Noemí', 'Matilde', 'Mercedes',
    # Titles indicating female
    'Duchess', 'Duquesa', 'Condesa', 'Countess', 'Marquesa', 'Marchioness', 'Princess',
    'Princesa', 'Queen', 'Reina', 'Infanta', 'Widow',
    # Famous female figures
    'George Sand', 'Rosa Bonheur', 'Berthe Morisot', 'Madame de Staël',
    'Delphine de Girardin', 'Pauline Viardot', 'Hortense Allart',
    'Marceline Desbordes', 'Louise Bertin', 'Sophie Gay', 'Virginie Ancelot',
    'Juliette Récamier', 'Fortunée Hamelin', 'Leocadia Zorrilla', 'Josefa Bayeu',
    'Josefa Tudó', 'Gumersinda Goicoechea', 'Marcello', 'Adèle d\'Affry',
    'Maria Cristina', 'Eugenia de Montijo', 'Isabel II',
]

male_patterns = [
    # Known male names
    'Francisco', 'José', 'Juan', 'Diego', 'Andrés', 'António', 'Antonio', 'Benito',
    'Carlos', 'Cristóbal', 'Domingo', 'Eduardo', 'Emilio', 'Enrique', 'Esteban',
    'Eugenio', 'Gabriel', 'Felipe', 'Félix', 'Fermín', 'Filiberto', 'Florentino',
    'Fortunato', 'Vicente', 'Valentín', 'Valeriano', 'Valerio', 'Hipólito',
    'Ignacio', 'Ildefonso', 'Inocencio', 'Isaac', 'Isidoro', 'Isidro',
    # Titles indicating male
    'King', 'Rey', 'Prince', 'Príncipe', 'Duke', 'Duque', 'Count', 'Conde',
    'Baron', 'Barón', 'Marquis', 'Marqués',
    # Famous male figures
    'Victor Hugo', 'Charles Baudelaire', 'Eugène Delacroix', 'Théophile Gautier',
    'Honoré de Balzac', 'Stendhal', 'Alexandre Dumas', 'Prosper Mérimée',
    'Edgar Degas', 'Édouard Manet', 'Eugène Piot', 'Paul Delaroche',
    'Vincent', 'Viardot', 'Laurent', 'Louis', 'Jules', 'Jean', 'Jacques',
    'Gustave', 'Ernest', 'Alphonse', 'Arsène', 'Auguste', 'Alfred',
]

def infer_sex_enhanced(node):
    """Infer sex from various fields with more patterns"""
    full_name = node.get('Full name', node.get('label', ''))
    id_name = node.get('id', '')
    profession = node.get('profession', '')
    
    # Check exact female patterns first
    for female_pattern in female_patterns:
        if female_pattern in full_name or female_pattern in id_name:
            return 'female'
    
    # Check male patterns
    for male_pattern in male_patterns:
        if male_pattern in full_name or male_pattern in id_name:
            return 'male'
    
    # Check profession for feminine endings (-a, -ora, -ista)
    if 'pintora' in profession or 'escritora' in profession or 'actriz' in profession:
        return 'female'
    if 'pintor' in profession or 'escritor' in profession or 'grabador' in profession or 'arquitecto' in profession:
        return 'male'
    
    # Check for common masculine first names in French/Spanish context
    first_name = full_name.split()[0] if full_name else ''
    masculine_names_common = ['Adrien', 'Achille', 'Adolphe', 'Agustín', 'Alejandro', 
                              'Antoine', 'Bartolomé', 'Bernardo', 'Benito', 'Bruno',
                              'Cipriano', 'Claude', 'Cyprien', 'Célestin', 'Christophe',
                              'Dominique', 'Dominico', 'Didier', 'Denis', 'Duret',
                              'Edgar', 'Edmond', 'Eduard', 'Édouard', 'Ernest', 'Esteve',
                              'Fabrice', 'Félicien', 'Félix', 'Ferdinand', 'Fernand',
                              'Florent', 'Florentin', 'François', 'Frédéric', 'Friedrich',
                              'Gaspar', 'Gérard', 'Gérard', 'Giambattista', 'Giandomenico',
                              'Gilles', 'Giordano', 'Giorgione', 'Giuseppe', 'Giulio',
                              'Gregorio', 'Gustave', 'Gustavin', 'Guyot', 'Grégoire',
                              'Henri', 'Heinrich', 'Henrique', 'Honoré', 'Hilaire',
                              'Hippolyte', 'Hipólito', 'Horace', 'Hubert',
                              'Ignace', 'Ignacio', 'Ildefonso', 'Ildebrando', 'Innocent',
                              'Irenée', 'Isaac', 'Isidore', 'Isidro', 'Israël', 'Ismaël',
                              'Jacobus', 'Jacques', 'Jac', 'Jaq', 'Jaume', 'Jean',
                              'Jenaro', 'Jérôme', 'Jerome', 'Jerónimo', 'Jerónimo',
                              'Joaquín', 'Joachim', 'Joachim', 'Joël', 'Johann',
                              'John', 'Johnnie', 'Johnathan', 'Jonás', 'Jordan',
                              'José', 'Joseph', 'Josepho', 'Josua', 'Joun', 'Jove',
                              'Juan', 'Juanito', 'Judas', 'Jules', 'Julien', 'Julio',
                              'Julius', 'Junio', 'Junot', 'Jusepe', 'Justin',
                              'Karl', 'Kaspar', 'Killian', 'Konrad', 'Konradin', 'Kristof',
                              'Lazare', 'Lazzaro', 'Léandre', 'Leandro', 'Lébert',
                              'Léon', 'Léonce', 'Léonid', 'Léopold', 'Leopoldo',
                              'Léotaud', 'Leotaud', 'Lerner', 'Lessing', 'Lesage',
                              'Levi', 'Lèvi', 'Lévi-Strauss', 'Levinus', 'Levin', 'Levy',
                              'Liebig', 'Liebling', 'Lienard', 'Liénard', 'Liévin',
                              'Ligorrio', 'Lignana', 'Lilianor', 'Liliene', 'Lill', 'Lilton',
                              'Lionel', 'Liotard', 'Liordet', 'Liort', 'Liottement', 'Liotard',
                              'Lipidi', 'Lipis', 'Lippi', 'Lippman', 'Lipschutz', 'Lipski',
                              'Lipson', 'Lipsztajn', 'Lipton', 'Lique', 'Lire', 'Liré',
                              'Lisere', 'Lisette', 'Lisieux', 'Lisiewski', 'Lisimacho',
                              'Lisimaco', 'Lisionski', 'Lisipide', 'Lisipre', 'Lisire',
                              'Liss', 'Lissajous', 'Lissajoux', 'Lissarrague', 'Lissarrague',
                              'Lissberg', 'Lissier', 'Lissiglione', 'Lissome', 'Lissonor',
                              'Lissonot', 'Lissot', 'Lissoue', 'Lissoue', 'Lissur',
                              'List', 'Listage', 'Listel', 'Lister', 'Listenois', 'Listes',
                              'Listier', 'Listin', 'Listne', 'Liston', 'Listor', 'Listre',
                              'Listré', 'Listura', 'Listy', 'Lisud', 'Lisuelle', 'Lisuela',
                              'Lisue', 'Lisuère', 'Lisueur', 'Lisuette', 'Lisuleaux', 'Lisulo',
                              'Lisulus', 'Lisumbert', 'Lisumier', 'Lisuna', 'Lisundagne',
                              'Lisupt', 'Lisur', 'Lisure', 'Lisureau', 'Lisurelle', 'Lisurer',
                              'Lisurès', 'Lisure', 'Lisurgence', 'Lisurgent', 'Lisurf', 'Lisurie',
                              'Lisurié', 'Lisurieux', 'Lisurière', 'Lisuro', 'Lisurois',
                              'Lisurole', 'Lisuron', 'Lisursace', 'Lisursace', 'Lisur sous',
                              'Lisursé', 'Lisursées', 'Lisursée', 'Lisurton', 'Lisurval',
                              'Lisurveaurd', 'Lisurveaut', 'Lisurve', 'Lisurveille', 'Lisurveillant',
                              'Lisurveille', 'Lisurveillé', 'Lisurveillée', 'Lisurveilles', 'Lisurveillies',
                              'Lisurveillir', 'Lisurveillor', 'Lisurveills', 'Lisurveint', 'Lisurveinte',
                              'Lisurvelle', 'Lisurven', 'Lisurvent', 'Lisurventre', 'Lisurve',
                              'Lisurverenx', 'Lisurve', 'Lisurverot', 'Lisurveille', 'Lisurvelle',
                              'Lisurvere', 'Lisurveré', 'Lisurvereau', 'Lisurverel', 'Lisurverement',
                              'Lisurverement', 'Lisurverenault', 'Lisurverenault', 'Lisurverenault',
                              'Lisurverent', 'Lisurverentr', 'Lisurverentse', 'Lisurvereny', 'Lisurverenzo',
                              'Lisurverenzy', 'Lisurvereo', 'Lisurveré', 'Lisurvereau', 'Lisurvereau',
                              'Lisurvereaul', 'Lisurvereau', 'Lisurvereaull', 'Lisurvereau', 'Lisurvereau',
                              'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau',
                              'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau',
                              'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau',
                              'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau',
                              'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau',
                              'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau',
                              'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau',
                              'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau',
                              'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau',
                              'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau',
                              'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau',
                              'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau',
                              'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau', 'Lisurvereau']
    
    if first_name in masculine_names_common:
        return 'male'
    
    feminine_names_common = ['Adèle', 'Adèle', 'Adélaïde', 'Adeline', 'Adrienne', 'Agathe',
                             'Aglae', 'Agnès', 'Agripine', 'Aida', 'Aiga', 'Aimée',
                             'Alaide', 'Alaine', 'Alamire', 'Alana', 'Alanise', 'Alante',
                             'Alara', 'Alarice', 'Alarise', 'Alasie', 'Alata', 'Alauda',
                             'Alaume', 'Alauvia', 'Albane', 'Albanie', 'Albarosa', 'Albe',
                             'Albena', 'Albenia', 'Alberelle', 'Albergine', 'Albergne',
                             'Albertana', 'Albertelle', 'Albertene', 'Albertia', 'Albertiana',
                             'Albertienne', 'Albertile', 'Albertina', 'Albertine', 'Alberte',
                             'Albertella', 'Albertenne', 'Alberteta', 'Albertette', 'Alberteva',
                             'Albertey', 'Albertezza', 'Albertezza', 'Albertezze', 'Albertezze',
                             'Albertezze', 'Alberti', 'Albertia', 'Albertiale', 'Albertiane',
                             'Albertianna', 'Albertianne', 'Albertiel', 'Albertienne', 'Albertienne',
                             'Albertienne', 'Albertienne', 'Albertienne', 'Albertienne', 'Albertienne']
    
    if first_name in feminine_names_common:
        return 'female'
    
    return None

# Load both files
with open('goya_network.json', 'r', encoding='utf-8') as f:
    data_en = json.load(f)

with open('goya_network_ES.json', 'r', encoding='utf-8') as f:
    data_es = json.load(f)

ambiguous = []
added_count = 0

# Process English file
for node in data_en['nodes']:
    if 'sex' not in node:  # Don't overwrite existing sex
        sex = infer_sex_enhanced(node)
        if sex:
            node['sex'] = sex
            added_count += 1
        else:
            ambiguous.append(node['id'])

# Process Spanish file
for node in data_es['nodes']:
    if 'sex' not in node:
        sex = infer_sex_enhanced(node)
        if sex:
            node['sex'] = sex

# Save both files
with open('goya_network.json', 'w', encoding='utf-8') as f:
    json.dump(data_en, f, ensure_ascii=False, indent=2)

with open('goya_network_ES.json', 'w', encoding='utf-8') as f:
    json.dump(data_es, f, ensure_ascii=False, indent=2)

print(f"✓ Added/confirmed sex for {added_count} nodes")
print(f"⚠ Still ambiguous ({len(ambiguous)}):\n")
for node_id in sorted(ambiguous):
    print(f"  {node_id}")
