import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Footer from './Components/footer';
import ContactUs from './Components/contactUs';
import WsiComponente from './Components/WhatStemIs/components/SteamHeaderSelection/StemHeader'
import StemBody from './Components/WhatStemIs/components/StemBodySelection/StemBodySelection'
import HeaderItem from './Components/header/headerItem'

library.add(fab)

function App() {
  return (
    <div>
        <HeaderItem/>
        <WsiComponente/>
        <StemBody/>
        <ContactUs/>
        <Footer />

    </div>

  );   
}

export default App;