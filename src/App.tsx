import {useEffect} from "react";
import {getData} from "./services/services";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import PhoneNumberPage from "./pages/PhoneNumberPage";
import {useState} from "react";

function App(): any {
  useEffect(() => {
    getData();
  }, []);
  const [isActive, setIsActive]=useState(false)
  return (
    <BrowserRouter>
      <PhoneNumberPage/>
    </BrowserRouter>
  );
}

export default App;
