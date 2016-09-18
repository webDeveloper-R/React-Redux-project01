import React from 'react';
import { shallow } from 'enzyme';
import TodoList from 'components//TodoList.js';

describe('<TodoList />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<TodoList />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "todolist-component"', () => {
      expect(component.hasClass('todolist-component')).to.equal(true);
    });
  });
});
