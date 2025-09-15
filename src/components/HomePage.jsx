import Testimonials from "./Testimonials"
import Gallery from "./Gallery"
import Preloader from "./Preloader"
// import { useEffect } from "react"

function HomePage({ services }) {
    return (
        <>
            <main className="main">

                <section id="hero" className="hero section">

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2>
                                    <span>I'm </span><span className="underlight">Jonathan Cohen</span>, an Experienced
                                    <span className="underlight">Coach, Mentor,</span>
                                    <span className="underlight">Entrepreneur and Counsellor</span>
                                </h2>
                                <p>My Passion and Purpose is to support and Help People, Communities, and Society Heal and Thrive</p>
                                <a href="contact.html" className="btn-get-started">Book a free chemistry session<br /></a>
                            </div>
                        </div>
                    </div>

                </section>

                <Gallery services={services}></Gallery>

                <Testimonials></Testimonials>
                {/* <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a> */}

                <Preloader></Preloader>
            </main>
        </>
    )
}
export default HomePage