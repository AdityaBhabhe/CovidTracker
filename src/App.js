import React from 'react'
import {Cards,Chart,StatePicker} from './Components'
import './App.module.css'
import {FetchData} from './api'



class App extends React.Component{

    state={
        data:null
    }


    async componentDidMount(){
        const data = await FetchData()
        
        console.log("xyz",data)

        if (data){
            this.setState({data:data})
        }
        
    }

    render(){
        return(
            <div className="container">
                <h1>Covid 19 Record for India</h1>
                {this.state.data ? <Cards data={this.state.data}/> : null}
                <StatePicker />
                <Chart />
            </div>
        )
    }
}

export default App;