import { useEffect } from "react";
import { getData } from "./services/services";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Body from "./components/body/Body";
import NavbarStudy from "./components/NavbarStudy";

function App(): any {
  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarStudy/>
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;