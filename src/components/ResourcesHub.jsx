import React, { useState } from 'react'
import Breadcrumb from './Breadcrumb'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import Modal from './Modal';

const ResourcesHub = () => {

    let books = [
        {
            title: "Open When... by Dr. Julie Smith",
            text: `
            <p>Dr Julie Smith has written a guide that feels less like a self-help book and more like a warm, informed conversation with someone who cares. Open When... offers bite-sized, science-informed chapters on everything from burnout and depression to self-worth and anxiety. It’s digestible but never dumbed down—a quality I admire.</p>
            <p>What stood out to me was how Smith simplifies emotional suffering. Her writing doesn’t diagnose—it connects. I found myself thinking of young adults and parents in South Africa who often lack access to therapy or the words to describe what they feel. This book could help bridge that gap.</p>
            <p>If there’s one area I’d love to see more of, it’s cultural sensitivity. The advice lands beautifully in Western contexts, but I wonder how it might resonate in communities where mental health still feels taboo or spiritualised. Still, her clarity, kindness, and humility shine through every page.</p>
            <p>A comforting companion in difficult moments—especially for those who don’t know where to begin.</p>
            `,
            cover: "assets/img/books/OpenWhen.jpg"
        },
        {
            title: "Mind the Gap by Dr Karen Gurney",
            text: `
            <p>This book reshaped my understanding of desire—not as a fixed trait, but as a conversation between context, connection, and self-awareness. Dr Karen Gurney gives us a grounded, sex-positive, and evidence-based lens that strips away shame and expectation. Her insights on responsive vs. spontaneous desire felt especially affirming.</p>
            <p>In my work with men and teenagers, I observe how sexual narratives develop early—often without words. Mind the Gap provides a hopeful alternative story. It offers language for feelings people find hard to express. Gurney’s honesty and clinical foundation create space for genuine healing to start.</p>
            <p>That said, I’d love to see a future edition explore gender and sexuality across a broader range of cultural contexts. South Africa’s diverse norms, values, and access to sex education deserve attention—and could benefit from more voices like hers engaging with it directly.</p>
            <p>Still, this book is a gift. I’ve recommended it more times than I can count. A needed reminder that desire isn’t broken—it's layered.</p>
            `,
            cover: "assets/img/books/MindTheGap.jpg"
        },
        {
            title: "Nexus by Yuval Noah Harari",
            text: `
            <p>Nexus continues Harari’s hallmark brilliance: weaving history, psychology, technology, and culture into a provocative narrative about the future of human connection. It’s sweeping, sometimes unsettling, and deeply engaging. Few thinkers can zoom out so far and still feel something personal.</p>
            <p>What I appreciated most was his exploration of how digital life is reshaping identity and vulnerability—two topics close to my heart. Harari doesn’t just critique; he asks better questions than most futurists dare to.</p>
            <p>Sometimes, Nexus assumes a universal outlook that overlooks inequalities in access, context, or culture. As someone living and working in South Africa, I sensed the tension between Harari’s global analysis and our local realities—especially regarding connectivity, education, and psychological safety.</p>
            <p>Even so, this is one of those books that leaves a lasting impression. I may not agree with every conclusion, but I appreciate every question it prompted me to ask. If you’re curious about the future of human relationships, begin here.</p>
            `,
            cover: "assets/img/books/Nexus.jpg"
        },
    ]
    let supplements = [
        {
            title: "NOVA NAD+ Injections",
            text: `
            <p>by NOVA NAD+ | <a href="https://www.novanad.co.za/">novanad.co.za</a></p>
            <p>
                NAD+ therapy wasn’t on my radar until burnout and chronic fatigue pushed me to rethink how I supported my cellular health. NOVA’s NAD+ injections became a game-changer. Following a consistent protocol, I noticed improved mental clarity, quicker recovery after exercise, and a deeper sense of baseline vitality – not a buzz, but a gentle return to energy.
            </p>
            <p>
                What stood out was the professionalism and care in delivery, as well as the ease with which I could administer the self-injections pain-free. It's not a magic bullet, and the science is still emerging, but in my case, the results were tangible.
            </p>
            <p>
                I’d love to see more accessible, longitudinal research tailored to local South African demographics, but this is a promising wellness support worth exploring – with medical guidance, of course.
            </p>
`,
            cover: "assets/img/supplements/novanad.webp"
        },
        {
            title: "Prime Day & Prime Night",
            text: `
            <p>by PrimeSelf | <a href="https://www.primeself.co.za/">primeself.co.za</a></p>
            <p>I’ve trialled countless nootropics and adaptogens, and the Prime Day/Night combo is one of the few that genuinely delivered balance without overstimulation or grogginess. Prime Day sharpened my focus and mood subtly but noticeably, especially after recently giving up caffeine. Prime Night, on the other hand, supported restful, high-quality sleep without the knockout effect of heavier supplements or medications.</p>
            <p>What I appreciate most is the formulation’s intention—it’s thoughtful, not gimmicky. There’s no “crash” or dependency loop, just sustainable support for energy during the day and proper rest at night.</p>
            <p>Of course, supplement responses are individual, but for me, this blend aligned well with my nervous system and lifestyle.</p>
            `,
            cover: "assets/img/supplements/prime_day_night.webp"
        },
        {
            title: "Naked Protein Bars",
            text: `
            <p>by Nakd (SA) | <a href="https://www.eatnakd.com/">eatnakd.com</a></p>
            <p>Clean protein options are surprisingly hard to come by, especially those that don’t taste like punishment, have no unnatural additives or leave you with gut regret. I was lucky to test Nakd Protein Bars ahead of their South African launch, and they check all three boxes: nutritious, natural, and fantastic taste (in all the flavours).</p>
            <p>What I loved was the simplicity—real ingredients, no fake sweetness overload, and a decent protein-to-carb ratio. These worked well as a post-workout snack or quick fuel during demanding days. I also found that they really helped keep my energy levels (both mental and physical) consistent during tennis matches that went beyond two sets (sometimes over two hours). Proved to me that Djokovic eating natural food only (dates and nuts) in between changeovers really does provide sustainable energy without the drops.</p>
            <p>It’s still early days to determine how significant natural ingredients are to South Africans, but if they adhere to this integrity-first approach, they will fill a genuine gap in our health food sector by educating people about the harm of misinformation regarding additives and the negative metabolic effects of unnatural ingredients.</p>
            `,
            cover: "assets/img/supplements/protein_bars.png"
        },
    ]

    return (
        <>
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-lg-center text-sm-start">
                            <div className="col-lg-8">
                                <h1>Resource Hub</h1>
                                <p className="mb-0">
                                    Explore all of Jonathan Cohen's events, conferences, and content!
                                </p>
                                <Link to="/contact" className="cta-btn">
                                    Find out more information
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Breadcrumb crumbs={[
                    { route: "/", page: "Home" },
                    { route: "/resources", page: "Resources" }
                ]}
                />
            </div>

            <section className="book-recommendations mx-2">
                <div className="container-fluid section-title" data-aos="fade">
                    <h2>Books</h2>
                    <p>Jonathan's Latest Book Recommendations</p>
                </div>

                <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                    <Swiper
                        slidesPerView={"auto"}
                        pagination={{
                            clickable: false
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {
                            books.map(({ title, text, cover }, index) => {
                                return (
                                    <>
                                        <SwiperSlide key={index}>
                                            <div className="card bg-dark text-light">
                                                <div className="card-header">
                                                    Featured Books
                                                </div>
                                                <img src={cover} class="card-img-top" style={{ objectFit: 'contain', height: "300px", width: "auto", aspectRatio: "1x1" }} alt="..."></img>
                                                <div className="card-body">
                                                    <h5 className="card-title"><b>{title}</b></h5>
                                                    <p className="card-text hide-text" dangerouslySetInnerHTML={{ __html: text }} />
                                                    <button data-bs-toggle="modal" data-bs-target={`#${index}-book-modal`} style={{ backgroundColor: "#4ac9e3", borderColor: "#4ac9e3" }} className="btn btn-primary">Read More</button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </>
                                )
                            })
                        }
                    </Swiper>
                </div>

            </section>

            <section className='mx-2'>
                <div className="container-fluid section-title" data-aos="fade">
                    <h2>Supplements</h2>
                    <p>The Best Supplements For Your Wellbeing!</p>
                </div>

                <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                    <Swiper
                        slidesPerView={"auto"}
                        pagination={{
                            clickable: false
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {
                            supplements.map(({ title, text, cover }, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="card bg-dark text-light">
                                            <div className="card-header">
                                                Featured Supplements
                                            </div>
                                            <img src={cover} class="card-img-top" style={{ objectFit: 'contain', height: "300px", width: "auto", aspectRatio: "1x1" }} alt="..."></img>
                                            <div className="card-body">
                                                <h5 className="card-title"><b>{title}</b></h5>
                                                <p className="card-text hide-text" dangerouslySetInnerHTML={{ __html: text }} />
                                                <button data-bs-toggle="modal" data-bs-target={`#${index}-supplements-modal`} style={{ backgroundColor: "#4ac9e3", borderColor: "#4ac9e3" }} className="btn btn-primary">Read More</button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section>

            {books.map(({ title, text }, index) => {
                return <Modal id={`${index}-book-modal`} title={title} contents={text}></Modal>;
            })}

            {supplements.map(({ title, text }, index) => {
                return <Modal id={`${index}-supplements-modal`} title={title} contents={text}></Modal>;
            })}

        </>
    )
}

export default ResourcesHub