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
     {this.props.textArea}
    </Paragraph>
    <ButtonContainer>
     <Button>
      {this.props.buttonText1}
     </Button>
     <Button>
      {this.props.buttonText2}
     </Button>
     <Button>
      {this.props.buttonText3}
     </Button>
    </ButtonContainer>
   </ContainerGeneral>
  );
 }
}

export default ButtonComponent;