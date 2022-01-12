import Navigation from './Components/Navigation/Navigation.component';
import { Routes, Route } from 'react-router-dom';
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
  return (
    <div className='app'>
      <ScrollToTop />
    <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/headphones" element={<Headphones />} >
        <Route path="/headphones" element={<HeadphonesCategory />} />
          <Route path="XX99markII" element={<XX99markII />} />
          <Route path="XX99markI" element={<XX99markI />} />
          <Route path="XX59" element={<XX59 />} />
        </Route>
        <Route path="/speakers" element={<Speakers />} >
          <Route path="/speakers" element={<SpeakersCategory />} />
          <Route path="ZX9" element={<ZX9 />} />
          <Route path="ZX7" element={<ZX7 />} />
        </Route>
        <Route path="/earphones" element={<Earphones />} >
        <Route path="/earphones" element={<EarphonesCategory />} />
          <Route path="YX1" element={<YX1 />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route
      path="*"
      element={ <ErrorPage /> }
    />
      </Routes>      
      <Footer />
    </div>
  );
}

export default App;
