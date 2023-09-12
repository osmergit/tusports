import {  Link } from 'react-router-dom';
import Cardnatacion from './Cardnatacion.jsx';

export const Natacion = () => {

    return( 
<div className="login-form">
<br></br>
    <Cardnatacion/>
   
           <h3><Link to="/vnatacion" className='btn-register'>Video 1 Tech Natación</Link></h3>
           <h3><Link to="/v2natacion" className='btn-register'>Video 2 Tech Natación</Link></h3>
           </div>
    )

}
export default Natacion;