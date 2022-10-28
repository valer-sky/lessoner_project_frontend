import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Body from "./components/body/Body";
import PhoneNumberPage from './pages/PhoneNumberPage'
import FirstRegistrationForm from "./components/FirstRegistrationForm";

function App(): any {
  return (
    <BrowserRouter>
      <div className="App">
        <Body />
        <Routes>
          <Route path='/users/sign_in' element={ <PhoneNumberPage/>}/>
          <Route path='/users/sign_up' element={<FirstRegistrationForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
