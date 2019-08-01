import React from 'react';

import {JumboItem, Paragraph, Link, Title, LinkContainer, Title2} from './jumbotron.styles';
class JumbotronItem extends React.Component{
    render(){
        const { smallTitle } = this.props;

        console.log(smallTitle)

        return(
            <JumboItem>
                <Title smallTitle={smallTitle}>
                    {this.props.title}
                </Title>
                <Paragraph>
                    {this.props.textArea}
                </Paragraph>
                <LinkContainer>
                    <Link href={this.props.link}>
                        {this.props.linkText}
                    </Link>
                </LinkContainer>


            </JumboItem>
        );
    }
}

export default JumbotronItem;