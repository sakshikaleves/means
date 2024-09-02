// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// const products = [
//   {
//     images: [
//       '/products/TORSIONMETER.png',
//       '/products/TORSION_METER_INSIDE.png',
//       '/products/TORSIONMETER--BAG.png'
//       //add more images of same product as needed
//     ],
//     alt: 'Torsionmeter',
//     description: '',
//     pdf: '/products_info/Torsionmeter_catalog.pdf',
//   },
//   {
//     images: [
//       '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-.png',
//       '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-02.png',
//     ],
//     alt: 'Engine Telegraph System',
//     description: '',
//     pdf: '/products_info/Torsionmeter_catalog.pdf',
//   },
//   {
//     images: [
//       '/products/Propeller_Order.jpg',
//       //add more images of same product as needed
//     ],
//     alt: 'Converter',
//     description: '',
//     pdf: '/products_info/Torsionmeter_catalog.pdf',
//   }
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
//       }, 2000) // Change image every 2 seconds
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
//           className={`product-card flex flex-col p-6 bg-white shadow-lg rounded-lg space-y-4 lg:space-y-0 lg:space-x-8 opacity-0 transition-opacity duration-700 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
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
    description: '',
    pdf: '/products_info/Torsionmeter_catalog.pdf',
  },
  {
    images: [
      '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-.png',
      '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-02.png',
    ],
    alt: 'Engine Telegraph System',
    description: '',
    pdf: '/products_info/Torsionmeter_catalog.pdf',
  },
  {
    images: [
      '/products/Propeller_Order.jpg',
      //add more images of same product as needed
    ],
    alt: 'Converter',
    description: '',
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
          className={`product-card flex flex-col lg:flex-row items-center justify-between p-6 bg-white shadow-lg rounded-lg space-y-4 lg:space-y-0 opacity-0 transition-opacity duration-700 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
          style={{ opacity: 0 }}
        >
          <div className="relative" style={{ width: '300px', height: '300px' }}>
            <Image
              src={product.images[currentIndexes[index]]}
              alt={product.alt}
              layout="fill"
              objectFit="contain"
              className="rounded-lg transition-transform duration-700"
            />
          </div>
          <div className="w-full text-center lg:text-center lg:w-1/2">
            <h2 className="text-2xl font-bold">{product.alt}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
