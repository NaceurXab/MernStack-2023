import { useState } from 'react';
import './App.css';
import Nav from './components/nav';
import Box from './components/box';

function App() {
  const tabs = [
    { nav: "Tab 1", show: "Tab 1 content is showing here" },
    { nav: "Tab 2", show: "Tab 2 content is showing here" },
    { nav: "Tab 3", show: "Tab 3 content is showing here" },
    { nav: "Tab 4", show: "Tab 4 content is showing here" },
  ];

  const [ choices, setchoices ] = useState(tabs);

  const [ navIndex, setNavIndex ] = useState(0);

  return (
    <div className="App">
      <Nav choices = { choices } navIndex = { navIndex } setNavIndex = { setNavIndex } />
      <Box choices = { choices }  navIndex = { navIndex }   />
    </div>
  );
}

export default App;
