import json
import os
import pandas as pd

# Read meter data from CSV file
def read_meter_csv_index(meter_id: str, index: int):
    try:
        IDENTIFIER = meter_id
        
        # Use the fixed base directory to avoid 'get-meter-usage'
        BASE_DIR = "/app"
        print(f"BASE_DIR: {BASE_DIR}")

        # Construct the file path to the individuals directory
        FILE_PATH = os.path.join(BASE_DIR, "mock_data", "individuals")
        print(f"FILE_PATH: {FILE_PATH}")   
        
        FILENAME = f"{meter_id}.csv"

        # Full path to the CSV file
        file_path = os.path.join(FILE_PATH, FILENAME)
        print(f"Full file path to check: {file_path}")

        # Check if the file exists
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"File {file_path} does not exist.")

        # Read the CSV file
        df = pd.read_csv(file_path)

        # Filter the dataframe by the specific LCLid
        filtered_df = df[df['LCLid'] == IDENTIFIER]

        # Convert the filtered dataframe to JSON
        json_str = filtered_df.to_json(orient="records")

        # Parse the JSON string to remove escape characters
        json_data = json.loads(json_str)

        # Return the parsed JSON data
        return json_data[index]

    except FileNotFoundError as fnf_error:
        print(f"File not found error: {fnf_error}")
        return None
    except pd.errors.EmptyDataError:
        print("The CSV file is empty.")
        return None
    except KeyError as ke:
        print(f"Missing expected column: {ke}")
        return None
    except Exception as e:
        # In case of an unknown error
        print(f"Meter lost connection")
        return 0
