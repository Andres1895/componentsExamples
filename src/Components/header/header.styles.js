import styled from 'styled-components'

export const GeneralContainer = styled.div`
display: flex
background-color: red
`
export const BodyContainer = styled.div`
display: flex
flex-direction: row
background-color: green

`
export const LeftContainer= styled.div`
display: flex
background-color: blue
width: 50%
flex-direction: row;
`
export const RigthContainer = styled(LeftContainer)`
background-color: yellow
`
export const Image = styled.img`
padding: .7rem;
align-items: center
justify-content: center
`
export const TextContainer = styled.div`
display: flex;
flex-direction: row;
padding-left: 3rem;
align-items: flex-end;
`


export const Text = styled.div`
display: flex
color: #02ADAD
font-weight: bold
margin: 0
padding-left: 3em;
`
export const ImageContainer = styled.div`
padding: 0.3rem
`
export const IconContainer = styled.div`

`
/*

export const IconContainer = styled.div`
background-color: #02ADAD
`

export const Text = styled.a`
color: #02ADAD
font-weight: bold
margin: 0
`
export const Image = styled.img`
padding-bottom: .3rem;
align-items: center
justify-content: center
`
export const TextContainer = styled.div`
display: flex
flex-direction: row
align-items: flex-end;
`
export const Icon = styled.div`
background-color: #red
`*/