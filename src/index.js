import { app, BrowserWindow, Menu } from 'electron';

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  let window = new BrowserWindow({width: 1000, height: 800});

  window.loadURL(`file:///${__dirname}/index.html`);

  if (process.env.DEVELOPMENT) {
    window.webContents.openDevTools();
  } else {
    Menu.setApplicationMenu(Menu.buildFromTemplate([]));
  }

});
