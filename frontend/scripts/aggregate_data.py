import os
import json

DATASETS_DIR = "../../raw_dataset"
OUTPUT_FILE = "src/data.ts"

def main():
    departments = []
    
    if not os.path.exists(DATASETS_DIR):
        print(f"Error: Datasets directory not found at {DATASETS_DIR}")
        return

    # Iterate over jsonl files directly
    for filename in sorted(os.listdir(DATASETS_DIR)):
        if not filename.endswith(".jsonl"):
            continue
            
        dept_name = os.path.splitext(filename)[0]
        jsonl_path = os.path.join(DATASETS_DIR, filename)
            
        print(f"Processing {dept_name}...")
        
        cases = []
        try:
            with open(jsonl_path, 'r', encoding='utf-8') as f:
                for i, line in enumerate(f):
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        data = json.loads(line)
                        input_text = data.get("input", "")
                        output_text = data.get("output", "")
                        
                        description = input_text[:50] + "..." if len(input_text) > 50 else input_text
                        
                        cases.append({
                            "id": f"{dept_name}-{i+1}",
                            "description": description,
                            "input": input_text,
                            "output": output_text
                        })
                    except json.JSONDecodeError:
                        print(f"  Error decoding line {i+1} in {dept_name}")
                        
        except Exception as e:
            print(f"  Error reading {dept_name}: {e}")
            
        if cases:
            departments.append({
                "name": dept_name,
                "cases": cases
            })
            
    # Write to TypeScript file
    ts_content = "export interface Case {\n  id: string;\n  description: string;\n  input: string;\n  output: string;\n}\n\n"
    ts_content += "export interface Department {\n  name: string;\n  cases: Case[];\n}\n\n"
    ts_content += "export const DATA: Department[] = " + json.dumps(departments, indent=2) + ";\n"
    
    # Ensure src directory exists
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(ts_content)
        
    print(f"Successfully wrote data to {OUTPUT_FILE}")
    print(f"Total departments: {len(departments)}")
    print(f"Total cases: {sum(len(d['cases']) for d in departments)}")

if __name__ == "__main__":
    main()
