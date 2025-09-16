import { Link } from 'react-router-dom';
import Preloader from './Preloader';

const Services = ({ services }) => {


    return (
        <main className="main">
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>Services</h1>
                                <p className="mb-0"></p>
                                <a href="contact.html" className="cta-btn">Available for Hire<br /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li className="current">Services</li>
                        </ol>
                    </div>
                </nav>
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
            {/* <Preloader></Preloader> */}
        </main>
    )
}

export default Services