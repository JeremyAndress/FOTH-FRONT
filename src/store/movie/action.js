import  axios from 'axios';

export const Load = data => async dispatch => {

    dispatch({
        type: 'LOAD_MOVIES'
    })

     await axios({
        method: 'GET',
        url:"http://localhost:8000/movie",
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