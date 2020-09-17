import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers/combineReducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import actionTypes from '../actions/actionTypes';


const sagaMiddleware = createSagaMiddleware()


const store = createStore(combineReducers,applyMiddleware(sagaMiddleware));


sagaMiddleware.run(rootSaga);

//store.dispatch({type: actionTypes.LOGIN_CHECK});

export default store;