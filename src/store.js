import { createStore, applyMiddleware } from "redux";
import rootReducer from './components/reducers';
import { authMiddleware } from './authMiddleware';

export const store = createStore(rootReducer, applyMiddleware(authMiddleware));
