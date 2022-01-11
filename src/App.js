import Navigation from './Components/Navigation/Navigation.component';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage.component';
import Footer from './Components/Footer/Footer.component';
import Headphones from './Pages/Headphones/Headphones.component.jsx';
import HeadphonesCategory from './Pages/Headphones/HeadphonesCategory.component';
import Speakers from './Pages/Speakers/Speakers.component.jsx';
import Earphones from './Pages/Earphones/Earphones.component.jsx';
import XX99markII from './Pages/XX99markII/XX99markII.component.jsx';
import './App.css';

function App() {
  return (
    <div className='app'>
    <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/headphones" element={<Headphones />} >
        <Route path="/headphones" element={<HeadphonesCategory />} />
          <Route path="XX99markII" element={<XX99markII />} />
        </Route>
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
