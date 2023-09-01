
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Details from './views/details';
import Update from './views/update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element = {<Main />} />
        <Route path = '/Details/:id'  element={<Details />} />
        <Route path='/edit/:id' element = {<Update />}/>
      </Routes>
    </div>
  );
}

export default App;
