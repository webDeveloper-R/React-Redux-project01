/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */

import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/const';


/*
 * action creators
 */

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}
