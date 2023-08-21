
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/:val" element={<Display />} />
        <Route path="/:val/:color/:bgcolor" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
