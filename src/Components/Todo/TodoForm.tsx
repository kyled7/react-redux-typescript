import React, { Component } from "react";
import { Form } from "react-bootstrap";

export interface Props {
  onAddTodo?: (title: string) => void;
}

export default class TodoFormComponent extends Component<Props> {
  readonly state: {
    tmpTitle: string;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      tmpTitle: ""
    };
  }

  onTextChange = (e: any) => {
    this.setState({
      tmpTitle: e.target.value
    });
  };

  handleKeyDown = (e: any) => {
    //Enter key
    if (this.state.tmpTitle && e.keyCode === 13 && this.props.onAddTodo) {
      this.props.onAddTodo(this.state.tmpTitle);
      this.setState({
        tmpTitle: ""
      });
    }
  };

  render() {
    return (
      <Form.Control
        type="text"
        size="lg"
        value={this.state.tmpTitle}
        placeholder="What needs to be done?"
        onChange={this.onTextChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}
