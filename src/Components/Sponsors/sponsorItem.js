import React from 'react';
import {GeneralContainer, BodyContainer, LeftContainer, RightContainer,
Text, TextContainer} from './sponsors.styles'
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
      this.setState({sponsor: data_sponsor.logo})
  }
 render(){
  console.log(this.state.sponsor)
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
      
     </RightContainer>
    </BodyContainer>
   </GeneralContainer>
  );
 }
}

export default Sponsor