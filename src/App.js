import { useState } from 'react';
import './App.css';
import { Menu } from './components/menu/Menu';
import { BrowserRouter,  Routes,  Route} from "react-router-dom";
import { Home } from './components/home/Home';
import { ContextProvider } from './context/ContextProvider';
import { Footer } from './components/footer/Footer';

function App() {

  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/productos' element={'productos '}/>
            <Route path='/sobre-nosotros' element={'Sobre nosotros'}/>
          </Routes>
          <Footer />  
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
