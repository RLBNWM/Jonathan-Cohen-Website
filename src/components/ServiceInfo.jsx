import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import Breadcrumb from './Breadcrumb';
import '../assets/css/service-info.css'

const ServiceInfo = ({ services }) => {

    const slug = useParams().slug;
    const service = services.find((service) => slug === service.slug);
    console.log(service.customButton);

    return (
        <main className="main">
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center text-sm-start text-lg-center">
                            <div className="col-lg-8 ">
                                <h1>{service.title}</h1>
                                <p className="mb-0">{service.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Breadcrumb crumbs={[
                    { route: "/", page: "Home" },
                    { route: "/services", page: "Services" },
                    { route: `/${slug}`, page: service.title }
                ]} />
            </div>

            <section id="gallery-details" className="gallery-details section">

                <div className="container" data-aos="fade-up">

                    {/* <div className="portfolio-details-slider swiper init-swiper">
                        <script type="application/json" className="swiper-config">
                            {
                                "loop": true,
                            "speed": 600,
                            "autoplay": {
                                "delay": 5000
              },
                            "slidesPerView": "auto",
                            "navigation": {
                                "nextEl": ".swiper-button-next",
                            "prevEl": ".swiper-button-prev"
              },
                            "pagination": {
                                "el": ".swiper-pagination",
                            "type": "bullets",
                            "clickable": true
              }
            }
                        </script>
                        <div className="swiper-wrapper align-items-center">

                            <div className="swiper-slide">
                                <img src="assets/img/gallery/gallery-8.jpg" alt="" />
                            </div>

                            <div className="swiper-slide">
                                <img src="assets/img/gallery/gallery-9.jpg" alt="" />
                            </div>

                            <div className="swiper-slide">
                                <img src="assets/img/gallery/gallery-10.jpg" alt="" />
                            </div>

                            <div className="swiper-slide">
                                <img src="assets/img/gallery/gallery-11.jpg" alt="" />
                            </div>

                            <div className="swiper-slide">
                                <img src="assets/img/gallery/gallery-12.jpg" alt="" />
                            </div>

                            <div className="swiper-slide">
                                <img src="assets/img/gallery/gallery-13.jpg" alt="" />
                            </div>

                            <div className="swiper-slide">
                                <img src="assets/img/gallery/gallery-14.jpg" alt="" />
                            </div>

                        </div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-pagination"></div>
                    </div> */}

                    <div className="row justify-content-between gy-4 mt-4">

                        <div className="col-lg-8" data-aos="fade-up">
                            <div className="portfolio-description">
                                {/* Introduction */}
                                <p>
                                    <b>
                                        {service.intro}
                                    </b>
                                </p>
                                {/* Body */}
                                <p dangerouslySetInnerHTML={{ __html: service.body }} />
                                {/* Conclusion */}
                                <p>
                                    <i>
                                        {service.conclusion}
                                    </i>
                                </p>
                            </div>
                            <Link to="/contact" className="btn service-info-cta my-5">
                                {service.customButton ? service.customButton : "Book a call for more info"}
                            </Link>
                        </div>

                        <div className="col-lg-4">
                            <div className="list-group list custom-list">
                                {services.map((service) => {
                                    return < NavLink to={`/services/${service.slug}#`} className="list-group-item list-group-item-action">{service.title}</NavLink>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ServiceInfo