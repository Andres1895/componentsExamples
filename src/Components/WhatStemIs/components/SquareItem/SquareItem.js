import React from 'react';
import {TextSquare} from './textSquareItem'
import {BodyContainer, GeneralContainer, Title, Paragraph, ButtonContainer, Button} from './SquareItem.styles'

class SquareItem extends React.Component{
    render(){
        return(
            <GeneralContainer>
                <BodyContainer>
                    <div><Title>{TextSquare.title}</Title></div>
                    <div><Paragraph>{TextSquare.paragraph}</Paragraph></div>
                    <ButtonContainer>
                        <Button>{TextSquare.textButton}</Button>
                    </ButtonContainer>
                </BodyContainer>
            </GeneralContainer>

        );
    }
}
export default SquareItem