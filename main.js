// Notes section START

// Use this line to get the currently stored server IP from the app:
// const ip = await window.settings.getServerIp();

// Notes section END

const {app, BrowserWindow, ipcMain } = require("electron"); // import electron modules
const path = require("path"); // import path module for handling file paths

const Store = require("electron-store"); // import electron-store module for data storage
const store = new Store(); // create a new instance of electron-store


ipcMain.handle("set-server-ip", (event, ip) => {
    store.set("serverIp", ip);
    return true;
});

const createWindow = () => { // init window
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"), // set the preload script for the window
            contextIsolation: true, // enable context isolation for security
            nodeIntegration: false // disable node integration for security
        }

    });
    win.loadFile("index.html");
}

app.whenReady().then(() => { // When app is loaded successfully, create the window
    createWindow();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})