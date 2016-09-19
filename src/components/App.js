import React from 'react';
import './app.css';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

// const yeomanImage = require('../images/yeoman.png');
/*
class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">
          Please edit <code>src/components/App.js</code> to get started!
        </div>
      </div>
    );
  }
}*/

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

/*
AppComponent.defaultProps = {
};
*/

export default App;
