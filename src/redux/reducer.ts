import {
    SET_IS_LOGIN
} from './type';

const initialState = {
    isLogin: false
}

const appInfoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_IS_LOGIN:
            return {
                ...state,
                isLogin: action.payload
            };

        default:
            return state;
    }
}

export default appInfoReducer;