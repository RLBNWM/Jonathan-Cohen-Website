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

                    <div className="container" >
                        <div className="row justify-content-center m-3">
                            <div className="col-xl-6 col-lg-8 text-center p-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.65)", borderRadius: "15px" }}>
                                <h2>
                                    I'm Jonathan Cohen, an Experienced Coach, Mentor, Entrepreneur and Counsellor
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