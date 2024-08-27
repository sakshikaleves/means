// import { useState } from 'react';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
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
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         setStatus('Failed to send message. Please try again.');
//       }
//     } catch (error) {
//       setStatus('Failed to send message. Please try again.');
//     }
//   };

//   return (
//     <section id="contact" className="py-16 px-10 bg-white text-center">
//       <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label className="block text-left font-semibold text-gray-700 mb-2">Name</label>
//           <input
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-left font-semibold text-gray-700 mb-2">Email</label>
//           <input
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-left font-semibold text-gray-700 mb-2">Message</label>
//           <textarea
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Submit</button>
//       </form>
//       {status && <p className="mt-4 text-lg text-gray-700">{status}</p>}
//     </section>
//   );
// }


import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Google Map */}
      <div className="mb-8">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.837389762781!2d73.01958737542074!3d19.022189382105797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c18856fd2637%3A0x2c5a5e1f9b4621d5!2sD205%2C%20Tower%207%2C%202nd%20Floor%2C%20Cbd%20Belapur%20Railway%20Station%2C%20Cbd%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!5e0!3m2!1sen!2sin!4v1620727870732!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Company Location"
        ></iframe>

      </div>

      {/* Information and Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold">Inquiries</h3>
            <p>For any inquiries, questions or commendations, please call: 123-456-7890 or fill out the following form</p>
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
            >
              Submit
            </button>
            {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
          </form>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold">Head Office</h3>
            <p>D205 Tower 7 2nd Floor Cbd Belapur Railway Station,<br /> Cbd Belapur, Navi Mumbai - 400614</p> <br/>
            <p>info@yourcompany.com<br />Tel: 123-456-7890<br />Fax: 123-456-7890</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Employment</h3>
            <p>To apply for a job with [Your Company Name], please send a cover letter together with your C.V. to: info@yourcompany.com</p>
          </div>

        </div>
      </div>
    </div>
  );
}
