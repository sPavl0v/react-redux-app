const user = (state = {
  email: undefined,
  username: undefined,
  password: undefined,
  todos: "",
  done: "",
  notifications: "",
}, action) => {
  switch (action.type) {

    case 'LOG_OUT':
      console.log('LOG_OUT');
      return Object.assign({}, {
        email: undefined,
        username: undefined,
        password: undefined,
        todos: "",
        done: "",
        notifications: "",
      });
      break;

    case 'SIGN_IN':
      console.log('SIGN_IN');
      return Object.assign({}, state, action.data);


    case 'UPDATE_USER':
      console.log('UPDATE_USER');
      return Object.assign({}, state, action.data);


    case 'DO_STH':
      console.log('DO_STH');
      return Object.assign({}, state, action.data);


    case 'USER_CREATED':
        console.log('USER_CREATED');
        return Object.assign({}, state);

    default:
      return state;
  }
}

export default user;
