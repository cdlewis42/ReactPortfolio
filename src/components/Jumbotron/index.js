import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import "./style.css"

class RenderJumbotron extends React.Component{
    
    render(){
       return <Jumbotron className = "jumbotron">
        <h1>Celeste Lewis</h1>
        <h2>Software Developer</h2>    
        </Jumbotron>
       

    }

}

export default RenderJumbotron