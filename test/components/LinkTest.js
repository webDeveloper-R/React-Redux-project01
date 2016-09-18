import React from 'react';
import { shallow } from 'enzyme';
import Link from 'components//Link.js';

describe('<Link />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Link />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "link-component"', () => {
      expect(component.hasClass('link-component')).to.equal(true);
    });
  });
});
