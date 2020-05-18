import  axios from 'axios';
import config from 'react-global-configuration';



export const Load = data => async dispatch => {
const API = config.get('API');
    dispatch({
        type: 'LOAD_MOVIES'
    })

     await axios({
        method: 'GET',
        url:`${API}movie`,
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