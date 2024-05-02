import os
import datetime

# Get the user's folder (e.g., C:\Users\drago)
user_folder = os.path.expanduser("~")

def delete_files_older_than_7_days(directory):
    limit = datetime.datetime.now() - datetime.timedelta(days=7)
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            file_stat = os.stat(file_path)
            file_mtime = datetime.datetime.fromtimestamp(file_stat.st_mtime)
            
            if file_mtime < limit:
                os.remove(file_path)
                print(f"Deleted: {file_path}")

directories = [
    os.path.join(user_folder, "AppData", "LocalLow", "yellow Dog Man Studios", "Resonite", "Assets"),
    os.path.join(user_folder, "AppData", "Local", "Temp", "Yellow Dog Man Studios", "Resonite", "Cache")
]

for directory in directories:
    delete_files_older_than_7_days(directory)
