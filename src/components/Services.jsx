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
                                <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas
                                    consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                                    quaerat ipsum dolorem.</p>
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
                                    <div className="service-item position-relative">
                                        <div className="icon"><i className={service.icon + " icon"}></i></div>
                                        <h4><a href="" className="stretched-link">{service.title}</a></h4>
                                        <p>{service.description}</p>
                                    </div>
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