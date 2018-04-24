import React from 'react';
import ToDoList from './ToDoList';
import './style.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      incompleteTasks: [],
      completedTasks: []
    }
  }

  addToDone = (index) => {
    let newItem = this.state.incompleteTasks[index];
    let newIncompleteTasks = this.state.incompleteTasks;
    newIncompleteTasks.splice(index,1);
    this.setState((prevValue) => {
      return { 
        completedTasks: prevValue.completedTasks.concat(newItem),
        incompleteTasks: newIncompleteTasks
      }
    });
  }

  addToNotDone = (index) => {
    let newItem = this.state.completedTasks[index];
    let newCompletedTasks = this.state.completedTasks;
    newCompletedTasks.splice(index, 1);
    this.setState((prevValue) => {
      return {
        completedTasks: newCompletedTasks,
        incompleteTasks: prevValue.incompleteTasks.concat(newItem)
      }
    })
  }

  addTodo = (event) => {
    if (event.charCode === 13) {
      console.log("adding in app");
      let val = event.target.value;
      event.target.value = "";
      this.setState(() => {
        return (
          { incompleteTasks: this.state.incompleteTasks.concat(val) }
        )
      })
    }
  }

  render() {
    return (
      <div className="divS">
        <div>Hi there</div>
        <input onKeyPress={this.addTodo} />
        <h3>Incomplete</h3>
        <ToDoList tasks={this.state.incompleteTasks} actionName={this.addToDone} done={false}/>
        <h3>Completed</h3>
        <ToDoList tasks={this.state.completedTasks} actionName={this.addToNotDone} done={true}/>
      </div>
    )
  }
} 