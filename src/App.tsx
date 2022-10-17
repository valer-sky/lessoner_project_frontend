import React from 'react';
import UserName from "./components/UserName"

function App() {
  return (
    <div>
     <UserName minSymbol={3} maxSymbol={256}/>
    </div>
  );
}

export default App;
