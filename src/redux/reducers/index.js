import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import categoryReducer from './categoriesReducer'
import deleteCategoryReducer from './deleteCategoryReducer';
import deleteProductReducer from './deleteProductReducer';
import productReducer from './productReducer'
import addCategoryReducer from './addCategoryReducer';
import updateCategoryReducer from './updateCategoryReducer';
import addProductReducer from './addProductReducer';
import updateProductReducer from './updateProductReducer';



const allReducers = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    categories: categoryReducer,
    deleteCategories: deleteCategoryReducer,
    products:productReducer,
    deleteProducts:deleteProductReducer,
    addCategory: addCategoryReducer,
    updateCategory:updateCategoryReducer,
    addProduct: addProductReducer,
    updateProduct:updateProductReducer
})

export default allReducers;