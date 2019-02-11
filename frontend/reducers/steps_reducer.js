import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';
import merge from 'lodash/merge'


const defaultState = {
    1: { 
        id: 1,
        title: 'walk to store',
        done: false,
        todo_id: 1
    },
    2: { 
        id: 2,
        title: 'buy soap',
        done: false,
        todo_id: 1
    }
};

const stepsReducer = (oldState = defaultState, action) => {
    switch(action.type){
        case RECEIVE_STEPS:
            return action.steps;

        case RECEIVE_STEP:
            let updatedState = merge({}, oldState)
            updatedState[action.stepItem.id] = action.stepItem;
            return updatedState; 
 
        case REMOVE_STEP:
            let newState = merge({}, oldState)
            delete newState[action.id];
            return newState; 

        default:
            return oldState;
    }
}

export default stepsReducer;

