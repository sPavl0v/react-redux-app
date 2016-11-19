import { combineReducers } from 'redux'
import todos from './todos';
import done from './done';
import notifications from './notifications';
import items from "./items";
import user from "./user";

const todoApp = combineReducers({
  user,

})

export default todoApp
