import styled from 'styled-components'

export const GeneralContainer = styled.div`
display: flex
`
export const BodyContainer = styled.div`
display: flex
flex-direction: row
background-color: green
width: 100%
`
export const LeftContainer= styled.div`
display: flex
background-color: white
width: 50%
flex-direction: row;
`
export const RigthContainer = styled(LeftContainer)`
background-color: white
display: flex
justify-content: flex-end
align-items: center

`
export const Image = styled.img`
width: 13rem;
align-items: center
justify-content: center
`
export const TextContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: flex-end;
width: 60%
padding-bottom: 0.4rem
`

export const Text = styled.div`
display: flex
color: #02ADAD
font-weight: bold
margin: 0

`
export const ImageContainer = styled.div`
display: flex
padding: 0.8rem
`
export const IconContainer = styled.div`
display:flex
width: 50%
justify-content: space-around;
`
export const ButtonIcon = styled.button`
color: #02ADAD
background: transparent
border: none
padding:0
`
export const UserIcon = styled(ButtonIcon)`
padding-left: 2rem
padding-right: 2rem

`
export const Link = styled.a`
text-decoration: none;
`
/*This exported const is defined as img temporarily just for the use of
placeholders*/

export const IconPlace = styled.img`

`