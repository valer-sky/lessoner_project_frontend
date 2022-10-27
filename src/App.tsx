import {useEffect} from "react";
import {getData} from "./services/services";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import PhoneNumberPage from "./pages/PhoneNumberPage";

function App(): any {
  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <PhoneNumberPage/>
    </BrowserRouter>
  );
}

export default App;
