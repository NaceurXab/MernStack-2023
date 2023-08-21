
import React from 'react';
import './App.css';
import Form from './components/form';
import { Route, Routes } from 'react-router-dom';
import People from './components/people';
import Planets from './components/planets';

function App() {
  return (
    <div className="App">
      <Form />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
