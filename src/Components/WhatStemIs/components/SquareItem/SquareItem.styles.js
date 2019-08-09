import styled from 'styled-components'

export const GeneralContainer = styled.div`
background: #02ADAD
display: flex
border-radius: 5px
margin: 2rem
`
export const BodyContainer = styled.div`
padding: 1rem
display: flex
flex-direction: column
padding-bottom:2rem
padding-top: 2rem
align-content: space around
`

export const Title = styled.h1`
font-size: 20px
color: white
margin: 0
padding-bottom: 2rem
`

export const Paragraph = styled.p`
font-size: 15px
line-height: 1.5rem
color: white
text-align: justify
margin: 0
padding-bottom: 2rem
line-height:1.7rem
`

export const ButtonContainer = styled.div`
display: flex 
flex-direction: row 
align-content: center
justify-content: space-around 
`
export const Button = styled.button`
background: transparent
border-radius: 17px
border: 2px solid yellow
font-weigth: bold
min-width: 16rem
color: white
padding: 0.7rem
font-size: 15px
&:hover {
 filter: brightness(.1) 
}
`