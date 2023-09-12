import {  Link } from 'react-router-dom';


export const Contactenos = () => {

    return( 
<div className="login-form">
<br></br>
    
<h3><Link to="/Instagram" className='btn-register'>Instagram tusports_msd</Link></h3>
<h3><Link to="/ticktok" className='btn-register'>TikTok tusports_msd</Link></h3>
           <h3><Link to="/whatsap" className='btn-register'>Whatsapp 3209113653</Link></h3>
           <h3><Link to="/gmail" className='btn-register'>Email tusportmsd@gmail.com</Link></h3>
           </div>
    )

}
export default Contactenos;