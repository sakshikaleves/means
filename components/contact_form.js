
// import { useState } from 'react';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('Sending...');
//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       if (response.ok) {
//         setStatus('Message sent successfully!');
//         setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
//       } else {
//         setStatus('Failed to send message. Please try again.');
//       }
//     } catch (error) {
//       setStatus('Failed to send message. Please try again.');
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-10">
//       {/* Google Map */}
//       <div className="mb-8">
//         <iframe 
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.736831212393!2d73.02612607528756!3d19.022745035222973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c092b6d8ff5d%3A0x228c536dc3e38f42!2sD205%20Tower%207%202nd%20Floor%20Cbd%20Belapur%20Railway%20Station%2C%20Cbd%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!5e0!3m2!1sen!2sin!4v1693164587747!5m2!1sen!2sin" 
//           width="100%" 
//           height="350" 
//           style={{ border: 0 }} 
//           allowFullScreen="" 
//           loading="lazy" 
//           referrerPolicy="no-referrer-when-downgrade">
//         </iframe>
//       </div>

//       {/* Information and Contact Form */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//         {/* Left Column */}
//         <div>
//           <div className="mb-8">
//             <h3 className="text-xl font-bold">Inquiries</h3>
//             <p>For any inquiries, questions or commendations, please call: 123-456-7890 or fill out the following form</p>
//           </div>

//           {/* Contact Form */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email *</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Subject</label>
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                 rows="4"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
//             >
//               Submit
//             </button>
//             {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
//           </form>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-8">
//           <div>
//             <h3 className="text-xl font-bold">Head Office</h3>
//             <p>D205 Tower 7 2nd Floor Cbd Belapur Railway Station,<br /> Cbd Belapur, Navi Mumbai - 400614</p>
//             <p>info@yourcompany.com<br />Tel: 123-456-7890<br />Fax: 123-456-7890</p>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold">Employment</h3>
//             <p>To apply for a job with [Your Company Name], please send a cover letter together with your C.V. to: info@yourcompany.com</p>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold">Get a quote: 123-456-7890</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//done
// import { useState } from 'react';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });
//   const [status, setStatus] = useState('');
//   const [isLoading, setIsLoading] = useState(false); // State for loading spinner
//   const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('Sending...');
//     setIsLoading(true); // Show loading spinner

//     // Combine first name and last name into a single name field
//     const combinedFormData = {
//       name: `${formData.firstName} ${formData.lastName}`,
//       email: formData.email,
//       phone: formData.phone,
//       subject: formData.subject,
//       message: formData.message
//     };

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(combinedFormData)
//       });
//       if (response.ok) {
//         setIsLoading(false); // Hide loading spinner
//         setIsSubmitted(true); // Mark as submitted
//         setStatus('Message sent successfully!');
//         setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
//       } else {
//         setIsLoading(false); // Hide loading spinner
//         setStatus('Failed to send message. Please try again.');
//       }
//     } catch (error) {
//       setIsLoading(false); // Hide loading spinner
//       setStatus('Failed to send message. Please try again.');
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-10">
//       {/* Google Map */}
//       <div className="mb-8">
//         <iframe 
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.736831212393!2d73.02612607528756!3d19.022745035222973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c092b6d8ff5d%3A0x228c536dc3e38f42!2sD205%20Tower%207%202nd%20Floor%20Cbd%20Belapur%20Railway%20Station%2C%20Cbd%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!5e0!3m2!1sen!2sin!4v1693164587747!5m2!1sen!2sin" 
//           width="100%" 
//           height="350" 
//           style={{ border: 0 }} 
//           allowFullScreen="" 
//           loading="lazy" 
//           referrerPolicy="no-referrer-when-downgrade">
//         </iframe>
//       </div>

//           {/* Information and Contact Form */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             {/* Left Column */}
//             <div>
//               <div className="mb-8">
//                 <h3 className="text-xl font-bold">Inquiries</h3>
//                 <p>For any inquiries, questions or commendations, please call: 123-456-7890 or fill out the following form</p>
//               </div>

//               {/* Contact Form */}
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">First Name</label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Email *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Subject</label>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Message</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                     rows="4"
//                     required
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
//                   disabled={isLoading} // Disable button when loading
//                 >
//                   {isLoading ? (
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//                       ></path>
//                     </svg>
//                   ) : (
//                     'Submit'
//                   )}
//                 </button>
//                 {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
//               </form>
//             </div>

//         {/* Right Column */}
//         <div className="space-y-8">
//           <div>
//             <h3 className="text-xl font-bold">Head Office</h3>
//             <p>D205 Tower 7 2nd Floor Cbd Belapur Railway Station,<br /> Cbd Belapur, Navi Mumbai - 400614</p>
//             <p>info@yourcompany.com<br />Tel: 123-456-7890<br />Fax: 123-456-7890</p>
//           </div>

//               <div>
//                 <h3 className="text-xl font-bold">Employment</h3>
//                 <p>
//                   To apply for a job with [Your Company Name], please send a cover letter together with your C.V. to:
//                   info@yourcompany.com
//                 </p>
//               </div>

//           <div>
//             <h3 className="text-xl font-bold">Get a quote: 123-456-7890</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner
  const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission
  const [mapLoading, setMapLoading] = useState(true); // State for map loading

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setIsLoading(true); // Show loading spinner

    // Combine first name and last name into a single name field
    const combinedFormData = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(combinedFormData)
      });
      if (response.ok) {
        setIsLoading(false); // Hide loading spinner
        setIsSubmitted(true); // Mark as submitted
        setStatus('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setIsLoading(false); // Hide loading spinner
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setIsLoading(false); // Hide loading spinner
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Google Map with Loader */}
      <div className="mb-8 relative">
        {mapLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="loader"></div>
          </div>
        )}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.736831212393!2d73.02612607528756!3d19.022745035222973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c092b6d8ff5d%3A0x228c536dc3e38f42!2sD205%20Tower%207%202nd%20Floor%20Cbd%20Belapur%20Railway%20Station%2C%20Cbd%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!5e0!3m2!1sen!2sin!4v1693164587747!5m2!1sen!2sin" 
          width="100%" 
          height="350" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setMapLoading(false)} // Hide the loader when the map loads
        ></iframe>
      </div>

      {/* Information and Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold">Inquiries</h3>
            <p>For any inquiries, questions or commendations, please call: +91 22 4356 1000 or fill out the following form</p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                'Submit'
              )}
            </button>
            {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
          </form>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold">Head Office</h3>
            <p>D-205, 2nd Floor, Belapur Railway Station Complex, CBD Belapur,<br /> Navi Mumbai-400 614. India.</p>
            <br />
            <p>info@means.co.in<br />Tel: +91 22 4356 1000<br /></p>
          </div>

        </div>
      </div>
    </div>
  );
}

