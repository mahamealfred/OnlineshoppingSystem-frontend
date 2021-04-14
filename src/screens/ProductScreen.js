import './ProductScreen.css'

const ProductScreen = () => {
    return (
        <div className="productscreen">
           <div className="productscreen__left">
               <div className="left__image" >
                  <img src="../static/images/products/pc1.jpg" alt="product name" />
               </div>
                 <div className="left__info">
                     <p className="left__name">product 1</p>
                     <p >Price:$499.99</p>
                     <p>this is our product</p>
                 </div>
           </div>
           <div className="productscreen__right">
                  <div className="right__info">
                     <p>
                         Price: <span>#499.99</span>
                     </p>
                     <p>
                         Status: <span>In Stock</span>
                     </p>
                     <p>
                         <select>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                             <option value="5">5</option>
                         </select>
                     </p>
                     <p>
                         <button type="button">Add to Cart</button>
                     </p>
                  </div>
            </div>
        </div>
    )
}

export default ProductScreen
