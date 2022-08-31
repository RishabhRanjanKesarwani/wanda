import React from 'react';
import './App.css';
import Header from './components/Header';
import { NAV_ITEMS_IDS } from './constants';

function App() {
  const onHomeClick = () => {};

  const onItemClick = (id: NAV_ITEMS_IDS) => {
    switch (id) {
      case NAV_ITEMS_IDS.about:
        // scroll about into view
        break;
      default:
        onHomeClick();
        break;
    }
  };

  return (
    <div className="App">
      <Header onHomeClick={onHomeClick} onItemClick={onItemClick} />
    </div>
  );
}

export default App;
