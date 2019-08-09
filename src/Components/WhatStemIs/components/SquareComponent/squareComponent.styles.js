import styled from 'styled-components'

export const GeneralContainer = styled.div`
background: #02ADAD
display:flex
flex-direction: column
border-radius: 7px;
`
export const Title = styled.h1`
font-size: 20px
color: white
margin: 0
padding: 1rem
`

export const Paragraph = styled.p`
font size: 10px
color: white
margin:0
padding:1rem
`

export const Button = styled.div`
background: transparent
border-radius: 17px
border: 2px solid yellow
font-weigth: bold
min-width: 10rem
color: white
padding-top: 2rem
padding-bottom: 2rem
font-size: 10px
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