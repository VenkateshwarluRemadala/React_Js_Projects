import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import Home from './Home';
import {shallow} from 'enzyme';
describe('shallo home page', ()=>{
    it('first test case', ()=>{
    let wrapper = shallow(<Home/>);
    console.log(wrapper)
})
});