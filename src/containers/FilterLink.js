/* import React, {
  Component,
  PropTypes
} from 'react'; */
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';
// import Main from '../components/App';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
      }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink;

/*

class FilterLink extends Component {
  render() {
    const { actions } = this.props;
    return <Main actions={actions} />;
  }
}

FilterLink.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
*/
