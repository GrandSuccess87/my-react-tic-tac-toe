import React from 'react';
import ReactDOM from 'react-dom';
import Main from './mainComponent';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Main Component', () => {
    it('renders Main component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Main />, div);
        ReactDOM.unmountComponentAtNode(div);
    });    

    it('renders a new page after start button is click', () => {
        const wrapper = shallow(<Main />);
        wrapper.find('a').simulate('click');
        expect(wrapper.find('[href="./game"]').length).toBe(1);
      });
});