import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import Preloader from "./Preloader";

export default function About() {
    return (
        <main className="main">
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-sm-start text-lg-center">
                            <div className="col-lg-8">
                                <h1>About</h1>
                                <p className="mb-0">
                                    Personalised coaching to help you gain clarity, overcome obstacles, and thrive with purpose.
                                </p>
                                <Link to="/contact" className="cta-btn">
                                    Book a call with Jonathan Cohen
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Breadcrumb crumbs={[
                    { route: "/", page: "Home" },
                    { route: "/about", page: "About" }
                ]}
                />
            </div>

            <section id="about" className="about section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row justify-content-center align-items-stretch" >
                        <div className="col-lg-6 col-md-12" >
                            <img
                                src="assets/img/profile-img.jpg"
                                className="w-100 h-100"
                                style={{ objectFit: "cover" }}
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6 col-md-12 my-3">
                            <div class="h-100 overflow-lg-auto" style={{ maxHeight: "75vh" }}>
                                <h2>
                                    Jonathan Cohen - Coach, Mentor, Entrpreneur &amp; Counsellor.
                                </h2>
                                <p className="py-3">
                                    Jonathan Cohen is a passionate and visionary holistic coach
                                    dedicated to helping individuals unlock their full potential. With
                                    over 20 years of experience in building start-ups, mergers and
                                    acquisitions, personal development, leadership training,
                                    mediation, change management, and psychological, physical,
                                    and emotional well-being, Jonathan has become a respected
                                    figure in the wellness and coaching industry.
                                </p>
                                <p className="py-3">
                                    His unique coaching style blends psychology, mindfulness, and a
                                    personalised, adaptable approach to empower clients with
                                    actionable tools for long-term transformation. Jonathan holds
                                    postgraduate qualifications and certifications in commerce,
                                    executive/business coaching, psychology, nutrition and
                                    integrative wellness practices
                                </p>
                                <p className="py-3">
                                    As the founder of Jonathan Cohen Holistic Coaching, his mission
                                    is to foster a supportive space where individuals, teams and
                                    organisations can explore their purpose, overcome barriers, and
                                    live with intention, joy and meaning.
                                </p>
                                <p>
                                    Outside of coaching, Jonathan is an avid writer, speaker, and
                                    advocate for mental health awareness, sexuality/sexology,
                                    education, relationships, and childhood development. His
                                    workshops and talks have inspired thousands across South
                                    Africa and beyond.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Preloader></Preloader>
        </main>
    );
}
