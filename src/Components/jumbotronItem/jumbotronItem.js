import React from 'react';
import '../../styles/jumbotroItemStyles/jumbotronItemStyles.css'

class JumbotronItem extends React.Component{
    render(){
        return(
            <div className="container">
                <h1 className="titleItem">
                    {this.props.title}
                </h1>
                <p className="textAreaItem">
                    {this.props.textArea}
                </p>
                <a href={this.props.link}>
                    {this.props.linkText}
                </a>
            </div>
        );
    }
}

export default JumbotronItem;