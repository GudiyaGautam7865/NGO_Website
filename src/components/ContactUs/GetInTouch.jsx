import React from 'react';
import { FaEnvelope, FaWhatsapp, FaSkype, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export default function GetInTouch() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="mt-20  py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="md:col-span-2 bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-2">
              <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="col-span-1 p-3 border border-gray-300 rounded" />
              <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="col-span-1 p-3 border border-gray-300 rounded" />
              <input type="email" name="email" placeholder="Email" onChange={handleChange} className="col-span-1 p-3 border border-gray-300 rounded" />
              <input type="tel" name="phone" placeholder="Phone/Skype" onChange={handleChange} className="col-span-1 p-3 border border-gray-300 rounded" />
              <textarea name="message" placeholder="About Your Project" onChange={handleChange} className="col-span-2 p-3 border border-gray-300 rounded"></textarea>
              <button type="submit" className="col-span-2 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-900">Submit</button>
            </form>
          </div>

          {/* Contact Section */}
          <div className="bg-blue-900 text-white p-8 rounded-lg relative">
            <h5 className="text-xl font-semibold mb-6">Say Hi!</h5>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl" />
                <a href="mailto:info@stackfindover.com" className="hover:text-blue-300">info@stackfindover.com</a>
              </li>
              <li className="flex items-center space-x-4">
                <FaWhatsapp className="text-2xl" />
                <a href="tel:+919602381997" className="hover:text-blue-300">+91 9602381997</a>
              </li>
              <li className="flex items-center space-x-4">
                <FaSkype className="text-2xl" />
                <a href="#" className="hover:text-blue-300">Stackfindover</a>
              </li>
            </ul>
            <div className="absolute bottom-6 flex space-x-4">
              <a href="#" className="text-white text-2xl hover:text-blue-300"><FaFacebook /></a>
              <a href="#" className="text-white text-2xl hover:text-blue-300"><FaInstagram /></a>
              <a href="#" className="text-white text-2xl hover:text-blue-300"><FaTwitter /></a>
              <a href="#" className="text-white text-2xl hover:text-blue-300"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
