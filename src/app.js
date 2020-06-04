import React,{Component} from "react"
import Wrapper from "./components/Wrapper"
import Carousel from "./components/Carousel"
import Jumbotron from "./components/Jumbotron"
import "./style.css"
class App extends Component{
render(){
    return (
        <Wrapper>
            {<Jumbotron></Jumbotron>}
            <Carousel/>
            <Carousel/>
        </Wrapper>
            
    )
}
}

export default App;