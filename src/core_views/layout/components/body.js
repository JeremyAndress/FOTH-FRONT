import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {Load} from '../../../store/movie/action';
import { selectMovies } from '../../../store/movie/reducer';
import { connect } from 'react-redux';
import BodyElement from '../elements/movie_item'

export class Body extends Component {


    async componentDidMount(){
        this.props.Load()
    }

   
    // onClick={async () => await this.props.Load()}
    render() {
        return (
            <div>
              <BodyElement />
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

export default connect(mapStateToProps, mapDispatchToProps)(Body);
