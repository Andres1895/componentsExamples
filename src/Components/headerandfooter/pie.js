import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Abajo, Ul, ArrobaH, Netsocial, Infopropia, Buscador, Locacion, Logitosrs, Email, Enteremail, Refpie } from './pie.styles';

function Talon(){
const dedo=(
    /*<Abajo>
        <ArrobaH>
            
        </ArrobaH>
        <Infopropia>
                <nav>
                    <Ul>
                        <Refpie
                        textArea={"Nosotros"}
                        link={"/"}
                        />
                    </Ul>
                    <Ul>
                        <Refpie
                        textArea={"Contacto"}
                        link={"/"}
                        />
                    </Ul>
                    <Ul>
                        <Refpie
                        textArea={"Aviso de privacidad"}
                        link={"/"}
                        />
                    </Ul>
                </nav>
            </Infopropia>
            <Netsocial>
                <nav>
                    <Ul>
                        <Logitosrs>

                        </Logitosrs>
                        &nbsp; Face
                    </Ul>
                    <Ul>
                        <Logitosrs>

                        </Logitosrs>
                        &nbsp; Twitter
                    </Ul>
                    <Ul>
                        <Logitosrs>

                        </Logitosrs>
                        &nbsp; Instagram 
                    </Ul>
                </nav>
            </Netsocial>
            <Buscador>
                <form>
                    <Email>

                    </Email>
                    <Enteremail>

                    </Enteremail>
                </form>
            </Buscador>
            <Locacion>

            </Locacion>
    </Abajo>*/
    <div id="abajo" >
            <div id="arrobaH">
            @Honeywell 2019
            </div>
            <div id="infopropia">
                <nav>
                    <ul>
                        <a href=" " id="refpie">Nosotros</a>
                    </ul>
                    <ul>
                        <a href=" " id="refpie">Contacto</a>
                    </ul>
                    <ul>
                        <a href=" " id="refpie">Aviso de privacidad</a>
                    </ul>
                </nav>
            </div>
            <div id="netsocial">
            <nav>
                    <ul>
                    <img src='pesimo.jfif' alt="Face" id="logitosrs" />
                    &nbsp; Face
                    </ul>
                    <ul>
                    <img src='pesimo.jfif' alt="Face" id="logitosrs" />
                    &nbsp; Twitter
                    </ul>
                    <ul>
                    <img src='pesimo.jfif' alt="Face" id="logitosrs" />
                    &nbsp; Instagram
                    </ul>
                </nav>
            </div>
            <div id="buscador">
                Suscribete a nuestro: <br/>
                <form id="Busqueda">
                <input type="email" id="email" placeholder="Email Address" ></input>
                <button id="enteremail"> OK</button>
                </form>
            </div>
            <div id="locacion">
                Av. Toluca #373 Olivar de los padres. <br/>
                01780 Ciudad de México.<br/>
                CDMX, México. <br/>
                (55)4169-6525 <br/>
                info@movimientostem.org
            </div>
        </div>
);
return dedo;
}

export default Talon;

serviceWorker.unregister();
