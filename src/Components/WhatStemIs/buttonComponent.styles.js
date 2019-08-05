import styled from 'styled-components';


export const ContainerGeneral = styled.div`
  display:flex
  flex-direction: column
  background-image: url(https://via.placeholder.com/1500x250)
`;

export const Title = styled.h1`
color: white
font-size: 30px
text-align: center
margin: 0
padding: 1rem
`

export const Button = styled.button`
background-color: #02ADAD
color: white
border-radius: 20px
border: none
font-size: 20px
padding: 0.7rem
padding-left: 5rem
padding-right: 5rem
&:hover {
  filter: brightness(1.1);
}
`
export const Paragraph = styled.p`
color: white
text-align: justify
margin: 0
font-size: 20px
padding: 1rem
`;

export const ButtonContainer = styled.div`
display:flex
justify-content: space-between
padding: 1rem
`
export const ItemsContainer = styled.div`
  display: flex
  height: fit-content
  padding: 1rem
  padding-right: 9rem
  padding-left: 9rem
`;