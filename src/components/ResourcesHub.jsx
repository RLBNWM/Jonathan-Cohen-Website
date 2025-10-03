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
        <>
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-lg-center text-sm-start">
                            <div className="col-lg-8">
                                <h1>Resource Hub</h1>
                                <p className="mb-0">
                                    Explore all of Jonathan Cohen's events, conferences, and content!
                                </p>
                                <Link href="contact.html" className="cta-btn">
                                    Find out more information
                                </Link>
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

            <section className="book-recommendations">
                <div className="container-fluid">
                    <div className="row justify-content-start section-title" data-aos="fade-up">
                        <h2>Book Recommedations</h2>
                        <p>Jonathan's Latest Book Recommendations</p>
                    </div>
                </div>

                <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                    <Swiper
                        slidesPerView={"auto"}
                        pagination={{
                            clickable: false
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {
                            books.map(({ title, text }, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="card bg-dark text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <div className="card-body">
                                                <h5 className="card-title">{title}</h5>
                                                <p className="card-text">{text}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>

                <div className="modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className="container-fluid">
                    <div className="row section-title" data-aos="fade-up">
                        <h2>Supplement Recommedations</h2>
                        <p>The Best Supplements For Your Wellbeing!</p>
                    </div>
                </div>

                <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">

                </div>
            </section>


        </>
    )
}

export default ResourcesHub