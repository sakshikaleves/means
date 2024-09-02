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

// import { useState } from 'react';
// import Image from 'next/image';
// import MeansLogo from '../public/Means.png';
// import SeabirdLogo from '../public/SEA-BIRD.png';
// import InfraLogo from '../public/Means-Infra.png';
// import ContactForm from '@/components/contact_form';
// import ProductCarousel from '../components/product';  // Ensure the path and export type match

// export default function Home() {
//   const [activeSection, setActiveSection] = useState('home');

//   return (
//     <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/ocean-background.jpg)' }}>
//       {/* Header with Logos */}
//       <header className="flex justify-between items-center py-6 px-10 bg-white-800 bg-opacity-50">
//         <Image src={InfraLogo} alt="Means Infrastructure Logo" width={110} height={65} />
//         <Image src={MeansLogo} alt="Means Logo" width={120} height={65} />
//         <Image src={SeabirdLogo} alt="Seabird Surveys Logo" width={100} height={65} />
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
//   <h1 className="text-3xl font-bold mb-6 text-white text-center">About us</h1>
//   <p className="text-lg text-gray-200 max-w-4xl mx-auto">
//     Marine Electronics And Navigation Systems Private Limited – MEANS – is a Private limited company established in 1982 to provide technical systems and solutions to Indian Defense and Civil Maritime Industries in the fields of Electronics, Automation, Control Instrumentation, and Communications.
//   </p>
// </section>


//       <section id="products" className={`py-16 px-10 ${activeSection === 'products' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-white">Our Products</h1>
//         <ProductCarousel /> 
//       </section>

//       <section id="services" className={`py-16 px-10 bg-gray-900 bg-opacity-75 ${activeSection === 'services' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-white text-center">Our Services</h1>
//         <p className="text-lg text-gray-200 max-w-4xl mx-auto">
//         Marine Electronics And Navigation Systems Private Limited – MEANS – is a Private limited company established in 1982 to provide technical systems and solutions to Indian Defense and Civil Maritime Industries in the fields of Electronics, Automation, Control Instrumentation, and Communications.
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

// import { useState } from 'react';
// import Image from 'next/image';
// import MeansLogo from '../public/Means.png';
// import SeabirdLogo from '../public/SEA-BIRD.png';
// import InfraLogo from '../public/Means-Infra.png';
// import ContactForm from '@/components/contact_form';
// import ProductCarousel from '../components/product';

// export default function Home() {
//   const [activeSection, setActiveSection] = useState('home');

//   return (
//     <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/ocean-background.jpg)' }}>
//       {/* Header with Logos */}
//       <header className="flex justify-evenly items-center py-6 px-10 bg-blue-300 bg-opacity-50">
//         <Image src={InfraLogo} alt="Means Infrastructure Logo" width={110} height={65} />
//         <Image src={MeansLogo} alt="Means Logo" width={120} height={65} />
//         <Image src={SeabirdLogo} alt="Seabird Surveys Logo" width={100} height={65} />
//       </header>

//       {/* Navigation Tabs */}
//       <nav className="flex justify-center bg-blue-300 text-gray-700 bg-opacity-65 relative">
//         <div className="wave-bg absolute bottom-0 w-full h-16 bg-blue-300"></div>
//         <button
//           onClick={() => setActiveSection('home')}
//           className={`py-4 px-6 hover:bg-blue-400 transition relative z-10 ${activeSection === 'home' ? 'active-tab' : ''}`}
//         >
//           Home
//         </button>
//         <button
//           onClick={() => setActiveSection('about')}
//           className={`py-4 px-6 hover:bg-blue-400 transition relative z-10 ${activeSection === 'about' ? 'active-tab' : ''}`}
//         >
//           About us
//         </button>
//         <button
//           onClick={() => setActiveSection('products')}
//           className={`py-4 px-6 hover:bg-blue-400 transition relative z-10 ${activeSection === 'products' ? 'active-tab' : ''}`}
//         >
//           Products
//         </button>
//         <button
//           onClick={() => setActiveSection('services')}
//           className={`py-4 px-6 hover:bg-blue-400 transition relative z-10 ${activeSection === 'services' ? 'active-tab' : ''}`}
//         >
//           Services
//         </button>
//         <button
//           onClick={() => setActiveSection('contact')}
//           className={`py-4 px-6 hover:bg-blue-400 transition relative z-10 ${activeSection === 'contact' ? 'active-tab' : ''}`}
//         >
//           Contact us
//         </button>
//         <button
//           onClick={() => setActiveSection('hsn')}
//           className={`py-4 px-6 hover:bg-blue-400 transition relative z-10 ${activeSection === 'hsn' ? 'active-tab' : ''}`}
//         >
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
//         <h1 className="text-3xl font-bold mb-6 text-white text-center">About us</h1>
//         <p className="text-lg text-gray-200 max-w-4xl mx-auto">
//           Marine Electronics And Navigation Systems Private Limited – MEANS – is a Private limited company established in 1982 to provide technical systems and solutions to Indian Defense and Civil Maritime Industries in the fields of Electronics, Automation, Control Instrumentation, and Communications.
//         </p>
//       </section>

//       <section id="products" className={`py-16 px-10 ${activeSection === 'products' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-white text-center">Our Products</h1>
//         <ProductCarousel />
//       </section>

//       <section id="services" className={`py-16 px-10 bg-gray-900 bg-opacity-75 ${activeSection === 'services' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-white text-center">Our Services</h1>
//         <p className="text-lg text-gray-200 max-w-4xl mx-auto text-center">
//           Information about our services goes here.
//         </p>
//       </section>

//       <section id="news" className={`py-16 px-10 ${activeSection === 'news' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-white text-center">Latest News</h1>
//         <p className="text-lg text-gray-200 max-w-4xl mx-auto text-center">
//           The latest news about our company.
//         </p>
//       </section>

//       {/* Contact Us Section */}
//       {activeSection === 'contact' && <ContactForm />}  {/* Using the ContactForm component */}

//       <section id="hsn" className={`py-16 px-10 ${activeSection === 'hsn' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-white text-center">HSN</h1>
//         <p className="text-lg text-gray-200 max-w-4xl mx-auto text-center">
//           HSN details go here.
//         </p>
//       </section>
//     </div>
//   );
// }


// //with image working, with sticky nav wo logos
// import { useState } from 'react';
// import Image from 'next/image';
// import MeansLogo from '../public/Means.png';
// import SeabirdLogo from '../public/SEA-BIRD.png';
// import InfraLogo from '../public/Means-Infra.png';
// import WaterImage from '../public/WaterImage.png'; // This is the image with the curve effect
// import ContactForm from '@/components/contact_form';
// import ProductCarousel from '../components/product';

// export default function Home() {
//   const [activeSection, setActiveSection] = useState('home');

//   return (
//     <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/ocean-background.jpg)' }}>
//       {/* Header with Logos */}
//       <header className="flex flex-col justify-center items-center bg-white bg-opacity-50 py-4 px-10">
//         <div className="flex justify-evenly items-center w-full mb-1">
//           <Image src={InfraLogo} alt="Means Infrastructure Logo" width={90} height={55} /> {/* Reduced logo size */}
//           <Image src={MeansLogo} alt="Means Logo" width={100} height={55} /> {/* Reduced logo size */}
//           <Image src={SeabirdLogo} alt="Seabird Surveys Logo" width={80} height={55} /> {/* Reduced logo size */}
//         </div>
//       </header>

//       {/* Water Image */}
//       <div className="relative w-full h-[250px] overflow-hidden mt-1"> {/* Set height and hide overflow */}
//         <Image src={WaterImage} alt="Curved Water Image" layout="fill" objectFit="cover" objectPosition="top" />
//       </div>

//       {/* Navigation Tabs */}
//       <nav className="flex justify-center bg-blue-200 text-gray-700 relative sticky top-0 z-50">
//         <div className="wave-bg absolute bottom-0 w-full h-16 bg-white-300"></div>
//         <button
//           onClick={() => setActiveSection('home')}
//           className={`py-4 px-6  transition relative z-10 ${activeSection === 'home' ? 'active-tab' : ''}`}
//         >
//           Home
//         </button>
//         <button
//           onClick={() => setActiveSection('about')}
//           className={`py-4 px-6  transition relative z-10 ${activeSection === 'about' ? 'active-tab' : ''}`}
//         >
//           About us
//         </button>
//         <button
//           onClick={() => setActiveSection('products')}
//           className={`py-4 px-6  transition relative z-10 ${activeSection === 'products' ? 'active-tab' : ''}`}
//         >
//           Products
//         </button>
//         <button
//           onClick={() => setActiveSection('services')}
//           className={`py-4 px-6  transition relative z-10 ${activeSection === 'services' ? 'active-tab' : ''}`}
//         >
//           Services
//         </button>
//         <button
//           onClick={() => setActiveSection('news')}
//           className={`py-4 px-6  transition relative z-10 ${activeSection === 'news' ? 'active-tab' : ''}`}
//         >
//           News
//         </button>
//         <button
//           onClick={() => setActiveSection('contact')}
//           className={`py-4 px-6  transition relative z-10 ${activeSection === 'contact' ? 'active-tab' : ''}`}
//         >
//           Contact us
//         </button>
//         <button
//           onClick={() => setActiveSection('hsn')}
//           className={`py-4 px-6 transition relative z-10 ${activeSection === 'hsn' ? 'active-tab' : ''}`}
//         >
//           HSN
//         </button>
//       </nav>

//       {/* Sections */}
//       <section className={`py-16 px-10 ${activeSection === 'home' ? '' : 'hidden'}`}>
//         <h1 className="text-4xl font-bold mb-6 text-white">Welcome to Our Company</h1>
//         <p className="text-lg text-black max-w-4xl mx-auto">
//           This is the home section. Click on the tabs above to navigate to different sections.
//         </p>
//       </section>

//       <section id="about" className={`py-16 px-10 bg-white-900 bg-opacity-75 ${activeSection === 'about' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-black text-center">About us</h1>
//         <p className="text-lg text-black max-w-4xl mx-auto">
//           Marine Electronics And Navigation Systems Private Limited – MEANS – is a Private limited company established in 1982 to provide technical systems and solutions to Indian Defense and Civil Maritime Industries in the fields of Electronics, Automation, Control Instrumentation, and Communications.
//         </p>
//       </section>

//       <section id="products" className={`py-16 px-10 z-1 ${activeSection === 'products' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-white text-center">Our Products</h1>
//         <ProductCarousel />
//       </section>

//       <section id="services" className={`py-16 px-10 bg-white-900 bg-opacity-75 ${activeSection === 'services' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-black text-center">Our Services</h1>
//         <p className="text-lg text-black max-w-4xl mx-auto text-center">
//           Information about our services goes here.
//         </p>
//       </section>

//       <section id="news" className={`py-16 px-10 ${activeSection === 'news' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-white text-center">Latest News</h1>
//         <p className="text-lg text-gray-200 max-w-4xl mx-auto text-center">
//           The latest news about our company.
//         </p>
//       </section>

//       {/* Contact Us Section */}
//       {activeSection === 'contact' && <ContactForm />}  {/* Using the ContactForm component */}

//       <section id="hsn" className={`py-16 px-10 ${activeSection === 'hsn' ? '' : 'hidden'}`}>
//         <h1 className="text-3xl font-bold mb-6 text-white text-center">HSN</h1>
//         <p className="text-lg text-black max-w-4xl mx-auto text-center">
//           HSN details go here.
//         </p>
//       </section>
//     </div>
//   );
// }

//alligned image
import { useState } from 'react';
import Image from 'next/image';
import MeansLogo from '../public/Means.png';
import SeabirdLogo from '../public/SEA-BIRD.png';
import InfraLogo from '../public/Means-Infra.png';
import WaterImage from '../public/WaterImage.png'; 
import ContactForm from '@/components/contact_form';
import ProductCarousel from '../components/product';
import HomePage from '@/components/HomePage';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/ocean-background.jpg)' }}>
      {/* Header with Logos */}
      <header className="flex flex-col justify-between items-center bg-white bg-opacity-50 py-6 px-70">
        <div className="flex justify-evenly items-center w-full mb-1">
          <Image src={InfraLogo} alt="Means Infrastructure Logo" width={140} height={90} />
          <Image src={MeansLogo} alt="Means Logo" width={210} height={130} />
          <Image src={SeabirdLogo} alt="Seabird Surveys Logo" width={110} height={55} />
        </div>
      </header>

      {/* Water Image */}
      <div className="relative w-full h-[250px] overflow-hidden mt-0.1 z-50"> 
        <Image src={WaterImage} alt="Curved Water Image" layout="fill" objectFit="cover" objectPosition="top" />
      </div>

      {/* Navigation Tabs */}
      <nav className="flex justify-center text-gray-700 relative sticky top-0 z-30">
        <div className="wave-bg absolute bottom-0 w-full h-16 bg-white-300"></div>
        
        <div className="relative w-full h-16" style={{ backgroundImage: 'url(/Text_Buttion_Without.png)', backgroundSize: '100% 100%', marginLeft:"13px", marginRight:"-5px", zIndex: "30"}}>
          <div className="flex justify-center w-50 gap-12 pr-10 pl-4 text-white text-lg">
            <button
              onClick={() => setActiveSection('home')}
              className={`py-4 px-5 transition relative z-10 custom-home-button ${activeSection === 'home' ? 'active-tab' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`py-4 px-5 transition relative z-10  ${activeSection === 'about' ? 'active-tab' : ''}`}
            >
              About us
            </button>
            <button
              onClick={() => setActiveSection('products')}
              className={`py-4 px-5 transition relative z-10 pr-1 pl-2 custom-product-button ${activeSection === 'products' ? 'active-tab' : ''}`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveSection('services')}
              className={`py-4 px-6 transition relative z-10  ${activeSection === 'services' ? 'active-tab' : ''}`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveSection('news')}
              className={`py-4 px-3 transition relative z-10 ml-2 ${activeSection === 'news' ? 'active-tab' : ''}`}
            >
              News
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className={`py-4 px-6 transition relative z-10 pr-5 ${activeSection === 'contact' ? 'active-tab' : ''}`}
            >
              Contact us
            </button>
            <button
              onClick={() => setActiveSection('hsn')}
              className={`py-4 px-6 transition relative z-10 pl-3 custom-hsn-button ${activeSection === 'hsn' ? 'active-tab' : ''}`}
            >
              HSN
            </button>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section className={`py-16 px-10 ${activeSection === 'home' ? '' : 'hidden'}`}>
          <HomePage/>
      </section>

      <section id="about" className={`py-16 px-10 bg-white-900 bg-opacity-75 ${activeSection === 'about' ? '' : 'hidden'}`}>
        <h1 className="text-3xl font-bold mb-6 text-black text-center">About us</h1>
        <AboutUs/>
      </section>

      <section id="products" className={`py-16 px-10 z-1 ${activeSection === 'products' ? '' : 'hidden'}`}>
        <h1 className="text-3xl font-bold mb-6 text-white text-center">Our Products</h1>
        <ProductCarousel />
      </section>

      <section id="services" className={`py-16 px-10 bg-white-900 bg-opacity-75 ${activeSection === 'services' ? '' : 'hidden'}`}>
        <Services/>
      </section>

      <section id="news" className={`py-16 px-10 ${activeSection === 'news' ? '' : 'hidden'}`}>
        <p className="text-lg text-black-200 max-w-4xl mx-auto text-center">
        Stay tuned for the latest updates and news from Marine Electronics And Navigation Systems Private Limited (MEANS). We are committed to keeping you informed about our most recent developments, achievements, and industry insights. From exciting new projects and partnerships to innovations in marine technology, our News page will soon be your go-to source for all things MEANS. Please check back soon for more updates!
        </p>
      </section>

      {/* Contact Us Section */}
      {activeSection === 'contact' && <ContactForm />}  {/* Using the ContactForm component */}

      <section id="hsn" className={`py-16 px-10 ${activeSection === 'hsn' ? '' : 'hidden'}`}>
        <h1 className="text-3xl font-bold mb-6 text-white text-center">HSN</h1>
        <p className="text-lg text-gray-200 max-w-4xl mx-auto text-center">
          HSN details go here.
        </p>
      </section>
    </div>
  );
}
