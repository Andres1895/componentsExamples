import React from 'react';
import JumbotronItem from '../jumbotronItem/jumbotronItem'
import '../../styles/jumbotronStyles/jumbotronStyles.css'

class Jumbotron extends React.Component{
    render(){
        const t1= "¿Que es STEM"
        const p1= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        const l1= "https://www.google.com/"
        const lt1= "Ver mas"
        return(
            <div className="container">
                <JumbotronItem 
                className="jumboItem"
                title = {t1}
                textArea = {p1}
                link = {l1}
                linkText = {lt1}
                />
                 <JumbotronItem 
                title = {t1}
                textArea = {p1}
                link = {l1}
                linkText = {lt1}
                />

            </div>
        );
    }
}
export default Jumbotron