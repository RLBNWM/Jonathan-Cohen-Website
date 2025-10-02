import { Swiper } from "swiper/react";

export default function Affiliates() {
    return (
        <section>
            <div className="container section-title" data-aos="fade-up" data-aos-delay="100">
                <h2>Testimonials</h2>
                <p>What they are saying</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{
                        delay: 5000,
                    }}
                    slidesPerView={"auto"}
                    pagination={{
                        clickable: false
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 1,
                        },
                    }}
                >


                </Swiper>
            </div>
        </section>
    )
}