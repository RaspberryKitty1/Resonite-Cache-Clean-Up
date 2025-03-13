# Resonite-Cache-Clean-Up
A collection of scripts to help clean the Resonite Cache files.

Originally created by an unknown person for NeosVR, the script was designed to clean up old cache files for the game **Resonite**. The original script was written in PowerShell (.ps1) and has since been ported to Python and JavaScript for added flexibility and convenience.

## Scripts Included:
- **resonitecachecleanup.ps1**: PowerShell script to delete files in the Resonite cache that haven't been accessed in the last 7 days.
- **resonitecachecleanup.js**: JavaScript version of the script, using Node.js to clean up Resonite cache files.
- **resonitecachecleanup.py**: Python version of the script for deleting old Resonite cache files.

## Usage Instructions:

### PowerShell (`resonitecachecleanup.ps1`):
1. Open PowerShell as Administrator.
2. Navigate to the directory where the `resonitecachecleanup.ps1` script is located.
3. Run the script by typing:  
   `powershell ./resonitecachecleanup.ps1`
4. The script will remove files in the Resonite cache that have not been accessed in the last 7 days.

### JavaScript (`resonitecachecleanup.js`):
1. Make sure you have Node.js installed on your system.
2. Save the script as resonitecachecleanup.js.
3. Open a command prompt or terminal and navigate to the directory where the script is located.
4. Run the script by typing:

`node resonitecachecleanup.js`

### Python (`resonitecachecleanup.py`):
1. Make sure you have Python 3.x installed on your system.
2. Save the script as resonitecachecleanup.py.
3. Open a terminal or command prompt and navigate to the directory where the script is located.
4. Run the script by typing:

`python resonitecachecleanup.py`

### Features:

The scripts will delete cache files that haven't been accessed in the last 7 days.

The cache directories are located at:

`AppData\LocalLow\Yellow Dog Man Studios\Resonite\Assets`

`AppData\Local\Temp\Yellow Dog Man Studios\Resonite\Cache`


Disclaimer:

This project is not affiliated with or endorsed by Yellow Dog Man Studios or Resonite. The scripts are provided as-is for personal use to clean up cache files from the game Resonite.