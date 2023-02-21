import './App.css';
import { ReactDOM } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactScreen from './Screens/contactScreen';
import HomeScreen from './Screens/HomeScreen';
import MenuScreen from './Screens/menuScreen';
import AboutScreen from './Screens/aboutScreen';


function App() {
  return (
<div className='App'>
  <Routes>
   <Route path='/' element={<HomeScreen/>}></Route>
   <Route path='/contact' element={<ContactScreen/>}></Route>
   <Route path='/menu' element={<MenuScreen/>}></Route>
   <Route path='/about' element={<AboutScreen/>}></Route>
  </Routes>

 
</div>
  );
}

export default App;
