import React , { useState } from 'react';
import './App.css';
import Form from './components/form';
import Display from './components/display';

function App() {
  
  const [list , setUpdateList] = useState([])
  return (
    <div className="App">
      <Form list = {list} setUpdateList = {setUpdateList} />
      <Display list = {list} setUpdateList = {setUpdateList} />
      
    </div>
  );
}

export default App;
