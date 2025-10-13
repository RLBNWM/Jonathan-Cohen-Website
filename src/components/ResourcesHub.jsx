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
            text: `Dr Julie Smith has written a guide that feels less like a self-help book and more like a warm, informed conversation with someone who cares. Open When... offers bite-sized, science-informed chapters on everything from burnout and depression to self-worth and anxiety. It’s digestible but never dumbed down—a quality I admire.
What stood out to me was how Smith simplifies emotional suffering. Her writing doesn’t diagnose—it connects. I found myself thinking of young adults and parents in South Africa who often lack access to therapy or the words to describe what they feel. This book could help bridge that gap.
If there’s one area I’d love to see more of, it’s cultural sensitivity. The advice lands beautifully in Western contexts, but I wonder how it might resonate in communities where mental health still feels taboo or spiritualised. Still, her clarity, kindness, and humility shine through every page.
A comforting companion in difficult moments—especially for those who don’t know where to begin.
`
        },
        {
            title: "Mind the Gap by Dr Karen Gurney",
            text: `This book reshaped my understanding of desire—not as a fixed trait, but as a conversation between context, connection, and self-awareness. Dr Karen Gurney gives us a grounded, sex-positive, and evidence-based lens that strips away shame and expectation. Her insights on responsive vs. spontaneous desire felt especially affirming.
In my work with men and teenagers, I observe how sexual narratives develop early—often without words. Mind the Gap provides a hopeful alternative story. It offers language for feelings people find hard to express. Gurney’s honesty and clinical foundation create space for genuine healing to start.
That said, I’d love to see a future edition explore gender and sexuality across a broader range of cultural contexts. South Africa’s diverse norms, values, and access to sex education deserve attention—and could benefit from more voices like hers engaging with it directly.
Still, this book is a gift. I’ve recommended it more times than I can count. A needed reminder that desire isn’t broken—it's layered.
`
        },
        {
            title: "Nexus by Yuval Noah Harari",
            text: `Nexus continues Harari’s hallmark brilliance: weaving history, psychology, technology, and culture into a provocative narrative about the future of human connection. It’s sweeping, sometimes unsettling, and deeply engaging. Few thinkers can zoom out so far and still feel something personal.
What I appreciated most was his exploration of how digital life is reshaping identity and vulnerability—two topics close to my heart. Harari doesn’t just critique; he asks better questions than most futurists dare to.
Sometimes, Nexus assumes a universal outlook that overlooks inequalities in access, context, or culture. As someone living and working in South Africa, I sensed the tension between Harari’s global analysis and our local realities—especially regarding connectivity, education, and psychological safety.
Even so, this is one of those books that leaves a lasting impression. I may not agree with every conclusion, but I appreciate every question it prompted me to ask. If you’re curious about the future of human relationships, begin here.
`
        },
    ]

    let [currentResource, setCurrentResource] = useState({});
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

            <section className="book-recommendations">
                <div className="container-fluid">
                    <div className="row justify-content-start section-title" data-aos="fade-up">
                        <h2>Book Recommedations</h2>
                        <p>Jonathan's Latest Book Recommendations</p>
                    </div>
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
                            books.map(({ title, text }, index) => {
                                return (
                                    <>
                                        <SwiperSlide key={index}>
                                            <div className="card bg-dark text-light">
                                                <div className="card-header">
                                                    Featured Books
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title"><b>{title}</b></h5>
                                                    <p className="card-text hide-text" >{text}</p>
                                                    <button data-bs-toggle="modal" data-bs-target={`#${index}-modal`} style={{ backgroundColor: "#4ac9e3", borderColor: "#4ac9e3" }} className="btn btn-primary" onClick={() => { setCurrentResource({ title: { title }, contents: { text } }) }}>Read More</button>
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

            <section>
                <div className="container-fluid">
                    <div className="row section-title" data-aos="fade-up">
                        <h2>Supplement Recommedations</h2>
                        <p>The Best Supplements For Your Wellbeing!</p>
                    </div>
                </div>

                <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">

                </div>
            </section>

            {books.map(({ title, text }, index) => {
                return <Modal id={`${index}-modal`} title={title} contents={text}></Modal>;
            })}

        </>
    )
}

export default ResourcesHub