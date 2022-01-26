import Navigation from './Components/Navigation/Navigation.component';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import  shopProducts from './data.js';

import Homepage from './Pages/Homepage.component';
import Footer from './Components/Footer/Footer.component';
import Headphones from './Pages/Headphones/Headphones.component.jsx';
import HeadphonesCategory from './Pages/Headphones/HeadphonesCategory.component';
import Speakers from './Pages/Speakers/Speakers.component.jsx';
import SpeakersCategory from './Pages/Speakers/SpeakersCategory.component';
import Earphones from './Pages/Earphones/Earphones.component.jsx';
import EarphonesCategory from './Pages/Earphones/EarphonesCategory.component';
import XX99markII from './Pages/XX99markII/XX99markII.component.jsx';
import XX99markI from './Pages/XX99markI/XX99markI.component';
import XX59 from './Pages/XX59/XX59.component';
import ZX9 from './Pages/ZX9/ZX9.component';
import ZX7 from './Pages/ZX7/ZX7.component';
import YX1 from './Pages/YX1/YX1.component';
import Checkout from './Pages/CheckoutPage/Checkout.component';
import ErrorPage from './Pages/ErrorPage/ErrorPage.component';
import ScrollToTop from './Components/ScrollToTop.component';

import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = shopProducts

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if(exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x))
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }    
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty -1} : x)
      )
    }
  }

  const removeAll = () => {
    setCartItems([])
  }

  return (
    
    <div className='app'>
      <ScrollToTop />
      <Navigation cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} removeAll={removeAll}/>
      <Routes onAdd={onAdd}>
        <Route path="/" element={<Homepage />} />
        <Route path="/headphones" element={<Headphones />} >
        <Route path="/headphones" element={<HeadphonesCategory />} />
          <Route path="XX99markII" element={<XX99markII onAdd={onAdd} onRemove={onRemove} />} />
          <Route path="XX99markI" element={<XX99markI onAdd={onAdd} onRemove={onRemove} />} />
          <Route path="XX59" element={<XX59 onAdd={onAdd} onRemove={onRemove} />} />
        </Route>
        <Route path="/speakers" element={<Speakers />} >
          <Route path="/speakers" element={<SpeakersCategory />} />
          <Route path="ZX9" element={<ZX9 onAdd={onAdd} onRemove={onRemove} />} />
          <Route path="ZX7" element={<ZX7  onAdd={onAdd} onRemove={onRemove} />} />
        </Route>
        <Route path="/earphones" element={<Earphones />} >
        <Route path="/earphones" element={<EarphonesCategory />} />
          <Route path="YX1" element={<YX1 onAdd={onAdd} onRemove={onRemove}/>} />
        </Route>
        <Route path="/checkout" element={<Checkout cartItems={cartItems} removeAll={removeAll}/>} />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>      
      <Footer />
    </div>
  );
}

export default App;
