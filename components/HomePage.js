import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/products/TORSIONMETER.png',
  '/products/TORSION_METER_INSIDE.png',
  '/products/TORSIONMETER--BAG.png',
  '/products/optical_torsion.png',
  '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-.png',
  '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-02.png',
  '/products/Propeller_Order.jpg',
  '/products/lora.png',
];

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="home-page">
      <h1 className='text-center text-2xl font-bold'>Our Product Line</h1>
      <div className="image-carousel mt-10">
        <div className="image-track">
          {images.map((src, index) => (
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
          {images.map((src, index) => (
            <div key={index + images.length} className="image-card">
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
