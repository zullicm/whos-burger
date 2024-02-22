import React, {useContext} from 'react';
import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import NavBar from './Components/NavBar';
import User from './Pages/User';
import HomePage from './Pages/HomePage';
import { UserContext } from './Context/user';
import MenuPage from './Pages/MenuPage';

function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route exact path='/menu' element={<MenuPage />}/>
        {/* <Route exact path='/botm' element={<BOTM />}/> */}
        {/* <Route exact path='/about' element={<About />}/> */}
        {/* <Route exact path='/contact' element={<Contact />}/> */}
        {/* <Route exact path='/cart' element={<Cart />}/> */}
        <Route exact path='/profile' element={<User />}/>
      </Routes>
    </div>
  );
}

export default App;
