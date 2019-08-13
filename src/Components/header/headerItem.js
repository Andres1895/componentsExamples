import React from 'react';
import {ButtonIcon, Image, Text, TextContainer, ImageContainer, 
IconContainer, LeftContainer, GeneralContainer, BodyContainer, 
RigthContainer, UserIcon, Link, IconPlace} from './header.styles'
import {text} from './headerText'
import logo from '../../Images/logo.png'

class HeaderItem extends React.Component{
 render(){
  return(
   <GeneralContainer>
     <BodyContainer>
      <LeftContainer>
        <ImageContainer><Image src={logo}/></ImageContainer>
        <TextContainer>
         <Link href={text.Home}><Text>{text.Stem}</Text></Link>
         <Link href={text.Home}><Text>{text.Oferta}</Text></Link>
         <Link href={text.Home}><Text>{text.Us}</Text> </Link>
        </TextContainer>
      </LeftContainer>
      <RigthContainer>
       <IconContainer>
          <Link href={text.InstagramPath}>
            <ButtonIcon><IconPlace src="https://via.placeholder.com/30x30"/></ButtonIcon> 
          </Link>
          <Link href={text.InstagramPath}>
            <ButtonIcon><IconPlace src="https://via.placeholder.com/30x30"/></ButtonIcon>
          </Link>
          <Link href={text.InstagramPath}>
            <ButtonIcon><IconPlace src="https://via.placeholder.com/30x30"/></ButtonIcon>
          </Link>
          <Link href={text.InstagramPath}>
            <ButtonIcon><IconPlace src="https://via.placeholder.com/30x30"/></ButtonIcon>
          </Link>
          <Link href={text.InstagramPath}>
            <UserIcon><IconPlace src="https://via.placeholder.com/30x30"/></UserIcon>
          </Link>
          
       </IconContainer>
      </RigthContainer>
     </BodyContainer>
   </GeneralContainer>
  );
 }
}

export default HeaderItem