import styled from 'styled-components';


export const JumbotronGeneral = styled.div`
    display:flex;
    flex-direction: row;
    background-image: url(https://via.placeholder.com/1500x350);
`;

export const Title= styled.h1`
    font-size: ${props => props.smallTitle ? "20px" : "40px"};
    margin:0;
`;

export const LinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Link = styled.a`
    color: white;
`;

export const Paragraph = styled.p`
    color: white;
    text-align: justify;
    margin: 0;
`;

export const JumboItem = styled.div`
    background-color: rgba(0, 148, 152, 0.7);
    flex-direction: row;
`;

export const Width80 = styled.div`
    width: 70%;
    height: 100;
`;
export const Width20 = styled.div`
    width: 30%;
    height: 100;
`;
export const Width50 = styled.div`
    width: 50%
    height: 100;
`;

export const JumbotronContainer = styled.div`
  color: white;
  display: flex;

`;
export const SecondJumbotronContainer = styled.div`
  color: white;
  display: flex;

`;