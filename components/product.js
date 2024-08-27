// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// const products = [
//   {
//     src: '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-.png',
//     alt: 'Engine Telegraph System',
//     description: 'Engine Telegraph System Model ET 44 - 004 (Master). Essential for marine communication.',
//   },
//   {
//     src: '/products/TORSIONMETER.png',
//     alt: 'Torsionmeter',
//     description: 'Torsionmeter TD 56. Used to measure torque and speed in marine applications.',
//   },
//   // Add more products as needed
// ];

// export default function ProductCarousel() {
//   const [currentProductIndex, setCurrentProductIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
//     }, 5000); // Switch product every 5 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   const handlePrevious = () => {
//     setCurrentProductIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
//   };

//   const currentProduct = products[currentProductIndex];

//   return (
//     <div className="relative flex justify-center items-center h-full">
//       {/* Left Arrow */}
//       <div className="absolute left-0 cursor-pointer" onClick={handlePrevious}>
//         <FontAwesomeIcon icon={faChevronLeft} size="2x" className="text-black hover:text-gray-300" />
//       </div>

//       {/* Product Display */}
//       <div className="flex items-center">
//         <div className="w-1/2 flex justify-center">
//           <Image src={currentProduct.src} alt={currentProduct.alt} width={300} height={400} />
//         </div>
//         <div className="w-1/2 text-left px-10">
//           <h2 className="text-2xl font-bold mb-4">{currentProduct.alt}</h2>
//           <p className="text-lg text-gray-200">{currentProduct.description}</p>
//         </div>
//       </div>

//       {/* Right Arrow */}
//       <div className="absolute right-0 cursor-pointer" onClick={handleNext}>
//         <FontAwesomeIcon icon={faChevronRight} size="2x" className="text-black hover:text-gray-300" />
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const products = [
  {
    src: '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-.png',
    alt: 'Engine Telegraph System',
    description: 'Engine Telegraph System Model ET 44 - 004 (Master). Essential for marine communication.',
  },
  {
    src: '/products/TORSIONMETER.png',
    alt: 'Torsionmeter',
    description: 'Torsionmeter TD 56. Used to measure torque and speed in marine applications.',
  },
  // Add more products as needed
];

export default function ProductCarousel() {  // Ensure it's a default export
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000); // Switch product every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handlePrevious = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const currentProduct = products[currentProductIndex];

  return (
    <div className="relative flex justify-center items-center h-full">
      {/* Left Arrow */}
      <div className="absolute left-0 cursor-pointer" onClick={handlePrevious}>
        <FontAwesomeIcon icon={faChevronLeft} size="2x" className="text-black hover:text-gray-300" />
      </div>

      {/* Product Display */}
      <div className="flex items-center">
        <div className="w-1/2 flex justify-center">
          <Image src={currentProduct.src} alt={currentProduct.alt} width={300} height={400} />
        </div>
        <div className="w-1/2 text-left px-10">
          <h2 className="text-2xl font-bold mb-4">{currentProduct.alt}</h2>
          <p className="text-lg text-gray-200">{currentProduct.description}</p>
        </div>
      </div>

      {/* Right Arrow */}
      <div className="absolute right-0 cursor-pointer" onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} size="2x" className="text-black hover:text-gray-300" />
      </div>
    </div>
  );
}
