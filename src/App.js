import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Footer from './Components/footer';
import WsiComponente from './Components/WhatStemIs/components/SteamHeaderSelection/StemHeader'
import StemBody from './Components/WhatStemIs/components/StemBodySelection/StemBodySelection'
import Sponsor from './Components/Sponsors/sponsorItem'
import Jumbotron from './Components/jumbotron/jumbotron'
import StemCard from './Components/StemCard/StemCard'

library.add(fab)

function App() {
  return (
    <div>
      <Jumbotron />
      <StemCard />
      <Sponsor/>
      <WsiComponente/>
      <StemBody/>
      <Footer />
    </div>

  );   
}

export default App;