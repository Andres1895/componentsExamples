import React from 'react';
import JumbotronItem from '../shares/jumbotronItem'
import {SecondJumbotronContainer, JumbotronGeneral, Width80, Width20, JumbotronContainer} from '../shares/jumbotron.styles';

class Jumbotron extends React.Component{
    render(){
        return(
            <JumbotronGeneral>
                <JumbotronContainer>
                    <Width80>
                        <JumbotronItem
                            title={"¿Que es STEM?"}
                            textArea={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "}
                            link={"/"}
                            linkText={"Ver más"}
                            smallTitle={false}
                        />
                    <SecondJumbotronContainer>
                        <JumbotronItem
                                title={"Lorem ipsum dolor sit amet"}
                                textArea={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "}
                                link={"/"}
                                linkText={"Ver más"}
                                margin={true}
                                smallTitle={true}
                        />
                        <JumbotronItem
                                title={"Lorem ipsum dolor sit amet"}
                                textArea={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  "}
                                link={"/"}
                                linkText={"Ver más"}
                                smallTitle={true}
                        />
                    </SecondJumbotronContainer>
                    </Width80>
                    <Width20>
                        <JumbotronItem
                            title={"Test Vocacional"}
                            textArea={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. "}
                            link={"/"}
                            linkText={"Ver más"}
                            smallTitle={false}
                        />
                    </Width20>
                </JumbotronContainer>
            </JumbotronGeneral>
        );
    }
}
export default Jumbotron