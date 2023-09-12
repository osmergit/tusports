import {  Link } from 'react-router-dom';
import CardBasket from './CardBasket';

export const Basketball = () => {

    return( 
<div className="login-form">
<br></br>
    <CardBasket />
   
           <h3><Link to="/vbasketball" className='btn-register'>Video Tech Basketball</Link></h3>
           <h3><Link to="/v2basketball" className='btn-register'>Video 2 Tech Basketball</Link></h3>
           </div>
    )

}
export default Basketball;