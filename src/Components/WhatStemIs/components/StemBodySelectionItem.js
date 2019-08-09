import React from 'react';
import {ImageContainer, VideoContainer, ContainerParagraph, ButtonContainer, Button, ContainerLeftAux, Image, ParagraphNested, Par, FirstSection, GeneralContainer, Title, ContainerSections, ContainerLeft, ContainerRigth, ParagraphHalf} from './StemBodySelection.styles';
import { firstSection } from './textContent';
import "./styles.css";
import stem1 from '../../../Images/stem1.jpg'
import YouTube from 'react-youtube';
import SquareIem from './SquareComponent/squareComponentItem'

class StemBodyItem extends React.Component{
 render(){
 
  return(
    <GeneralContainer>
      <FirstSection>
        <Title>{firstSection.title1}</Title>
        <ContainerSections>
          <ContainerLeft>
            <ParagraphHalf>{firstSection.parragraph1}
                <Image src={stem1}/>
                <ParagraphNested>{firstSection.parragraph1}</ParagraphNested>
            </ParagraphHalf>    
            <ParagraphHalf>{firstSection.parragraph2}</ParagraphHalf>
          </ContainerLeft>
          <ContainerRigth>
            <ParagraphHalf>
              <Par>{firstSection.parragraph3}</Par>
              </ParagraphHalf>
              <SquareIem/>
          </ContainerRigth>
        </ContainerSections>  
      </FirstSection>


      <FirstSection>
        <Title>{firstSection.title1}</Title>
        <ContainerSections>
          <ContainerLeftAux>
              <VideoContainer>
                <YouTube
                    videoId="AMaQvev2BNI"
                />
              </VideoContainer>
          </ContainerLeftAux>
          <ContainerRigth>
            <Image src={stem1}/>
            <ParagraphHalf>
              <Par>{firstSection.parragraph3}</Par>
            </ParagraphHalf>
          </ContainerRigth>
        </ContainerSections>  
      </FirstSection>


      <FirstSection>
        <Title>{firstSection.title1}</Title>
        <ContainerSections>
          <ContainerLeftAux>
              <ContainerParagraph>
                <Par>{firstSection.parragraph3}</Par>
              </ContainerParagraph>
              <ImageContainer>
                <Image src={stem1}/>
              </ImageContainer>
          </ContainerLeftAux>
          <ContainerRigth>
            <ParagraphHalf>
              <Par>{firstSection.parragraph3}</Par>
            </ParagraphHalf>
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