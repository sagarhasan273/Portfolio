/* eslint-disable jsx-a11y/anchor-is-valid */
import myProfileImg from './assets/img/profile-img.jpg';
import React, { useEffect } from 'react';
import Typed from 'typed.js';

function App() {
  useEffect(() => {
    // Get the data-typed-items attribute value
    const dataTypedItems = document.querySelector('.typed').getAttribute('data-typed-items');

    // Convert the comma-separated string to an array
    const itemsArray = dataTypedItems.split(',').map(item => item.trim());

    // Options for Typed.js
    const options = {
      strings: itemsArray,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed('.typed', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* Mobile nav toggle button */}
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      {/* Header */}
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={myProfileImg} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">Sagar Hasan</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>

          {/* Navigation menu */}
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
              <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
              <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </div>

      </header>

      <section id="hero" className='d-flex flex-column justify-content-center align-items-center'>
        <div className="hero-container" data-aos="fade-in">
          <h1>Sagar Hasan</h1>
          <p>
            I'm{' '}
            <span className="typed" data-typed-items="Full Stack Developer, Problem Solver, Fast Learner"></span>
          </p>
        </div>
      </section>


    </>
  );
}

export default App;
