
import React from 'react';
import { FileText, Download, Calendar, Eye } from 'lucide-react';

const PublicationsPage: React.FC = () => {
  const documents = [
    {
      title: 'Annual Report 2023',
      type: 'Annual Report',
      date: '2024-03-15',
      description: 'Comprehensive overview of our 2023 operations, financial performance, and sustainability initiatives.',
      size: '2.4 MB',
      language: 'French/English'
    },
    {
      title: 'Environmental Impact Assessment',
      type: 'Environmental',
      date: '2024-01-20',
      description: 'Detailed environmental impact assessment for our Kolwezi mining operations.',
      size: '5.1 MB',
      language: 'French'
    },
    {
      title: 'Community Development Report',
      type: 'CSR Report',
      date: '2023-12-10',
      description: 'Annual report on community development initiatives and social impact programs.',
      size: '1.8 MB',
      language: 'French/English'
    },
    {
      title: 'Mining License Documentation',
      type: 'Legal',
      date: '2023-11-05',
      description: 'Official mining concession licenses and regulatory compliance documentation.',
      size: '3.2 MB',
      language: 'French'
    },
    {
      title: 'Safety Standards Manual',
      type: 'Safety',
      date: '2023-10-15',
      description: 'Comprehensive safety protocols and procedures for all mining operations.',
      size: '4.7 MB',
      language: 'French/English'
    },
    {
      title: 'Financial Statements Q3 2024',
      type: 'Financial',
      date: '2024-10-30',
      description: 'Quarterly financial statements and performance indicators.',
      size: '1.2 MB',
      language: 'French'
    }
  ];

  const news = [
    {
      title: 'Kolwenzi Congo Announces Record Copper Production',
      date: '2024-11-15',
      summary: 'Company achieves highest quarterly copper production in company history, exceeding targets by 15%.'
    },
    {
      title: 'New Community Health Center Opens',
      date: '2024-10-28',
      summary: 'Investment in local healthcare infrastructure serves 5,000 residents in Kolwezi region.'
    },
    {
      title: 'Environmental Certification Renewed',
      date: '2024-09-12',
      summary: 'International environmental management certification renewed for another three years.'
    },
    {
      title: 'Partnership with Local Universities',
      date: '2024-08-05',
      summary: 'New educational partnerships provide mining scholarships and technical training programs.'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Annual Report': return 'bg-blue-100 text-blue-800';
      case 'Environmental': return 'bg-green-100 text-green-800';
      case 'CSR Report': return 'bg-purple-100 text-purple-800';
      case 'Legal': return 'bg-red-100 text-red-800';
      case 'Safety': return 'bg-orange-100 text-orange-800';
      case 'Financial': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Publications & Reports</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Transparent reporting on our operations, financial performance, 
            and commitment to sustainable mining practices
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Official Documents</h2>
          <p className="text-xl text-slate-600">
            Access our latest reports, compliance documents, and regulatory filings
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <FileText className="text-blue-600" size={32} />
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(doc.type)}`}>
                  {doc.type}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{doc.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{doc.description}</p>
              <div className="space-y-2 text-xs text-slate-500 mb-4">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-2" />
                  {new Date(doc.date).toLocaleDateString()}
                </div>
                <div>Size: {doc.size}</div>
                <div>Language: {doc.language}</div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                  <Download size={16} className="mr-2" />
                  Download
                </button>
                <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg transition-colors">
                  <Eye size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company News */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Company News</h2>
            <p className="text-xl text-slate-600">
              Latest updates and announcements from Kolwenzi Congo
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{item.title}</h3>
                  <span className="text-sm text-slate-500 whitespace-nowrap ml-4">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-slate-600">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Certifications & Compliance</h2>
          <p className="text-xl text-slate-600">
            Our commitment to international standards and regulatory compliance
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="text-green-600" size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">ISO 14001</h3>
            <p className="text-slate-600">Environmental Management System Certification</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="text-blue-600" size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">OHSAS 18001</h3>
            <p className="text-slate-600">Occupational Health and Safety Management</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="text-purple-600" size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">OECD Guidelines</h3>
            <p className="text-slate-600">Responsible Business Conduct Standards</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicationsPage;
