import axios from "axios";


const getTodos = (todos) => ({
  type: 'GET_TODOS',
  todos
});



export const signIn = (data) => ({
  type: "SIGN_IN",
  data
});

export const logOut = () => ({
  type: 'LOG_OUT'
});

export const toggleForm = (value) => ({
  type: 'TOGGLE_FORM',
  value
});


const userCreated = () => ({
  type: 'USER_CREATED'
});

const updateUser = (data) => ({
  type: 'UPDATE_USER',
  data
});

const doSth = (data) => ({
  type: 'DO_STH',
  data
});



export const addNote = (title) => ({
  type: 'ADD_NOTE',
  id: nextTodoId++,
  title
});

export const addDone = (title) => ({
  type: 'SOMETHING_DONE',
  id: nextTodoId++,
  title
});

export const changeItems = (value) =>({
  type: 'ITEMS_CHANGED',
  value
});


// CREATORS

export function getTodosCreator() {

  return (dispatch) => {
    axios.get("http://localhost:8080/api/todos")
      .then(function(response) {
        dispatch(getTodos(response.data));
      });
  };
}


export function addTodoCreator(user, title) {

  return (dispatch) => {
          axios.put(`http://localhost:8080/api/users/${user.email}`, {
            todos: (user.todos == "") ? (`${title}`) : (`${user.todos},${title}`),

            // TODO: fis done and notes

            done: user.done,
            notifications: user.notifications,

          }).then(function(response) {
            dispatch(updateUser(response.data));
        });
  };
}

export function reSignIn(email) {
  return (dispatch) => {

    axios.get(`http://localhost:8080/api/users/${email}`)
      .then(function(response) {
        dispatch(signIn(response.data));
      });

  }
}



export function signInCreator(email, password) {

    return (dispatch) => {
      axios.get(`http://localhost:8080/api/users/${email}`)
        .then(function(response) {

          if(response.data == null) console.log("%c Wrong email address!", "color: red; font-size: 25px");
          else if(password != response.data.password) console.log("%c Wrong password!", "color: red; font-size: 25px");
            else {
              dispatch(signIn(response.data));
              localStorage.setItem('auth', true);
              localStorage.setItem('email', email);

              location.hash = "/home";
            }

        });
    }

}

export function createUser(email, password, username) {

  return (dispatch) => {
    axios.post('http://localhost:8080/api/users', {email, password, username})
    .then((response) => {
      if(response.data.message == 'User created') {
        console.log('User created!');
        dispatch(userCreated());
        dispatch(toggleForm('signIn'));
      }
    })
  }

}


export function doSthCreator(user, title) {
  let todos = user.todos.split(',');

  todos.forEach( (elem,i) => {
    if(elem == title) todos.splice(i,1);
  });

  return (dispatch) => {
    axios.put(`http://localhost:8080/api/users/${user.email}`, {

      todos: todos.join(','),
      done: (user.done == "") ? (`${title}`) : (`${user.done},${title}`),
      notifications: user.notifications

      }).then(function(response) {
        dispatch(doSth(response.data));
      });
  }
}

export function logOutCreator() {
  return (dispatch) => {
    dispatch(logOut());
    dispatch(toggleForm('signIn'));
  }
}
