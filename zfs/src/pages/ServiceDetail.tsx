import { useParams, Link } from "react-router-dom";
import { CheckCircle2, Users, TrendingUp, Shield } from "lucide-react";

export default function ServiceDetail() {
  const { serviceId } = useParams();

  const serviceData = {
    "personal-tax": {
      title: "Personal Tax Services",
      description:
        "Comprehensive tax preparation and planning services for individuals and families.",
      whatWeOffer: [
        "Individual tax return preparation",
        "Tax planning and optimization strategies",
        "Capital gains and investment income reporting",
        "Rental property tax filing",
        "Estate and trust tax services",
        "Tax credits and deductions maximization",
      ],
      whoItsFor: [
        "Individual taxpayers",
        "Families and couples",
        "Self-employed professionals",
        "Investors and property owners",
        "Retirees",
      ],
    },
    "corporate-tax": {
      title: "Corporate Tax Services",
      description: "Expert corporate tax solutions for businesses of all sizes.",
      whatWeOffer: [
        "Corporate tax return preparation",
        "Tax planning and compliance",
        "Scientific Research & Experimental Development (SR&ED) claims",
        "Cross-border tax services",
        "Tax-efficient business structuring",
        "Corporate tax optimization",
      ],
      whoItsFor: [
        "Small and medium businesses",
        "Large corporations",
        "Startups",
        "Non-profit organizations",
        "Multi-national companies",
      ],
    },
    bookkeeping: {
      title: "Bookkeeping & Virtual Accounting",
      description:
        "Accurate bookkeeping and virtual accounting solutions for modern businesses.",
      whatWeOffer: [
        "Daily bookkeeping and transaction recording",
        "Monthly financial statement preparation",
        "Accounts payable and receivable management",
        "Bank and credit card reconciliation",
        "Virtual CFO services",
        "Cloud-based accounting solutions",
      ],
      whoItsFor: [
        "Small businesses",
        "Startups",
        "E-commerce businesses",
        "Remote and digital companies",
        "Growing businesses",
      ],
    },
    "accounting-setup": {
      title: "Accounting System Setup",
      description:
        "Professional setup and integration of accounting systems tailored to your business.",
      whatWeOffer: [
        "Accounting software selection and implementation",
        "Chart of accounts customization",
        "System integration with existing tools",
        "User training and onboarding",
        "Process documentation",
        "Ongoing technical support",
      ],
      whoItsFor: [
        "New businesses",
        "Companies migrating systems",
        "Businesses seeking automation",
        "Organizations needing integration",
        "Companies upgrading systems",
      ],
    },
    payroll: {
      title: "Payroll Services",
      description:
        "Efficient and compliant payroll processing and management services.",
      whatWeOffer: [
        "Payroll processing and distribution",
        "Tax withholding and remittance",
        "Year-end T4 and T4A preparation",
        "Employee benefits administration",
        "ROE and government reporting",
        "Payroll compliance management",
      ],
      whoItsFor: [
        "Businesses with employees",
        "Companies with contractors",
        "Organizations of all sizes",
        "Seasonal employers",
        "Multi-location businesses",
      ],
    },
    "cra-audit": {
      title: "CRA Audit Assistance",
      description:
        "Expert guidance and representation during CRA audits and inquiries.",
      whatWeOffer: [
        "Audit representation and correspondence",
        "Document preparation and organization",
        "Response to CRA inquiries",
        "Dispute resolution and appeals",
        "Penalty and interest negotiation",
        "Post-audit compliance support",
      ],
      whoItsFor: [
        "Individuals facing audits",
        "Businesses under review",
        "Taxpayers with disputes",
        "Companies requiring representation",
        "Anyone receiving CRA notices",
      ],
    },
  };

  const service = serviceData[serviceId] || serviceData["personal-tax"];

  const whyChooseUs = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Certified professionals with years of industry experience.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track record of successful outcomes for our clients.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance Guaranteed",
      description: "100% compliance with all regulatory requirements.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="mb-6 text-[#042A2B]">{service.title}</h1>
          <p className="text-xl text-gray-600">{service.description}</p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="mb-8 text-[#042A2B]">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.whatWeOffer.map((item, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 mt-1 text-[#7C9082]" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="mb-8 text-[#042A2B]">Who This Is For</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.whoItsFor.map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className="w-2 h-2 rounded-full mt-2 bg-[#7C9082]" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center mb-12 text-[#042A2B]">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="inline-flex p-4 rounded-full mb-4 bg-[#7C90821A] text-[#7C9082]">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-[#042A2B]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="mb-6 text-[#042A2B]">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's work together to meet your needs.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 rounded-lg text-white bg-[#042A2B] hover:bg-[#7C9082] transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
