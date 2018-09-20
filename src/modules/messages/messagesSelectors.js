/**
 * Selectors are functions that compute derived data from the redux store's state.
 *
 * There are two main types of selectors: we'll call them 'simple' and 'complex'.
 * - 'simple' selectors are very brief functions that take the redux store state and
 *   return some piece of data. These selectors by themselves rarely do anything useful.
 *   They're usually used as arguments to `createSelector` when creating 'complex'
 *   selectors. An example of a simple selector that returns the current user's ID would be:
 *     (state) => state.currentUser.id
 *
 * - 'complex' selectors are selectors created with `createSelector` (such as `getMessages`
 *   below). These are the selectors that connected components use, in their `mapStateToProps`
 *   function. Using a 'complex' selector called `getCurrentUserSelector` looks something like this:
 *     const mapStateToProps = state => ({
 *       user: getCurrentUserSelector(state),
 *       // ...
 *     });
 */
import { createSelector } from 'reselect';


/**
 * This selector should return the list of messages as an array, sorted alphabetically
 * by title.
 *
 * This type of selector is common, because we always want to store entities by ID
 * in state, but components often want to consume entity lists as arrays instead.
 * Selectors take data from state and compute some value based on that data - in this
 * case, that value is the sorted array of messages.
 */
export const getMessages = createSelector(
  // The first argument to `createSelector` is either a single selector or an array of
  // selectors that the selector we're creating depends on. For this selector, we depend
  // on the messages stored in `messagesReducer`.
  (state) => {}, // replace this return value with what we actually want
  // The second argument to `createSelector` is a function that uses the piece(s) of data
  // selected by the selector(s) in the first argument and returns the derived data we
  // want to use in our components - so this function should return the sorted messages array.
  (messagesById) => {
    return []; // replace this return value with what we actually want
  }
)
