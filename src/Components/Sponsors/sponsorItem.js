import React from 'react';
import {GeneralContainer, BodyContainer, LeftContainer, RightContainer,
Text, TextContainer, ContainerSponsorImages} from './sponsors.styles'
import {data_sponsor} from './images'
import {textsponsor} from './textSponsor'


class Sponsor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sponsor: []
    };
  }
  componentDidMount(){
      this.setState({sponsor: data_sponsor})
  }
 render(){
  const {sponsor} = this.state

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
}

export default Sponsor