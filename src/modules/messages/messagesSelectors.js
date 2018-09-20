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

export const getMessagesById = state => state.messages.byId;
export const getCurrentMessageId = state => state.messages.currentMessageId;
export const getIsLoud = state => state.messages.isLoudMode;

export const getCurrentMessage = createSelector(
    [getMessagesById, getCurrentMessageId],
    (messagesById, currentMessageId) => {
        return messagesById[currentMessageId];
    });

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
    [getMessagesById, getCurrentMessageId],
    (messagesById, currentMessageId) => {
        return Object.keys(messagesById).map((messageId) => {
            const message = messagesById[messageId];
            return {
                ...message,
                current: message.id === currentMessageId,
            }
        }).sort((a, b) => a.title.localeCompare(b.title));
    }
);
