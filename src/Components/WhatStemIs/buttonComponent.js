import React from 'react';
import {ContainerGeneral, Title, Button, Paragraph, ButtonContainer} from './buttonComponent.styles'

class ButtonComponent extends React.Component{
 render(){
  return(
   <ContainerGeneral>
    <Title>
     {this.props.title}
    </Title>
    <Paragraph>
     {this.props.textarea}
    </Paragraph>
    <ButtonContainer>
     <Button>
      {this.props.buttonText}
     </Button>
     <Button>
      {this.props.buttonText}
     </Button>
     <Button>
      {this.props.buttonText}
     </Button>
    </ButtonContainer>
   </ContainerGeneral>
  );
 }
}

export default ButtonComponent;