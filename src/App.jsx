import React,{ useEffect, useState }from 'react';
import {BrowserRouter,Route,Routes,useLocation} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Form from './Pages/Form';
import Navbar from './components/Navbar/Navbar';
import Aboutpage from './Pages/Aboutpage';
import Contactpage from './Pages/Contactpage';
import Preloader from './components/Preloader/Preloader';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
}



const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate content loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change this value to the time you expect your content to load
  }, []);
  return (
    <>
    {
      isLoading?(
        <Preloader/>
      ):(
        <BrowserRouter>
        <Navbar/>
          <ScrollToTop />
          <Routes>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/aboutpage' element={<Aboutpage/>}/>
              <Route path='/contactpage' element={<Contactpage/>}/>
              <Route path='/form' element={<Form/>}/>
             
              {/* <Route path='*' element={<Error/>}/> */}
          </Routes>
        </BrowserRouter> 
      )
    }
     
    </>
  )
}

export default App;