import styled from 'styled-components' 

export const GeneralContainer = styled.div`
display: flex 
background-color: white 
padding: 3rem 
`
export const ContainerItems = styled.div`
display: flex 
flex-direction: column 
`

export const ButtonContainer = styled.div`
display: flex 
flex-direction: row 
align-content: center
justify-content: space-around 
padding: 2rem

`
export const Title = styled.h1`
color: #303030 
font-size: ${props => props.secundary ? "15px" : "30px"} 
font-weigth: bold 
text-align: ${props => props.secundary ? "justify" : "center"} 
margin: 0px 
padding-bottom: 2rem
`

export const Paragraph = styled.p`
text-align: justify 
font-size: 15px 
margin: 0px
padding-bottom: 2rem
`
export const Button = styled.button`
background: ${props => props.primary ? "#02ADAD" : "transparent"}
border-radius: 17px
border: 2px solid #02ADAD
font-weigth: bold
min-width: 10rem
color: ${props => props.primary ? "white" : "#02ADAD"} 
margin: 0.5em 1em 
padding: 0.25em 1em 
margin: 0px 
padding: 0.7rem
padding-left: 5rem
padding-right: 5rem
font-size: 15px
&:hover {
 filter: brightness(1.15) 
}
`

export const List = styled.ul`
list-style-type:none 
margin:0px
`
export const ListItem = styled.li`
font-size: 15px
padding: 0.3rem;
`
export const RecommendationContainer = styled.div`
display: flex
flex-direction: column
padding-left: 3rem
`