export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const REMOVE_TODO = "REMOVE_TODO";

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



