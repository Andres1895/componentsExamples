import styled from 'styled-components'

export const GeneralContainer = styled.div`

padding: 1rem
`

export const BodyContainer = styled.div`
display: flex
flex-direction: row
padding: 1rem
justify-content: space-between
`
export const LeftContainer = styled.div`
display: flex
flex: 1
background-color: white
flex-direction: column
`
export const RightContainer = styled(LeftContainer)`
background-color: white
padding: 2rem
padding-top: 0
`
export const ImageContainer = styled.div`
justify-content: space-around
`
export const Image = styled.img`
width: 100%
`
export const Title = styled.h1`
color: #02ADAD
font-weight: bold
font-size: 1.5rem
padding: 2rem
margin: 0
`

export const TitleStem = styled(Title)`
font-size: 2rem
padding-top: 0
`
export const TextContainer = styled.div`
padding: 2rem
`
export const SecondContainer = styled.div`
padding-left: 2rem;
padding-right: 10rem;
`
export const ButtonContainer = styled.div`
display: flex
justify-content: flex-end
padding: 2rem
`
export const Button = styled.button`
background: transparent
border: none
cursor: pointer
color: #02ADAD
font-weight: bold
`

export const FormContainer = styled.div`
display: flex
flex-direction: column
align-content: space-between
`
export const Form = styled.form`
display: flex
flex-direction: column
padding: 2rem
`
export const Input = styled.input`
background: transparent
border-radius: 20px
border: 2px solid #02ADAD
padding: 1rem
width: 50%

`
export const TextArea = styled.textarea`
background: transparent
border-radius: 20px
border: 2px solid #02ADAD

`