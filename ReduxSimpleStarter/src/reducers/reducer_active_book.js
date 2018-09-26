// All reducers have 2 arguments: state and action
// State argument is not application state, only
// the state this reducer is responsible for.

// Most redux reducers are set up with switch statements.

// ES6 -> state = null
// Like SQL Server Stored Procedures, predefine value
// if value is not provided.
// state = null if state is not provided.
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
