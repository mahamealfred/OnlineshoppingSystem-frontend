import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core';
import MainNavbar from './MainNavbar';
import jwt from 'jsonwebtoken';
import {useEffect} from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';


const MainLayoutRoot = experimentalStyled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',

  })
);

const MainLayoutWrapper = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64
});

const MainLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const MainLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});
 const decode= (token) => {
  const JWT_SECRET="mahame123";
  const payload =jwt.verify(token, JWT_SECRET);
   return payload;
}

const MainLayout = () => {
  const navigate= useNavigate();
  useEffect(() => {
    const token =localStorage.getItem('my-token');
    if(token){
      const {exp}=decode(token);
      console.log(navigate)
      if(Date.now()>=exp*1000){
    return null;
      }
      else{
      navigate('/app/dashboard', { push: true })
      }
      console.log(exp)
    }
  
  }, [])



  return (
   <MainLayoutRoot>
    <MainNavbar />
    <MainLayoutWrapper>
      <MainLayoutContainer>
        <MainLayoutContent>
          <Outlet />
        </MainLayoutContent>
      </MainLayoutContainer>
    </MainLayoutWrapper>
  </MainLayoutRoot>
);
  }

export default MainLayout;
