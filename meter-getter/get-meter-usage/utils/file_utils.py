import json
import os
import csv
import pandas as pd

# read meter 1 set of data
def read_meter_csv_index(meter_id: str, index: int):
        try:
            IDENTIFIER = meter_id
            BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
            print(f"BASE_DIR: {BASE_DIR}")
            FILE_PATH = os.path.join(BASE_DIR,"..","mock_data","individuals")
            print(f"FILE_PATH: {FILE_PATH}")
            FILENAME = f"{meter_id}.csv"

            # Full path to the CSV file
            file_path = os.path.join(FILE_PATH, FILENAME)

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
            # print(f"An error occurred: {e}")
            print(f"Meter lost connection")
            return 0
    