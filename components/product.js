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


// import Image from 'next/image';
// import { useEffect } from 'react';

// const products = [
//   {
//     src: '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-.png',
//     alt: 'Engine Telegraph System',
//     description: 'Engine Telegraph System Model ET 44 - 004 (Master). Essential for marine communication.',
//     pdf: '/products_info/Torsionmeter_catalog.pdf', // Make sure the file name matches exactly
//   },
//   {
//     src: '/products/TORSIONMETER.png',
//     alt: 'Torsionmeter',
//     description: 'Torsionmeter TD 56. Used to measure torque and speed in marine applications.',
//     pdf: '/products_info/Torsionmeter_catalog.pdf', // Make sure the file name matches exactly
//   },
//   // Add more products as needed
// ];

// export default function ProductList() {
//   useEffect(() => {
//     const handleScrollAnimation = () => {
//       const elements = document.querySelectorAll('.product-card');
//       elements.forEach((el) => {
//         const rect = el.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom >= 0) {
//           el.classList.add('animate-slide-in');
//         } else {
//           el.classList.remove('animate-slide-in');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScrollAnimation);

//     return () => {
//       window.removeEventListener('scroll', handleScrollAnimation);
//     };
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto py-8 space-y-8">
//       {products.map((product, index) => (
//         <div
//           key={index}
//           className="product-card flex flex-col lg:flex-row items-center lg:items-start p-6 bg-white shadow-lg rounded-lg space-y-4 lg:space-y-0 lg:space-x-8 opacity-0 transition-opacity duration-700"
//         >
//           <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
//             <Image
//               src={product.src}
//               alt={product.alt}
//               width={300}
//               height={300}
//               objectFit="contain"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="w-full lg:w-2/3 text-center lg:text-left">
//             <h2 className="text-2xl font-bold mb-2">{product.alt}</h2>
//             <p className="text-gray-700">
//               {product.description}{' '}
//               <a
//                 href={product.pdf}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:text-blue-800"
//               >
//                 Want to know about {product.alt}?
//               </a>
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


// import Image from 'next/image';
// import { useEffect } from 'react';

// const products = [
//   {
//     src: '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-.png',
//     alt: 'Engine Telegraph System',
//     description: 'Engine Telegraph System Model ET 44 - 004 (Master). Essential for marine communication.',
//     pdf: '/products_info/Torsionmeter_catalog.pdf', // Make sure the file name matches exactly
//   },
//   {
//     src: '/products/TORSIONMETER.png',
//     alt: 'Torsionmeter',
//     description: 'Torsionmeter TD 56. Used to measure torque and speed in marine applications.',
//     pdf: '/products_info/Torsionmeter_catalog.pdf', // Make sure the file name matches exactly
//   },
//   // Add more products as needed
// ];

// export default function ProductList() {
//   useEffect(() => {
//     const handleInitialAnimation = () => {
//       const elements = document.querySelectorAll('.product-card');
//       elements.forEach((el) => {
//         const rect = el.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom >= 0) {
//           el.classList.add('animate-slide-in');
//           el.style.opacity = 1; // Ensure opacity is set to 1 on initial render
//         }
//       });
//     };

//     handleInitialAnimation(); // Trigger the initial animation immediately on component mount

//     const handleScrollAnimation = () => {
//       const elements = document.querySelectorAll('.product-card');
//       elements.forEach((el) => {
//         const rect = el.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom >= 0) {
//           el.classList.add('animate-slide-in');
//         } else {
//           el.classList.remove('animate-slide-in');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScrollAnimation);

//     return () => {
//       window.removeEventListener('scroll', handleScrollAnimation);
//     };
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto py-8 space-y-8">
//       {products.map((product, index) => (
//         <div
//           key={index}
//           className="product-card flex flex-col lg:flex-row items-center lg:items-start p-6 bg-white shadow-lg rounded-lg space-y-4 lg:space-y-0 lg:space-x-8 opacity-0 transition-opacity duration-700"
//           style={{ opacity: 0 }} // Ensure the default opacity is set to 0
//         >
//           <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
//             <Image
//               src={product.src}
//               alt={product.alt}
//               width={300}
//               height={300}
//               objectFit="contain"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="w-full lg:w-2/3 text-center lg:text-left">
//             <h2 className="text-2xl font-bold mb-2">{product.alt}</h2>
//             <p className="text-gray-700">
//               {product.description}{' '}
//               <a
//                 href={product.pdf}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:text-blue-800"
//               >
//                 Want to know about {product.alt}?
//               </a>
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// const products = [
//   {
//     images: [
//       '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-.png',
//       '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-02.png',
//     ],
//     alt: 'Engine Telegraph System',
//     description: 'Engine Telegraph System Model ET 44 - 004 (Master). Essential for marine communication.',
//     pdf: '/products_info/Torsionmeter_catalog.pdf',
//   },
//   {
//     images: [
//       '/products/TORSIONMETER.png',
//       //add more images of same product as needed
//     ],
//     alt: 'Torsionmeter',
//     description: 'Torsionmeter TD 56. Used to measure torque and speed in marine applications.',
//     pdf: '/products_info/Torsionmeter_catalog.pdf',
//   },
//   // Add more products as needed
// ];

// export default function ProductList() {
//   const [currentIndexes, setCurrentIndexes] = useState(
//     Array(products.length).fill(0)
//   );

//   useEffect(() => {
//     const handleInitialAnimation = () => {
//       const elements = document.querySelectorAll('.product-card');
//       elements.forEach((el) => {
//         const rect = el.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom >= 0) {
//           el.classList.add('animate-slide-in');
//           el.style.opacity = 1; // Ensure opacity is set to 1 on initial render
//         }
//       });
//     };

//     handleInitialAnimation();

//     const handleScrollAnimation = () => {
//       const elements = document.querySelectorAll('.product-card');
//       elements.forEach((el) => {
//         const rect = el.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom >= 0) {
//           el.classList.add('animate-slide-in');
//         } else {
//           el.classList.remove('animate-slide-in');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScrollAnimation);

//     const imageIntervals = products.map((_, i) =>
//       setInterval(() => {
//         setCurrentIndexes((prevIndexes) => {
//           const newIndexes = [...prevIndexes];
//           newIndexes[i] = (newIndexes[i] + 1) % products[i].images.length;
//           return newIndexes;
//         });
//       }, 2000) // Change image every 3 seconds
//     );

//     return () => {
//       window.removeEventListener('scroll', handleScrollAnimation);
//       imageIntervals.forEach(clearInterval);
//     };
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto py-8 space-y-8 z-2">
//       {products.map((product, index) => (
//         <div
//           key={index}
//           className="product-card flex flex-col lg:flex-row items-center lg:items-start p-6 bg-white shadow-lg rounded-lg space-y-4 lg:space-y-0 lg:space-x-8 opacity-0 transition-opacity duration-700"
//           style={{ opacity: 0 }}
//         >
//           <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
//             <div
//               className="relative"
//               style={{ width: '300px', height: '300px' }}
//             >
//               <Image
//                 src={product.images[currentIndexes[index]]}
//                 alt={product.alt}
//                 layout="fill"
//                 objectFit="contain"
//                 className="rounded-lg transition-transform duration-700"
//               />
//             </div>
//           </div>
//           <div className="w-full lg:w-2/3 text-center lg:text-left">
//             <h2 className="text-2xl font-bold mb-2">{product.alt}</h2>
//             <p className="text-gray-700">
//               {product.description}{' '}
//               <a
//                 href={product.pdf}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:text-blue-800"
//               >
//                 Want to know about {product.alt}?
//               </a>
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import Image from 'next/image';
import { useEffect, useState } from 'react';

const products = [
  {
    images: [
      '/products/TORSIONMETER.png',
      '/products/TORSION_METER_INSIDE.png',
      '/products/TORSIONMETER--BAG.png'
      //add more images of same product as needed
    ],
    alt: 'Torsionmeter',
    description: 'Torsionmeter TD 56. Used to measure torque and speed in marine applications.',
    pdf: '/products_info/Torsionmeter_catalog.pdf',
  },
  {
    images: [
      '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-.png',
      '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-02.png',
    ],
    alt: 'Engine Telegraph System',
    description: 'Engine Telegraph System Model ET 44 - 004 (Master). Essential for marine communication.',
    pdf: '/products_info/Torsionmeter_catalog.pdf',
  },
  {
    images: [
      '/products/Propeller_Order.jpg',
      //add more images of same product as needed
    ],
    alt: 'Converter',
    description: 'Torsionmeter TD 56. Used to measure torque and speed in marine applications.',
    pdf: '/products_info/Torsionmeter_catalog.pdf',
  }
  // Add more products as needed
];

export default function ProductList() {
  const [currentIndexes, setCurrentIndexes] = useState(
    Array(products.length).fill(0)
  );

  useEffect(() => {
    const handleInitialAnimation = () => {
      const elements = document.querySelectorAll('.product-card');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add('animate-slide-in');
          el.style.opacity = 1; // Ensure opacity is set to 1 on initial render
        }
      });
    };

    handleInitialAnimation();

    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.product-card');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add('animate-slide-in');
        } else {
          el.classList.remove('animate-slide-in');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    const imageIntervals = products.map((_, i) =>
      setInterval(() => {
        setCurrentIndexes((prevIndexes) => {
          const newIndexes = [...prevIndexes];
          newIndexes[i] = (newIndexes[i] + 1) % products[i].images.length;
          return newIndexes;
        });
      }, 2000) // Change image every 2 seconds
    );

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
      imageIntervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8 z-2">
      {products.map((product, index) => (
        <div
          key={index}
          className={`product-card flex flex-col p-6 bg-white shadow-lg rounded-lg space-y-4 lg:space-y-0 lg:space-x-8 opacity-0 transition-opacity duration-700 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
          style={{ opacity: 0 }}
        >
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div
              className="relative"
              style={{ width: '300px', height: '300px' }}
            >
              <Image
                src={product.images[currentIndexes[index]]}
                alt={product.alt}
                layout="fill"
                objectFit="contain"
                className="rounded-lg transition-transform duration-700"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-2">{product.alt}</h2>
            <p className="text-gray-700">
              {product.description}{' '}
              <a
                href={product.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Want to know about {product.alt}?
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
