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
//     alt: 'Engine Order Telegraph System',
//     description: '',
//     pdf: '/products_info/Torsionmeter_catalog.pdf',
//   },
//   {
//     images: [
//       '/products/Propeller_Order.jpg',
//       //add more images of same product as needed
//     ],
//     alt: 'Propeller Order Telegraph System',
//     description: '',
//     pdf: '/products_info/Torsionmeter_catalog.pdf',
//   },
//   {
//     images: [
//       '/products/lora.png',
//       //add more images of same product as needed
//     ],
//     alt: 'LoRa Communication system',
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
//           className={`product-card flex flex-col lg:flex-row items-center justify-between p-6 bg-white shadow-lg rounded-lg space-y-4 lg:space-y-0 opacity-0 transition-opacity duration-700 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
//           style={{ opacity: 0 }}
//         >
//           <div className="relative" style={{ width: '300px', height: '300px' }}>
//             <Image
//               src={product.images[currentIndexes[index]]}
//               alt={product.alt}
//               layout="fill"
//               objectFit="contain"
//               className="rounded-lg transition-transform duration-700"
//             />
//           </div>
//           <div className="w-full text-center lg:text-center lg:w-1/2">
//             <h2 className="text-2xl font-bold">{product.alt}</h2>
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
      '/products/optical_torsion.png',
      //add more images of same product as needed
    ],
    alt: 'Optical Torsionmeter',
    description: '',
    pdf: '/products_info/Torsionmeter_catalog.pdf',
  },
  {
    images: [
      '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-.png',
      '/products/ENGING-TELEGRAPH-SYSTEM-MASTER-02.png',
    ],
    alt: 'Engine Order Telegraph System',
    description: '',
    pdf: '/products_info/Torsionmeter_catalog.pdf',
  },
  {
    images: [
      '/products/Propeller_Order.jpg',
      //add more images of same product as needed
    ],
    alt: 'Propeller Order Telegraph System',
    description: '',
    pdf: '/products_info/Torsionmeter_catalog.pdf',
  },
  {
    images: [
      '/products/lora.png',
      //add more images of same product as needed
    ],
    alt: 'LoRa Communication system',
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
    <div className="max-w-4xl mx-auto py-8 space-y-8 z-2 relative">
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

      {/* Fixed "Make in India" Image at the bottom left */}
      <div className="fixed bottom-0 left-0 p-4">
        <Image
          src="/mii_img.png" // Replace with the correct path
          alt="Make in India"
          width={150} // Adjust width as needed
          height={150} // Adjust height as needed
        />
      </div>
    </div>
  );
}
