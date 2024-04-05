import React,{ useEffect }from 'react';
import {BrowserRouter,Route,Routes,useLocation} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Form from './Pages/Form';
import Navbar from './components/Navbar/Navbar';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
}



const App = () => {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/form' element={<Form/>}/>
                
                {/* <Route path='*' element={<Error/>}/> */}
            </Routes>
          </BrowserRouter> 
    </>
  )
}

export default App;