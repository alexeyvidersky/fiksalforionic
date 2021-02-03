import { createStore, combineReducers } from 'redux';
import appInfoReducer from './reducer';

const rootReducer = combineReducers({
    appInfo: appInfoReducer
})

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;