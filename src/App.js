import './App.css';
import { Menu } from './components/menu/Menu';
import { BrowserRouter,  Routes,  Route} from "react-router-dom";
import { Home } from './components/home/Home';
import { ContextProvider } from './context/ContextProvider';
import { About } from './components/about/About';
import { Products } from './components/productos/Products';
import { Detail } from './components/detail/Detail';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { FloatingActionButton } from './components/floating-action-button/FloatingActionButton';

function App() {
  return (
    <div className="App">
      <PrimeReactProvider>
        <ContextProvider>
          <BrowserRouter>
            <Menu/>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/productos' element={<Products />}/>
              <Route path='/sobre-nosotros' element={<About />}/>
              <Route path='/detalle/:productId' element={<Detail />}/>
              <Route path='*' element={<Home />}/>
            </Routes>
          </BrowserRouter>
        </ContextProvider>
      </PrimeReactProvider>
      
      <FloatingActionButton />
    </div>
  );
}

export default App;
