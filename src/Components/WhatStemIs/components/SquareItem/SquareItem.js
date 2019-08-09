import React from 'react';
import {TextSquare} from './textSquareItem'
import {BodyContainer, GeneralContainer, Title, Paragraph, ButtonContainer, Button} from './SquareItem.styles'

class SquareItem extends React.Component{
    render(){
        return(
            <GeneralContainer>
                <BodyContainer>
                    <Title>{TextSquare.title}</Title>
                    <Paragraph>{TextSquare.paragraph}</Paragraph>
                    <ButtonContainer>
                        <Button>{TextSquare.textButton}</Button>
                    </ButtonContainer>
                </BodyContainer>
            </GeneralContainer>

        );
    }
}
export default SquareItem