import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';




export default function Footer(props) {
    let style1 = props.mode === 'dark'?'black':'white';    
    let style2 = props.mode === 'dark'?'white':'black';  

    const icon = {
        fontSize : '30px'
    }


  return (
        // <div className="container my-5"  style={{backgroundColor :props.mode === 'dark'?'black':'white' ,color :props.mode === 'dark'?'white':'black' }}>
        <div className="container my-5"  style={{backgroundColor :{style1} ,color :{style2} }}>
        <footer className="text-center">
            <div className="container">

            <hr className={`text-${style2} my-5`} />

            <section className="mb-5">
                <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                    <p className={`text-${style2}`}>
                    Text-Utils is one of the most powerful, secure and free websites containing various tools for helping with your daily tasks, such as online formatters, converters , AI text Reader, multiple text tools, such as to remove duplicate lines, extract text and much more. Enjoy all for free!
                    </p>
                </div>
                </div>
            </section>

            <section className={`text-${style2} mb-5`}>
                <a href="https://www.facebook.com/parvez.pathan.9889/" className={`text-${style2} me-3 mx-2`}>
                 <FaFacebook style={icon}/>
                </a>

                <a href="https://www.instagram.com/p_a_r_v_e_z_/" className={`text-${style2} me-3 mx-2`}>
                 <FaInstagram style={icon}/>
                </a>

                <a href="https://www.linkedin.com/in/parvez-pathan-947631256/" className={`text-${style2} me-3 mx-2`}>
                 <FaLinkedin style={icon}/>
                </a>

                <a href="https://github.com/ParvezCodes" className={`text-${style2} me-3 mx-2`}>
                  <FaGithub style={icon}/>
                </a>

                <a href="https://parvezcodes.netlify.app/" className={`text-${style2} me-3 mx-2`}>
                  <FaHeart style={icon}/>
                </a>
                
            </section>
            </div>

            <div className="text-center p-3"  style={{backgroundColor :props.mode === 'dark'?'white':'black'}}>
            <span className={`text-${style1}`}>© 2023 Copyright at </span>
            <a className={`text-${style1}`} href="https://parvezcodes.netlify.app/">ParvezCodes</a>
            </div>
        </footer>
        </div>
  );
}
