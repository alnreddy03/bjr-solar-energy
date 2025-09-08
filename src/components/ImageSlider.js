import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import images from assets folder
import img1 from '../assets/images/bjr-solar-logo.png';
import img2 from '../assets/images/bjr-solar-logo1.png';
import img3 from '../assets/images/bjr-solar-logo2.png';
import img5 from '../assets/images/bjr-solar-logo3.png';
import img4 from '../assets/images/bjr-solar-logo4.png';

const images = [img1, img2, img3, img4, img5];

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div style={{ maxWidth: '1100px', margin: 'auto', paddingTop: '70px' }}>
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img 
              src={src} 
              alt={`slide-${idx + 1}`} 
              style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '16px' }}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
      <div className="hero-text" style={{ padding: '20px 0', textAlign: 'center' }}>
        <h1>BJR Solar Energy Systems</h1>
        <p>Switch to solar power and save up to 80% on your electricity bill. Your reliable partner for renewable energy solutions!</p>
      </div>
    </div>
  );
}

export default ImageSlider;
