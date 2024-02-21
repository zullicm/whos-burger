import React, {useContext} from 'react';
import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import NavBar from './Components/NavBar';
import User from './Pages/User';
import HomePage from './Pages/HomePage';
import { UserContext } from './Context/user';

function App() {


  return (
    <div className="App">
      <NavBar />
      <p>WHOS BURGER</p>
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        {/* <Route exact path='/menu' element={<Menu />}/>
        <Route exact path='/botm' element={<BOTM />}/>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/contact' element={<Contact />}/>
        <Route exact path='/cart' element={<Cart />}/> */}
        <Route exact path='/profile' element={<User />}/>
      </Routes>
    </div>
  );
}

export default App;
