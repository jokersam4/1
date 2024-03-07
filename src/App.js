import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './pages/Hero';
import Price from './pages/Price';
import Guide from './pages/Guide';
import Questions from './pages/Questions';
import Footer from './pages/Footer';
import CoinSystem from './components/CoinSystem';
import Home from './pages/Home';
import Addapp from './pages/Addapp';



function App() {
  return (
    <div className="App">

      {<Routes>
        <Route path='/addapp' element={<Addapp />} />
        <Route path='/*' element={<Home />} />


      </Routes>}
    </div>
  );
}

export default App;
