import { useEffect } from "react"
import { Link } from "react-router-dom";

const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
}

function Navbar({ pages, setSelectedTab, selectedTab }) {
    useEffect(() => {


        /**
         * Hide mobile nav on same-page/hash links
         */
        document.querySelectorAll('#navmenu a').forEach(navmenu => {
            navmenu.addEventListener('click', () => {
                if (document.querySelector('.mobile-nav-active')) {
                    mobileNavToogle();
                }
            });

        });

        /**
         * Toggle mobile nav dropdowns
         */
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
        return selectedTab === index ? "active" : ""
    }

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

                <Link to="/" onClick={() => { setSelectedTab(0) }} className="logo d-flex align-items-center me-auto me-xl-0">
                    <img style={{ borderRadius: "50%" }} src='/assets/img/logo.png' />
                    <h1 className="sitename">Jonathan Cohen</h1>
                </Link>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        {pages.map(({ name, route }, index) => {

                            return (
                                <li>
                                    {/* <a href="" > */}
                                    <Link to={route} key={index} className={displayActive(index)} onClick={(e) => {
                                        setSelectedTab(index);
                                    }}>{name}</Link>
                                    {/* </a> */}
                                </li>
                            )
                        })}

                        <li className="dropdown"><Link to="/resources"><span>Resources</span> <i
                            className="bi bi-chevron-down toggle-dropdown"></i></Link>
                            <ul>
                                <li><Link to="/resources/?">Past Podcast Episodes</Link></li>
                                <li><Link to="/resources/?">Past Events/Talks</Link></li>
                                <li><Link to="/resources/?">Past Workshops</Link></li>
                                <li><Link to="/resources/?">Book Recommendations</Link></li>
                            </ul>
                        </li>
                    </ul>
                    {/* <ul>
                        
                        <li><a href="services.html">Services</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul> */}
                    <i onClick={mobileNavToogle} className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>



                <div className="header-social-links">
                    <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>

            </div>
        </header>
    )
}

export default Navbar