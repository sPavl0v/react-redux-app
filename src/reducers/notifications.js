const notifications = (state = [
  {id: 111, title: 'note 1'},
], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      console.log('ADD_NOTE');
      return state;

    default:
      return state
  }
}

export default notifications
