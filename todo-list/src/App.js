// import React from 'react';
/*import './App.css';
import Todolist from './components/Todolist';
import Effect2 from './components/Effect2';
function App() {
  return (
    <div class name = "App">
      
        
      <Todolist/>
      <Effect2/>
     
      
    </div>
  );
}

// export default App;*/


/*import React from 'react';
import Parent from './components/Parent';

const App = () => {
  const user = {
    name: 'John Doe',
    age: 30,
  };

  return (
    <div>
      <h1>Prop Drilling </h1>
      <Parent user={user} />
    </div>
  );
};

export default App;*/

import React from 'react';
import {useState} from "react";
import { useContext } from 'react';
const MyComponent = () => {
  const { value, setValue } = useContext(Context);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue("Context Updated!")}>Update Context</button>
    </div>
  );
};

export default App;




