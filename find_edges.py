#!/usr/bin/env python3
import json

with open("goya_network.json", "r", encoding="utf-8") as f:
    data = json.load(f)

targets = [
    ("Eugène Delacroix", "Frédéric Villot"),
    ("Honoré Daumier", "J. J. Grandville"),
    ("Francisco de Goya", "Martín Zapater"),
    ("Auguste Dutuit", "Eugène Dutuit"),
    ("Asensio Julià", "Francisco de Goya"),
    ("Leocadia Weiss", "Rosario Weiss"),
    ("Manuel Brugada", "Francisco de Goya"),
    ("Rosario Weiss", "Francisco de Goya"),
    ("Federico de Madrazo", "Adrien Dauzats"),
    ("Federico de Madrazo", "Eugenio Ochoa"),
    ("Federico de Madrazo", "Valentín Carderera"),
    ("Édouard Manet", "Edgar Degas"),
    ("Honoré Daumier", "Achille Ricourt"),
    ("Alfred de Musset", "George Sand"),
    ("Frédéric Chopin", "George Sand"),
    ("Honoré de Balzac", "Countess Hanka"),
    ("Manuel Godoy", "Josefa Tudó"),
    ("Manuel Godoy", "María Cristina de Borbón"),
    ("Francisco de Goya", "Manuel Godoy"),
    ("Francisco de Goya", "Carlos IV"),
    ("Javier Goya", "Baron Taylor"),
    ("Javier Goya", "Federico de Madrazo"),
    ("Valentín Carderera", "Javier Goya"),
    ("Théophile Gautier", "Eugène Piot"),
    ("Théophile Gautier", "Victor Hugo"),
    ("Eugène Piot", "Etienne-François Thoré"),
    ("Théophile Gautier", "Etienne-François Thoré"),
    ("Valentín Carderera", "Marie-Denise Jacquemart"),
    ("Valentín Carderera", "José de Salamanca y Mayol"),
    ("Federico de Madrazo", "Isabel II"),
    ("José de Madrazo", "Carlos IV"),
    ("José de Madrazo", "Fernando VII"),
    ("Agustín Esteve", "Rafael Esteve"),
    ("José de Madrazo", "Caroline Blanchard"),
    ("José de Madrazo", "Baron Taylor"),
]

edges = data.get("edges", [])
found = {}

for edge in edges:
    f = edge.get("from", "")
    t = edge.get("to", "")
    for idx, (tf, tt) in enumerate(targets):
        if (f == tf and t == tt) or (f == tt and t == tf):
            found[idx+1] = (tf, tt, f, t, edge)
            break

with open("edges_found.json", "w", encoding="utf-8") as out:
    json.dump({
        "total_found": len(found),
        "total_searched": len(targets),
        "found_edges": {str(k): {"requested": (v[0], v[1]), "found_as": (v[2], v[3]), "edge": v[4]} for k, v in found.items()},
        "missing": [targets[i-1] for i in range(1, len(targets)+1) if i not in found]
    }, out, ensure_ascii=False, indent=2)

print(f"Results saved to edges_found.json")
