import React, { Component } from 'react';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';

class App extends Component {
  render() {
    return (
      <div>
        <header className="page-title">
          <h1>  <i className="material-icons">view_list</i>
            TODO
            </h1>
          <div className="tag"> An easy way to manage your work. <span className="caret">|</span></div>
        </header>
        <TaskForm />
        <TaskList />
      </div>
    );
  }
}

export default App;