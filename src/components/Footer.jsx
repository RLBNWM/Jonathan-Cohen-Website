export default function Footer() {

    const preventDef = (e) => {
        e.preventDefault();
    }

    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="social-links d-flex justify-content-center">
                    <a href="" onClick={preventDef}><i className="bi bi-twitter-x"></i></a>
                    <a href="" onClick={preventDef}><i className="bi bi-facebook"></i></a>
                    <a href="" onClick={preventDef}><i className="bi bi-instagram"></i></a>
                    <a href="" onClick={preventDef}><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </footer>
    )
}