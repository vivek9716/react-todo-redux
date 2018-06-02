import React, { Component } from 'react';

class TaskForm extends Component {
  render() {
    return (
      <main role="main" className="main-wrap">
        <header role="heading" className="header">
          <h1 className="app-header"> Add your task </h1>
        </header>
        <section className="main-content">
          <section className="todo-form">
            <form role="form" id="todoForm">
              <div className="row">
                <label htmlFor="title"> Title </label>
                <input className="form-input" id="title" type="text" placeholder="Learn JavaScript" />
              </div>
              <div className="row">
                <label htmlFor="description"> Description </label>
                <textarea id="description" rows="4" cols="30" placeholder="Coz you already know Java"></textarea>
              </div>
              <div className="row">
                <label htmlFor="priority"> Priority </label>
                <select id="priority">
                  <option value="high">High</option>
                  <option value="med">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <div className="row submit-btn">
                <input type="submit" className="primary-button" value="DO IT" />
              </div>
            </form>
          </section>
        </section>
      </main>
    );
  }
}

export default TaskForm;
