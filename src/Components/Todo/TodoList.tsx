import React, { Component } from "react";
import TodoItemComponent, { TodoItem } from "./TodoItem";
import { Table } from "react-bootstrap";

export type TodoList = Array<TodoItem>;
export interface Props {
  todos: TodoList;
  toggleTodoItem?: (id: string) => void;
}

export default class TodoListComponent extends Component<Props> {
  render() {
    let { todos, toggleTodoItem } = this.props;

    let todoItems = todos.map((todo, key) => {
      return (
        <TodoItemComponent
          {...todo}
          key={key}
          toggleTodoItem={toggleTodoItem}
        />
      );
    });

    return (
      <Table bordered>
        <tbody>{todoItems}</tbody>
      </Table>
    );
  }
}
