import React from 'react'
import { useParams } from 'react-router-dom'

const ServiceInfo = ({ services }) => {

    const slug = useParams();
    const service = services.find((s) => { s.slug === slug })

    console.log(service);



    // service = { title: "Test Data", description: "Test Description" }

    return (
        <main className="main">
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>{`${service.title} - Additonal Information`}</h1>
                                <p className="mb-0">{service.description}</p>
                                <a href="contact.html" className="cta-btn">Available for Hire<br /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li className="current">Gallery Single</li>
                        </ol>
                    </div>
                </nav>
            </div>

            <section id="gallery-details" className="gallery-details section">

                <div className="container" data-aos="fade-up">

                    <div className="portfolio-details-slider swiper init-swiper">
                        {/* <script type="application/json" className="swiper-config">
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
                        </script> */}
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
                    </div>

                    <div className="row justify-content-between gy-4 mt-4">

                        <div className="col-lg-8" data-aos="fade-up">
                            <div className="portfolio-description">
                                <h2>This is an example of portfolio details</h2>
                                <p>
                                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                </p>
                                <p>
                                    Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.
                                </p>

                                <div className="testimonial-item">
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                    <div>
                                        <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                    </div>
                                </div>

                                <p>
                                    Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.
                                </p>

                                <p>
                                    Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.
                                </p>

                            </div>
                        </div>

                        <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div className="portfolio-info">
                                <h3>Project information</h3>
                                <ul>
                                    <li><strong>Category</strong> Coaching</li>
                                    <li><strong>Client</strong> University of Johannesburg</li>
                                    <li><strong>Project date</strong> 01 March, 2020</li>
                                    <li><strong>Project URL</strong> <a href="#">www.example.com</a></li>
                                    <li><a href="#" className="btn-visit align-self-start">Visit Website</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </main>
    )
}

export default ServiceInfo