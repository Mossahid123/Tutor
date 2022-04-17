import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import RequireAuth from './Login/RequireAuth/RequireAuth';
import About from './Pages/About/About';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
