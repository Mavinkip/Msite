import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

const PHONE_NUMBER = '+243901103525';
const EMAIL = 'info@groupedesocietedemineire.com';

function WhatsAppIcon({ className, size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-label="WhatsApp"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const ContactPage: React.FC = () => {
  const departments = [
    { name: 'Customer Support', email: 'support@kolwenzicopper.com' },
    { name: 'Sales', email: 'sales@kolwenzicopper.com' },
    { name: 'Human Resources', email: 'hr@kolwenzicopper.com' },
    { name: 'Technical Support', email: 'tech@kolwenzicopper.com' },
    { name: 'Investor Relations', email: 'investors@kolwenzicopper.com' }
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

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`;
  const mailtoUrl = `mailto:${EMAIL}`;
  const telUrl = `tel:${PHONE_NUMBER}`;

  const displayPhone = '+243 901 103 525';

  const contactInfo = [
    {
      icon: WhatsAppIcon,
      title: 'WhatsApp',
      href: whatsappUrl,
      label: 'Chat on WhatsApp',
      detail: displayPhone,
      isExternal: true,
      iconColor: 'text-[#25D366]'
    },
    {
      icon: Phone,
      title: 'Call',
      href: telUrl,
      label: 'Call the number',
      detail: displayPhone,
      isExternal: false,
      iconColor: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      href: mailtoUrl,
      label: 'Send email',
      detail: EMAIL,
      isExternal: false,
      iconColor: 'text-blue-600'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">GROUPE DE SOCIETE DE MINEIRE (SARL)</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto flex items-center justify-center gap-4 flex-wrap">
            <span>Contact:</span>
            <span className="font-semibold text-white">+243 901 103 525</span>
            <a
              href={telUrl}
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
              aria-label="Call"
            >
              <Phone size={24} />
              Call
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-lg transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon size={28} className="text-white" />
              WhatsApp
            </a>
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target={info.isExternal ? '_blank' : undefined}
              rel={info.isExternal ? 'noopener noreferrer' : undefined}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 flex flex-col items-center no-underline text-inherit hover:scale-[1.02]"
              aria-label={info.label}
            >
              <span className={`mb-4 ${info.iconColor}`}>
                <info.icon className="mx-auto" size={48} />
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{info.title}</h3>
              <span className="text-slate-700 font-medium text-sm">{info.detail}</span>
              <span className="text-slate-500 text-xs mt-1">{info.label}</span>
            </a>
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
     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
     
    </div>
  );
};

export default ContactPage;
