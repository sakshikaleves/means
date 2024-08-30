import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Services() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const serviceSection = document.querySelector('.services-section');
      const rect = serviceSection.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isVisible) {
        setInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Marine Electronics and Navigation Systems",
      description: "Design and development of automation and control systems, system support and maintenance for Indian Navy, Coast Guard, and global marine engine suppliers.",
      image: "/Services/survey_service.png", // Replace with an appropriate image path
      alt: "Marine Electronics and Navigation Systems",
    },
    {
      title: "Dredging and Marine Infrastructure",
      description: "Specialized in marine and land infrastructure development, including dredging, harbor development, and offshore pipe laying.",
      image: "/dredging_icon.png", // Replace with an appropriate image path
      alt: "Dredging and Marine Infrastructure",
    },
    {
      title: "Surveying Services",
      description: "Offering hydrographic, land, oceanographic, and geotechnical/geophysical surveys, along with dredging survey services.",
      image: "/surveying_icon.png", // Replace with an appropriate image path
      alt: "Surveying Services",
    },
    {
      title: "Naval Aviation Services",
      description: "Systems and support services for naval aviation, focusing on airfield equipment and aircraft systems/components.",
      image: "/naval_aviation_icon.png", // Replace with an appropriate image path
      alt: "Naval Aviation Services",
    },
    {
      title: "Manufacturing and Product Supply",
      description: "Manufacturing specialized maritime equipment, providing products tailored to meet the unique needs of the maritime industry.",
      image: "/manufacturing_icon.png", // Replace with an appropriate image path
      alt: "Manufacturing and Product Supply",
    },
  ];

  return (
    <section className="services-section py-16 px-10 bg-white-100">
      <div className={`container mx-auto ${inView ? 'animate-slide-in' : ''}`}>
        <h2 className="text-4xl font-bold text-center mb-12">Infrastructure & Services</h2>

        {/* infra card */}
        <div
          className="service-item container mx-auto flex flex-col lg:flex-row gap-8 items-start mb-16"
          style={{ minHeight: '300px' }} // Ensure consistent card height
        >
          <div className="image-section flex-shrink-0">
            <Image
              src="/hq.png" // Replace with an appropriate image path
              alt="Marine Systems"
              width={450}
              height={300} // Consistent image height
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="text-section flex-grow">
            <p className="text-lg text-gray-700">
              <strong>Headquartered at Mumbai</strong> amidst the Hub of Maritime Activity, with Branches all along the Indian Coastline and at UAE ensuring <strong>Prompt Response</strong>.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              MEANS has its head office in Navi Mumbai, strategically located to take advantage of SEZs for speedy and cost-effective mobilization of spares, systems, and ship-borne machineries. The office is spread over an area of about 8000 sq.ft., with an additional 1000 sq.ft. as storage space. The Service Centre and Bonded Warehouse are situated in South Mumbai, close to where Indian Naval and Coast Guard ships are based, while the manufacturing facilities are located in North Mumbai.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              MEANS also has branch offices along the Eastern and Western seaboard of the Indian sub-continent, as well as in Sharjah, UAE. The branch office at Hamriya Free Zone in Sharjah acts as an international nodal centre, facilitating the movement of materials expeditiously from other countries to India.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              MEANS is a Directorate General Shipping recognized Ship Repair Unit (SRU), allowing customers to avail duty-free reduced cost solutions. The Customs Bonded Store helps stock critical spares for ready availability, ensuring timely service.
            </p>
          </div>
        </div>

        {/* Title for Services */}
        <h3 className="text-3xl font-semibold text-center mb-8">Our Services</h3>

        {/* Services Cards */}
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-item container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-15 ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
            style={{ minHeight: '150px' }} // Consistent card height
          >
            <div className="text-section flex-grow space-y-1 text-center lg:text-left">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-lg text-gray-700">
                {service.description}
              </p>
            </div>
            <div className="image-section flex-shrink-0 flex justify-center lg:justify-end">
              <Image
                src={service.image}
                alt={service.alt}
                width={100}
                height={100}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        ))}

        {/* Partners Section */}
        <div className="partners-section text-center py-15 mt-20">
          <h3 className="text-3xl font-semibold mb-4">Our Global Partners</h3>
          <p className="text-lg text-gray-700 mb-8">
            We collaborate with the best in the industry to bring state-of-the-art solutions to our customers.
          </p>
          <div className="flex justify-center space-x-8">
            <Image src="/partners/sirehna.png" alt="Partner 1" width={90} height={90} />
            <Image src="/partners/sirehna.png" alt="Partner 2" width={100} height={60} />
            {/* Add more partners as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}
