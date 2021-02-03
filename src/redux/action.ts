import {
    SET_IS_LOGIN
} from './type'

export const setIsLogin = (login: boolean) => {
    return {
        type: SET_IS_LOGIN,
        payload: login
    }
}