const fs = require('fs');
const path = require('path');
const os = require('os');

const limit = new Date();
limit.setDate(limit.getDate() - 7);

const userProfile = os.homedir();
const path1 = path.join(userProfile, 'AppData', 'LocalLow', 'Yellow Dog Man Studios', 'Resonite', 'Assets');
const path2 = path.join(userProfile, 'AppData', 'Local', 'Temp', 'Yellow Dog Man Studios', 'Resonite', 'Cache');

cleanFolder(path1);
cleanFolder(path2);

function cleanFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const filePath = path.join(folderPath, file);
      const stats = fs.statSync(filePath);
      if (stats.atime < limit) {
        if (stats.isFile()) {
          fs.unlinkSync(filePath);
          console.log(`Deleted file: ${filePath}`);
        } else if (stats.isDirectory()) {
          fs.rmdirSync(filePath, { recursive: true });
          console.log(`Deleted directory and its contents: ${filePath}`);
        }
      }
    });
  }
}
