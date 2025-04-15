# Resonite-Cache-Clean-Up

A collection of scripts to help clean up cache files from the game **Resonite**.

Originally created by an unknown developer for **NeosVR**, the script was designed to remove outdated cache files. This project ports that original PowerShell script into Python and JavaScript to offer broader compatibility and ease of use.

---

## 🧹 Included Scripts

- **`resonitecachecleanup.ps1`**  
  PowerShell script that deletes Resonite cache files not accessed in the last **7 days**.

- **`resonitecachecleanup.js`**  
  JavaScript version (Node.js) that performs the same cache-cleaning operation.

- **`resonitecachecleanup.py`**  
  Python version for cross-platform cache cleanup.

---

## ⚙️ Usage Instructions

### 🔵 PowerShell (`resonitecachecleanup.ps1`)

1. Open PowerShell **as Administrator**.
2. Navigate to the folder containing the script.
3. Run the command:

   ```powershell
   powershell ./resonitecachecleanup.ps1
   ```

4. The script will delete any cache files not accessed in the past 7 days.

---

### 🟢 JavaScript (`resonitecachecleanup.js`)

1. Ensure [Node.js](https://nodejs.org/) is installed on your system.
2. Open a terminal or command prompt.
3. Navigate to the directory containing the script.
4. Run:

   ```bash
   node resonitecachecleanup.js
   ```

---

### 🐍 Python (`resonitecachecleanup.py`)

1. Make sure Python 3.x is installed.
2. Open a terminal or command prompt.
3. Navigate to the directory containing the script.
4. Run:

   ```bash
   python resonitecachecleanup.py
   ```

---

## 📁 Cache Directories

These scripts target the following Resonite cache locations:

- `%AppData%\LocalLow\Yellow Dog Man Studios\Resonite\Assets`
- `%LocalAppData%\Temp\Yellow Dog Man Studios\Resonite\Cache`

These locations may contain large or outdated files over time, especially if you've been using Resonite heavily. This cleanup helps reclaim space and improve performance.

---

## 🔍 Features

- Deletes files **not accessed** in the past **7 days**.
- Can be run manually or scheduled as part of system maintenance.
- Supports Windows environments (Linux/macOS support via Python/Node.js, but paths must be adjusted).

---

## ⚠️ Disclaimer

This project is **not affiliated with or endorsed** by Yellow Dog Man Studios or Resonite.

The scripts are provided **as-is** for personal use. Use at your own discretion. Always back up important data before running automated cleanup tools.
