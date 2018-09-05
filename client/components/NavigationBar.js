import React from 'react';
import { Link } from 'react-router';

export default()=>{
  return(
    <nav className='navbar navbar-default'>
      <div className="container-fluied">
        <div className="navbar-header">
        <Link to='/'className='navbar-brand'><b>PRANO</b></Link>
           </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup"><b>Sign Up</b></Link></li>
              <li><Link to="/login"><b>Login</b></Link></li>
            </ul>
          </div>
      </div>
    </nav>
  );
}
