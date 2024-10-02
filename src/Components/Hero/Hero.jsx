import React from "react";
import arrow_icon from '../Assets/arrow.png';
import './Hero.css';
import brand1 from '../Assets/brand1.jpg';
import brand2 from '../Assets/brand2.jpg';
import brand3 from '../Assets/brand3.jpg';
import brand4 from '../Assets/brand4.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-top">
                <h2>Premium Italian Foods</h2>
                <div>
                    <h2>Our Brands</h2>
                    <img src = {brand1} alt = "" />
                    <img src = {brand2} alt = "" />
                    <img src = {brand3} alt = "" />
                    <img src = {brand4} alt = "" />
                </div>
            </div>
            <div className="productbutton">
                <div>Latest Products</div>
                <img src={arrow_icon} alt = "" />
            </div>
           
        </div>
    )
}

export default Hero;