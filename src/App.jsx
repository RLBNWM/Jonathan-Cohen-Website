// import { useState } from 'react'

// import { BrowserRouter as Route, Router, Routes } from "react-router-dom"
// import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import About from "./components/About";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import Services from "./components/Services";
import AOS from "aos";
import 'aos/dist/aos.css';
import Contact from "./components/Contact";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration in ms
      once: true,       // whether animation should happen only once
    });
  }, []);

  let pages = ["Home", "About", "Services", "Contact"];
  let services = [{
    img: "assets/img/gallery/gallery-1.jpg",
    title: "Business/Executive/Entrepreneur Coaching or Mentorship",
    description: "Helping business leaders and entrepreneurs achieve their goals through personalized coaching and mentorship.",
    icon: "bi bi-activity"
  },
  {
    img: "assets/img/gallery/gallery-2.jpg",
    title: "Individual/PersonalCoaching or Counselling",
    description: "Providing one-on-one coaching and counselling to support personal growth and development.",
    icon: "bi bi-bounding-box-circles"
  },
  {
    img: "assets/img/gallery/gallery-3.jpg",
    title: "Team Coaching",
    description: "Facilitating team coaching sessions to enhance collaboration, communication, and performance.",
    icon: "bi bi-calendar4-week"
  },
  {
    img: "assets/img/gallery/gallery-4.jpg",
    title: "Support Groups",
    description: "Leading support groups to provide a safe and supportive environment for individuals to share their experiences and challenges.",
    icon: "bi bi-broadcast"
  },
  {
    img: "assets/img/gallery/gallery-5.jpg",
    title: "Corporate Wellness Consulting",
    description: "Offering corporate wellness consulting services to promote employee health and well-being.",
    icon: "bi bi-brightness-high"
  },
  {
    img: "assets/img/gallery/gallery-6.jpg",
    title: "Talks/Key Notes",
    description: "Delivering engaging talks and keynotes on topics related to personal and professional development.",
    icon: "bi bi-chat-square-text"
  }
  ];

  // const [currentPage, setCurrentPage] = useState(pages[0]);
  const [selectedTab, setSelectedTab] = useState(0);



  return (
    <>
      <Navbar items={pages} setSelectedTab={setSelectedTab} selectedTab={selectedTab}></Navbar>

      {selectedTab == 0 && <HomePage services={services} />}
      {selectedTab == 1 && <About />}
      {selectedTab == 2 && <Services services={services}></Services>}
      {selectedTab == 3 && <Contact></Contact>}

      {/* <Preloader></Preloader> */}

      <Footer></Footer>
    </>
  )
}

export default App
