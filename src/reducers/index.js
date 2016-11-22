import { combineReducers } from 'redux'
import todos from './todos';
import items from "./items";
import user from "./user";
import form from "./form";

const todoApp = combineReducers({
  user,
  items,
  form,
})

export default todoApp
