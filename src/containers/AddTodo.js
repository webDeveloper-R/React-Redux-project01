/*
import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {} from '../actions/';
import Main from '../components/App';

class AddTodo extends Component {
  render() {
    const { actions } = this.props;
    return <Main actions={actions} />;
  }
}

AddTodo.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
*/

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
    <form onSubmit={e => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }}>
<input ref={node => {
  input = node
}} />
<button type="submit">
  Add Todo
</button>
</form>
</div>
)
}
AddTodo = connect()(AddTodo)

export default AddTodo;
