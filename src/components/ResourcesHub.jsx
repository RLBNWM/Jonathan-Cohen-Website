import React from 'react'
import Breadcrumb from './Breadcrumb'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

const ResourcesHub = () => {

    let books = [
        {
            title: "Special title treatment",
            text: "With supporting text below as a natural lead-in to additional content."
        },
        {
            title: "Special title treatment",
            text: "With supporting text below as a natural lead-in to additional content."
        },
        {
            title: "Special title treatment",
            text: "With supporting text below as a natural lead-in to additional content."
        },
        {
            title: "Special title treatment",
            text: "With supporting text below as a natural lead-in to additional content."
        },
        {
            title: "Special title treatment",
            text: "With supporting text below as a natural lead-in to additional content."
        },
        {
            title: "Special title treatment",
            text: "With supporting text below as a natural lead-in to additional content."
        },
    ]

    return (
        <main className="main">
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>Resource Hub</h1>
                                <p className="mb-0">
                                    Explore all of Jonathan Cohen's events, conferences, and content!
                                </p>
                                <a href="contact.html" className="cta-btn">
                                    Find out more information
                                    <br />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Breadcrumb crumbs={[
                    { route: "/", page: "Home" },
                    { route: "/resources", page: "Resources" }
                ]}
                />
            </div>

            <section className="resources">
                <div className="container-fluid">

                    <div className="row justify-content-start section-title mx-5" data-aos="fade-up">
                        <div className="col-12">
                            <h2>Book Recommedations</h2>
                            <p>Jonathan's Latest Book Recommendations</p>
                        </div>
                    </div>

                    <div className="row" data-aos="fade-up">
                        <Swiper
                            slidesPerView={"auto"}
                            pagination={{
                                clickable: false
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 1,
                                },
                            }}
                        >
                            {
                                books.map(({ title, text }, index) => {
                                    return (
                                        <SwiperSlide className='m-4' key={index}>
                                            <div className="card bg-dark text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <div className="card-body">
                                                    <h5 className="card-title">{title}</h5>
                                                    <p className="card-text">{text}</p>
                                                    {/* <a href="#" className="btn btn-primary">Read More</a> */}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                                )
                            }
                        </Swiper>

                    </div>
                </div>
            </section>

            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ResourcesHub