import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export default function Affiliates() {
    const modules = import.meta.glob('/src/assets/img/affiliates/*', { eager: true });
    const logos = Object.values(modules).map(m => m.default);

    return (
        <section className="mx-2">

            <div className="container-fluid section-title" data-aos="fade-up" data-aos-delay="100">
                <h2>Affiliates </h2>
                <p>In Partnership With</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="container-fluid">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 1000,
                    }}
                    slidesPerView={5}
                    spaceBetween={40}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                        320: { slidesPerView: 3, spaceBetween: 10 }
                    }}
                    pagination={{
                        clickable: false
                    }}
                >
                    {
                        logos.map((img, index) => {
                            return (
                                < SwiperSlide key={index}>
                                    <div className="square" >
                                        <img src={img} alt={`assets/img/affiliates/affiliate${index + 1}`} className="img-fluid" />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}