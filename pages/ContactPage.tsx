import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '../components/icons/Icons';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validate = () => {
    let tempErrors = { name: '', email: '', message: '' };
    let isValid = true;
    if (!formData.name) {
      tempErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid.';
      isValid = false;
    }
    if (!formData.message) {
      tempErrors.message = 'Message is required.';
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission logic here
      console.log('Form submitted:', formData);
      alert('Thank you for your message!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-pinterest-red tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-800 sm:text-4xl">We'd Love to Hear From You</p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Got a question? Want to join a course? Drop us a line or visit us. We're always happy to help you take the next step in your career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.name ? 'border-red-500' : 'border-slate-300'} rounded-md shadow-sm focus:outline-none focus:ring-pinterest-red focus:border-pinterest-red`} />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-md shadow-sm focus:outline-none focus:ring-pinterest-red focus:border-pinterest-red`} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number (Optional)</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-pinterest-red focus:border-pinterest-red" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.message ? 'border-red-500' : 'border-slate-300'} rounded-md shadow-sm focus:outline-none focus:ring-pinterest-red focus:border-pinterest-red`}></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <div>
                <button type="submit" className="w-full bg-pinterest-red text-white font-bold py-3 px-6 rounded-lg hover:bg-pinterest-red-hover transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
            <div className="space-y-6 text-lg text-slate-600">
              <div className="flex items-start">
                <MapPinIcon className="w-7 h-7 text-pinterest-red mr-4 mt-1 flex-shrink-0" />
                <span>S.N. Singh Complex, Nawada Road, Hisua, Nawada, Bihar - 805103</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-7 h-7 text-pinterest-red mr-4" />
                <div>
                  <a href="tel:9199244322" className="hover:text-pinterest-red">9199244322</a>, <a href="tel:7667822389" className="hover:text-pinterest-red">7667822389</a>
                </div>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-7 h-7 text-pinterest-red mr-4" />
                <a href="mailto:cybotechcampus3@gmail.com" className="hover:text-pinterest-red break-all">cybotechcampus3@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;