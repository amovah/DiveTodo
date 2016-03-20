import React, { Component } from 'react';
import { connect } from 'react-redux';
import { remote } from 'electron';
import { dispatch } from '../store';
import { readDatabase, write, read, loadAll } from '../utils';
import {
  CONFIG_REMOVE,
  CONFIG_KEEP,
  CONFIG_MOVE,
  saveConfig
} from '../actions';

class Settings extends Component {
  constructor() {
    super();
    this.saveConfig = this.saveConfig.bind(this);
  }

  componentDidMount() {
    switch(this.props.todos) {
      case CONFIG_REMOVE:
        this.refs.r_todos.setAttribute('checked', true);
        break;
      case CONFIG_KEEP:
        this.refs.k_todos.setAttribute('checked', true);
        break;
      case CONFIG_MOVE:
        this.refs.m_todos.setAttribute('checked', true);
        break;
    }

    switch(this.props.remembers) {
      case CONFIG_MOVE:
        this.refs.m_remembers.setAttribute('checked', true);
        break;
      case CONFIG_REMOVE:
        this.refs.r_remembers.setAttribute('checked', true);
        break;
    }
  }

  saveConfig() {
    let config = { todos: 0, remembers: 0 };
    for (let el of ['r_todos', 'm_todos', 'k_todos']) {
      if (this.refs[el].checked) {
        config.todos = parseInt(this.refs[el].value);
        break;
      }
    }

    for (let el of ['r_remembers', 'k_remembers']) {
      if (this.refs[el].checked) {
        config.remembers = parseInt(this.refs[el].value);
        break;
      }
    }

    this.props.dispatch(saveConfig(config));
  }

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
          <h4>Out-of-date todos</h4>
          <div>
            <label htmlFor="r_todos">
              Remove out-of-date todos.
            </label>
            <input name="oodt" id="r_todos" type="radio" value="0"
              ref="r_todos"/>
          </div>
          <div>
            <label htmlFor="n_todos">
              Keep them and do not remove them.
            </label>
            <input name="oodt" id="n_todos" type="radio" value="1"
              ref="k_todos"/>
          </div>
          <div>
            <label htmlFor="m_todos">
              Automove out-of-date uncompleted todos to current day and remove
              completed todos.
            </label>
            <input name="oodt" id="m_todos" type="radio" value="2"
              ref="m_todos"/>
          </div>

          <h4>Out-of-date remembers</h4>
          <div>
            <label htmlFor="r_remembers">
              Remove out-of-date remembers.
            </label>
            <input name="oodr" id="r_remembers" type="radio" value="0"
              ref="r_remembers"/>
          </div>
          <div>
            <label htmlFor="k_remembers">
              Keep them and do not remove them.
            </label>
            <input name="oodr" id="k_remembers" type="radio" value="1"
              ref="k_remembers"/>
          </div>

          <div>
            <button
              className="btn"
              onClick={() => { this.saveConfig(); }}>
              Save
            </button>
          </div>

          <span className="seperator" />

          <h4>Export & Import Settings and Database</h4>
          <button
            className="btn"
            onClick={() => { this.exportDB(); }}>
            Export
          </button>
          <button
            className="btn"
            onClick={() => { this.importDB(); }}>
            Import
          </button>
        </div>
      </div>
    );
  }
}

export default connect(state => state.config)(Settings);
