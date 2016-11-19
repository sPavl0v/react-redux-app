const user = (state = {
  email: undefined,
  username: undefined,
  password: undefined,
  todos: undefined,
  done: undefined,
  notifications: undefined
}, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      console.log('SIGN_IN');
      return Object.assign({},state, action.data);

    default:
      return state;
  }
}

export default user;
