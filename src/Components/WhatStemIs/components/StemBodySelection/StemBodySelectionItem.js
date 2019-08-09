import React from 'react';
import {Ex, LargeImageContainer,  ImageContainer, ParagraphContainer, ButtonContainer, Button, ContainerLeftAux, Image, ParagraphContainerSecond, Par, FirstSection, GeneralContainer, Title, ContainerSections, ContainerLeft, ContainerRigth, ParagraphHalf} from './StemBodySelection.styles';
import { firstSection } from './textContent';
import stem1 from '../../../../Images/stem1.jpg'
import YouTube from 'react-youtube';
import SquareItem from '../SquareItem/SquareItem'

class StemBodyItem extends React.Component{
 render(){
  const opts = {
    height: '390',
    width: '800',
    playerVars: { 
      autoplay: 0
    }
  };
  return(
    <GeneralContainer>
      <FirstSection>
        <Title>{firstSection.title1}</Title>
        <ContainerSections>
          <ContainerLeft>
            <ContainerLeftAux>
              <ParagraphHalf>{firstSection.parragraph1}</ParagraphHalf>
              <ImageContainer>
                <Image src={stem1}/>
              </ImageContainer>          
              <ParagraphHalf>{firstSection.parragraph2}</ParagraphHalf>
            </ContainerLeftAux>
            <ParagraphContainer><ParagraphHalf>{firstSection.parragraph3}</ParagraphHalf></ParagraphContainer>
          </ContainerLeft>
          <ContainerRigth>
            <ParagraphHalf>
              {firstSection.parragraph4}
            </ParagraphHalf>
            <SquareItem/>
          </ContainerRigth>
        </ContainerSections>  
      </FirstSection>


      <FirstSection>
        <Title>{firstSection.title1}</Title>
        <ContainerSections>
          <ContainerLeftAux>  
            <YouTube opts={opts} videoId="AMaQvev2BNI" />  
          </ContainerLeftAux>
          <ContainerRigth>
            <ImageContainer>
              <Image src={stem1}/>
            </ImageContainer>
            <ParagraphContainerSecond><ParagraphHalf>{firstSection.parragraph5}</ParagraphHalf></ParagraphContainerSecond>
          </ContainerRigth>
        </ContainerSections>  
      </FirstSection>


      <FirstSection>
        <Title>{firstSection.title1}</Title>
        <ContainerSections>
          <Ex>
            <div><Par>{firstSection.parragraph6}</Par></div>
            <LargeImageContainer>
              <Image src={stem1}/>
            </LargeImageContainer>
          </Ex>
          <ContainerRigth>
            <ParagraphContainerSecond>
             <ParagraphHalf><Par>{firstSection.parragraph7}</Par></ParagraphHalf>
            </ParagraphContainerSecond>
            <ButtonContainer>
              <Button>Consectetuer adipiscing</Button>
            </ButtonContainer>
          </ContainerRigth>
        </ContainerSections>  
      </FirstSection>
    </GeneralContainer>
  );
 }
}

export default StemBodyItem;