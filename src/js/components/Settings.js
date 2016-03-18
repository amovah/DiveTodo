import React, { Component } from 'react';
import { remote } from 'electron';
import { dispatch } from '../store';
import { readDatabase, write, read, loadAll } from '../utils';

export default class extends Component {
  exportDB() {
    remote.dialog.showSaveDialog(path => {
      readDatabase().then(database => {
        write(path, JSON.stringify(database)).then(() => {
          remote.dialog.showMessageBox({
            title: '',
            message: 'Successfully',
            detail: `Database exported successfully on ${path}`,
            buttons: [],
            type: 'info'
          });
        }).catch(err => {
          remote.dialog.showErrorBox(
            'Faild, Can not write file',
            err.toString());
        });
      });
    });
  }

  importDB() {
    remote.dialog.showOpenDialog({ properties: ['openFile'] }, path => {
      read(path[0], 'utf8').then(file => {
        const database = JSON.parse(file);
        loadAll(dispatch, database).then(() => {
          remote.dialog.showMessageBox({
            title: '',
            message: 'Successfully',
            detail: `Database imported successfully from ${path}`,
            buttons: [],
            type: 'info'
          });
        });
      }).catch(err => {
        remote.dialog.showErrorBox(
          'Faild, Can not read database',
          err.toString()
        );
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <h4>Export & Import Settings and Database</h4>
          <button
            className="btn no-background"
            onClick={() => { this.exportDB(); }}>
            Export
          </button>
          <button
            className="btn no-background"
            onClick={() => { this.importDB(); }}>
            Import
          </button>
        </div>
      </div>
    );
  }
}
