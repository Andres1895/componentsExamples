import React, {useState, useEffect} from 'react';
import {GeneralContainer, BodyContainer, LeftContainer, RightContainer,
Text, TextContainer, ContainerSponsorImages} from './sponsors.styles'
import {data_sponsor} from './images'
import {textsponsor} from './textSponsor'


function Sponsor(){
  const [sponsor, setSponsor] = useState(data_sponsor)

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
       {sponsor.map((spon)=>(
        <a href={spon.url}>
          <ContainerSponsorImages src={spon.logo} title={spon.name}/>
        </a>
       ))}
     </RightContainer>
    </BodyContainer>
   </GeneralContainer>
  );
}

export default Sponsor