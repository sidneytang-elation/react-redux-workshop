## Goal
In this workshop, we're going to get familiar with React (and later, Redux) by building a simple message viewer component that supports listing messages, displaying message contents, and adding messages.

Some helpful links:
- [Official React docs](https://facebook.github.io/react/docs/hello-world.html)
    - If you don't want to or have time to read all of the docs, try to at least read [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
- [Official React tutorial](https://facebook.github.io/react/tutorial/tutorial.html)

*Note: This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).*

## Setup
After cloning this repo, run `npm install` inside the repo's root directory (it should be the same directory this README is in) to install dependencies. Then, run `npm start` to run the app in development mode (we won't concern ourselves with production mode for now); this should open http://localhost:3000 in your browser. In development mode, hot reloading is enabled, so any CSS/LESS changes and React component changes you make will automatically be reflected in your browser window without requiring a page refresh.

![Initial component](https://github.com/sidneytang-elation/react-redux-workshop/raw/master/images/react-workshop-app-initial.png "Initial component")

The above is what you should see in the browser when you start up the dev server.

**Note**: If you encounter an error running `npm install`, you may need to update your installation of Node. For Elation's main app in particular, you'll need v4 or higher, with v6 or higher being strongly preferred (as well as `npm` v3 or higher). You can check out http://www.hostingadvice.com/how-to/update-node-js-latest-version/ for some examples on how to update Node.

It is also strongly recommended that you install the [React Developer Tools Chrome extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en). This will add a tab called React to your developer tools pane where you can inspect your component tree and each component's state and props.

## Building a simple message viewer component

### Specifications
- The left column (`src/components/MessageList.jsx`) should contain the list of messages:
  - Each message has four properties: `id`, `title`, `author`, and `body`. The latter 3 properties should be displayed in the UI, while the `id` should be used as the component key when rendering the list of messages.

  - You can find an array of sample messages in `src/data/messages.js`. This array should be used to seed the initial state of the message list.

  - Clicking a message when it's not highlighted should highlight the message, and clicking a message when it's highlighted should remove the highlight. Multiple messages can be highlighted at the same time.

- The right column (`src/components/MessagePane.jsx`) should contain a form that enables the user to create new messages:

  - There should be 3 input fields: one each for title, author, and body, respectively.

  - There should be 2 buttons: one to save and create a new message, and one to reset the 3 input fields to empty.

  - Messages should appear in the left column when created


Here's an example of what the finished component might look like (note that your finished component doesn't need to look like this exactly - but it should contain the same form elements and show the same message properties in the message list):

![Finished component](https://github.com/sidneytang-elation/react-redux-workshop/raw/master/images/react-workshop-app-goal.png "Finished component")

### Code Overview
The components directory already contains three component files, along with their style files, but you'll most likely want to add a few more components. You won't need to concern yourself with modifying any directory other than `src/components` to complete the message viewer.

Note how each component's styles are located in their corresponding `.less` files - we're using CSS modules to locally scope styles so we don't have to deal with the headaches of global CSS. You can even use the exact same class name in multiple components' `.less` files and each one will be scoped to the corresponding component only. This is exactly what's being done in `MessageList.less`, `MessagePane.less`, and `MessageViewer.less` with the `.container` class. You can take a look at any of the three preexisting component files for an example of how to use the styles defined in the LESS modules (look at the import statements).

### Tips
- To define initial state for a component, you can use the class property syntax:
```javascript
export default class MyComponent extends React.Component {
    state = { name: 'i am some initial name' }
}
```
- To define functions inside React component classes, you will almost always want to use this syntax (class property arrow function):
```javascript
export default class MyComponent extends React.Component {
    // Defines a function that can be referred to with `this.handleClick`,
    // and called with `this.handleClick()`
    handleClick = (clickEvent) => {
      // When a function is defined this way, it gets bound to this
      // component. Any `this` references will always refer to the
      // component itself, even if the function is passed around
      // to many places, such as callbacks for other functions.
      //
      // If handleClick was not bound to this component, the following
      // call would probably fail if the function was passed outside of
      // this component and called by something else (most likely a
      // subcomponent), but since it's bound, we're ok.
      this.setState({ dummyProperty: 'yay, no error' });
    }
}
```
- To render a component for each item in an array, the standard convention is to use `Array.map`. When doing this, you need to give each rendered component a key that uniquely identifies it. Most of the time, it should be clear what to use as the key - for example, if you're rendering a list of pictures based on an array of users, the natural key to use would be the user ID.
```javascript
const words = ['welcome', 'to', 'react', 'redux'];
export default class MyComponent extends React.Component {
    // ... other component functions
    render() {
      // This will render:
      // <div>
      //   <span>welcome</span>
      //   <span>to</span>
      //   <span>react</span>
      //   <span>redux</span>
      // </div>
      return (
        <div>
          // The key is defined here as the word itself to keep things
          // simple, but this is probably a bad key for this specific
          // code snippet. What if another 'welcome' string gets added
          // to the words array? Actually, there is no good key to use
          // for the words array unless we assume the array is immutable
          // (in which case the word itself would be a good key, since
          // each word is currently unique).
          {words.map(word => <span key={word}>{word}</span>)}
        </div>
      );
    }
```
- The simplest way to handle form fields in React is to make each input controlled by component state. To do this, give the form (in this case `MessagePane.jsx`) an initial state that contains all the form field values. Make sure the values are initialized to an empty string. Then, in the `render` function, give each input element a `value` prop that equals the corresponding value in state, as well as an `onChange` prop that responds to input change events by updating the form state. The simplest version of an `onChange` handler looks something like:
```javascript
handleNameChange = (changeEvent) => {
    this.setState({ name: changeEvent.target.value });
}
```
- When handling the save button click for `MessagePane.jsx`, you have access to what the created message's title, author, and body should be (since there are form fields for them), but you will need to generate an ID for the new message yourself. This can be done by importing `shortid`.
```javascript
import shortid from 'shortid';
// generates a unique ID
shortid.generate();
```
- A very helpful utility for setting class names on components is the `classnames` npm package. Within our codebase, it's commonly imported as:
```javascript
import cn from 'classnames';
// you could also do this, but `cn` is an established convention
// and shorter to write
import classnames from 'classnames';
```
`classnames` allows us to concatenate class names in a readable way, additionally supporting conditional concatenation. Here's an example:
```javascript
<div className={cn('hello', isSmart && 'genius', 'orange')} />
```
The output of this snippet when `isSmart` is true is:
```javascript
<div className="hello genius orange" />
```
If `isSmart` is false, the output is instead:
```javascript
<div className="hello orange" />
```
More specifically, any argument to the `cn`/`classnames` function that evaluates to falsy is excluded from the resulting class name.
