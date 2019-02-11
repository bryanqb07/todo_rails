import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from '../store/store';
import Root from '../components/root'

import { fetchTodos } from './todo_api_util'
// window.fetchTodos = fetchTodos;
//
// window.successCB = response => console.log(response);
// window.failCB = error => console.log(error);

document.addEventListener("DOMContentLoaded", ()=>{
    const preloadedState = (localStorage.state) ?
        JSON.parse(localStorage.state) : {};

    let store = configureStore(preloadedState);
    const rootEl = document.getElementById("content")

    ReactDOM.render(<Root store={store} />, rootEl);
})
