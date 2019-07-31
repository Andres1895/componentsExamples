import React from 'react';
import JumbotronItem from './jumbotronItem'
import { JumbotronWrapper, JumbotronContainer, Widh20, Widh80  } from './jumbotron.styles'

class Jumbotron extends React.Component{
  render(){
    return(
      <JumbotronWrapper>
        <JumbotronContainer>
          <Widh80>
          <JumbotronItem 
            title = {"¿Que es STEM?"}
            textArea = {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."}
            link = {"/"}
            linkText = {"Ver mas"}
          />
          </Widh80>
          <Widh20>
          <JumbotronItem 
            title = {"¿Para que sirve)"}
            textArea = {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."}
            link = {"/"}
            linkText = {"Ver mas"}
          />
          </Widh20>
            
        </JumbotronContainer>
      </JumbotronWrapper>
    );
  }
}
export default Jumbotron