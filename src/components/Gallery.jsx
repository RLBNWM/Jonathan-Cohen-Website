import { Link } from "react-router-dom";

function Gallery({ services }) {


    return (
        <section id="gallery" className="gallery section">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4 justify-content-center">
                    {services.map((service, index) => {
                        return (
                            <div className="col-xl-2 col-lg-4 col-md-6" key={index} >
                                <div className="col-12 text-center">
                                    <Link to={`services/${service.slug}`}>
                                        <div className="gallery-item h-100 ratio ratio-1x1">
                                            <img
                                                src={service.img}
                                                className="img-fluid"
                                                style={{ objectFit: "cover" }}
                                                alt=""
                                            />
                                            <div className="gallery-links d-flex align-items-center justify-content-center">
                                                <div className="details-link">
                                                    <i className="bi bi-link-45deg"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <h5 className="p-3">{service.title}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section >
    );
}

export default Gallery;
