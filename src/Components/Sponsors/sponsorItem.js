import React from 'react';
import {GeneralContainer, BodyContainer, LeftContainer, RightContainer,
Text, TextContainer} from './sponsors.styles'
import {textsponsor} from './textSponsor'
import $ from 'jquery'

class Sponsor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sponsor: []
    };
  }
  componentDidMount(){
    var json = require('./images.json');
    $.getJSON(json, function(data){
      this.setState({sponsor: data})
      console.log("Json ", json)
    })
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