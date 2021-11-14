import React from 'react';
import Menu from './components/menu';
import Products from './pages/Products';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Menu />
    <Products />
    <GlobalStyle />
  </>
);

export default App;
