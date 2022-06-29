import React from 'react';
import './style.css';

export default function App() {
  const [counter, setCounter] = React.useState({ clicks:0, date: ''})
  const totalCounter = () => {
    const date = new Date().toLocaleString();
    setCounter({ clicks: counter.clicks + 1, date:date }) 
  }

  return(
    <div>
      <p>{counter}</p>
      <button onClick={totalCounter}>Click me!</button>
      <p>{counter.clicks}</p>
      <p>{counter.date}</p>
    </div>
  )
}
