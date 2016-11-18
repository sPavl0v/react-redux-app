import { combineReducers } from 'redux'
import todos from './todos';
import done from './done';
import notifications from './notifications';
import items from "./items";

const todoApp = combineReducers({
  todos,
  done,
  notifications,
  items,
})

export default todoApp
