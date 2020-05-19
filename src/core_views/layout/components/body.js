import React, { useState, useEffect, useSelector } from 'react';
import {Load} from '../../../store/movie/action';
import { selectMovies } from '../../../store/movie/reducer';
import { connect } from 'react-redux';
import BodyElement from '../elements/movie_item'

export function Body (data) {


     useEffect(() => {
     }, []);

   
    // onClick={async () => await this.props.Load()}
   
        return (
            <div>
              <BodyElement  testVideos={data.mainMovies}/>
            </div>
        )
    
}



export default (Body);
