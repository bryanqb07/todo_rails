import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions';
import merge  from 'lodash/merge'


const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    }
};

const todosReducer = (oldState = initialState, action) => {
    switch(action.type){
        case RECEIVE_TODOS:
            return action.todos;
        case RECEIVE_TODO:
            let updatedState = merge({}, oldState)
            updatedState[action.todoItem.id] = action.todoItem;
            return updatedState;   
        case REMOVE_TODO:
            let newState = merge({}, oldState)
            delete newState[action.id];
            return newState;   
        default:
            return oldState;
    }
}

export default todosReducer; 

