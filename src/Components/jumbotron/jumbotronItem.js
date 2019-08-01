import React from 'react';

import {JumboItem, Paragraph, Link, Title, LinkContainer, Title2} from './jumbotron.styles';
class JumbotronItem extends React.Component{
    render(){
        return(
            <JumboItem>
                <Title>
                    {this.props.title}
                </Title>
                <Title2>
                    {this.props.title2}
                </Title2>
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