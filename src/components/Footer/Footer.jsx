import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left-side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="logo" width={200} />
                <span>Our Vision is to make all people <br /> the best for their career.</span>
            </div>

            {/* right-side */}
            <div className="flexColStart f-right">
                <span className='primaryText' >Information</span>
                <span className='secondaryText' >Mumbai, India</span>
                <div className="flexCenter f-menu">
                    <span>Courses</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
