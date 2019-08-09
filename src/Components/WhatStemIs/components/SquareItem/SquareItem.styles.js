import styled from 'styled-components'

export const GeneralContainer = styled.div`
background: #02ADAD
display: flex
border-radius: 5px
`
export const BodyContainer = styled.div`
padding: 1rem
display: flex
flex-direction: column
`

export const Title = styled.h1`
font-size: 20px
color: white
margin: 0
padding-bottom: 2rem
`

export const Paragraph = styled.p`
font-size: 15px
color: white
margin: 0
padding-bottom: 2rem
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
border: 2px solid white
font-weigth: bold
min-width: 16rem
color: white
padding: 0.7rem
font-size: 15px
&:hover {
 filter: brightness(1.15) 
}
`