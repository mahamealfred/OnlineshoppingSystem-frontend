import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import categoryReducer from './categoriesReducer'
import deleteCategoryReducer from './deleteCategoryReducer';
import deleteProductReducer from './deleteProductReducer';
import productReducer from './productReducer'


const allReducers = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    categories: categoryReducer,
    deleteCategories: deleteCategoryReducer,
    products:productReducer,
    deleteProducts:deleteProductReducer
})

export default allReducers;