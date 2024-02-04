/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import myProfileImg from "./assets/img/profile-img.jpg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Typed from "typed.js";
import Portfolio from "./components/Portfolio";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    // Get the data-typed-items attribute value
    const dataTypedItems = document
      .querySelector(".typed")
      .getAttribute("data-typed-items");

    // Convert the comma-separated string to an array
    const itemsArray = dataTypedItems.split(",").map((item) => item.trim());

    // Options for Typed.js
    const options = {
      strings: itemsArray,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(".typed", options);

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
            <img
              src={myProfileImg}
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Sagar Hasan</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-skype"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Navigation menu */}
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto">
                  <i className="bx bx-server"></i> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Sagar Hasan</h1>
          <p>
            I'm{" "}
            <span
              className="typed"
              data-typed-items="Full Stack Developer, Problem Solver, Fast Learner"
            ></span>
          </p>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
              <p>
                As a competitive programmer with experience of over 3 years of
                problem- solving, I have constantly grown up with critical
                thinking, mathematics, data structure & algorithmic
                implementations, Which are very much supportive to the key
                objectives of the company. Seeking to leverage my knowledge and
                experience in a role in the field of computer science & software
                engineering.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src={myProfileImg} className="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-8 pt-4 pt-lg-0 content"
                data-aos="fade-left"
              >
                <h3>MERN Stack Developer &amp; Problem Solver (1500+).</h3>
                <p className="fst-italic">
                  I bring over 1.5 years of hands-on experience in developing
                  robust and scalable applications using React.js and Node.js.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> <span>15 January 2000</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Website:</strong> <span>www.example.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>+8801941717226</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>Dhaka, Bangladesh</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>24</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>BSc in CSE</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong>{" "}
                        <span>sagarhasan273@gmail.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Status:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  My expertise spans across front-end development with React,
                  where I've crafted engaging user interfaces, and back-end
                  development with Node.js, ensuring seamless server-side
                  operations. Through my journey, I've tackled complex
                  challenges, optimized performance, and stayed abreast of the
                  latest trends in these technologies, delivering solutions that
                  marry functionality with a great user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="facts" className="facts">
          <div className="container">
            <div className="section-title">
              <h2>Facts</h2>
              <p>
                With a dedicated journey of 1.5 years in the realms of React.js
                and Node.js, I've become adept at weaving intricate web
                solutions. I pride myself on not just coding, but crafting
                engaging user experiences through React's dynamic interfaces. On
                the server side, my proficiency with Node.js has enabled me to
                architect robust back-end systems, ensuring the seamless
                operation of applications. Beyond the code, I bring a passion
                for continuous learning, a knack for problem-solving, and a
                commitment to staying at the forefront of technological
                advancements. I am excited about the possibilities that lie
                ahead and the opportunity to contribute my skills to innovative
                projects.
              </p>
            </div>

            <div className="row no-gutters">
              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                data-aos="fade-up"
              >
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="11"
                    data-purecounter-duration="1"
                    className="purecounter"
                  >
                    11
                  </span>
                  <p>
                    <strong>Happy Clients</strong> ensuring delighted clients
                    with every project completion
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="21"
                    data-purecounter-duration="1"
                    className="purecounter"
                  >
                    21
                  </span>
                  <p>
                    <strong>Projects</strong> each a testament to my passion for
                    innovation and commitment to excellence
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="count-box">
                  <i className="bi bi-headset"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="120"
                    data-purecounter-duration="1"
                    className="purecounter"
                  >
                    120+
                  </span>
                  <p>
                    <strong>Hours Of Support</strong> ensuring seamless
                    assistance and reliability whenever it's needed
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="count-box">
                  <i className="bi bi-people"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="32"
                    data-purecounter-duration="1"
                    className="purecounter"
                  >
                    1
                  </span>
                  <p>
                    <strong>Hard Worker</strong> consistently going the extra
                    mile to achieve excellence in every task
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
              <p>
                Empowered with a versatile skill set honed over few years, I
                command expertise in React.js and Node.js, seamlessly blending
                front-end finesse with back-end robustness. Proficient in HTML,
                CSS, and JavaScript, I craft dynamic and engaging user
                interfaces. On the server side, my mastery of Node.js ensures
                scalable and efficient backend operations.With a strong
                analytical mind, I excel in coding, effortlessly navigating
                through challenges. I possess proficiency in various programming
                languages and tools, ensuring smooth development processes. My
                problem-solving skills enable me to tackle complex issues
                effectively, while my adaptability allows me to thrive in
                dynamic environments. I am eager to leverage my skills.
              </p>
            </div>

            <div className="row skills-content">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: "100%" }}
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: "90%" }}
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: "70%" }}
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    React.JS <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: "80%" }}
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    Node.JS <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: "70%" }}
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="progress">
                  <span className="skill">
                    MongoDB <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: "70%" }}
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    SQL <i className="val">85%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: "85%" }}
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    OOP <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: "80%" }}
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    Python <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: "80%" }}
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    C++ <i className="val">65%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: "60%" }}
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="resume">
          <div className="container">
            <div className="section-title">
              <h2>Resume</h2>
              <p>
                I possess a strong analytical mind, especially when it comes to
                coding and I do have clear view to DSA. Challenges are not
                obstacles but stepping stones that I am capable of overcoming. I
                believe I can make meaningful contributions; I just need the
                right platform to showcase my abilities. I am eager to prove my
                potential and contribute to your team.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>Sagar Hasan</h4>
                  <p>
                    <em>
                      As a seasoned competitive programmer with a rich
                      background of over 3 years in problem-solving, I've
                      consistently developed strong skills in critical thinking,
                      mathematics, and the implementation of data structures and
                      algorithms.
                    </em>
                  </p>
                  <ul>
                    <li>Dhaka, Bangladesh</li>
                    <li>+880 194 171 7226</li>
                    <li>sagarhasan273@gmail.com</li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Bachelor of Science : Computer Science &amp; Engineering</h4>
                  <h5>2019 - 2024</h5>
                  <p>
                    <em>Daffodil International University</em>
                  </p>
                  <p>
                    Daffodil Smart City (DSC), Dirulia, Savar, Dhaka
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Higher Secondary Certificate</h4>
                  <h5>2016 - 2018</h5>
                  <p>
                    <em>Uttara High School &amp; College, Uttara, Dhaka</em>
                  </p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Senior graphic design specialist</h4>
                  <h5>2019 - Present</h5>
                  <p>
                    <em>Experion, New York, NY </em>
                  </p>
                  <ul>
                    <li>
                      Lead in the design, development, and implementation of the
                      graphic, layout, and production communication materials
                    </li>
                    <li>
                      Delegate tasks to the 7 members of the design team and
                      provide counsel on all aspects of the project.{" "}
                    </li>
                    <li>
                      Supervise the assessment of all graphic materials in order
                      to ensure quality and accuracy of the design
                    </li>
                    <li>
                      Oversee the efficient use of production project budgets
                      ranging from $2,000 - $25,000
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Graphic design specialist</h4>
                  <h5>2017 - 2018</h5>
                  <p>
                    <em>Stepping Stone Advertising, New York, NY</em>
                  </p>
                  <ul>
                    <li>
                      Developed numerous marketing programs (logos, brochures,
                      infographics, presentations, and advertisements).
                    </li>
                    <li>
                      Managed up to 5 projects or tasks at a given time while
                      under pressure
                    </li>
                    <li>
                      Recommended and consulted with clients on the most
                      appropriate graphic design
                    </li>
                    <li>
                      Created 4+ design presentations and proposals a month for
                      clients and account managers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======= Portfolio Section ======= */}

        <Portfolio />

        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                <div className="icon">
                  <i className="bi bi-briefcase"></i>
                </div>
                <h4 className="title">
                  <a href="">Lorem Ipsum</a>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon">
                  <i className="bi bi-card-checklist"></i>
                </div>
                <h4 className="title">
                  <a href="">Dolor Sitema</a>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="bi bi-bar-chart"></i>
                </div>
                <h4 className="title">
                  <a href="">Sed ut perspiciatis</a>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon">
                  <i className="bi bi-binoculars"></i>
                </div>
                <h4 className="title">
                  <a href="">Magni Dolores</a>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon">
                  <i className="bi bi-brightness-high"></i>
                </div>
                <h4 className="title">
                  <a href="">Nemo Enim</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="icon">
                  <i className="bi bi-calendar4-week"></i>
                </div>
                <h4 className="title">
                  <a href="">Eiusmod Tempor</a>
                </h4>
                <p className="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row" data-aos="fade-in">
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    style={{ border: "0", width: "100%", height: "290px" }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  action="forms/"
                  method="post"
                  role="form"
                  className="node-email-form"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
    </>
  );
}

export default App;
