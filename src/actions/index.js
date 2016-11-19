import axios from "axios";

const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo
});

const getTodos = (todos) => ({
  type: 'GET_TODOS',
  todos
});


export const signIn = (data) => ({
  type: "SIGN_IN",
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


export function addTodoCreator(title) {

 const request = axios.post("http://localhost:8080/api/todos", {title});

  return (dispatch) => {
      request.then(function(response) {
        axios.get("http://localhost:8080/api/todos/" + title)
          .then(function(res) {
            dispatch(addTodo(res.data));
          })
      });
  };
}

export function signInCreator(email, password) {

    return (dispatch) => {
      axios.get(`http://localhost:8080/api/users/${email}`)
        .then(function(response) {

          if(response.data == null) console.log("%c Wrong email address!", "color: red; font-size: 25px");
          else if(password != response.data.password) console.log("%c Wrong password!", "color: red; font-size: 25px");
            else {
              console.log("%c Krasava!", "color: red; font-size: 25px");
              dispatch(signIn(response.data));
              localStorage.setItem('auth', true);
              location.hash = "/home";
            }


        });
    }

}
