import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function AboutUs() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about-us-section');
      const rect = aboutSection.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isVisible) {
        setInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      title: "Founder Director",
      text: "Mr. P.B. Shukla, the visionary Founder Director of MEANS, has led the company from its inception in 1982. Under his leadership, MEANS has become a trusted name in the maritime sector, known for its commitment to delivering high-quality technical systems and solutions to the Indian Defense and Civil Maritime Industries. His dedication and expertise have been instrumental in the company's growth and success.",
      image: "/founder_director.png", // Replace with actual image path
      alt: "Founder Director P.B. Shukla",
      extraText: "M. Sc. (Physics), L.L.B"
    },
    {
      title: "About Our Company",
      text: (
        <>
          <p className="text-lg text-gray-700">
            Marine Electronics And Navigation Systems Private Limited – MEANS – is a Private limited company established in 1982 to provide technical systems and solutions to Indian Defense and Civil Maritime Industries in the fields of Electronics, Automation, Control Instrumentation, and Communications. With a legacy of expertise and innovation, MEANS stands as a trusted name in the maritime sector, offering a range of specialized services and products tailored to the unique needs of its clients.
          </p>
          <p className="text-lg text-gray-700">
            Over the years, MEANS has grown to become a leading provider of marine electronic systems, renowned for its commitment to quality and customer satisfaction. Our team of skilled professionals is dedicated to delivering reliable solutions that enhance the safety, efficiency, and performance of marine operations.
          </p>
          <p className="text-lg text-gray-700">
            We continue to expand our services and product offerings, keeping pace with the latest technological advancements in the maritime industry, ensuring our clients always receive the best-in-class solutions.
          </p>
        </>
      ),
      image: "/about_us_image.png", // Replace with actual image path
      alt: "About Us Image"
    },
    {
      title: "Our Values",
      text: (
        <>
          <p className="text-lg text-gray-700 py-1">
            <strong>Professionalism:</strong> MEANS believes in Human Resource as its main asset. We have always sought the best people for the job and given them the freedom and the opportunity to grow. We support innovation for meeting future demands of our valued customers.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Customer Focus:</strong> We exist and prosper only because of the customers. We respond to the changing needs and expectations of our customers speedily, courteously, and effectively.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Quality Focus:</strong> Quality is the key to delivering value for money and time to our customers. We make quality a driving force in our work, in our products, and in our interactions with others. We do it “First Time Right; Every Time,” adhering to the highest safety standards.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Ethics:</strong> We conduct our business with faith in integrity and the highest ethical standards.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Corporate Social Responsibility:</strong> We achieve our business goals by maintaining the decorum of law. We adhere to ethical and international standards. We ensure the safety of people and the protection of the environment.
          </p>
        </>
      ),
      image: "/values_img.png", // Replace with actual image path
      alt: "Our Values"
    }
  ];

  return (
    <section className={`about-us-section py-16 px-10 bg-white ${inView ? 'animate-slide-in' : ''}`}>
      {sections.map((section, index) => (
        <div 
          key={index}
          className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16`} // Changed items-center to items-start
        >
          {/* Image Section */}
          {index % 2 === 0 ? (
            <>
              <div className="order-last lg:order-first">
                <div className="image-section mx-auto flex-shrink-0">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    width={450}
                    height={500}
                    className="rounded-lg shadow-lg"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="text-section space-y-6 mb-20 lg:mb-0">
                <h2 className="text-4xl font-bold">{section.title}</h2>
                {section.extraText && (
                  <p className="text-lg text-gray-700">
                    {section.extraText}
                  </p>
                )}
                <div className="text-lg text-gray-700">
                  {section.text}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Text Section */}
              <div className="text-section space-y-6 mb-20 lg:mb-0">
                <h2 className="text-4xl font-bold">{section.title}</h2>
                {section.extraText && (
                  <p className="text-lg text-gray-700">
                    {section.extraText}
                  </p>
                )}
                <div className="text-lg text-gray-700">
                  {section.text}
                </div>
              </div>

              <div className="image-section mx-auto flex-shrink-0">
                <Image
                  src={section.image}
                  alt={section.alt}
                  width={450}
                  height={500}
                  className="rounded-lg shadow-lg"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </>
          )}
        </div>
      ))}

      {/* Stats Section */}
    </section>
  );
}
