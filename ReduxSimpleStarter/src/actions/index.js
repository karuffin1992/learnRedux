// User clicks an option.

// Action creator is called.
// function(return {
//   type: thisAction,
//   book : { title: 'This Book' }
// })

// Action creator will return an action, as
// well as any other parameters related to the action.

// Action is automatically sent to all reducers.

// All reducers will process the action and returns the new state.
// New state will be assembled and all containers are notified
// of the changes to the state.
// On notification, containers will rerender with new props.

export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.

  // Always contains a type, always in uppercase.
  // Sometimes contains a payload.

  // payload == piece of data
  // Most commonly used naming convention
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
