'use strict';

const electron = require('electron'),
  app = electron.app,
  BrowserWindow = electron.BrowserWindow,
  Menu = electron.Menu;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  let window = new BrowserWindow({width: 1000, height: 800});

  window.loadURL(`file:///${__dirname}/index.html`);

  // Menu.setApplicationMenu(null);
});
