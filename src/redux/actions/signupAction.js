import axios from 'axios';
import {
    SIGNUP_USER_REQUEST,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
} from '../types/signupTypes';


export const signupAction = (data, history) => async (dispatch) => {
    try {
        dispatch(signupUserRequest());
        const token = await localStorage.getItem("my-token");
let headers
        if(token){
             headers = {
                'Content-Type': 'application/json',
                'my-token': `${token}`
              } 
        }
        else{
            headers = {
                'Content-Type': 'application/json',
              }
        }
      
          console.log(headers)
        const res = await axios.post(
            `http://localhost:5000/auth/signup`,
            data
            ,{headers:headers}
        );
        const user = await res.data;
         localStorage.setItem('user-data', JSON.stringify(user.data));
        dispatch(signupUserSuccess({ data: user.data }));
        history.push('/signin')
        console.log(user)
    } catch (err) {
        if (err.response) {
            const errorMessage = await err.response.data.message;
            dispatch(signupUserFailure(errorMessage));
        } else {
            dispatch(signupUserFailure('Network n Error'));
        }
    }
};

export const signupUserRequest = () => {
    return {
        type: SIGNUP_USER_REQUEST,
    };
};

export const signupUserSuccess = (user) => {
    return {
        type: SIGNUP_USER_SUCCESS,
        payload: user,
    };
};
export const signupUserFailure = (error) => {
    return {
        type: SIGNUP_USER_FAILURE,
        payload: error,
    };
};
