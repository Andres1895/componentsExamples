import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Header from './Components/header';
import Footer from './Components/footer';
import ContactUs from './Components/contactUs';
import Jumbotron from './Components/jumbotron/jumbotron'

library.add(fab)

function App() {
  return (
    <div>
        <Header/>
        <Jumbotron/>
        <ContactUs/>
        <Footer />

    </div>

  );   
}

export default App;