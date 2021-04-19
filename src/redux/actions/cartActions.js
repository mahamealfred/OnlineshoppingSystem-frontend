import * as actionTypes from '../types/cartTypes';
import axios from 'axios';

export const addToCart =(id,qty) => async (dispatch,getState) => {
 const {data} =await axios.get(`http://localhost:5000/products/${id}`);

 dispatch({
     type: actionTypes.ADD_T0_CART,
     payload: {
         product:data._id,
         name:data.name,
         imageUrl:data.imageUrl,
         price:data.price,
         countInstock:data.countInstock,
         qty
     }
 })
 localStorage.setItem('cart',JSON.stringify(getState().cart))
}