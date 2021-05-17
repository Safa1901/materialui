import { AUTHENTICATE, logIn } from "./actions";
import {serverLogIn} from './components/api';

export const authMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTHENTICATE) {
        const {email, password} = action.payload;
        const response = await serverLogIn(email, password)
        if(response !== undefined){
            sessionStorage.setItem()
            store.dispatch(logIn())
        }
    } else {
        next(action);
    }
};