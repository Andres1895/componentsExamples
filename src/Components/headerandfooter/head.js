import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Arriba, Li, Ul, Log, Navegando, Nave, Redsocial, Usuario, Logo, Sociales, Logenado, Refcabeza } from './head.styles';

function Cabeza(){
const cabe=(
   /* <Arriba>
        <Log>
            <Logo>

            </Logo>
        </Log>
        <Navegando>
            <Nave>
                <Ul>
                <Li>
                    <Refcabeza
                    textArea={"¿Qué es STEM?"}
                    link={"/"}
                    />
                </Li>
                <Li>
                    <Refcabeza
                    textArea={"Oferta"}
                    link={"/"}
                    />
                </Li>
                <Li>
                    <Refcabeza
                    textArea={"Nosotros"}
                    link={"/"}
                    />
                </Li>
                </Ul>
            </Nave>
        </Navegando>
        <Usuario>
            <Refcabeza>
                <Logenado />
            </Refcabeza>
        </Usuario>
        <Redsocial>
            <Refcabeza link={"/"}><Sociales>
                
                </Sociales></Refcabeza>
            <Refcabeza link={"/"}><Sociales>
                
                </Sociales></Refcabeza>
            <Refcabeza link={"/"}><Sociales>
                
                </Sociales></Refcabeza>
        </Redsocial>
    </Arriba>
    */
    <div id="arriba" >
            <div id="log">
            <img src='ca.jfif' alt="logo" id="logo" />
            </div>
            <div id="navegando">
                <nav id="nave">
                    <ul>
                        <li>
                        <a href=" " id="refcabeza">¿Qué es STEM?</a>
                        </li>
                        <li>
                        <a href=" " id="refcabeza">Oferta</a>
                        </li>
                        <li>
                        <a href=" " id="refcabeza">Nosotros</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="usuario">
            <a href=" " id="refcabeza"><img src='bien.jpg' alt="logeo" id="logenado" /></a>
            </div>
            <div id="redsocial">
            <a href=" " id="refcabeza"><img src='pesimo.jfif' alt="Face" id="sociales" /></a>
            <a href=" " id="refcabeza"><img src='pesimo.jfif' alt="Face" id="sociales" /></a>
            <a href=" " id="refcabeza"><img src='pesimo.jfif' alt="Face" id="sociales" /></a>
            </div>
        </div>
);
return cabe;
}

export default Cabeza;

serviceWorker.unregister();
