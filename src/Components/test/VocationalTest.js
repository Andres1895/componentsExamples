import React from 'react';
import VocationalTestItem from './VocationalTestItem';
import {GeneralContainer} from './VocationalTest.styles'

class VocationalTest extends React.Component{
 render(){
  const recommendation = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
  return(
   <GeneralContainer>
    <VocationalTestItem
    title="Test Vocacional"
    textarea="Test Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
    textbutton1="Iniciar Sesion"
    textbutton2="Iniciar Test"
    titleSecundary="Recomendaciones"
    listItem1={recommendation}
    listItem2={recommendation}
    listItem3={recommendation}
    listItem4={recommendation}
    listItem5={recommendation}
    />
   </GeneralContainer>

  );
 }
}

export default VocationalTest;