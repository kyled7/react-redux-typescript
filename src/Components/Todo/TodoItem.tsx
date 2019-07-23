import React, { Component } from "react";
import { Form } from "react-bootstrap";

export interface TodoItem {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface Props extends TodoItem {
  toggleTodoItem?: (id: string) => void;
}

export default class TodoItemComponent extends Component<Props> {
  toggleTodo = (evt: any) => {
    let { id, toggleTodoItem } = this.props;
    if (toggleTodoItem) {
      toggleTodoItem(id);
    }
  };

  render() {
    let { title, isCompleted } = this.props;
    return (
      <tr>
        <td>
          <Form.Check
            type="checkbox"
            label={title}
            checked={isCompleted}
            onChange={this.toggleTodo}
          />
        </td>
      </tr>
    );
  }
}
