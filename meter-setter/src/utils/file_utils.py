import json
import os

# Read the mock data from a file
def read_file():
    file_path = os.path.join(os.path.dirname(__file__), '..', 'config', 'default.json')
    with open(file_path, 'r') as file:
        data = json.load(file)
    return data

# Write data back to the file
def write_file(data):
    file_path = os.path.join(os.path.dirname(__file__), '..', 'config', 'default.json')
    with open(file_path, 'w') as file:
        json.dump(data, file, indent=4)
