import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './footer.cssmodule.sass';
import FilterLink from '../containers/FilterLink';

@cssmodules(styles)

class Footer extends React.Component {

  render() {
    return (
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
    );
  }
}

/*
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
)*/
Footer.displayName = 'Footer';
Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
