import Preloader from "./Preloader";

export default function About() {
    return (
        <main className="main">
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>About</h1>
                                <p className="mb-0">
                                    Odio et unde deleniti. Deserunt numquam exercitationem.
                                    Officiis quo odio sint voluptas consequatur ut a odio
                                    voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                                    ratione sint. Sit quaerat ipsum dolorem.
                                </p>
                                <a href="contact.html" className="cta-btn">
                                    Available for Hire
                                    <br />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="current">About</li>
                        </ol>
                    </div>
                </nav>
            </div>

            <section id="about" className="about section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img
                                src="assets/img/profile-img.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-5 content">
                            <h2>
                                Jonathan Cohen - Coach, Mentor, Entrpreneur &amp; Counsellor.
                            </h2>
                            <p className="fst-italic py-3">
                                Jonathan Cohen is a passionate and visionary holistic coach
                                dedicated to helping individuals unlock their full potential.
                                With over 15 years of experience in personal development,
                                leadership training, and emotional well-being, Jonathan has
                                become a respected figure in the wellness and coaching industry.
                            </p>
                            {/* <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>Birthday:</strong> <span></span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>Website:</strong> <span></span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>Phone:</strong> <span></span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>City:</strong> <span></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>Age:</strong> <span></span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>Degree:</strong> <span></span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>Email:</strong> <span></span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>Freelance:</strong> <span>Available</span>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

                            <p className="py-3">
                                His unique coaching style blends psychology, mindfulness, and
                                strategic planning to empower clients with actionable tools for
                                long-term transformation. Jonathan holds certifications in
                                executive coaching, NLP (Neuro-Linguistic Programming), and
                                integrative wellness practices.
                            </p>
                            <p className="py-3">
                                As the founder of Jonathan Cohen Holistic Coaching, his mission
                                is to foster a supportive space where individuals can explore
                                their purpose, overcome personal barriers, and live with
                                intention.
                            </p>
                            <p className="py-3">
                                Outside of coaching, Jonathan is an avid writer, speaker, and
                                advocate for mental health awareness. His workshops and talks
                                have inspired thousands across South Africa and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Preloader></Preloader>
        </main>
    );
}
