import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl mb-4" style={{ color: '#042A2B' }}>
              <span className="font-semibold">TaxPro</span> Services
            </h3>
            <p className="text-gray-600">
              Reliable tax and accounting solutions tailored to your needs.
            </p>
          </div>

          <div>
            <h4 className="mb-4" style={{ color: '#042A2B' }}>Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-[#7C9082] transition-colors">
                Home
              </Link>
              <Link to="/faq" className="block text-gray-600 hover:text-[#7C9082] transition-colors">
                FAQ
              </Link>
              <Link to="/resources" className="block text-gray-600 hover:text-[#7C9082] transition-colors">
                Resources
              </Link>
              <Link to="/contact" className="block text-gray-600 hover:text-[#7C9082] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4" style={{ color: '#042A2B' }}>Services</h4>
            <div className="space-y-2">
              <Link to="/services/personal-tax" className="block text-gray-600 hover:text-[#7C9082] transition-colors">
                Personal Tax
              </Link>
              <Link to="/services/corporate-tax" className="block text-gray-600 hover:text-[#7C9082] transition-colors">
                Corporate Tax
              </Link>
              <Link to="/services/bookkeeping" className="block text-gray-600 hover:text-[#7C9082] transition-colors">
                Bookkeeping
              </Link>
              <Link to="/services/payroll" className="block text-gray-600 hover:text-[#7C9082] transition-colors">
                Payroll Services
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4" style={{ color: '#042A2B' }}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" style={{ color: '#7C9082' }} />
                <span>info@taxpro.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" style={{ color: '#7C9082' }} />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 TaxPro Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
