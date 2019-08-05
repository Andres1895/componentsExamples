import styled from 'styled-components';


export const JumbotronGeneral = styled.div`
    display:flex;
    flex-direction: row;
    background-image: url(https://via.placeholder.com/1500x350);
`;

export const Title= styled.h1`
    font-size: ${props => props.smallTitle ? "20px" : "40px"};
    margin:0;
    padding: 2rem;
`;

export const LinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 2rem;
`

export const Link = styled.a`
    color: white;
`;

export const Paragraph = styled.p`
    color: white;
    text-align: justify;
    margin: 0;
    padding: 2rem;
`;

export const JumboItem = styled.div`
    background-color: rgba(0, 148, 152, 0.7);
    flex-direction: row;
    margin-right: ${props => props.margin ? "2rem" : "0"};
    height: 100%
`;

export const Width80 = styled.div`
    width: 70%;
    padding: 2rem;
    height: fit-content;
`;
export const Width20 = styled.div`
    width: 30%;
    padding: 2rem;
`;

export const JumbotronContainer = styled.div`
  display: flex;
  color: white;
`;
export const SecondJumbotronContainer = styled.div`
  display: flex;
  margin-top: .75rem;
  color: white;
`;