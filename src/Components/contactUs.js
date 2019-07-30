import React from 'react';
import '../styles/contactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
library.add(fab)

class ContactUs extends React.Component{
    render(){
        return(
            <div class="ContainerContact">
                <div class="sections">
                    Secciones
                    <div class="sectionsItems">
                        • Nosotros
                    </div>
                    <div class="sectionsItems">
                        • Ecosistema STEM
                    </div>
                    <div class="sectionsItems">
                        • Capacitacion
                    </div>
                    <div class="sectionsItems">
                        • Empleos 4.0
                    </div>
                    <div class="sectionsItems">
                        • Conferencias
                    </div>
                    <div class="sectionsItems">
                        • Tu mentor
                    </div>
                    <div class="sectionsItems">
                        • Bolsa de trabajo
                    </div>
                </div>
                <div class="contact">
                    Contacto
                    <div class="contactItems">
                        <FontAwesomeIcon icon={['fab', 'mailchimp']}/>
                        Av Toluca #373, Olivar de los Padres,
                        01780 Ciudad de México,
                        CDMX, México
                    </div>
                    <div class="contactItems">
                        <FontAwesomeIcon icon={['fab', 'mailchimp']}/>
                        info@movimientostem.org
                    </div>
                    <div class="contactItems">
                        <FontAwesomeIcon icon={['fab', 'mailchimp']}/>
                        (55) 4169-6526
                    </div>
                </div>
                <div class="quickContact">
                        Contacto rápido
                        <form class="quickContactItems">
                            <label class="quickContactItems">E-mail
                            </label>
                            <input type="email" 
                            name="email" 
                            class="formStyle" 
                            placeholder="E-mail"
                            />
                            <label class="quickContactItems">
                                Nombre
                            </label>
                            <input type= "nombre"
                            name="nombre"
                            class="formStyle"
                            placeholder="Nombre"
                            />
                            <label class="quickContactItems">
                                Telefono
                            </label>
                            <input type= "telefono"
                            name="telefono"
                            class="formStyle"
                            placeholder="Telefono"
                            />
                            <label class="quickContactItems">
                                ¿A que te dedicas?
                            </label>
                            <input type= "telefono"
                            name="telefono"
                            class="formStyle"
                            placeholder="Telefono"
                            />
                        </form>
                </div>
                <div class="location">
                    Ubicación
                </div>
            </div>
        );
    }

}

export default ContactUs;
