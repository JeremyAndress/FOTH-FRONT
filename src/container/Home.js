import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {Load} from '../store/movie/action';
import { selectMovies } from '../store/movie/reducer';
import { connect } from 'react-redux';

export class Home extends Component {

    state = {
        flower : []
    }

    url = 'https://pixabay.com/api/?key=15908431-b6034a52872cd060420174a7e&q=flower';
    
    async componentDidMount(){
        this.props.Load()
        await this.flowerData();
    }

    flowerData = async () => {
        let res = await fetch(this.url)
        let data = await res.json()
        console.log(data.hits)
        this.setState({flower : data.hits})
    }



   
    // onClick={async () => await this.props.Load()}
    render() {
        return (
            <div>
                {
                this.props.movies.map(x =>
                    <div key={x.id}> 
                        <h1 >{x.name}</h1> 
                        <p>{x.description}</p>
                        <Button
                        variant="contained"
                        color="primary"
                            href={x.url}
                        >
                            TEST</Button>
                    </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: selectMovies(state)
})

const mapDispatchToProps = dispatch => {
    return {
        Load: () => dispatch(Load())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
