import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Header from './Components/header';
import Footer from './Components/footer';
import ContactUs from './Components/contactUs';
import Jumbotron from './Components/jumbotron/jumbotron'
import WsiComponente from './Components/WhatStemIs/wsiComponent'
import StemBody from './Components/WhatStemIs/components/StemBodySelection'

library.add(fab)

function App() {
  return (
    <div>
        <Header/>
        <Jumbotron/>
        <WsiComponente/>
        <StemBody/>
        <ContactUs/>
        <Footer />

    </div>

  );   
}

export default App;