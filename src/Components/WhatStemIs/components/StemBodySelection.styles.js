import styled from 'styled-components';
//width:100%
export const GeneralContainer = styled.div` 
padding: 4rem
background-color: white
`
export const FirstSection = styled.div`
padding: 2rem
`
export const ContainerSections = styled.div`
display: flex;
flex-direction: row;    
justify-content: space-between;
`
export const ContainerLeft = styled.div`
display: flex
flex-direction: row
width: 66%
`

export const ContainerLeftAux = styled.div`
flex-direction: column
justify-content: space-between
`

export const ContainerRigth = styled.div`
display: flex
flex-direction: column
width: 33%
align-content: space-between
`

export const ContainerParagraph = styled.div`
display: flex
`

export const Title = styled.h1`
font-size: 20px
padding-bottom:2rem
margin: 0
color: #02ADAD
`

export const Paragraph =  styled.p`
text-align: justify
margin:0
`

export const ParagraphHalf = styled(Paragraph)`
text-align: justify
display: flex
flex-direction: column
`

export const ParagraphNested = styled(Paragraph)`
padding:0
`

export const Par = styled(Paragraph)`
margin:0
padding: 0
`

export const Image = styled.img`
border-radius: 17px;
width: 100%;
heigth: 100%
align-items: center;
justify-content: center;
`

export const Button = styled.button`
background: transparent
border-radius: 17px
border: 2px solid #02ADAD
font-weigth: bold
min-width: 10rem
color: #02ADAD
padding: 0.7rem
font-size: 15px
&:hover {
 filter: brightness(1.15) 
}
`

export const ButtonContainer = styled.div`
display: flex 
flex-direction: row 
align-content: center
justify-content: space-around 
padding: 2rem
`
export const VideoContainer = styled.div`

`
export const ImageContainer = styled.div`
heigth: 40%
`