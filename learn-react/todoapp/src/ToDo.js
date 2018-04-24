import React from "react";
import { ListGroupItem } from "react-bootstrap";

export default class ToDo extends React.Component {
  toggleTask = (event) => {
    this.props.actionName(this.props.index);
  }

  render() {
    return (
      <div>
        <ListGroupItem onClick={this.toggleTask} bsStyle={this.props.done ? "success" : "info"}>
          {this.props.task}
        </ListGroupItem>
      </div>
    )
  }
}
