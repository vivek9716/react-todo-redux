import React, { Component } from 'react';

class TaskList extends Component {
  render() {
    return (
        <section className="todo-list-container">
        <div className="todo-in-progress">
           <h2> Task(s) List</h2>
           <ul className="todo-list" id="target">              
              <li className="todo-item high">
                 <div className="card">
                    <h3 className="todo-title"> <span className="action">
                       <i className="material-icons md-36 icon-delete">delete</i>
                       <i className="icon-checkbox-outline material-icons md-36 md-dark">check_box_outline_blank</i>
                       <i className="icon-checkbox material-icons md-36 md-light">check_box</i>
                       </span> 
                       <span className="title">Learn React </span>
                    </h3>
                    <p className="todo-description">
                       Build great modularize javascript apps with React JS. 
                    </p>
                    <span className="todo-priority"> High </span>
                 </div>
              </li>              
           </ul>
        </div>        
     </section>
    );
  }
}

export default TaskList;