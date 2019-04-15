import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga(action) {
    yield takeEvery('GET_PROJECTS', projectListSaga);
    yield takeEvery('DELETE_PROJECT', deleteProjectSaga);
}

// ------ SAGAS -------
function* projectListSaga(action) {
    console.log('Hit the project saga', action);

    try {
        const getResponse = yield axios.get('/project');
        console.log(getResponse);
        const action = {
            type: 'SET_PROJECTS',
            payload: getResponse.data
        };
        // Dispatch (using put) an action to our reducers to update our redux store 
        yield put(action);
    } catch (error) {
        console.log(`Couldn't get projects`, error);
        alert(`Sorry, couldn't get the projects. Try again later`);
    }
}

function* deleteProjectSaga(action) {
    console.log('hit the delete project saga', action);
    try {
        yield axios.delete(`/project/${action.payload}`)
        yield put({
            // call get request and rerender w/ new list values
            type: 'GET_PROJECTS'
        });
    } catch (error) {
        console.log(`Couldn't delete project`, error);
        alert(`Sorry, couldn't delete the project. Try again later`);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Project list reducer - will hold projects from server
// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
