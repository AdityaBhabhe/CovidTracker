import React from 'react'
import {Cards,Chart,StatePicker} from './Components'
import './App.module.css'
import {FetchData} from './api'


class App extends React.Component{

    state={
        data:{}
    }


    async componentDidMount(){
        const data = await FetchData()
        this.setState({data:data})
    }

    render(){
        return(
            <div className="container">
                <Cards data={this.state.data}/>
                <StatePicker />
                <Chart />
            </div>
        )
    }
}

export default App;