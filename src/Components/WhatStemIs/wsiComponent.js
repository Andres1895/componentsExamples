import React from 'react';
import ButtonComponent from './buttonComponent'
import {ContainerGeneral, ItemsContainer} from './buttonComponent.styles'

class WsiComponente extends React.Component{
 render(){
  return(
   <ContainerGeneral>
    <ItemsContainer>
     <ButtonComponent
     title="Duis leo. Sed fringilla mauris sit amet nibh Curabitur"
     textArea="Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Etiam sit amet orci eget eros faucibus tincidunt. mauris sit amet nibh"
     buttonText1="Estudiante"
     buttonText2="Padre/Tutor"
     buttonText3="Profesor"
     />
    </ItemsContainer>    
   </ContainerGeneral>
  );
 }
}

export default WsiComponente; 