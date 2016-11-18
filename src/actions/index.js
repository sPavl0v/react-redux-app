import axios from "axios";

const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo
});

const getTodos = (todos) => ({
  type: 'GET_TODOS',
  todos
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
