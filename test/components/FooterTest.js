import React from 'react';
import { shallow } from 'enzyme';
import Footer from 'components//Footer.js';

describe('<Footer />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Footer />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "footer-component"', () => {
      expect(component.hasClass('footer-component')).to.equal(true);
    });
  });
});
