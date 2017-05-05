import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';


/**
 * This creates the store for our application using the given root reducer.
 *
 * `composeWithDevTools` is used to set up the link with Chrome's redux dev tools
 * extension (if you have it installed), and `applyMiddleware(logger)` initializes
 * the redux logger, which will log redux actions in the browser console. Both of
 * these are very helpful for development and debugging.
 */
const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(logger),
  ),
);

export default store;
