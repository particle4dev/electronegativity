mainWindow = new BrowserWindow({ "webPreferences": {
  "nodeIntegration": true,
  "nodeIntegrationInWorker": false }
});

mainWindow = new BrowserWindow({ "webPreferences": {
  "nodeIntegration": 0,
  "nodeIntegrationInWorker": false }
});

mainWindow = new BrowserWindow({ webPreferences: {
  nodeIntegration: true,
  nodeIntegrationInWorker: false }
});

mainWindow = new BrowserWindow({ webPreferences: {
  nodeIntegration: 0,
  nodeIntegrationInWorker: false }
});