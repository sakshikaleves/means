// import { useState } from 'react';
// import Image from 'next/image';
// import MeansLogo from '../public/Means.png';
// import SeabirdLogo from '../public/SEA-BIRD.png';
// import InfraLogo from '../public/Means-Infra.png';
// import ContactForm from '@/components/contact_form';
// import ProductCarousel from '@/components/product'; // Updated ProductCarousel component

// export default function Home() {
//   const [activeSection, setActiveSection] = useState('home');

//   return (
//     <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/ocean-background.jpg)' }}>
//       {/* Header with Logos */}
//       <header className="flex justify-between items-center py-6 px-10 bg-gray-900 bg-opacity-50">
//         <Image src={InfraLogo} alt="Means Infrastructure Logo" width={120} height={65} />
//         <Image src={MeansLogo} alt="Means Logo" width={140} height={75} />
//         <Image src={SeabirdLogo} alt="Seabird Surveys Logo" width={120} height={65} />
//       </header>

//       {/* Navigation Tabs */}
//       <nav className="flex justify-center bg-blue-500 text-white bg-opacity-75">
//         <button onClick={() => setActiveSection('home')} className={`py-4 px-6 hover:bg-blue-600 transition ${activeSection === 'home' ? 'bg-blue-600' : ''}`}>
//           Home
//         </button>
//         <button onClick={() => setActiveSection('about')} className={`py-4 px-6 hover:bg-blue-600 transition ${activeSection === 'about' ? 'bg-blue-600' : ''}`}>
//           About us
//         </button>
//         <button onClick={() => setActiveSection('products')} className={`py-4 px-6 hover:bg-blue-600 transition ${activeSection === 'products' ? 'bg-blue-600' : ''}`}>
//           Products
//         </button>
//         <button onClick={() => setActiveSection('services')} className={`py-4 px-6 hover:bg-blue-600 transition ${activeSection === 'services' ? 'bg-blue-600' : ''}`}>
//           Services
//         </button>
//         <button onClick={() => setActiveSection('news')} className={`py-4 px-6 hover:bg-blue-600 transition ${activeSection === 'news' ? 'bg-blue-600' : ''}`}>
//           News
//         </button>
//         <button onClick={() => setActiveSection('contact')} className={`py-4 px-6 hover:bg-blue-600 transition ${activeSection === 'contact' ? 'bg-blue-600' : ''}`}>
//           Contact us
//         </button>
//         <button onClick={() => setActiveSection('hsn')} className={`py-4 px-6 hover:bg-blue-600 transition ${activeSection === 'hsn' ? 'bg-blue-600' : ''}`}>
//           HSN
//         </button>
//       </nav>

//       {/* Sections */}
//       <section className={`py-16 px-10 ${activeSection === 'home' ? '' : 'hidden'}`}>
//         <h1 className="text-4xl font-bold mb-6 text-white">Welcome to Our Company</h1>
//         <p className="text-lg text-gray-200 max-w-4xl mx-auto">
//           This is the home section. Click on the tabs above to navigate to different sections.
//         </p>
//       </section>

//       <section id="about" className={`py-16 px-10 bg-gray-900 bg-opacity-75 ${activeSection === 'about' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-white">About us</h1>
//         <p className="text-lg text-gray-200 max-w-4xl mx-auto">
//           Marine Electronics And Navigation Systems Private Limited – MEANS – is a Private limited company established in 1982 to provide technical systems and solutions to Indian Defense and Civil Maritime Industries in the fields of Electronics, Automation, Control Instrumentation, and Communications.
//         </p>
//       </section>

//       <section id="products" className={`py-16 px-10 ${activeSection === 'products' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-white">Our Products</h1>
//         <ProductCarousel /> {/* Rendering the updated ProductCarousel component */}
//       </section>

//       <section id="services" className={`py-16 px-10 bg-gray-900 bg-opacity-75 ${activeSection === 'services' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-white">Our Services</h1>
//         <p className="text-lg text-gray-200 max-w-4xl mx-auto">
//           Information about our services goes here.
//         </p>
//       </section>

//       <section id="news" className={`py-16 px-10 ${activeSection === 'news' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-white">Latest News</h1>
//         <p className="text-lg text-gray-200 max-w-4xl mx-auto">
//           The latest news about our company.
//         </p>
//       </section>

//       {/* Contact Us Section */}
//       {activeSection === 'contact' && <ContactForm />}  {/* Using the ContactForm component */}

//       <section id="hsn" className={`py-16 px-10 ${activeSection === 'hsn' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-white">HSN</h1>
//         <p className="text-lg text-gray-200 max-w-4xl mx-auto">
//           HSN details go here.
//         </p>
//       </section>
//     </div>
//   );
// }

import { useState } from 'react';
import Image from 'next/image';
import MeansLogo from '../public/Means.png';
import SeabirdLogo from '../public/SEA-BIRD.png';
import InfraLogo from '../public/Means-Infra.png';
import ContactForm from '@/components/contact_form';
import ProductCarousel from '../components/product';  // Ensure the path and export type match

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/ocean-background.jpg)' }}>
      {/* Header with Logos */}
      <header className="flex justify-between items-center py-6 px-10 bg-gray-900 bg-opacity-50">
        <Image src={InfraLogo} alt="Means Infrastructure Logo" width={150} height={75} />
        <Image src={MeansLogo} alt="Means Logo" width={150} height={75} />
        <Image src={SeabirdLogo} alt="Seabird Surveys Logo" width={150} height={75} />
      </header>

      {/* Navigation Tabs */}
      <nav className="flex justify-center bg-blue-500 text-white bg-opacity-75">
        <button onClick={() => setActiveSection('home')} className={`py-4 px-6 hover:bg-blue-600 transition ${activeSection === 'home' ? 'bg-blue-600' : ''}`}>
          Home
        </button>
        <button onClick={() => setActiveSection('about')} className={`py-4 px-6 hover:bg-blue-600 transition ${activeSection === 'about' ? 'bg-blue-600' : ''}`}>
          About us
        </button>
        <button onClick={() => setActiveSection('products')} className={`py-4 px-6 hover:bg-blue-600 transition ${activeSection === 'products' ? 'bg-blue-600' : ''}`}>
          Products
        </button>
        <button onClick={() => setActiveSection('services')} className={`py-4 px-6 hover:bg-blue-600 transition ${activeSection === 'services' ? 'bg-blue-600' : ''}`}>
          Services
        </button>
        <button onClick={() => setActiveSection('news')} className={`py-4 px-6 hover:bg-blue-600 transition ${activeSection === 'news' ? 'bg-blue-600' : ''}`}>
          News
        </button>
        <button onClick={() => setActiveSection('contact')} className={`py-4 px-6 hover:bg-blue-600 transition ${activeSection === 'contact' ? 'bg-blue-600' : ''}`}>
          Contact us
        </button>
        <button onClick={() => setActiveSection('hsn')} className={`py-4 px-6 hover:bg-blue-600 transition ${activeSection === 'hsn' ? 'bg-blue-600' : ''}`}>
          HSN
        </button>
      </nav>

      {/* Sections */}
      <section className={`py-16 px-10 ${activeSection === 'home' ? '' : 'hidden'}`}>
        <h1 className="text-4xl font-bold mb-6 text-white">Welcome to Our Company</h1>
        <p className="text-lg text-gray-200 max-w-4xl mx-auto">
          This is the home section. Click on the tabs above to navigate to different sections.
        </p>
      </section>

      <section id="about" className={`py-16 px-10 bg-gray-900 bg-opacity-75 ${activeSection === 'about' ? '' : 'hidden'}`}>
        <h1 className="text-3xl font-bold mb-6 text-white">About us</h1>
        <p className="text-lg text-gray-200 max-w-4xl mx-auto">
          Marine Electronics And Navigation Systems Private Limited – MEANS – is a Private limited company established in 1982 to provide technical systems and solutions to Indian Defense and Civil Maritime Industries in the fields of Electronics, Automation, Control Instrumentation, and Communications.
        </p>
      </section>

      <section id="products" className={`py-16 px-10 ${activeSection === 'products' ? '' : 'hidden'}`}>
        <h1 className="text-3xl font-bold mb-6 text-white">Our Products</h1>
        <ProductCarousel /> {/* Rendering the updated ProductCarousel component */}
      </section>

      <section id="services" className={`py-16 px-10 bg-gray-900 bg-opacity-75 ${activeSection === 'services' ? '' : 'hidden'}`}>
        <h1 className="text-3xl font-bold mb-6 text-white">Our Services</h1>
        <p className="text-lg text-gray-200 max-w-4xl mx-auto">
          Information about our services goes here.
        </p>
      </section>

      <section id="news" className={`py-16 px-10 ${activeSection === 'news' ? '' : 'hidden'}`}>
        <h1 className="text-3xl font-bold mb-6 text-white">Latest News</h1>
        <p className="text-lg text-gray-200 max-w-4xl mx-auto">
          The latest news about our company.
        </p>
      </section>

      {/* Contact Us Section */}
      {activeSection === 'contact' && <ContactForm />}  {/* Using the ContactForm component */}

      <section id="hsn" className={`py-16 px-10 ${activeSection === 'hsn' ? '' : 'hidden'}`}>
        <h1 className="text-3xl font-bold mb-6 text-white">HSN</h1>
        <p className="text-lg text-gray-200 max-w-4xl mx-auto">
          HSN details go here.
        </p>
      </section>
    </div>
  );
}

