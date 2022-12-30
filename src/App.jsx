import './App.css';

import HomePageMain from './ComponentFolders/HomePage/HomePageMain';
/* import Login from './ComponentFolders/LoginPage/Login'; */
import SignUp from './ComponentFolders/SignUpPage/SignUp';

function App() {
   return (
      <>
         {/* <Login /> */}
         <SignUp />
         <HomePageMain/>
      </>
   );
}

export default App;
