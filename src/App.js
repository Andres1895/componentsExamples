import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Header from './Components/header';
import Footer from './Components/footer';
import ContactUs from './Components/contactUs';
import WsiComponente from './Components/WhatStemIs/components/SteamHeaderSelection/StemHeader'
import StemBody from './Components/WhatStemIs/components/StemBodySelection/StemBodySelection'

library.add(fab)

function App() {
  return (
    <div>
        <Header/>
        <WsiComponente/>
        <StemBody/>
        <ContactUs/>
        <Footer />

    </div>

  );   
}

export default App;