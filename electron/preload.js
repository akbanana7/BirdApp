const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("settings", {
    getServerIp: () => ipcRenderer.invoke("get-server-ip"),
    setServerIp: (ip) => ipcRenderer.invoke("set-server-ip", ip)
});