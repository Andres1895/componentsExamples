import React from 'react';
import {Title, GeneralContainer, ContainerSection, ContainerItem, Paragraph,ContainerSecundary2, ContainerBody} from './StemBodySelection.styles';

class StemBodyItem extends React.Component{
 render(){
 
  return(
 <GeneralContainer>
  <ContainerBody>
   <Title>
   {this.props.title}
   </Title> 
   <ContainerSection>
    <ContainerItem>
     <Paragraph>
     {this.props.textArea}
     </Paragraph> 
     <Paragraph>
     {this.props.textArea}
     </Paragraph>   
    </ContainerItem>
   </ContainerSection>
  </ContainerBody>
 </GeneralContainer>
  );
 }
}

export default StemBodyItem;