export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const REMOVE_TODO = "REMOVE_TODO";

import * as APIUtil from '../util/todo_api_util';

export const receiveTodos = (todoItems) => {
    let todosObj = {
        type: RECEIVE_TODOS,
        todos: {}
    };
    todoItems.forEach( (todo) => todosObj.todos[todo.id] = todo )
    return todosObj;
}

export const receiveTodo = (todoItem) => (
    {
        type: RECEIVE_TODO,
        todoItem
    }
)

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
});

export const fetchTodos = () => dispatch => (
    APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
)

export const createTodo = (todo) => dispatch => (
    APIUtil.fetchTodos(todo).then(newTodo => dispatch(receiveTodo(newTodo)))
)



