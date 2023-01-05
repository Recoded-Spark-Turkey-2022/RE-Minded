import renderer from 'react-test-renderer';
import Login from "../Login";

it('renders correctly', () => {
    const loginComponent = renderer
        .create(<Login />)
        .toJSON();
    expect(loginComponent).toMatchSnapshot();
});