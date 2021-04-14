import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CategoryList from 'src/pages/CategoryList';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';
import HomeScreen from 'src/screens/HomeScreen';
import ProductScreen from 'src/screens/ProductScreen';
import CartScreen from 'src/screens/CartScreen' ;
import Navbar from './components/Home/Navbar';
import UserLayout from './components/UserLayout';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'category', element: <CategoryList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '/home', element: <HomeScreen /> },
      { path: '/product', element: <ProductScreen /> },
      { path: '/cart', element: <CartScreen /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'user',
    element: <UserLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '/home', element: <HomeScreen /> },
      { path: '/product', element: <ProductScreen /> },
      { path: '/cart', element: <CartScreen /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
 
];

export default routes;
