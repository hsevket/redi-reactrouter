
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import Products from './components/Products';
import Details from './components/Details';
import General from './components/General';
import UserDetails from './components/UserDetails';
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}>
            <Route path='prodetails' element={<Details/>}/>
            <Route path='progeneral' element={<General/>}/>
        </Route>
        <Route path='/user/:userid' element={<UserDetails/>}/>
      </Routes>
      <button onClick={() => navigate('/about')}>go to about </button>
    </div>
  );
}

export default App;
