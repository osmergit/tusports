import {NavbarComp} from './deportes/NavBar.jsx'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Admin } from './deportes/Admin.jsx';
import {Creadoras} from './deportes/Creadoras.jsx'
import {Basketball} from './deportes/Basketball.jsx'
import {Gimnasia} from './deportes/Gimnasia.jsx'
import {Atletismo} from './deportes/Atletismo.jsx'
import {Natacion} from './deportes/Natacion.jsx'
import {Ciclismo} from './deportes/Ciclismo.jsx'
import {Contactenos} from './deportes/Contactenos.jsx'
import {Quien} from './deportes/Quien.jsx'
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header >
       
        <p>
           CON TU TU TUSPORTS TE EJERCITAS MEJOR 😎
        </p>
      
     </header>
   
      <BrowserRouter>
                    <Routes>  
                  
                  
                                                                                 
                            <Route path='/' element={ <NavbarComp />} >   
                           
                              <Route path='/inicio' element={ <Admin />} /> 
                              <Route path='/creadoras' element={ <Creadoras />} />
                              <Route path='/basketball' element={ <Basketball />} />
                              <Route path='/gimnasia' element={ <Gimnasia />} />
                              <Route path='/atletismo' element={ <Atletismo />} />
                              <Route path='/natacion' element={ <Natacion />} />
                              <Route path='/ciclismo' element={ <Ciclismo />} />
                              <Route path='/contactenos' element={ <Contactenos />} />
                              <Route path='/quien' element={ <Quien />} />
                              <Route path='*' element={ <Navigate replace to="/"/> }/>
                            </ Route>
                                   
                    </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
