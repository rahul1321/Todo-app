import actionTypes from "../actions/actionTypes";


const initialState = {
    isAuthenticate: false,
    email: "",
    password: ""
}

const loginReducer = (state = initialState,action) => {
    
    switch(action.type){
        // case actionTypes.LOGIN : {
        //     return {
        //         ...state,
        //         email: action.data.email,
        //         password: action.data.password
        //     }
        // }
        case actionTypes.LOGIN_CHECK : {
            return {
                ...state,
                isAuthenticate: action.isAuthenticate
            }
        }
        case actionTypes.IS_AUTHENTICATE : {
            return {
                ...state,
                isAuthenticate: action.isAuthenticate
            }
        }
        case actionTypes.LOGIN_FAILED : {
            return {
                ...state,
                isAuthenticate: action.isAuthenticate
            }
        }

        default : return state;
    }
}

export default loginReducer;