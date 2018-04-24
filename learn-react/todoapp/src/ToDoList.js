import React from "react";
import ToDo from './ToDo';
import { ListGroup } from "react-bootstrap";

export default class ToDoList extends React.Component {
  render() {
    return(
      <ListGroup>
      {
        this.props.tasks.map((task,index) => 
            <ToDo task={task} actionName={this.props.actionName} index={index} done={this.props.done}/>
        )
      }
      </ListGroup>);
  }
}
