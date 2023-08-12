import './App.css';
import { useState } from 'react';
import Form from './components/form';
import Display from './components/display';

function App() {
  const [box , setBox ] = useState([])

  const addbox = (newbox) =>{
    setBox( [...box , newbox] )
  }
  return (
    <div className="App">
      <Form onNewBox = { addbox }/>
      <Display list = { box } />
    </div>
  );
}

export default App;
