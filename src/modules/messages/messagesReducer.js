import shortid from 'shortid';

import { CREATE_MESSAGE, SELECT_MESSAGE } from './messagesActions';

const initialState = {
  // Fill in initial state here.
  // This initial state definition should include all state properties used by
  // this reducer, even if some state (such as the currently selected message's ID)
  // are not known at initialization time (in those cases, just set the initial value
  // to something like `null` or `undefined` and handle those values accordingly).
  //
  // Here, we're going to want to store:
  //   - the list of messages (by ID),
  //   - the ID of the currently selected message
  //   - the current type for the right pane of the MessageViewer (which toggles
  //     between MessagePane and LoudMessagePane). You should use a string or boolean
  //     instead of storing MessagePane / LoudMessagePane directly in state, because
  //     strings and booleans are serializable and the components are not. Redux state should
  //     always be serializable, so development features like time traveling are possible.
  //
  // The message list has been filled out already, using the data from `src/data/messages.js`.
  byId: {
    122019: {
      id: 122019,
      title: 'The Godfather',
      author: 'Marlon Brando',
      body: 'I\'m gonna make him an offer he can\'t refuse.'
    },
    289103: {
      id: 289103,
      title: 'Forrest Gump',
      author: 'Tom Hanks',
      body: 'My mama always said life was like a box of chocolates. You never know what you\'re gonna get.'
    },
    938900: {
      id: 938900,
      title: 'The Terminator',
      author: 'Arnold Schwarzenegger',
      body: 'I\'ll be back.'
    }
  },

  selectedId: null
}

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    // Fill in the other cases here, above the default case.
    // Each case should be an action type constant, e.g. `case DELETE_ALL_MESSAGES:`
    // (not an actual action we're going to implement, but you get the idea).
    //
    // Remember: ALWAYS RETURN A NEW STATE OBJECT (currentState !== nextState) if
    // anything is being updated - do not simply mutate `state` and return it.
    // The reason the default case does not follow this guideline is because it
    // didn't update anything. The default case is only reached when the reducer
    // receives an action that it doesn't handle, so its state should not change.
    //
    // Let's say we want to update the state to set the 'foo' property to 12345.
    // -- GOOD --:
    // return {
    //   // this ... syntax means to shallow copy the properties of `state` into this new object
    //   ...state,
    //   foo: 12345
    // }
    //
    // -- BAD --:
    // state.foo = 12345;
    // return state;
    //
    case CREATE_MESSAGE:
      let data = action.data;
      let newMsgList = {...state.byId};
      let id = shortid();
      newMsgList[id] = {...data, id: id};
      return {
        ...state,
        byId: newMsgList
      };
    case SELECT_MESSAGE:
      return {
        ...state,
        selectedId: action.id
      };
    default:
      return state;
  }
}
