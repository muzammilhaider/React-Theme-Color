import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isActive,setActive] = useState("false");
  let dataChange = () => {
    setActive(!isActive);
  }
  return (
    <div className={isActive ? "myClass" : 'myClass2'}>
      <button onClick={dataChange}>THEME CHANGE</button>
    </div>
  );
}

export default App;
