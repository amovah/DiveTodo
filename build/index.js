'use strict';

var _electron = require('electron');

_electron.app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    _electron.app.quit();
  }
});

_electron.app.on('ready', function () {
  var window = new _electron.BrowserWindow({ width: 1000, height: 800 });

  window.loadURL('file:///' + __dirname + '/index.html');

  if (process.env.DEVELOPMENT) {
    window.webContents.openDevTools();
  } else {
    _electron.Menu.setApplicationMenu(_electron.Menu.buildFromTemplate([]));
  }
});