import React, { PropTypes } from 'react';
import cssmodules from 'react-css-modules';
import styles from './todo.cssmodule.sass';

@cssmodules(styles)
/*
class Todo extends React.Component {

  render() {
    return (
      <div className="todo-component" styleName="todo-component">
        Please edit src/components//Todo.js to update this component!
      </div>
    );
  }
}
*/

const Todo = ({ onClick, completed, text }) => (
  <li
  onClick={onClick}
  style={{
    textDecoration: completed ? 'line-through' : 'none'
  }}
  >
  {text}
  </li>
)

Todo.displayName = 'Todo';
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};
Todo.defaultProps = {};

export default Todo;
