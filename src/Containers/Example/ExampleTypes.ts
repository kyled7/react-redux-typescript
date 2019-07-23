export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}
export interface ExampleState {
  todos: Array<Todo>;
  filter: string;
  loading: boolean;
}
