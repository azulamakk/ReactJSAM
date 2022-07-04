import { useState } from 'react';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
    
  const [containerVisible, setContainerVisible] = useState(true)
  
  const onHideContainer = () => {
    setContainerVisible(false)
  }

  return (
    <div className='container'>
      <NavBar/>
      {containerVisible ?
      <ItemListContainer greeting="Hola Coders!">
        <h2>Este es el item list container</h2>
      </ItemListContainer>
      :
      null
      }
      <button onClick={onHideContainer}>Esconder ItemListContainer</button>
      <ItemDetailContainer/>
    </div>
  );  
}
  
export default App