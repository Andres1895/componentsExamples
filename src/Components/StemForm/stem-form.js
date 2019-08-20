import React from 'react'
import {GeneralContainer, BodyContainer, RightContainer, LeftContainer,
ImageContainer, Image, Title, TextContainer, SecondContainer,
TitleStem, ButtonContainer, Button, FormContainer, Form, 
Input, TextArea} from './stemForm.styles'
import {textForm} from './formText'

class StemForm extends React.Component{
 render(){
  return(
   <GeneralContainer>
    <BodyContainer>
     <LeftContainer>
      <div>
       <ImageContainer>
        <Image src={textForm.ImageUrl}/>
       </ImageContainer>
      </div>
      <SecondContainer>
       <Title>{textForm.title1}</Title>
       <TextContainer>{textForm.textArea1}</TextContainer>
      </SecondContainer>
     </LeftContainer>
     <RightContainer>
      <TitleStem>{textForm.title2}</TitleStem>
      <TextContainer>{textForm.textArea2}</TextContainer>
      <ButtonContainer>
       <Button>
        {textForm.button1} <img src={'https://via.placeholder.com/20x20'}/>
       </Button>
      </ButtonContainer>
      <FormContainer>
       <Form>
        <label>{textForm.titleForm}</label>
        <label>{textForm.subtitleForm}</label>
        <Input type="user" 
         name="user" 
         placeholder={textForm.placeholderName}
         />
         <Input type="email" 
          name="emal" 
          placeholder={textForm.placeholderCorreo}
         />
         <TextArea type="comment" 
          name="comment" 
          placeholder={textForm.placeholderComentario}
         />
       </Form>
       <ButtonContainer>
       <Button>
        {textForm.buttonForm} 
       </Button>
      </ButtonContainer>
      </FormContainer>
     </RightContainer>
    </BodyContainer>
   </GeneralContainer>
  );
 }
}
export default StemForm