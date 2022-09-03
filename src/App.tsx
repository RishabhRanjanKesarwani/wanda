import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
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
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const progressRef = useRef(null);
  const testimonialsRef = useRef(null);

  const onHomeClick = () => {
    window.scrollTo(0, 0);
  };

  const onItemClick = (id: NAV_ITEMS_IDS) => {
    switch (id) {
      case NAV_ITEMS_IDS.about:
        // @ts-ignore
        aboutRef.current.scrollIntoView();
        break;
      case NAV_ITEMS_IDS.contact:
        // @ts-ignore
        contactRef.current.scrollIntoView();
        break;
      case NAV_ITEMS_IDS.progress:
        // @ts-ignore
        progressRef.current.scrollIntoView();
        break;
      case NAV_ITEMS_IDS.testimonials:
        // @ts-ignore
        testimonialsRef.current.scrollIntoView();
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
      <Box ref={aboutRef}>
        <About />
      </Box>
      <Box ref={contactRef}>
        <Contact />
      </Box>
      <Box ref={progressRef}>
        <Progress />
      </Box>
      <Box ref={testimonialsRef}>
        <Testimonials />
      </Box>
      <Footer />
      <Fab size="medium" color="primary" onClick={onHomeClick} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        <KeyboardArrowUpIcon />
      </Fab>
    </div>
  );
}

export default App;
