import { Link } from 'react-router-dom';
import Preloader from './Preloader';
import Breadcrumb from './Breadcrumb';

const Services = ({ services }) => {


    return (
        <main className="main">
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-lg-center text-sm-start">
                            <div className="col-lg-8">
                                <h1>Services</h1>
                                <p className="mb-0">
                                    I offer a variety of mentoring, coaching, and reconstructive services, click on them below to learn more!
                                </p>
                                <Link to="/contact" className="cta-btn">Book a call for more info</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Breadcrumb crumbs={[
                    { route: "/", page: "Home" },
                    { route: "/services", page: "Services" }
                ]} />
            </div>

            <section id="services" className="services section">

                <div className="container">

                    <div className="row gy-4">

                        {services.map((service, index) => {
                            return (

                                <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                                    <Link to={`/services/${service.slug}`}>
                                        <div className="service-item position-relative">
                                            <div className="icon"><i className={service.icon + " icon"}></i></div>
                                            <h4><div className="stretched-link">{service.title}</div></h4>
                                            <p>{service.description}</p>
                                        </div>
                                    </Link>
                                </div>

                            )
                        })}

                    </div>

                </div>

            </section>
            <Preloader />
        </main>
    )
}

export default Services