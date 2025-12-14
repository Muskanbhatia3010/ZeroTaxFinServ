import { FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function Resources() {
  const resources = [
    {
      title: "Personal Tax Checklist",
      description: "A comprehensive checklist of documents needed for personal tax filing.",
      category: "Tax Preparation",
    },
    {
      title: "Small Business Tax Guide",
      description: "Essential tax information and tips for small business owners.",
      category: "Business",
    },
    {
      title: "RRSP Contribution Guide",
      description: "Understanding RRSP contribution limits and strategies.",
      category: "Financial Planning",
    },
    {
      title: "Bookkeeping Best Practices",
      description: "Tips and best practices for maintaining accurate books.",
      category: "Bookkeeping",
    },
    {
      title: "Tax Deduction Guide",
      description: "Common tax deductions and credits you may be eligible for.",
      category: "Tax Preparation",
    },
    {
      title: "Payroll Compliance Checklist",
      description: "Ensure your payroll is compliant with all regulations.",
      category: "Payroll",
    },
    {
      title: "CRA Audit Preparation",
      description: "How to prepare for and handle a CRA audit.",
      category: "Audit",
    },
    {
      title: "Year-End Tax Planning",
      description: "Strategies for minimizing taxes before year-end.",
      category: "Tax Planning",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="mb-6 text-[#042A2B]">Resources</h1>
            <p className="text-xl text-gray-600">
              Download helpful guides and resources for your tax and accounting needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#7C90821A]">
                    <FileText className="w-6 h-6 text-[#7C9082]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1">
                      {resource.category}
                    </div>
                    <h3 className="mb-2 text-[#042A2B] group-hover:text-[#7C9082] transition-colors">
                      {resource.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{resource.description}</p>

                <button className="flex items-center gap-2 text-[#7C9082] hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gray-50 rounded-2xl text-center">
            <h3 className="mb-4 text-[#042A2B]">Need More Help?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Contact us for personalized assistance.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-lg text-white bg-[#042A2B] hover:bg-[#7C9082] transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
