import { logIn } from '../actions';
import {serverLogin} from './api';
import {AUTHENTICATE} from '../actions';

export const uathMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTHENTICATE){
        const {email, password} = action.playload;
        const success = await serverLogin(email, password)
        if(success){
            store.dispatch(logIn())
        }
    } else {
        next(action)
    }
};