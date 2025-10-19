import { useEffect } from "react"
import { Link, NavLink } from "react-router-dom";

const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
}

function Navbar({ pages, setSelectedTab, selectedTab }) {
    useEffect(() => {

        document.querySelectorAll('#navmenu a').forEach(navmenu => {
            navmenu.addEventListener('click', () => {
                if (document.querySelector('.mobile-nav-active')) {
                    mobileNavToogle();
                }
            });
        });

        document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
            navmenu.addEventListener('click', function (e) {
                e.preventDefault();
                this.parentNode.classList.toggle('active');
                this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
                e.stopImmediatePropagation();
            });
        });
    }, []);

    const displayActive = function (index) {
        // return selectedTab === index ? "active" : ""
        return "";
    }

    let socials = [
        { name: "facebook", icon: "bi-facebook", hyperlink: "#" },
        { name: "instagram", icon: "bi-instagram", hyperlink: "#" },
        { name: "linkedin", icon: "bi-linkedin", hyperlink: "#" },
        { name: "youtube", icon: "bi-youtube", hyperlink: "#" }
    ]

    return (

        // <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <div class="container">
        //         <a class="navbar-brand" href="#">Navbar</a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <div class="navbar-nav">
        //                 <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                 <a class="nav-link" href="#">Features</a>
        //                 <a class="nav-link" href="#">Pricing</a>
        //                 <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        //             </div>
        //         </div>
        //     </div>
        // </nav>


        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

                <Link to="/" onClick={() => { setSelectedTab(0) }} className="logo d-flex align-items-center me-auto me-xl-0">
                    <img style={{ borderRadius: "50%" }} src='assets/img/logo.png' />
                    <div className="mx-2">
                        <h1 className="sitename">Jonathan Cohen</h1>
                        <h1 className="sitename">Holistic Coaching</h1>
                    </div>
                </Link>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        {pages.map(({ name, route }, index) => {

                            return (
                                <li className={name === "Resources" ? "dropdown" : ""}>

                                    <NavLink to={`${route}#`} key={index} className={displayActive(index)} onClick={(e) => {
                                        setSelectedTab(index);
                                    }}>{name === "Resources" ? <><span>{name}</span><i className="bi bi-chevron-down toggle-dropdown"></i></> : name}
                                    </NavLink>

                                    {name === "Resources" &&
                                        <ul>
                                            <li><Link to="/resources#books">Book Recommendations</Link></li>
                                            <li><Link to="/resources#supplements">Supplement Recommendations</Link></li>
                                            <li><Link className="disabled">Past Events/Talks (Coming soon!)</Link></li>
                                            <li><Link className="disabled ">Past Workshops (Coming soon!)</Link></li>
                                        </ul>
                                    }
                                </li>
                            )
                        })}
                    </ul>
                    <i onClick={mobileNavToogle} className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <div className="header-social-links">
                    {/* {
                        socials.map(({ name, icon, hyperlink }, index) => {
                            return <a href={hyperlink} className={`bi ${icon}`} key={index}></a>
                        })
                    } */}
                </div>

            </div>
        </header>
    )
}

export default Navbar