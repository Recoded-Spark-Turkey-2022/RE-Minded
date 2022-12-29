import renderer from 'react-test-renderer';
import SignUp from "../SignUp";

it('renders correctly', () => {
    const loginComponent = renderer
        .create(<SignUp />)
        .toJSON();
    expect(loginComponent).toMatchSnapshot();
});