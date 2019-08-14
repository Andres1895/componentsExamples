import React from 'react';
import {GeneralContainer, BodyContainer, LeftContainer, RightContainer, Text, TextContainer} from './sponsors.styles'
import {textsponsor} from './textSponsor'

class Sponsor extends React.Component{
 render(){
  return(
   <GeneralContainer>
    <BodyContainer>
     <LeftContainer>
      <TextContainer>
        <Text>
         {textsponsor.title}
        </Text>
      </TextContainer>
     </LeftContainer>
     <RightContainer>
      Hola
     </RightContainer>
    </BodyContainer>
   </GeneralContainer>
  );
 }
}

export default Sponsor