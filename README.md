## Goal
In this part of the workshop, we're going to expand our message viewer component with additional functionality that Redux is well-suited to handle ([Part 1 of the workshop](https://github.com/sidneytang-elation/react-redux-workshop/blob/master/README.md), in case you missed it).

Some helpful links to read:
- [Redux](http://redux.js.org/docs/basics/) (recommended)
  - there's a lot of info here, but Basics is probably the best place to start.
- [Redux with React](http://redux.js.org/docs/basics/UsageWithReact.html) (recommended)
- [Reselect](https://github.com/reactjs/reselect) (only if you really want to)

## Setup
We're going to pick up from where we left off in part 1, so it's assumed that you have some code you already wrote and want to build off of it. You can either `git checkout -b [new_branch_name]` or stick with your current branch.

There are several files you'll want to check out from the `redux_start` branch of the repo:
```shell
git checkout redux_start src/components/LoudMessagePane.jsx
git checkout redux_start src/components/LoudMessagePane.less
git checkout redux_start src/modules/messages/.
git checkout redux_start src/store/.
git checkout redux_start src/App.js
git checkout redux_start package.json
```
Since there are some new dependencies declared in `package.json`, be sure to run `npm install` once you've checked these files out. Don't worry about files being overwritten - most of these files are new, and the two that aren't (`src/App.js` and `package.json`) were probably not touched in part 1 (even if they were, it's fine to overwrite them).

**IMPORTANT**: Most of the files checked out above have been thoroughly commented - you can read through them for more information. They may help with understanding the spec and how to approach the task at hand.

It is also strongly recommended that you install the [Redux DevTools Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en). This will add a button to the right of the address bar that toggles the Redux dev tools popup, where you can view the current state of the app, dispatch arbitrary actions, and time travel/replay actions.

## Expanding our simple message viewer component

### Specifications
- Left column (`src/components/MessageList.jsx`):

  - The list of messages should no longer reside in component state. Messages should be stored in `messagesReducer` and fed into `MessageList` with `mapStateToProps`/`connect`.

  - Messages should be displayed in alphabetical title order. New messages that are created should appear in their correct sorted place in the list, rather than blindly appended to the end of the list. You'll want to use a selector to handle this.

  - Multiple messages may no longer be selected at the same time. Only one message can be selected at a time. If a message is clicked while another message is selected, the other message should be deselected and the clicked message should be selected. If a message is clicked while it is already selected, it should be deselected and leave no messages selected. Keeping track of which message is selected should be done in Redux (`messagesReducer.js`), because the right column is going to want to know too.

- Right column (`src/components/MessagePane.jsx`):

  - There should now be two modes for the right column: regular (`MessagePane.jsx`) and "loud" (`LoudMessagePane.jsx`). You do **NOT** need to retain the regular mode's form state between mode changes (so regular --> loud --> regular doesn't need to have the form fields in the same state they were in before switching to loud. Empty fields is fine).

  - The regular mode is the same message creation form from part 1, with the addition of a button that can be clicked to switch to "loud" mode.

  - The loud mode just displays the currently selected message's body (**IN LARGE AND OBNOXIOUS BOLD CAPS**, which is already handled by the included styles - all you need to do is render the text). If no message is currently selected, a message like "No message is currently selected" should be displayed instead of a message body. There should also be a button that can be clicked to switch back to regular mode.


### Code Overview
There are two new directories to note: `modules/messages` and `store`.

`modules/messages` is a directory that contains the store data flow logic for messages, spread across multiple files: actions, selectors, and the reducer. This is a common pattern in the new modern part of Elation's front-end code.

`store` is a directory that contains store setup logic. Its default export (specified in `store/index.js`) is the initialized store for the app. Everything else in the directory is just used to set up the store and should be considered "directory-private".

For this part of the workshop, expect to only need to modify files in `src/components` and `src/modules/messages`. You may not even need to create any new files (after checking out the files as described in [Setup](#setup)).

### Tips
No tips in the README this time! Instead, you can read the comments in the files checked out during setup, or refer to the links listed in [Goal](#goal).
