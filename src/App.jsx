// import { useState } from 'react'

// import { BrowserRouter as Route, Router, Routes } from "react-router-dom"
// import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import About from "./components/About";
import { useEffect, useState } from "react";
import Services from "./components/Services";
import AOS from "aos";
import 'aos/dist/aos.css';
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import ServiceInfo from "./components/ServiceInfo";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration in ms
      once: true,       // whether animation should happen only once
    });
  }, []);

  let pages = [{ name: "Home", route: "/" }, { name: "About", route: "/about" }, { name: "Services", route: "/services" }, { name: "Contact", route: "/contact" }];
  let services = [{
    img: "assets/img/gallery/gallery-1.jpg",
    title: "Business/Executive/Entrepreneur Coaching or Mentorship",
    description: "Helping business leaders and entrepreneurs achieve their goals through personalized coaching and mentorship.",
    icon: "bi bi-activity",
    slug: "business-exec-coaching"
  },
  {
    img: "assets/img/gallery/gallery-2.jpg",
    title: "Individual/PersonalCoaching or Counselling",
    description: "Providing one-on-one coaching and counselling to support personal growth and development.",
    icon: "bi bi-bounding-box-circles",
    slug: "individual-coaching"
  },
  {
    img: "assets/img/gallery/gallery-3.jpg",
    title: "Team Coaching",
    description: "Facilitating team coaching sessions to enhance collaboration, communication, and performance.",
    icon: "bi bi-calendar4-week",
    slug: "team-coaching"
  },
  {
    img: "assets/img/gallery/gallery-4.jpg",
    title: "Support Groups",
    description: "Leading support groups to provide a safe and supportive environment for individuals to share their experiences and challenges.",
    icon: "bi bi-broadcast",
    slug: "support-groups"
  },
  {
    img: "assets/img/gallery/gallery-5.jpg",
    title: "Corporate Wellness Consulting",
    description: "Offering corporate wellness consulting services to promote employee health and well-being.",
    icon: "bi bi-brightness-high",
    slug: "corporate-wellness"
  },
  {
    img: "assets/img/gallery/gallery-6.jpg",
    title: "Talks/Key Notes",
    description: "Delivering engaging talks and keynotes on topics related to personal and professional development.",
    icon: "bi bi-chat-square-text",
    slug: "talks-key-notes"
  }];
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    if (window.scrollY > 50) {
      setTimeout(() => {
        scrollToTop();
      }, 500);
    }
  });

  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  // window.addEventListener('load', () => {
  //   if (window.scrollY > 100) {
  //     scrollToTop();
  //   }
  //   toggleScrollTop
  // });

  document.addEventListener('scroll', toggleScrollTop);

  return (
    <>
      <Navbar pages={pages} setSelectedTab={setSelectedTab} selectedTab={selectedTab}></Navbar>

      <Routes>
        <Route path="/" element={<HomePage services={services} />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services services={services} />}></Route>
        <Route path="/services/:slug" element={<ServiceInfo services={services} />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <a href="#" onClick={scrollToTop} id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i
        className="bi bi-arrow-up-short"></i></a>

      <Footer></Footer>
    </>
  )
}

export default App
