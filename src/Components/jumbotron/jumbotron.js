import React from 'react';
import JumbotronItem from './jumbotronItem'
import {SecondJumbotronContainer, JumbotronGeneral, Width80, Width20, JumbotronContainer} from './jumbotron.styles';


class Jumbotron extends React.Component{
    render(){
        const t1= "¿Que es STEM"
        const p1= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        const l1= "Ver mas"
        return(
            <JumbotronGeneral>
                <JumbotronContainer>
                    <Width80>
                        <JumbotronItem
                            title={"¿Ques es STEM?"}
                            textArea={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "}
                            link={"/"}
                            linkText={"Ver más"}
                    />
                    <SecondJumbotronContainer>
                        <JumbotronItem
                                title={"¿Ques es STEM?"}
                                textArea={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "}
                                link={"/"}
                                linkText={"Ver más"}
                        />
                        <JumbotronItem
                                title={"¿Ques es STEM?"}
                                textArea={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "}
                                link={"/"}
                                linkText={"Ver más"}
                        />
                    </SecondJumbotronContainer>
                    </Width80>
                    <Width20>
                        <JumbotronItem
                            title={"Test Vocacional"}
                            textArea={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "}
                            link={"/"}
                            linkText={"Ver más"}
                        />
                    </Width20>
                </JumbotronContainer>
            </JumbotronGeneral>
        );
    }
}
export default Jumbotron