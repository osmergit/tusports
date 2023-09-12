import {  Link } from 'react-router-dom';

export const Creadoras = () => {

    return( 
<div className="login-form">
           <h3><Link to="/sarita" className='btn-register'>Sara Isabel Ruiz Ramos</Link></h3>
           <h3><Link to="/maria" className='btn-register'>Maria Jose Pinto Quiroz</Link></h3>
           <h3><Link to="/sofia" className='btn-register'>Sofia Daniela Peralta</Link></h3>
           </div>
    )

}
export default Creadoras;