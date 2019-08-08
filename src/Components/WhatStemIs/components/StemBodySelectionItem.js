import React from 'react';
import {Title, GeneralContainer, ContainerSection, ContainerItem, Paragraph,ContainerSecundary2, ContainerBody} from './StemBodySelection.styles';
import { firstSection } from './textContent';
import "./styles.css";

class StemBodyItem extends React.Component{
 render(){
 
  return(
    <div className="generalContainer">
      <div className="firstSection">
        <h1>Title</h1>
        <div className="containerSections">
          <div className="containerLeft">
            <div className="paragraph half">{firstSection.parragraph1}</div>
            <div className="paragraph half">{firstSection.parragraph2}</div>
          </div>
          <div className="paragraph">
            <p>{firstSection.parragraph3}</p>
            <div>
              NEW COMPONENT
            </div>
          </div>
        </div>  
      </div>
      <div className="firstSection">
        <h1>Title</h1>
        <div className="containerSections">
          <div className="paragraph large">{firstSection.parragraph1}</div>
          <div className="paragraph">
            <p>{firstSection.parragraph3}</p>
            <div>
              NEW COMPONENT
            </div>
          </div>
        </div>  
      </div>
      <div className="firstSection">
        <h1>Title</h1>
        <div className="containerSections">
          <div className="paragraph large">{firstSection.parragraph1}</div>
          <div className="paragraph">
            <p>{firstSection.parragraph3}</p>
            <div>
              NEW COMPONENT
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
 }
}

export default StemBodyItem;