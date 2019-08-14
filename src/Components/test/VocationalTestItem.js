import React from 'react';
import {Title, Paragraph, Button, ListItem, ButtonContainer, RecommendationContainer, GeneralContainer, ContainerItems, List} from './VocationalTest.styles'

class VocationalTestItem extends React.Component{
 render(){
  return(
   <GeneralContainer>
    <ContainerItems>
     <Title>
      {this.props.title}
     </Title>
     <Paragraph>
      {this.props.textarea}
     </Paragraph>
     <ButtonContainer>
      <Button>
       {this.props.textbutton1}
      </Button>
      <Button primary>
       {this.props.textbutton2}
      </Button>
     </ButtonContainer>
     <RecommendationContainer>
      <Title secundary>
       {this.props.titleSecundary}
      </Title>
      <List >
       <ListItem>{this.props.listItem1}</ListItem>
       <ListItem>{this.props.listItem2}</ListItem>
       <ListItem>{this.props.listItem3}</ListItem>
       <ListItem>{this.props.listItem4}</ListItem>
       <ListItem>{this.props.listItem5}</ListItem>
      </List>
     </RecommendationContainer>
    </ContainerItems>
   </GeneralContainer>
  );
 }
}

export default VocationalTestItem;