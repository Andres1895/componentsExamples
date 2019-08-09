import React from 'react';
import {ParagraphContainer, ButtonContainer, Button, ContainerLeftAux, Image, ParagraphNested, Par, FirstSection, GeneralContainer, Title, ContainerSections, ContainerLeft, ContainerRigth, ParagraphLarge, ParagraphHalf} from './StemBodySelection.styles';
import { firstSection } from './textContent';
import "./styles.css";
import stem1 from '../../../Images/stem1.jpg'
import YouTube from 'react-youtube';
import SquareItem from './SquareItem/SquareItem'

class StemBodyItem extends React.Component{
 render(){
 
  return(
    <GeneralContainer>
      <FirstSection>
        <Title>{firstSection.title1}</Title>
        <ContainerSections>
          <ContainerLeft>
            <div>
              <ParagraphHalf>{firstSection.parragraph1}</ParagraphHalf>
              <div>
                <Image src={stem1}/>
              </div>
              <ParagraphHalf>{firstSection.parragraph2}</ParagraphHalf>
            </div>
            <ParagraphHalf>{firstSection.parragraph3}</ParagraphHalf>
          </ContainerLeft>
          <ContainerRigth>
            <ParagraphHalf>
              {firstSection.parragraph4}
              <SquareItem/>
            </ParagraphHalf>
          </ContainerRigth>
        </ContainerSections>  
      </FirstSection>


      <FirstSection>
        <Title>{firstSection.title1}</Title>
        <ContainerSections>
          <ContainerLeftAux>
            <div>
             <YouTube videoId="AMaQvev2BNI" />
            </div>
          </ContainerLeftAux>
          <ContainerRigth>
            <div>
              <Image src={stem1}/>
            </div>
            <ParagraphHalf>
              {firstSection.parragraph5}
            </ParagraphHalf>
          </ContainerRigth>
        </ContainerSections>  
      </FirstSection>


      <FirstSection>
        <Title>{firstSection.title1}</Title>
        <ContainerSections>
          <ContainerLeftAux>
            <Par>{firstSection.parragraph6}</Par>
            <div>
              <Image src={stem1}/>
            </div>
          </ContainerLeftAux>
          <ContainerRigth>
            <ParagraphHalf>
              <Par>{firstSection.parragraph7}</Par>
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