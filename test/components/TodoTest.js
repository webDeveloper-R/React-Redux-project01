import React from 'react';
import { shallow } from 'enzyme';
import Todo from 'components//Todo.js';

describe('<Todo />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Todo />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "todo-component"', () => {
      expect(component.hasClass('todo-component')).to.equal(true);
    });
  });
});
