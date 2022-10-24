import { useEffect } from "react";
import { getData } from "./services/services";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import FirstRegistrationForm from "./components/FirstRegistrationForm";

function App(): any {
  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <FirstRegistrationForm />
    </BrowserRouter>
  );
}

export default App;
