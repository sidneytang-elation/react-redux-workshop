/**
 * Define your Redux action creators in this file.
 * An action creator is a function that returns a Redux action. Redux actions are
 * plain objects with a required `type` property and any number of optional other
 * properties. The type property's value should be a string constant rather than
 * a string literal. For example, an action creator to set the number of wheels
 * for a vehicle to 4 might look like this:
 *   export const SET_NUMBER_OF_WHEELS = 'SET_NUMBER_OF_WHEELS';
 *   export function setNumberOfWheels() { <-- this is the action creator
 *     return {
 *       type: SET_NUMBER_OF_WHEELS,
 *       vehicleId: 389214,
 *       numberOfWheels: 4
 *     }
 *   }
 *
 * Note that the action type constant and the action creator are both exported.
 * These are typically used in very specific places in the code:
 * - action type constants are normally used ONLY in reducers, more specifically
 *   as part of their switch cases. Example:
 *     switch (action.type) {
 *       case SET_NUMBER_OF_WHEELS:
 *         // ...return something cool
 *       // rest of cases plus default case
 *     }
 *
 * - action creators are called and the returned value is used as the argument to
 *   the redux store's `dispatch` function. Most of the time you'll get a handle
 *   to the store's `dispatch` by using the `mapDispatchToProps` function that
 *   react-redux wants. Example:
 *     const mapDispatchToProps = dispatch => ({
 *       setWheels: (vehicleId, numberOfWheels) => {
 *         dispatch(setNumberOfWheels(vehicleId, numberOfWheels));
 *       }
 *     })
 *   The component can then dispatch the action by calling `this.props.setWheels(28193, 7)`.
 */

 // A declaration to get you started
 export const CREATE_MESSAGE = 'CREATE_NEW_MESSAGE';
 export function createMessage(id, title, author, body) {
   return {
     type: CREATE_MESSAGE,
     ...{id, title, author, body},
   }
 }

 export const SELECT_MESSAGE = 'SELECT_MESSAGE';
 export function selectMessage(messageId) {
   return {
     type: SELECT_MESSAGE,
     messageId: messageId,
   }
 }

 export const SET_LOUD_MODE = 'SET_LOUD_MODE';
 export function setLoudMode(isLoudMode) {
   return {
     type: SET_LOUD_MODE,
     isLoudMode: isLoudMode,
   }
 }
