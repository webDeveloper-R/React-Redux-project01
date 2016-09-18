import React, { Proptypes } from 'react';
import cssmodules from 'react-css-modules';
import styles from './todolist.cssmodule.sass';
import Todo from './Todo'

@cssmodules(styles)

const TodoList = ({ todos, onTodoClick }) => (
<ul>
{todos.map(todo =>
<Todo
key={todo.id}
{...todo}
onClick={() => onTodoClick(todo.id)}
/>
)}
</ul>
)
/*
class TodoList extends React.Component {

  render() {
    return (
      <div className="todolist-component" styleName="todolist-component">
        Please edit src/components//TodoList.js to update this component!
      </div>
    );
  }
}
*/

TodoList.displayName = 'TodoList';
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};
TodoList.defaultProps = {};

export default TodoList;
