import React, { useEffect } from "react";

const Preloader = () => {

    useEffect(() => {
        const preloader = document.querySelector('#preloader');
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('loaded');
            }

        }, 1000);
        setTimeout(() => {
            if (preloader) {
                preloader.remove();
            }
        }, 2000);
    });

    return (
        <div id="preloader">
            <div className="line"></div>
        </div>
    );
};

export default Preloader;
