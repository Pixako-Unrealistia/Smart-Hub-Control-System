import subprocess

def run_services():
    processes = []

    processes.append(subprocess.Popen(["python3", "./meter-getter/get-all-meter-usage/main.py"]))
    processes.append(subprocess.Popen(["python3", "./meter-getter/get-hub-meter-usage/main.py"]))
    processes.append(subprocess.Popen(["python3", "./meter-getter/get-meter-usage/main.py"]))
    processes.append(subprocess.Popen(["python3", "./meter-getter/get-online-hub/main.py"]))
    processes.append(subprocess.Popen(["python3", "./meter-getter/get-online-meter/main.py"]))
    
    for process in processes:
        process.wait()

if __name__ == "__main__":
    run_services()
