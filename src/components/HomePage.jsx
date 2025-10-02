import Testimonials from "./Testimonials"
import Gallery from "./Gallery"
import Preloader from "./Preloader"
import { Link } from "react-router-dom"
import Affiliates from "./Affiliates"
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
                                    <span className="underlight">Entrepreneur</span> and <span className="underlight">Counsellor</span>
                                </h2>
                                <p>My Passion and Purpose is to support and Help People, Communities, and Society Heal and Thrive</p>
                                <Link to="/contact" className="btn-get-started">Book a free chemistry session<br /></Link>
                            </div>
                        </div>
                    </div>

                </section>

                <Gallery services={services}></Gallery>

                <Affiliates />

                {/* <Testimonials></Testimonials> */}

                <Preloader></Preloader>
            </main>
        </>
    )
}
export default HomePage