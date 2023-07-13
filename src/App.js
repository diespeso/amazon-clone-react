import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import { HomeView } from './views/HomeView';
import { ProfileView } from './views/ProfileView';
import { LoginView } from './views/LoginView';
import { ShoppingCartView } from './views/ShoppingCartView';
import { ProductView } from './views/ProductView';
import { NewProductView } from './views/product/NewProductView';

function App() {
  return (
   <Routes>
    <Route path="/" element={<HomeView></HomeView>}></Route>
    <Route path="/home" element={<HomeView></HomeView>}></Route>
    <Route path="/profile" element={<ProfileView></ProfileView>}></Route>
    <Route path="/login" element={<LoginView></LoginView>}></Route>
    <Route path='/shopping-cart' element={<ShoppingCartView></ShoppingCartView>}></Route>
    <Route path='/products/new' element={<NewProductView></NewProductView>}></Route>
    <Route path='/products/:product_id' element={<ProductView></ProductView>}></Route>
    <Route path='/product-mock' element={<ProductView></ProductView>}></Route>
   </Routes>
  );
}

export default App;
