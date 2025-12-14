import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What documents do I need for personal tax filing?",
      answer:
        "You will need T4 slips from employers, T5 slips for investment income, receipts for deductions (medical expenses, charitable donations), RRSP contribution receipts, and any other relevant tax documents.",
    },
    {
      question: "When is the deadline for filing corporate taxes?",
      answer:
        "Corporate tax returns are due 6 months after the fiscal year-end. However, any taxes owing must be paid within 2 months (or 3 months for small Canadian-controlled private corporations).",
    },
    {
      question: "How often should I update my bookkeeping?",
      answer:
        "We recommend updating your bookkeeping at least monthly. This ensures accurate financial statements and makes year-end tax preparation much smoother.",
    },
    {
      question: "What is the difference between bookkeeping and accounting?",
      answer:
        "Bookkeeping involves recording daily financial transactions, while accounting encompasses broader financial analysis, tax planning, and strategic financial advice.",
    },
    {
      question: "Can you help with CRA audits?",
      answer:
        "Yes, we provide comprehensive CRA audit assistance including representation, document preparation, and communication with the CRA on your behalf.",
    },
    {
      question: "Do you offer virtual/remote services?",
      answer:
        "Yes, we offer full virtual accounting and bookkeeping services. All our services can be delivered remotely through secure cloud-based platforms.",
    },
    {
      question: "What accounting software do you support?",
      answer:
        "We work with all major accounting software including QuickBooks, Xero, Sage, and FreshBooks. We can help you choose and set up the right solution for your business.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing varies based on the complexity and scope of services required. We offer free consultations to discuss your needs and provide a customized quote.",
    },
    {
      question: "What are the benefits of payroll services?",
      answer:
        "Professional payroll services ensure accurate calculations, timely remittances, compliance with regulations, and save you valuable time to focus on your business.",
    },
    {
      question: "Can you help with tax planning?",
      answer:
        "Absolutely! We provide comprehensive tax planning services to help minimize your tax liability and maximize deductions and credits.",
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-center mb-6 text-[#042A2B]">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Find answers to common questions about our services
          </p>

          {/* Search */}
          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:border-[#7C9082] focus:outline-none"
            />
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="text-left text-[#042A2B]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    style={{ color: "#7C9082" }}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12 text-gray-600">
              No questions found matching your search.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
