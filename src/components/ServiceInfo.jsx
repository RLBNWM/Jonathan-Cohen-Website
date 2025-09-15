import React from 'react'

const ServiceInfo = ({ service }) => {

    return (
        <main className="main">
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>{`${service.title} - Additonal Information`}</h1>
                                <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
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
        </main>
    )
}

export default ServiceInfo