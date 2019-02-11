import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer'

// custom middleware
const addLoggingToDispatch = store => next => action => {
    console.log(`old state: `, store.getState());
    console.log(`action:`, action);
    let result = next(action);
    console.log(`new state: `, store.getState());
    return result;
}
//

const configureStore = (preloadedState = {}) => {
    const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch));
    store.subscribe(()=>{
        localStorage.state = JSON.stringify(store.getState());
    });
    return store;
}

export default configureStore;
