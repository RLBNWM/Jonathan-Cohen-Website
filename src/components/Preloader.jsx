import React, { useEffect } from "react";

const Preloader = () => {

    useEffect(() => {
        const preloader = document.querySelector('#preloader');
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 1000);
        setTimeout(() => {
            preloader.remove();
        }, 2000);
    });

    return (
        <div id="preloader">
            <div className="line"></div>
        </div>
    );
};

export default Preloader;
