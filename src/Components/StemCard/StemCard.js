import React from 'react'
import { GeneralContainer, BodyContainer, FirstContainer, SecondContainer,
LeftContainer, Container } from './StemCard.styles'
import JumbotronItem from '../shares/jumbotronItem'
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import { StemText } from './stemText'

const opts = {
 position: 'relative',
 height: '390',
 width: '800',
 playerVars: { 
   autoplay: 0
 }
}

const StemCard  = () => {
 return(
  <GeneralContainer>
   <BodyContainer>
    <FirstContainer >
     <LeftContainer>
     <Container>
      <JumbotronItem
       card={true}
       title={StemText.title1}
       textArea={StemText.paragraph1}
       link={StemText.link1}
       linkText={StemText.linkText}
       smallTitle={false}
      />
     </Container>
     <Container>
      <div><img src={'https://via.placeholder.com/400x400'} /></div>
     </Container>
     </LeftContainer>
     <Container>
      <JumbotronItem
       card={true}
       title={StemText.title2}
       textArea={StemText.paragraph2}
       link={StemText.link2}
       linkText={StemText.linkText}
       smallTitle={false}
      />
     </Container>
     <Container>
      <JumbotronItem
       card={true}
       title={StemText.title3}
       textArea={StemText.paragraph3}
       link={StemText.link3}
       linkText={StemText.linkText}
       smallTitle={false}
      />
     </Container>
    </FirstContainer>  
    <SecondContainer>
     <LeftContainer>
       <ReactPlayer
        url='https://www.youtube.com/watch?v=AMaQvev2BNI'
        height='100%'
        width='100%'
       />
     </LeftContainer>
     <Container>
      <JumbotronItem
       card={true}
       title={StemText.title4}
       textArea={StemText.paragraph4}
       link={StemText.link4}
       linkText={StemText.linkText}
       smallTitle={false}
      />
     </Container>
     <Container>
      <JumbotronItem
       card={true}
       title={StemText.title5}
       textArea={StemText.paragraph5}
       link={StemText.link5}
       linkText={StemText.linkText}
       smallTitle={false}
      />
     </Container>
    </SecondContainer> 
   </BodyContainer>
  </GeneralContainer>
 )
}

export default StemCard
