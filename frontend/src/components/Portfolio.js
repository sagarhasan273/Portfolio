import React, { useState } from 'react';
import myPortfolio1 from "../assets/img/portfolio/portfolio-1.jpg";
import myPortfolio2 from "../assets/img/portfolio/portfolio-2.jpg";
import myPortfolio3 from "../assets/img/portfolio/portfolio-3.jpg";
import myPortfolio4 from "../assets/img/portfolio/portfolio-4.jpg";
import myPortfolio5 from "../assets/img/portfolio/portfolio-5.jpg";
import myPortfolio6 from "../assets/img/portfolio/portfolio-6.jpg";
import myPortfolio7 from "../assets/img/portfolio/portfolio-7.jpg";
import myPortfolio8 from "../assets/img/portfolio/portfolio-8.jpg";
import myPortfolio9 from "../assets/img/portfolio/portfolio-9.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
      <li
        onClick={() => handleFilterClick('*')}
        className={activeFilter === '*' ? 'filter-active' : ''}
      >
        All
      </li>
      <li
        onClick={() => handleFilterClick('.filter-app')}
        className={activeFilter === '.filter-app' ? 'filter-active' : ''}
      >
        App
      </li>
      <li
        onClick={() => handleFilterClick('.filter-card')}
        className={activeFilter === '.filter-card' ? 'filter-active' : ''}
      >
        Card
      </li>
      <li
        onClick={() => handleFilterClick('.filter-web')}
        className={activeFilter === '.filter-web' ? 'filter-active' : ''}
      >
        Web
      </li>
    </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          <div className={`col-lg-4 col-md-6 portfolio-item ${activeFilter === '*' || activeFilter === '.filter-app' ? 'active' : 'not-active'}`}>
            <div className="portfolio-wrap">
              <img src={myPortfolio1} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 portfolio-item ${activeFilter === '*' || activeFilter === '.filter-web' ? 'active' : 'not-active'}`}>
            <div className="portfolio-wrap">
              <img src={myPortfolio2} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 portfolio-item ${activeFilter === '*' || activeFilter === '.filter-app' ? 'active' : 'not-active'}`}>
            <div className="portfolio-wrap">
              <img src={myPortfolio3} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 portfolio-item ${activeFilter === '*' || activeFilter === '.filter-card' ? 'active' : 'not-active'}`}>
            <div className="portfolio-wrap">
              <img src={myPortfolio4} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 portfolio-item ${activeFilter === '*' || activeFilter === '.filter-web' ? 'active' : 'not-active'}`}>
            <div className="portfolio-wrap">
              <img src={myPortfolio5} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 portfolio-item ${activeFilter === '*' || activeFilter === '.filter-app' ? 'active' : 'not-active'}`}>
            <div className="portfolio-wrap">
              <img src={myPortfolio6} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 portfolio-item ${activeFilter === '*' || activeFilter === '.filter-card' ? 'active' : 'not-active'}`}>
            <div className="portfolio-wrap">
              <img src={myPortfolio7} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 portfolio-item ${activeFilter === '*' || activeFilter === '.filter-card' ? 'active' : 'not-active'}`}>
            <div className="portfolio-wrap">
              <img src={myPortfolio8} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 portfolio-item ${activeFilter === '*' || activeFilter === '.filter-web' ? 'active' : 'not-active'}`}>
            <div className="portfolio-wrap">
              <img src={myPortfolio9} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Portfolio Section --> */}

    </>
  )
}

export default Portfolio
