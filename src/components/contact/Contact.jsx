import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { IoSendSharp } from "react-icons/io5";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Optionally reset form
        // setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        { icon: <FaPhoneAlt className="w-5 h-5 text-white" />, text: '+92 348 3873980' },
        { icon: <FaEnvelope className="w-5 h-5 text-white" />, text: 'info@codesthinker.com' },
        { icon: <FaMapMarkerAlt className="w-5 h-5 text-white" />, text: 'Bahawalpur, Pakistan' },
    ];

    const socialLinks = [
        { icon: <FaTwitter />, href: '/#' },
        { icon: <FaFacebookF />, href: '/#' },
        { icon: <FaYoutube />, href: '/#' },
        { icon: <FaLinkedinIn />, href: '/#' },
    ];

    return (
        <div className="bg-gradient-to-b from-[#050B2C] to-[#2A5BCF] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-7xl font-bold text-gray-200 mb-4">Get In Touch</h1>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:mt-20">
                    <div className="space-y-8">
                        <h1 className="text-4xl text-white mb-8 font-bold">
                            Ready To Turn Your Vision Into Reality?
                        </h1>
                        <p className="text-gray-100 font-semibold text-lg">
                            Want to blast your business off like a rocket? Tojo Global's got a secret weapon for you:
                            an amazing custom Marketing, Management, Design, Development & Crypto listing plan which
                            will turn heads and grow your business faster than ever.
                        </p>

                        {contactInfo.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-4">
                                <div
                                    className="p-3 bg-gradient-to-br from-[#24B6FB] to-[#8C21DD] transform transition duration-300 hover:scale-105"
                                    style={{ clipPath: "polygon(11% 28%, 100% 5%, 89% 91%, 0% 100%)" }}
                                >
                                    {item.icon}
                                </div>
                                <span className="text-white">{item.text}</span>
                            </div>
                        ))}

                        <div className="flex gap-4 mt-6">
                            {socialLinks.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#c508ff] to-[#18c9ff] p-[2px] transition-transform duration-300 hover:scale-110"
                                >
                                    <div className="w-full h-full flex items-center justify-center bg-[#060145] rounded-full group-hover:bg-white transition-colors duration-300">
                                        <div className="text-white group-hover:text-[#060145] transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="bg-[#204C9E] p-6 rounded-4xl shadow-lg">
                        <h2 className="text-2xl text-center font-bold text-white mb-6">Book a Free Consultation</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-white mb-2" htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div>
                                <label className="block text-white mb-2" htmlFor="email">Work Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div>
                                <label className="block text-white mb-2" htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div>
                                <label className="block text-white mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="px-12 py-3 rounded-full bg-[linear-gradient(to_right,#18c8ff,#c608ff,#18c8ff)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700 flex items-center gap-2 cursor-pointer font-medium text-white"
                            >
                                SUBMIT <IoSendSharp className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
