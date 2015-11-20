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

  window.webContents.openDevTools();

  window.loadURL(`file:///${__dirname}/index.html`);

  let template = [];

  let menu = Menu.buildFromTemplate(template);

  // Menu.setApplicationMenu(menu);
});
