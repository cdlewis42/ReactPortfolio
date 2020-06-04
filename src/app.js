import React,{Component} from "react"
import Carousel from "./components/Carousel"

class App extends Component{
render(){
    return (
        <div className = "page-container">
            <div className = "content-wrap">
                <Carousel/>
            </div>
        </div>
    )
}
}

export default App;