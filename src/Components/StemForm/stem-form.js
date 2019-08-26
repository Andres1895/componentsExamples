import React, { useState } from 'react'
import {GeneralContainer, BodyContainer, RightContainer, LeftContainer,
ImageContainer, Image, Title, TextContainer, SecondContainer,
TitleStem, ButtonContainer, Button, FormContainer, Form, 
Input, TextArea, SubtitleLabel, TitleLabel, InputContainer, FormButton } from './stemForm.styles'
import {textForm} from './formText'
import {emailValidation, nameValidation, commentValidation} from '../../../src/Utils/validators'

function StemForm () {
  const [ name, setName] = useState('')
  const [ email, setEmail] = useState('')
  const [ comment , setComment] = useState('')
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
        <TitleLabel>{textForm.titleForm}</TitleLabel>
        <SubtitleLabel>{textForm.subtitleForm}</SubtitleLabel>
        <InputContainer>
        <Input type="name" 
         name="name" 
         value={name}
         required
         pattern={nameValidation}
         onChange={e => setName(e.target.value)}
         placeholder={textForm.placeholderName}
         />
        </InputContainer>
        <InputContainer>
        <Input type="email" 
          name="email" 
          required
          pattern={emailValidation}
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={textForm.placeholderCorreo}
         />
        </InputContainer>
        <TextArea type="comment" 
          name="comment"
          required
          pattern={commentValidation}
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder={textForm.placeholderComentario}
         />
        <ButtonContainer>
          <FormButton>
            {textForm.buttonForm} 
          </FormButton>
        </ButtonContainer>
       </Form>
      </FormContainer>
     </RightContainer>
    </BodyContainer>
   </GeneralContainer>
  );
}
export default StemForm