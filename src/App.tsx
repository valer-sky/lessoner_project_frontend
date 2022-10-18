import React from 'react';
import UserName from "./components/UserName"
import {USERNAME} from "./constants"

function App() {
  return (
    <div>
      <UserName minSymbol={USERNAME.min} maxSymbol={USERNAME.max}/>
    </div>
  );
}

export default App;
