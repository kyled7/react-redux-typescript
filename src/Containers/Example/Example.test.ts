import * as actions from "./ExampleActions"
import * as constants from "./ExampleConstants"
import reducer, { initialState } from './ExampleReducers'
import { ExampleState, Todo } from "./ExampleTypes";
import uuid from "uuid/v4";

describe('ExampleActions', () => {
  it('should create an action to add todo', () => {
    const name = 'Test1'
    const expectedAction : actions.AddTodoAction = {
      type: constants.ADD_TODO,
      payload: name
    }
    expect(actions.addTodo(name)).toEqual(expectedAction)
  })
  it('should create an action to toggle todo', () => {
    const id = "aaaa"
    const expectedAction : actions.ToggleTodoAction = {
      type: constants.TOGGLE_TODO,
      payload: id
    }
    expect(actions.toggleTodo(id)).toEqual(expectedAction)
  })
  it('should create an action to change filter', () => {
    const filter = constants.FILTER_ALL
    const expectedAction : actions.ChangeFilterAction = {
      type: constants.CHANGE_FILTER,
      payload: filter
    }
    expect(actions.changeFilter(filter)).toEqual(expectedAction)
  })
})

describe('ExampleReducer', () => {
  it('should handle ADD_TODO', () => {
    const todoTitle = "Test new todo"
    const resultState = reducer(initialState, actions.addTodo(todoTitle))
    expect(resultState.todos.map(i=>i.title)).toContain(todoTitle)
  })
  it('should handle TOGGLE_TODO', () => {
    const todo: Todo = {
      id: uuid(),
      title: "Test todo",
      isCompleted: false
    }
    const state: ExampleState = { ...initialState, todos: [ todo ]}
    const resultState = reducer(state, actions.toggleTodo(todo.id))
    expect(resultState.todos.find(i=> i.id === todo.id).isCompleted).toEqual(true)
  })
  it('should handle CHANGE_FILTER', () => {
    const resultState = reducer(initialState, actions.changeFilter(constants.FILTER_COMPLETED))
    expect(resultState.filter).toContain(constants.FILTER_COMPLETED)
  })
})