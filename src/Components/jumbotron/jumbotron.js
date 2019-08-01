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
                            title={"¿Que es STEM?"}
                            textArea={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "}
                            link={"/"}
                            linkText={"Ver más"}
                    />
                    <SecondJumbotronContainer>
                        <JumbotronItem
                                title2={"Lorem ipsum dolor sit amet"}
                                textArea={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "}
                                link={"/"}
                                linkText={"Ver más"}
                        />
                        <JumbotronItem
                                title2={"Lorem ipsum dolor sit amet"}
                                textArea={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  "}
                                link={"/"}
                                linkText={"Ver más"}
                        />
                    </SecondJumbotronContainer>
                    </Width80>
                    <Width20>
                        <JumbotronItem
                            title={"Test Vocacional"}
                            textArea={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. "}
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