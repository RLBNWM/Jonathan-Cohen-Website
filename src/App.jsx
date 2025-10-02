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
import { Link, Route, Routes } from "react-router-dom";
import ServiceInfo from "./components/ServiceInfo";
import ResourcesHub from "./components/ResourcesHub";


function App() {

  useEffect(() => {
    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }

    document.addEventListener('scroll', toggleScrollTop);
    AOS.init({
      duration: 1000,   // animation duration in ms
      once: true,       // whether animation should happen only once
    });
  }, []);

  let pages = [{ name: "Home", route: "/" }, { name: "About", route: "/about" }, { name: "Services", route: "/services" }, { name: "Contact", route: "/contact" }, { name: "Resources", route: "/resources" }];
  let services = [{
    img: "assets/img/gallery/gallery-1.jpg",
    title: "Coaching or Mentorship",
    description: "Helping business leaders and entrepreneurs achieve their goals through personalized coaching and mentorship.",
    icon: "bi bi-activity",
    slug: "business-exec-coaching",
    intro: "Whether you’re navigating a career shift, launching a new venture, deepening your relationships, or simply seeking clarity, I offer coaching and mentorship grounded in lived experience, evidence-based methods, and a holistic lens.",
    body: `<p>Focus Area:</p>
    <ul>
      <li>Executive & Business Coaching</li>
      <li>Entrepreneur & Start-Up Support</li>
      <li>Individual & Personal Growth</li>
      <li>Relationship Coaching (Work or Personal)</li>
      <li>Team & Group Development</li>
    </ul>`,
    conclusion: "I bring presence, insight, and structure to our work, meeting you where you are and walking beside you, not ahead of you.",
    customButton: "Book a free chemistry session"
  },
  {
    img: "assets/img/gallery/gallery-2.jpg",
    title: "Team Performance Programmes",
    description: "Jonathan Cohen’s programmes build stronger teams through coaching, collaboration, and strategy.",
    icon: "bi bi-bounding-box-circles",
    slug: "team-performance-programmes",
    intro: "Jonathan Cohens Team Performance Programmes are expertly crafted to help teams work more cohesively, communicate effectively, and achieve high-impact results. These sessions blend leadership coaching, collaboration exercises, and strategy development to unlock group potential.",
    body: `
    <ul>
      <li>Customised Coaching:Tailored to address your teams unique dynamics and goals.</li>
      <li>Enhanced Communication: Learn practical frameworks for improving trust and dialogue.</li>
      <li>Leadership Growth: Empower emerging and existing leaders within your organization.</li>
      <li>Action-Oriented:Interactive sessions that focus on real outcomes, not just theory.</li>
    </ul>`,
    conclusion: "This is the ideal solution for businesses, startups, and organizations wanting to take team performance to the next level.",
    customButton: ""
  },
  {
    img: "assets/img/gallery/gallery-3.jpg",
    title: "Mediation",
    description: "When relationships face challenge, whether in business, family, or romance, mediation offers a path forward that prioritises clarity, dignity, and mutual respect.",
    icon: "bi bi-calendar4-week",
    slug: "mediation",
    intro: "When relationships face challenge, whether in business, family, or romance, mediation offers a path forward that prioritises clarity, dignity, and mutual respect.",
    body: `
    <p>Areas covered:</p>
    <ul>
      <li>Business and workplace mediation</li>
      <li>Romantic or personal relationships</li>
      <li>Family dynamics</li>
      <li>Team or leadership conflict</li>
    </ul>
    `,
    conclusion: "I approach mediation with calmness, curiosity, neutrality and compassion.",
    customButton: ""
  },
  {
    img: "assets/img/gallery/gallery-4.jpg",
    title: "Support Groups",
    description: "Leading support groups to provide a safe and supportive environment for individuals to share their experiences and challenges.",
    icon: "bi bi-broadcast",
    slug: "support-groups",
    intro: "Sometimes, healing happens in circles, not just across a couch. I facilitate safe, consistent, and confidential spaces where people can connect, reflect, and grow together.",
    body: `
    <p>Current Groups I Founded and Facilitate</p>
    <ul>
      <li>Men’s Group – for vulnerability, resilience, and connection</li>
      <li>Men’s Sexuality & Compulsivity Support Group</li>
      <li>Adolescent Boys Group – building identity, safety, and expression</li>
    </ul>
    `,
    conclusion: "Bespoke workshops are available for schools, colleges, and companies.",
    customButton: ""
  },
  {
    img: "assets/img/gallery/gallery-5.jpg",
    title: "Corporate Wellness Consulting",
    description: "Offering corporate wellness consulting services to promote employee health and well-being.",
    icon: "bi bi-brightness-high",
    slug: "corporate-wellness",
    intro: "Well-being isn’t a side conversation; it’s central to how people show up, connect, and lead. I work with companies to create psychologically safe and inclusive environments where performance and humanity coexist.",
    body: `
    <p>Services include:</p>
    <ul>
      <li>Organisational consulting on tailored wellness strategy</li>
      <li>Implementation of a sustainable wellness strategy</li>
      <li>Department/team workshops</li>
      <li>Leadership development sessions</li>
      <li>Change management</li>
      <li>Conflict management training</li>
      <li>System and process analysis and development</li>
    </ul>
    `,
    conclusion: "",
    customButton: ""
  },
  {
    img: "assets/img/gallery/gallery-6.jpg",
    title: "Talks/Key Notes",
    description: "Delivering engaging talks and keynotes on topics related to personal and professional development.",
    icon: "bi bi-chat-square-text",
    slug: "talks-key-notes",
    intro: "Talks/Key Notes",
    body: `
    <p>Areas of Interest:</p>
    <ul>
      <li>“Grey Matters” - Embracing the Grey</li>
      <li>Masculinity</li>
      <li>Overall Well-Being</li>
      <li>Romantic Relationships</li>
      <li>Sexology</li>
      <li>Addiction</li>
      <li>Coping with Late-Stage Capitalism</li>
    </ul>
    `,
    conclusion: "",
    customButton: ""
  }];

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Navbar pages={pages} setSelectedTab={setSelectedTab} selectedTab={selectedTab}></Navbar>

      <Routes>
        <Route path="/" element={<HomePage services={services} />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services services={services} />}></Route>
        <Route path="/services/:slug" element={<ServiceInfo services={services} />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/resources" element={<ResourcesHub />} />
      </Routes>

      <Link to="#" onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }} id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </Link>

      <Footer></Footer>
    </>
  )
}

export default App
