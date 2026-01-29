"use client";
import { useState, FC } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
// import { motion } from "framer-motion";
// import BgComponent from "@/app/components/BgComponent";

// Define the type for a single FAQ item
interface FaqItemData {
  question: string;
  answer: string;
}

// You can fetch this data from a CMS, API, or define it directly in your component.
const faqData: FaqItemData[] = [
  {
    question: "What services does your company offer?",
    answer:
      "We provide end-to-end technology solutions including custom software development, cloud computing services, AI/ML solutions, cybersecurity, IT consulting, and digital transformation services for businesses of all sizes.",
  },
  {
    question: "How do you ensure the security of our data?",
    answer:
      "We implement enterprise-grade security measures including encryption, multi-factor authentication, regular security audits, and compliance with industry standards like ISO 27001 and GDPR. All our solutions are built with security-by-design principles.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have deep expertise across multiple sectors including finance (FinTech), healthcare (HealthTech), e-commerce, education (EdTech), logistics, and manufacturing. Our solutions are tailored to meet industry-specific challenges.",
  },
  {
    question: "How does your pricing model work?",
    answer:
      "We offer flexible engagement models - fixed price for well-defined projects, time-and-materials for ongoing development, and dedicated teams for long-term partnerships. We'll work with you to determine the most cost-effective approach.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Our tech stack includes modern frameworks like React, Angular, Node.js, Python, .NET Core, and cloud platforms like AWS, Azure, and Google Cloud. We also specialize in emerging technologies like blockchain, IoT, and AI/ML.",
  },
  {
    question: "How do you handle project management and communication?",
    answer:
      "We use Agile methodologies with tools like Jira and Azure DevOps. Clients get regular updates through sprint demos, and we maintain transparent communication via Slack, Microsoft Teams, or your preferred channel with dedicated account managers.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive SLA-backed support packages including 24/7 monitoring, regular updates, performance optimization, and emergency response. Our average response time for critical issues is under 1 hour.",
  },
  {
    question: "How do you ensure quality in your deliverables?",
    answer:
      "We follow rigorous QA processes including automated testing (unit, integration, UI), manual testing, code reviews, and continuous integration/deployment. Our defect rate is less than 0.5% in production environments.",
  },
];

// Define the props for the FaqItem component
interface FaqItemProps {
  item: FaqItemData;
  isOpen: boolean;
  onClick: () => void;
}

// Individual FAQ item component
const FaqItem: FC<FaqItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-blue-950 py-6">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 dark:text-gray-100 focus:outline-none"
        onClick={onClick}
      >
        <span className="text-blue-100">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-blue-300" />
        ) : (
          <ChevronDown className="h-6 w-6 text-blue-300" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen mt-4" : "max-h-0"
        }`}
      >
        <p className="text-blue-200 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

// Main FAQ Page Component
const FaqPage: FC = () => {
  // const [openIndex, setOpenIndex] = (useState < number) | (null > null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen font-sans pointer-events-auto">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-100 via-blue-500 to-blue-950 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-blue-200">
              Can&apos;t find the answer you&apos;re looking for? Feel free to{" "}
              <a
                href="/contact"
                className="font-medium text-blue-800 hover:underline"
              >
                contact our support team
              </a>
              .
            </p>
          </div>

          {/* FAQ Accordion Section */}
          <div className="bg-blue-950/50 rounded-2xl shadow-lg p-6 sm:p-8">
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-block bg-blue-900 text-blue-200 px-6 py-3 rounded-md text-lg font-semibold hover:text-blue-300 hover:bg-blue-950 transition-transform transform hover:-translate-y-1"
            >
              Learn More About Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
