import React from 'react';

import {JumboItem, Paragraph, Link, Title, } from './jumbotron.styles';
class JumbotronItem extends React.Component{
    render(){
        return(
            <JumboItem>
                <Title>
                    {this.props.title}
                </Title>
                <Paragraph>
                    {this.props.textArea}
                </Paragraph>
                <Link href={this.props.link}>
                    {this.props.linkText}
                </Link>
            </JumboItem>
        );
    }
}

export default JumbotronItem;