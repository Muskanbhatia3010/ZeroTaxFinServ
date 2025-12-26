import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { number: "500+", label: "Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "100%", label: "Compliance" },
    { number: "95%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      quote:
        "TaxPro Services has been instrumental in managing our company's finances. Their expertise and professionalism are unmatched.",
      name: "Sarah Johnson",
      role: "CEO, Tech Innovations Inc.",
    },
    {
      quote:
        "I've been working with TaxPro for my personal taxes for 3 years. They make the process simple and stress-free.",
      name: "Michael Chen",
      role: "Small Business Owner",
    },
    {
      quote:
        "The team at TaxPro helped us navigate a complex audit with ease. Highly recommend their services!",
      name: "Emily Rodriguez",
      role: "CFO, Green Solutions",
    },
  ];

  const services = [
    {
      title: "Personal Tax",
      description: "Comprehensive tax preparation and planning for individuals.",
      path: "/services/personal-tax",
    },
    {
      title: "Corporate Tax",
      description: "Expert corporate tax services for businesses of all sizes.",
      path: "/services/corporate-tax",
    },
    {
      title: "Bookkeeping & Cloud Accounting",
      description: "Accurate bookkeeping and cloud accounting solutions.",
      path: "/services/bookkeeping",
    },
    {
      title: "Accounting System Setup",
      description: "Professional setup and integration of accounting systems.",
      path: "/services/accounting-setup",
    },
    {
      title: "Payroll Services",
      description: "Efficient payroll processing and management services.",
      path: "/services/payroll",
    },
    {
      title: "CRA Audit Assistance",
      description: "Expert guidance through CRA audits and inquiries.",
      path: "/services/cra-audit",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-wave h-[600px] flex items-center justify-center">
        <div className="relative z-10 text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl mb-6 text-[#042A2B]">
            Simplifying Taxes. Empowering Growth.
            </h1>

            <p className="text-xl md:text-1xl mb-8 text-[#042A2B]/80 max-w-4xl">
              Modern accounting solutions designed to help Canadians grow with confidence.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
                onClick={scrollToServices}
                className="px-8 py-3 rounded-lg bg-[#7C9082] text-white hover:scale-105 transition"
            >
                Know More
            </button>

            <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-white text-[#042A2B] hover:scale-105 transition"
            >
                Contact Us
            </Link>
            </div>
        </div>
        </section>



      {/* Stats
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl text-center shadow-sm">
              <div className="text-4xl mb-2 text-[#042A2B]">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section> */}



      {/* Services */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-12 text-[#042A2B]">Our Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={i}
                to={s.path}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md group"
              >
                <h3 className="mb-3 text-[#042A2B] group-hover:text-[#7C9082]">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-4">{s.description}</p>
                <div className="flex items-center gap-2 text-[#7C9082]">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

            {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center mb-12 text-[#042A2B]">
            What Our Clients Say
          </h2>

          <Slider {...sliderSettings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-4">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <p className="italic mb-6 text-gray-700">"{t.quote}"</p>
                  <div className="border-t pt-6">
                    <p className="text-[#042A2B]">{t.name}</p>
                    <p className="text-sm text-gray-600">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}
