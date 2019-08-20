import styled from 'styled-components'

export const GeneralContainer = styled.div`
background-color: white
width: 100%
`
export const BodyContainer = styled.div`
display:flex
flex-direction: row
padding: 2rem
`

export const LeftContainer = styled.div`
display: flex
background-color: white
width: 15%
padding: 3rem
`
export const RightContainer = styled.div`
background-color: white
border-color: blue
width: 85%
display: flex;
flex-wrap: wrap;
justify-content: left;
`
export const TextContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

export const Text = styled.div`
display: flex
color: #02ADAD
font-weight: bold
margin: 0
font-size: larger
`
export const ContainerSponsorImages = styled.img`
padding: 1rem
&:hover {
 cursor: pointer;
 }
`
