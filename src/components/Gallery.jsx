function Gallery({ services }) {


    return (
        <section id="gallery" className="gallery section">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4 justify-content-center">
                    {services.map((service, index) => {
                        return (
                            <div className="col-xl-2 col-lg-4 col-md-6" key={index} >
                                <div className="col-12 text-center">
                                    <a href="gallery-single.html">
                                        <div className="gallery-item h-100">
                                            <img
                                                src={service.img}
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <div className="gallery-links d-flex align-items-center justify-content-center">
                                                <div className="details-link">
                                                    <i className="bi bi-link-45deg"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <h5 className="p-3">{service.title}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* <div className="row gy-4 justify-content-center">
                    <div className="col-xl-2 col-lg-4 col-md-6">
                        <div className="container">
                            <div className="row">
                                <a href="gallery-single.html">
                                    <div className="gallery-item h-100">
                                        <img
                                            src="assets/img/gallery/gallery-1.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="gallery-links d-flex align-items-center justify-content-center">
                                            <div className="details-link">
                                                <i className="bi bi-link-45deg"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="row text-center p-3">
                                <h4>Business/Executive/ Entrepreneur Coaching or Mentorship</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-2 col-lg-4 col-md-6">
                    <a href="">
                        <div className="gallery-item h-100">
                            <img
                                src="assets/img/gallery/gallery-2.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="gallery-links d-flex align-items-center justify-content-center">
                                <div className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-xl-2 col-lg-4 col-md-6">
                    <a href="">
                        <div className="gallery-item h-100">
                            <img
                                src="assets/img/gallery/gallery-3.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="gallery-links d-flex align-items-center justify-content-center">
                                <div href="gallery-single.html" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-xl-2 col-lg-4 col-md-6">
                    <a href="">
                        <div className="gallery-item h-100">
                            <img
                                src="assets/img/gallery/gallery-4.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="gallery-links d-flex align-items-center justify-content-center">
                                <div href="gallery-single.html" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-xl-2 col-lg-4 col-md-6">
                    <a href="">
                        <div className="gallery-item h-100">
                            <img
                                src="assets/img/gallery/gallery-5.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="gallery-links d-flex align-items-center justify-content-center">
                                <div href="gallery-single.html" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-xl-2 col-lg-4 col-md-6">
                    <a href="">
                        <div className="gallery-item h-100">
                            <img
                                src="assets/img/gallery/gallery-6.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="gallery-links d-flex align-items-center justify-content-center">
                                <div href="gallery-single.html" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div> */}
            </div>
        </section >
    );
}

export default Gallery;
