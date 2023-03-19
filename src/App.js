import logo from './logo.svg';
import './App.css';
import Navbar from './components/MainLayout/Navbar';

import Content from './components/Content';
import Footer from './components/MainLayout/Footer';
import ApplyLogin from './components/ApplyLogin';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Apply from './pages/Apply';
import Company from './pages/Company';
import Blog from './pages/Blog';
import ContactSupport from './pages/ContactSupport';
import Login from './pages/Login';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import NotFound from './components/NotFound';
import HowItWorks from './pages/HowItWorks';
import Faqs from './pages/Faqs';


function App() {
  // Switch the states of the routes  
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='Apply' element={<Apply />}></Route>
      <Route path='Login' element={<Login />}>
        <Route to='/Login/Profile' element={<Profile />}></Route>
      </Route>
      <Route path='HowItWorks' element={<HowItWorks />}></Route>
      <Route path='Company' element={<Company />}></Route>
      <Route path='Blog' element={<Blog />}></Route>
      <Route path='Faqs' element={<Faqs />}></Route>
      <Route path='ContactSupport' element={<ContactSupport />}></Route>
      <Route path='Upload' element={<Upload />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}
export default App;
