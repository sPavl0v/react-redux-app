const items = (state = 'todos', action) => {
  switch (action.type) {
    case 'ITEMS_CHANGED':
      console.log('ITEMS_CHANGED');
      return action.value;

    // case 'SIGN_IN':
    //   console.log('bla blaa');
    //   return state;

    default:
      return state
  }
}

export default items
