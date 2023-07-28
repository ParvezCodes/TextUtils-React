import React from "react";
import PropTypes from 'prop-types';
import { FaMoon } from 'react-icons/fa';


export default function Navbar(props) {
  let style1 = props.mode === 'dark'?'white':'dark';
  let style2 = props.mode === 'light'?'dark':'light'

  return (    
      <nav className={`navbar navbar-expand-lg navbar-${style1} bg-${style1}`}> 
        <div className="container-fluid">
          <a className="navbar-brand pt-2 mx-2" href="/">
           <b>{props.title}</b>
          </a>
          <div className={`form-check form-switch text-${style2}`}>
             <input className="form-check-input me-0" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" aria-checked={true}/>
             <label className={`form-check-label me-0 text-${props.mode} htmlFor="flexSwitchCheckDefault`}><FaMoon style={{fontSize:'22px'}}/></label>
          </div>
        </div>
      </nav>
  );
}

Navbar.propTypes = { 
    title : PropTypes.string,
    element1 : PropTypes.string,
    element2 : PropTypes.string,
    element3 : PropTypes.string
}
