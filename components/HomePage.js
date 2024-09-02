import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-.png', // Replace with your image paths
  '/products/TORSIONMETER.png',
  '/products/TORSION_METER_INSIDE.png',
  '/products/Propeller_Order.jpg',
];

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="home-page">
      <div className="image-carousel mt-10">
        <div className="image-track">
          {images.concat(images).map((src, index) => (
            <div key={index} className="image-card">
              <Image 
                src={src} 
                alt={`Image ${index + 1}`} 
                width={150} 
                height={150} 
                className="carousel-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
