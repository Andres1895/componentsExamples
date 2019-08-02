import styled from 'styled-components';


export const JumbotronGeneral = styled.div`
    display:flex;
    flex-direction: row;
    background-image: url(https://via.placeholder.com/1500x350);
    
`;

export const Title= styled.h1`
    font-family: Tahoma;
    font-size: ${props => props.smallTitle ? "20px" : "40px"};
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
`;

export const JumboItem = styled.div`
    background-color: rgba(0, 148, 152, 0.7);
    justify-content: space-between;
    flex-direction: row;
`;

export const Width80 = styled.div`
    width: 70%;
`;
export const Width20 = styled.div`
    width: 30%;
`;
export const Width50 = styled.div`

`;

export const JumbotronContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const SecondJumbotronContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;