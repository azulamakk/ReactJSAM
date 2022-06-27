import { useState } from 'react';
import './style.css';

export default function App() {
  const [counter, setCounter] = useState(1);
  const stock = 0;
  const handleCounter = () => {
    if (counter < stock) {
      setCounter(counter - 1);
    }
  }

  return(
    <div>
      <p>{counter}</p>
      <button onClick={handleCounter}>Restamos</button>
    </div>
  )
}
