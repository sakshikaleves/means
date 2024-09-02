import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Importing the specific icon
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
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="relative w-full h-[250px] overflow-hidden mt-0.1 z-20"> 
        <Image src={WaterImage} alt="Curved Water Image" layout="fill" objectFit="cover" objectPosition="top" />
      </div>

      {/* Navigation Tabs */}
      <nav className="flex justify-center text-gray-700 relative sticky top-0 z-50">
        <div className="wave-bg absolute bottom-0 w-full h-16 bg-blue-200"></div>
        
        <div className="relative w-full h-16 hidden lg:flex">
          <div className="flex justify-center w-full gap-12 pr-10 pl-4 text-black text-lg">
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
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-center w-full absolute inset-x-0 bottom-[-50px]">
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="text-black text-3xl" />
          </button>
        </div>

        {/* Sidebar Menu for Mobile */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
            <div className="fixed left-0 top-0 w-64 h-full bg-white shadow-lg z-50">
              <button
                className="p-4 text-right w-full"
                onClick={() => setMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faBars} className="text-black text-2xl" />
              </button>
              <div className="flex flex-col items-start px-6 py-4 space-y-4">
                <button onClick={() => { setActiveSection('home'); setMenuOpen(false); }} className="menu-item">Home</button>
                <button onClick={() => { setActiveSection('about'); setMenuOpen(false); }} className="menu-item">About us</button>
                <button onClick={() => { setActiveSection('products'); setMenuOpen(false); }} className="menu-item">Products</button>
                <button onClick={() => { setActiveSection('services'); setMenuOpen(false); }} className="menu-item">Services</button>
                <button onClick={() => { setActiveSection('news'); setMenuOpen(false); }} className="menu-item">News</button>
                <button onClick={() => { setActiveSection('contact'); setMenuOpen(false); }} className="menu-item">Contact us</button>
                <button onClick={() => { setActiveSection('hsn'); setMenuOpen(false); }} className="menu-item">HSN</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Sections */}
      <section className={`py-16 px-10 ${activeSection === 'home' ? '' : 'hidden'}`}>
        <HomePage />
      </section>

      <section id="about" className={`py-16 px-10 bg-white-900 bg-opacity-75 ${activeSection === 'about' ? '' : 'hidden'}`}>
        <h1 className="text-3xl font-bold mb-6 text-black text-center">About us</h1>
        <AboutUs />
      </section>

      <section id="products" className={`py-16 px-10 z-1 ${activeSection === 'products' ? '' : 'hidden'}`}>
        <h1 className="text-3xl font-bold mb-6 text-white text-center">Our Products</h1>
        <ProductCarousel />
      </section>

      <section id="services" className={`py-16 px-10 bg-white-900 bg-opacity-75 ${activeSection === 'services' ? '' : 'hidden'}`}>
        <Services />
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
