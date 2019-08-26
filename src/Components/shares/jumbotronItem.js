import React from 'react';

import {JumboItem, Paragraph, Link, Title, LinkContainer, Card} from './jumbotron.styles';
class JumbotronItem extends React.Component{
    render(){
        const {  card, smallTitle, margin } = this.props;
        return(
            <JumboItem  card={card} margin={margin}>
                <Title card={card} smallTitle={smallTitle}>
                    {this.props.title}
                </Title>
                <Paragraph card={card}>
                    {this.props.textArea}
                </Paragraph>
                <LinkContainer>
                    <Link card={card} href={this.props.link}>
                        {this.props.linkText}
                    </Link>
                </LinkContainer>
            </JumboItem>
        );
    }
}

export default JumbotronItem;