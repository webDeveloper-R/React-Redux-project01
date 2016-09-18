import React, { PropTypes } from 'react';
import cssmodules from 'react-css-modules';
import styles from './link.cssmodule.sass';

@cssmodules(styles)
/*
class Link extends React.Component {

  render() {
    return (
      <div className="link-component" styleName="link-component">
        Please edit src/components//Link.js to update this component!
      </div>
    );
  }
}
*/

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
  onClick={e => {
    e.preventDefault()
    onClick()
  }}
>
{children}
</a>
)
}

Link.displayName = 'Link';
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};
Link.defaultProps = {};

export default Link;
