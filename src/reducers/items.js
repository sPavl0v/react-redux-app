const items = (state = 'todos', action) => {
  switch (action.type) {
    case 'ITEMS_CHANGED':
      console.log('ITEMS_CHANGED');
      return action.value;

    default:
      return state
  }
}

export default items
