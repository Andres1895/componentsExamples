import styled from 'styled-components';

export const GeneralContainer = styled.div` 
padding-right: 3rem
padding-left: 3rem
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
justify-content: space-around
`
export const ContainerLeftAux = styled.div`
display: flex
flex-direction: column
justify-content: space-between;
`

export const ContainerRigth = styled.div`
display: flex
flex-direction: column
width: 33%
justify-content: space-between
`

export const Title = styled.h1`
font-size: 30px
padding-bottom:2rem
margin: 0
color: #02ADAD
padding-left: 0
`
export const Paragraph =  styled.p`

padding-right: 2rem;
text-align: justify
margin:0
min-width: 40%
line-height:1.7rem
`

export const ParagraphContainer = styled.div`
max-width: 50%
`
export const ParagraphContainerSecond = styled.div`
max-width: 100%
`
export const ParagraphLargeContainer = styled(ParagraphContainer)`
max-width: 100%
`

export const ParagraphHalf = styled(Paragraph)`
text-align: justify
display: flex
flex-direction: column
`
export const Par = styled(Paragraph)`
margin:0
padding: 0
`
export const Image = styled.img`
border-radius: 17px
width: 100%;
heigth: 50%
align-items: center
justify-content: center
max-height: 20rem
`
export const Button = styled.button`
background: transparent
border-radius: 17px
border: 2px solid #02ADAD
font-weigth: bold
min-width: 16rem
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
padding-bottom: 0
`

export const ImageContainer = styled.div`
padding-right: 2rem;
`
export const LargeImageContainer = styled.div`
padding: 0rem
padding-top: 1rem
`

export const Ex = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 63%;
`