import React, { Component } from 'react'

export default class Home extends Component {

    state = {
        flower : []
    }

    url = 'https://pixabay.com/api/?key=15908431-b6034a52872cd060420174a7e&q=flower';
    
    async componentDidMount(){
        await this.flowerData();
    }

    flowerData = async () => {
        let res = await fetch(this.url)
        let data = await res.json()
        console.log(data.hits)
        this.setState({flower : data.hits})
    }

    render() {
        return (
            <div>
                {
                this.state.flower.map(x =>
                    <div key={x.id}> 
                        <h1 >{x.id}</h1> 
                        <p>{x.likes}</p>
                        <img src={x.previewURL}></img>
                    </div>
                    )
                }
            </div>
        )
    }
}
