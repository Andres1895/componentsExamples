import React from 'react';
import {GeneralContainer, Title, Paragraph, Button, ButtonContainer} from './squareComponent.styles'

class SquareIem extends React.Component{
    render(){
        return(
            <GeneralContainer>
                <Title>Quisque rutrum. Aenean imperdiet.</Title>
                <Paragraph>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </Paragraph>
                <ButtonContainer>
                    <Button>Aenean imperdiet</Button>
                </ButtonContainer>
            </GeneralContainer>
        );
    }
}
export default SquareIem;