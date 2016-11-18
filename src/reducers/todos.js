const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('ADD_TODO');
      return [].concat(state, {_id: action.todo._id, title: action.todo.title});


    case 'GET_TODOS': {
      console.log('GET_TODOS');
      return [].concat(state, ...action.todos);
      break;
    }


    // case 'UPDATE_TODOS': {
    //   console.log('UPDATE_TODOS');
    //   return [].concat(state);
    //   break;
    // }


    default:
      return state;
  }
}

export default todos
