const {app, BrowserWindow} = require('electron'); // import electron modules

const createWindow = () => { // init window
    const win = new BrowserWindow({width: 800, height: 600});
    win.loadFile('index.html');
}

app.whenReady().then(() => { // When app is loaded successfully, create the window
    createWindow();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})