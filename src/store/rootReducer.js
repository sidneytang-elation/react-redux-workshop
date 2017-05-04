import { combineReducers } from 'redux';
import messagesReducer from '../modules/messages/messagesReducer';


/**
 * This will result in a root reducer state object that looks like this:
 *
 * {
 *   messages: {
 *     // `state` object as created and updated in `messagesReducer`
 *   }
 * }
 *
 * You can see this in redux dev tools.
 */
const rootReducer = combineReducers({
  messages: messagesReducer
});

export default rootReducer;
