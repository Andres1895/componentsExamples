import React from 'react';
import {Icon, Image, Text, TextContainer, ImageContainer, IconContainer, 
LeftContainer, generalContainer, BodyContainer, RigthContainer, ItemContainer} from './header.styles'
import {text} from './headerText'
import logo from '../../Images/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

class HeaderItem extends React.Component{
 render(){
  return(
   <generalContainer>
     <BodyContainer>
      <LeftContainer>
        <ImageContainer><Image src={logo}/></ImageContainer>
        <TextContainer>
         <Text>{text.Stem}</Text>
         <Text>{text.Oferta}</Text>
         <Text>{text.Us}</Text>
        </TextContainer>
      </LeftContainer>
      <RigthContainer>
       <IconContainer>
       
       </IconContainer>
      </RigthContainer>
     </BodyContainer>
   </generalContainer>
  );
 }
}

export default HeaderItem