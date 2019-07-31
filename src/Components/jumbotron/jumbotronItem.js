import React from 'react';

import {JumbotronItem, Paragraph, Link, Title, } from './jumbotron.styles';
class JumbotronItem extends React.Component{
    render(){
        return(
            <JumbotroItem>
                <Title>
                    {this.props.title}
                </Title>
                <p>
                    {this.props.textArea}
                </p>
                <a href={this.props.link}>
                    {this.props.linkText}
                </a>
            </JumbotroItem>
        );
    }
}

export default JumbotronItem;