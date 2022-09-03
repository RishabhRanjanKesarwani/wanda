import { Box } from '@mui/system';
import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Progress from './components/Progress';
import Testimonials from './components/Testimonials';
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
      <Box>
        <Home />
      </Box>
      <Box>
        <About />
      </Box>
      <Box>
        <Contact />
      </Box>
      <Box>
        <Progress />
      </Box>
      <Box>
        <Testimonials />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
