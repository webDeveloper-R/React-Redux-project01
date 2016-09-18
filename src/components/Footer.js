import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './footer.cssmodule.sass';
import FilterLink from '../containers/FilterLink';

@cssmodules(styles)
/*
class Footer extends React.Component {

  render() {
    return (
      <div className="footer-component" styleName="footer-component">
        Please edit src/components//Footer.js to update this component!
      </div>
    );
  }
}
*/

const Footer = () => (
  <p>
  Show:
  {" "}
  <FilterLink filter="SHOW_ALL">
    All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
    Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
    Completed
    </FilterLink>
    </p>
)
Footer.displayName = 'Footer';
Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
