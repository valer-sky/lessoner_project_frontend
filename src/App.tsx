import { useEffect } from "react";
import { getData } from "./services/services";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Body from "./components/body/Body";
import LoginPage from './pages/LoginPage'

function App(): any {
  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Body />
        <Routes>
        <Route path='/users/sign_in' element={<LoginPage/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
