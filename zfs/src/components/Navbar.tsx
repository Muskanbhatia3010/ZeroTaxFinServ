import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: 'Personal Tax', path: '/services/personal-tax' },
    { name: 'Corporate Tax', path: '/services/corporate-tax' },
    { name: 'Bookkeeping & Virtual Accounting', path: '/services/bookkeeping' },
    { name: 'Accounting System Setup', path: '/services/accounting-setup' },
    { name: 'Payroll Services', path: '/services/payroll' },
    { name: 'CRA Audit Assistance', path: '/services/cra-audit' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl" style={{ color: '#042A2B' }}>
            <span className="font-semibold">TaxPro</span> Services
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#7C9082] transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#7C9082] transition-colors">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white rounded-lg shadow-lg py-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#7C9082] transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/faq" className="text-gray-700 hover:text-[#7C9082] transition-colors">
              FAQ
            </Link>

            <Link to="/resources" className="text-gray-700 hover:text-[#7C9082] transition-colors">
              Resources
            </Link>

            <Link 
              to="/contact" 
              className="px-6 py-2 rounded-lg text-white transition-colors"
              style={{ backgroundColor: '#042A2B' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7C9082'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#042A2B'}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-[#7C9082]" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <div className="py-2">
              <div className="text-gray-700 mb-2">Services</div>
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block py-1 text-gray-600 hover:text-[#7C9082] text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/faq" className="block py-2 text-gray-700 hover:text-[#7C9082]" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link to="/resources" className="block py-2 text-gray-700 hover:text-[#7C9082]" onClick={() => setMobileMenuOpen(false)}>
              Resources
            </Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-[#7C9082]" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
