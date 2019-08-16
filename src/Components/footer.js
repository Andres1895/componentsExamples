import React from 'react';
import '../styles/footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

class Footer extends React.Component{
    render(){
        return(
            <div className="containerFooter">
                    <div className="nullColumn">

                    </div>
                    <div className="Privacy">
                        <div className="privacyItems">
                            <button className="buttonStyle"> Aviso de Privacidad</button>
                        </div>
                        <div className="privacyItems">
                        <button className="buttonStyle"> Mapa de Sitio</button>
                        </div>
                        <div className="copyright">
                        <button className="buttonStyle">Copyrigth</button>
                        </div>
                    </div>
                    <div className="socialMedia">
                            <button className= "buttonSocial"> 
                                <FontAwesomeIcon icon={['fab', 'youtube']}/>
                            </button>
                            <button className="buttonSocial">
                                <FontAwesomeIcon icon={['fab', 'instagram']}/>    
                            </button>
                            <button className="buttonSocial">
                                <FontAwesomeIcon icon={['fab', 'facebook']}/>    
                            </button>
                            <button className="buttonSocial">
                                <FontAwesomeIcon icon={['fab', 'twitter']}/>    
                            </button>
                    </div>
            </div>
       /*     <div class='containerFooter'>
                <div class="Privacy">
                    <div class="privacyColumn">
                        <div>
                            <a href="https://www.fb.com" >Hola</a>
                        </div>
                        <div>
                            Adios
                        </div>
                        <button class="buttonStyle">Hplaasfds</button>
                    </div>
                </div>
                <div class="Copyright">
                    Todos los derechos reservados
                </div>
                <div class="socialMedia">

                </div>
            </div>*/
        );
    }
}

export default Footer;