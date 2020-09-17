import actionTypes from "../actions/actionTypes";


const initialState = {
    todos: [],
    error: []
}

const todoReducer = (state = initialState,action) => {
    
    switch(action.type){
        
        case actionTypes.TODO_FETCH_REQUEST : {
            return {
                ...state,
            }
        }
        case actionTypes.TODO_FETCH_SUCCEEDED : {
            return {
                ...state,
                todos: action.todos
            }
        }
        case actionTypes.TODO_FETCH_FAILED : {
            return {
                ...state,
                error: action.message
            }
        }

        default : return state;
    }
}

export default todoReducer;