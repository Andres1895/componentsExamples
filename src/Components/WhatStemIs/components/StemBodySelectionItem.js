import React from 'react';
import {Title, GeneralContainer, ContainerItem, Paragraph, ContainerBody} from './StemBodySelection.styles';

class StemBodyItem extends React.Component{
 render(){
 
  return(
   <GeneralContainer>
    <ContainerBody>
    <Title>
     {this.props.title}
     </Title> 
     <ContainerItem>
      <Paragraph>
       {this.props.textArea}
      </Paragraph>      
      <Paragraph>
       {this.props.textArea}
      </Paragraph>
     </ContainerItem>
    </ContainerBody>
   </GeneralContainer>
  );
 }
}

export default StemBodyItem;