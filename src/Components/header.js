import React from 'react';
import '../styles/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from '../Images/logo.png'
library.add(fab)

class Header extends React.Component{
    render(){
        return(
            <div class='container'>
                <div >
                    <img  class='logoStem' src={Logo} />
                </div>
                <div class="header">
                    Stem
                </div>
                <div class="header"> Movimiento STEM</div>
                <div class="headersocial">
                    <Router>
                        <a href="https://instagram.com">
                            <FontAwesomeIcon icon={['fab', 'instagram']}/>
                        </a>
                    </Router>
                </div>
            </div>
        );
    }
}

export default Header;