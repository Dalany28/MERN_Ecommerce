import * as actionTypes from '../constants/productConstant';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_PRODUCT_REQUEST
        });

        const { data } = await axios.get("/api/products");
        dispatch({
            type: actionTypes.GET_PRODUCT_SUCCESS,
            payload: data
        });
    } catch (error) {
        console.error("Error fetching products:", error); // Log the error
        dispatch({
            type: actionTypes.GET_PRODUCT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_REQUEST
        });

        console.log('Fetching product details for id:', id);

        const { data } = await axios.get(`/api/products/${id}`);
        console.log('Received product details:', data);

        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data, 
        });
    } catch (error) {
        console.error("Error fetching product details:", error); // Log the error
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};


export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_SET
    });
};
