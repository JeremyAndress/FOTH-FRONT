import  axios from 'axios';
import config from 'react-global-configuration';

// const API = config.get('API');

export const Load = data => async dispatch => {
    console.log(API)
    dispatch({
        type: 'LOAD_MOVIES'
    })

     await axios({
        method: 'GET',
        url:`http://localhost:8000/api/movie`,
    }).then(res => {
        
        dispatch({
            type: 'LOAD_MOVIES_SUCCESS',
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type: 'LOAD_MOVIES_FAIL',
            payload: err
        })
    })
}

export default Load;