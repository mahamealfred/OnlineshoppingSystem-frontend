import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from '../types/categoriesTypes';

const initialState = {
    loading: false,
    user: [],
    error: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES_REQUEST:
            return {
                ...state, //spredding
                loading: true,
            };
        case CATEGORIES_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: '',
            };
        case CATEGORIES_FAILURE:
            return {
                loading: false,
                user: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;