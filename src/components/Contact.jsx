import React, { useState } from 'react'
import Preloader from './Preloader'
import Breadcrumb from './Breadcrumb'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dateTime: '',
        details: '',
    });
    const [status, setStatus] = useState({
        message: '',
        type: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ message: 'Submitting your booking...', type: 'info' });

        // Setting the end time 1 hour from the start time.
        const bookingStartTime = new Date(formData.dateTime);
        const bookingEndTime = new Date(bookingStartTime.getTime() + 60 * 60 * 1000);

        const eventData = {
            summary: `Booking with: ${formData.name}`,
            description: formData.details,
            startTime: bookingStartTime.toISOString(),
            endTime: bookingEndTime.toISOString(),
            guestEmail: formData.email,
        };

        try {
            // Your backend API endpoint
            const response = await fetch('http://localhost:3001/api/create-booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(eventData),
            });

            const result = await response.json();

            if (!response.ok) {
                // Handle server-side errors
                throw new Error(result.message || 'An unknown error occurred.');
            }

            setStatus({ message: 'Success! Your booking is confirmed.', type: 'success' });
            // Optionally reset the form
            setFormData({ name: '', email: '', dateTime: '', details: '' });

        } catch (error) {
            console.error('Booking submission error:', error);
            setStatus({ message: `Error: ${error.message}. Please contact Jonathan on 083 600 3747`, type: 'danger' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="main">
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-lg-center text-sm-start">
                            <div className="col-lg-8">
                                <h1>Contact</h1>
                                <p className="mb-0">Get in touch with me via email or a phone call!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Breadcrumb crumbs={[
                    { route: "/", page: "Home" },
                    { route: "/contact", page: "Contact Jonathan" }
                ]} />
            </div>
            <section id="contact" className="contact section">

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
                        <div className="row gy-5">

                            <div className="col-lg-4">
                                <a href="https://maps.app.goo.gl/HCnSVPo7KCnbfzzJ7">
                                    <div className="info-item d-flex align-items-center">
                                        <i className="bi bi-geo-alt flex-shrink-0"></i>
                                        <div>
                                            <h3>Location</h3>
                                            <p>66 Park Ln, Sandown, Sandton, 2031</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-4">
                                <a href="callto:0836003747">
                                    <div className="info-item d-flex align-items-center">
                                        <i className="bi bi-telephone flex-shrink-0"></i>
                                        <div>
                                            <h3>Call</h3>
                                            <p>(+27) 83 600 3747</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-4">
                                <a href="mailto:jonathan@jonathancohen.co.za?subject=Hi Jonathan Please Contact me">
                                    <div className="info-item d-flex align-items-center">
                                        <i className="bi bi-envelope flex-shrink-0"></i>
                                        <div>
                                            <h3>Email</h3>
                                            <p>jonathan@jonathancohen.co.za</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12" style={{ height: "80vh" }}>
                            <div class="calendly-inline-widget" data-url="https://calendly.com/rossbeukes-networkmedia/30min?background_color=000000&text_color=fafafa&primary_color=4ac9e3" style={{ height: "100%", width: "auto" }} ></div>
                        </div>
                    </div>
                </div>

            </section>
            <Preloader></Preloader>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </main>
    )
}

export default Contact