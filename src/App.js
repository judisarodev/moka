import './App.css';
import { Menu } from './components/menu/Menu';
import { BrowserRouter,  Routes,  Route} from "react-router-dom";
import { Home } from './components/home/Home';
import { ContextProvider } from './context/ContextProvider';
import { About } from './components/about/About';
import { Products } from './components/productos/Products';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/productos' element={<Products />}/>
            <Route path='/sobre-nosotros' element={<About />}/>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
