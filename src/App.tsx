import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Body from "./components/body/Body";
import LoginPage from './pages/LoginPage'
import FirstRegistrationForm from "./components/FirstRegistrationForm";
import {useAppDispatch} from "./store/hooks"; //for example after delete
import {showDefaultPage, showStudentPage, showSectionPage, showMyPage} from "./store/loginName/headerSlice";



function App(): any {
  const dispatch = useAppDispatch();

  return (
    <BrowserRouter>
      <div className="App">
        <Body/>
        <Routes>
          <Route path='/users/sign_in' element={<LoginPage/>}/>
          <Route path='/users/sign_up' element={<FirstRegistrationForm/>}/>
        </Routes>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <button className='notAthorised' onClick={() => dispatch(showDefaultPage)}>Not athorised</button>
          <button className='athorised' onClick={() => dispatch(showStudentPage)}>Athorised student in study section</button>
          <button className='creatorSS' onClick={() => dispatch(showSectionPage)}>Athorised student/creator in study section</button>
          <button className='creatorMySS' onClick={() => dispatch(showMyPage)}>Athorised creator in my studio section</button>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
