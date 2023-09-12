import {  Link } from 'react-router-dom';
import Cardgimnasia from './Cardgimnasia.jsx';

export const Gimnasia = () => {

    return( 
<div className="login-form">
<br></br>
    <Cardgimnasia/>
   
           <h3><Link to="/vgimnasia" className='btn-register'>Video 1 Tech Gimnasia</Link></h3>
           <h3><Link to="/v2gimnasia" className='btn-register'>Video 2 Tech Gimnasia</Link></h3>
           </div>
    )

}
export default Gimnasia;