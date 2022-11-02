import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Body from "./components/body/Body";
import LoginPage from './pages/LoginPage'
import FirstRegistrationForm from "./components/FirstRegistrationForm";
import {useAppDispatch} from "./store/hooks";
import {showDefaultPage, showStudentPage, showSectionPage, showMyPage} from "./store/header/headerSlice";
import Search from "./components/Search";

function App(): any {
  const dispatch = useAppDispatch();

  return (
    <BrowserRouter>
      <div className="App">
        <Body/>
        <Routes>
          <Route path='/users/sign_in' element={<LoginPage/>}/>
          <Route path='/users/sign_up' element={<FirstRegistrationForm/>}/>
        <Route path='/search' element={<Search/>}/>
        </Routes>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <button onClick={() => dispatch(showDefaultPage())}>Not authorized</button>
          <button onClick={() => dispatch(showStudentPage())}>Authorized student in study section</button>
          <button onClick={() => dispatch(showSectionPage())}>Authorized student/creator in study section</button>
          <button onClick={() => dispatch(showMyPage())}>Authorized creator in my studio section</button>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
