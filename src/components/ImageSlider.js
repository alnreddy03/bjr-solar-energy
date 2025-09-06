import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  './assets/images/img1.png',
  './assets/images/img2.png',
  './assets/images/img3.png',
  './assets/images/img4.png',
  './assets/images/file_example_JPG_100kB.png'
];

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', borderRadius:'20px' }}>
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img 
              src={src} 
              alt={`slide-${idx+1}`} 
              style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '16px', boxShadow:'0 4px 24px #0002' }} 
              onError={e => { e.target.onerror = null; e.target.src = '/assets/images/img1.png'; }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
