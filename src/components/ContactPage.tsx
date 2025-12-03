
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  const departments = [
    { name: 'Customer Support', email: 'support@kolwenzicopper.com' },
    { name: 'Sales', email: 'sales@kolwenzicopper.com' },
    { name: 'Human Resources', email: 'hr@kolwenzicopper.com' },
    { name: 'Technical Support', email: 'tech@kolwenzicopper.com' },
    { name: 'Investor Relations', email: 'investors@kolwenzicopper.com' },
    { name: 'General Inquiries', email: 'info@kolwenzicopper.com' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Contact',
      details: [
        '+254 798 708617',
        'info@groupsocietemineire.com'
      ]
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'GOMA, DRC',
        'KOLWEZI, DRC'
      ]
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Mon - Fri: 8:00 - 17:00',
        'Sat: 9:00 - 13:00'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@groupsocietemineire.com',
        'contact@groupsocietemineire.com'
      ]
    }
  ];



  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">GROUPE DE SOCIETE DE MINEIRE (SARL)</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Contact: +254 798 708617
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <info.icon className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-slate-900 mb-4">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-slate-600 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-slate-400" size={20} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-slate-400" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-slate-400" size={20} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+243 xxx xxx xxx"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="operations">Mining Operations</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="community">Community Relations</option>
                    <option value="employment">Employment</option>
                    <option value="media">Media Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-slate-400" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Map & Office Info */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Location</h2>
            <div className="bg-slate-200 h-64 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center text-slate-600">
                <MapPin size={48} className="mx-auto mb-2" />
                <p>Interactive Map</p>
                <p className="text-sm">Kolwezi, Lualaba Province, DRC</p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Visit Our Office</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Head Office</p>
                    <p className="text-slate-600">Avenue des Mines, Sector 5</p>
                    <p className="text-slate-600">Kolwezi, Lualaba Province</p>
                    <p className="text-slate-600">Democratic Republic of Congo</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="text-blue-600 mr-3" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Business Hours</p>
                    <p className="text-slate-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Department Contacts</h2>
            <p className="text-xl text-slate-600">
              Direct contact information for specific departments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{dept.name}</h3>
                <a 
                  href={`mailto:${dept.email}`} 
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-red-800 mb-4">Emergency Contact</h3>
          <p className="text-red-700 mb-4">
            For urgent matters related to mining operations, safety, or environmental concerns
          </p>
          <div className="text-xl font-bold text-red-800">
            Emergency Hotline: +243 (0) 81 EMERGENCY
          </div>
          <p className="text-red-600 text-sm mt-2">Available 24/7</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
