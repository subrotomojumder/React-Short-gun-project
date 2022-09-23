import { useState } from 'react';
import './App.css';
import AllGun from './component/AllGun/AllGun';
import Navbar from './component/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  const countIncrease = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Navbar count={count}/>
      <AllGun countIncrease={countIncrease}/>
    </div>
  );
}
export default App;
