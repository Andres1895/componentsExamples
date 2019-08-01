import styled from 'styled-components';


export const JumbotronGeneral = styled.div`
    display:flex;
    flex-direction: row;
    background-image: url(https://via.placeholder.com/1500x350);
`;

export const Title= styled.h1`
    font-family: Tahoma;
    font-size: ${props => props.smallTitle ? "20px" : "40px"};
    padding: 20px;
`;

export const LinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
    padding-bottom: 15px;
`

export const Link = styled.a`
    color: white;

`;

export const Paragraph = styled.p`
    color: white;
    text-align: justify;
    margin-right: 30px;
    margin-left: 30px;
    margin-bottom: 40px;
`;

export const JumboItem = styled.div`
    background-color: rgba(0, 148, 152, 0.7);
    margin: 20px;
    max-width: 100%;
    flex-direction: row;
`;

export const Width80 = styled.div`
    width: 70%;
`;
export const Width20 = styled.div`
    width: 30%;
    margin-right: 40px;
    align-items: center;
    justify-content: center;
`;
export const Width50 = styled.div`
    width:50%;
`;

export const JumbotronContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 50px;
  margin-top: 50px;
`;
export const SecondJumbotronContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 35px;
`;