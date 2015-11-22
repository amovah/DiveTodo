'use strict';

var electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    Menu = electron.Menu;

app.on('window-all-closed', function () {
  app.quit();
});

app.on('ready', function () {
  var window = new BrowserWindow({ width: 1000, height: 800 });

  window.webContents.openDevTools();

  window.loadURL('file:///' + __dirname + '/index.html');

  var template = [];

  var menu = Menu.buildFromTemplate(template);

  // Menu.setApplicationMenu(menu);
});
