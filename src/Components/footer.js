import React from 'react';
import '../styles/footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

class Footer extends React.Component{
    render(){
        return(
            <div class="containerFooter">
                    <div class="nullColumn">

                    </div>
                    <div class="Privacy">
                        <div class="privacyItems">
                            <button class="buttonStyle"> Aviso de Privacidad</button>
                        </div>
                        <div class="privacyItems">
                        <button class="buttonStyle"> Mapa de Sitio</button>
                        </div>
                        <div class="copyright">
                        <button class="buttonStyle">Copyrigth</button>
                        </div>
                    </div>
                    <div class="socialMedia">
                            <button class= "buttonSocial"> 
                                <FontAwesomeIcon icon={['fab', 'youtube']}/>
                            </button>
                            <button class="buttonSocial">
                                <FontAwesomeIcon icon={['fab', 'instagram']}/>    
                            </button>
                            <button class="buttonSocial">
                                <FontAwesomeIcon icon={['fab', 'facebook']}/>    
                            </button>
                            <button class="buttonSocial">
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