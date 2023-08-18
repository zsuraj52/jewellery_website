import Header from './Componets/Pages/Header';
import Maincontent from './Componets/Pages/Maincontent';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Cart from './Componets/Pages/Cart';
import Contact from './Componets/Pages/contact';

function App() {
  
  return (
    <>
    <div style={{height:"100vh" , backgroundColor:"black"}}>

    <BrowserRouter>
    <Header/>
      <Routes>  
      <Route path="/" element={<Maincontent/>} />
          <Route path="/home" element={<Maincontent/>} />
          <Route path='/contact' element = {<Contact/>}></Route>
          <Route path="/home" element={<Maincontent/>} />
          <Route path="/home" element={<Maincontent/>} />
          <Route path="/home" element={<Maincontent/>} />
          <Route path="/home" element={<Maincontent/>} />
          <Route path="/product" element={<Cart/>} />
        </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
