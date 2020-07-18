import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers';
import { AppActionType } from '../actions/action.types';

export type AppState = ReturnType<typeof rootReducer>;

export const Store = createStore(
  rootReducer,
  composeWithDevTools(
    // eslint-disable-next-line prettier/prettier
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActionType>)
    )
);
