import React from 'react';
import '../../styles/jumbotroItemStyles/jumbotroItemStyles.css'

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
                <link className="linkItem">
                    {this.props.linkButton}
                </link>

            </div>
        );
    }
}

export default JumbotronItem;