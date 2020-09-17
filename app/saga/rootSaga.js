import { call, put,take, takeEvery, takeLatest } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes';
import Api from '../api/api';

function* fetchTodos() {
    try {
        const todos = yield call(Api.fetchAllTodos);
        yield put({type: actionTypes.TODO_FETCH_SUCCEEDED, todos: todos});
    } catch (e) {
       yield put({type: actionTypes.TODO_FETCH_FAILED, message: e.message});
    }
 }

 function* loginCheck(data) {
    /*if(data.email == "rahulbgc21@gmail.com" && data.password == "12345"){
        localStorage.setItem("isAuthenticate",true);
        window.location.href = "/";
    }*/

    if(localStorage.getItem("isAuthenticate") != null)
        yield put({type: actionTypes.IS_AUTHENTICATE, isAuthenticate:true})
    else
        yield put({type: actionTypes.IS_AUTHENTICATE, isAuthenticate:false})
}

function* rootSaga(){
    //console.log('rootSaga');
    //yield takeEvery(actionTypes.LOGIN_CHECK,loginCheck)
    yield takeEvery(actionTypes.TODO_FETCH_REQUEST, fetchTodos);
}


export default rootSaga;