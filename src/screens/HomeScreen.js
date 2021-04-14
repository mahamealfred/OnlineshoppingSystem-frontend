import Product from 'src/components/Home/Product'
import './HomeScreen.css'

const HomeScreen = () => {
    return (
        <div className="homescreen">
             <h2 className="homescreen__title">Product list</h2>
                 <div className="homescreen__products">
                   <Product />
                   <Product />
                   <Product />
                   <Product />
                   <Product />
                   <Product />
                   <Product />
                  </div>
         </div>
    )
}

export default HomeScreen
