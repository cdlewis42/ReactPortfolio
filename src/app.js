import React,{Component} from "react"
import Wrapper from "./components/Wrapper"
import Carousel from "./components/Carousel"
import Jumbotron from "./components/Jumbotron"

class App extends Component{
render(){
    return (
        <Wrapper>
            {<Jumbotron></Jumbotron>}
            <Carousel/>
        </Wrapper>
            
    )
}
}

export default App;