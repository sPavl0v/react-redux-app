const items = (state = 'signIn', action) => {

  switch (action.type) {
    case 'TOGGLE_FORM':
      console.log('TOGGLE_FORM');
      return action.value;

    default:
      return state
  }
}

export default items
