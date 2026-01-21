"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Briefcase,
  GraduationCap,
  X,
  User,
  Mail,
  Phone,
  FileText,
} from "lucide-react";
// import BgComponent from "@/app/components/BgComponent";

// --- MOCK DATA ---
const mockVacancies = [
  {
    id: "1",
    title: "Sales Person",
    position: "Sales Person",
    qualification: "Bachelor's degree in Business or related field",
    experience: "3+ years of experience in sales or related field",
    description:
      "We are looking for a skilled Sales Person to join our team...\n- Identify and develop new business opportunities\n- Build and maintain strong relationships with clients\n- Meet and exceed sales targets",
    deadline: new Date("2025-02-21"), // Fixed date
    createdAt: new Date("2025-01-21"), // Fixed date
  },
  // {
  //   id: "2",
  //   title: "Product Manager",
  //   position: "Product Manager",
  //   qualification: "Degree in Business, Marketing, or a technical field",
  //   experience: "5+ years in product management, preferably in a SaaS company",
  //   description:
  //     "As a Product Manager, you will be responsible for the product planning and execution throughout the Product Lifecycle...\n- Define the product vision, roadmap and growth opportunities\n- Work closely with engineering, sales, marketing, and support teams",
  //   deadline: new Date("2025-03-07"), // Fixed date
  //   createdAt: new Date("2025-01-21"), // Fixed date
  // },
];

type Vacancy = {
  id: string;
  title: string;
  position: string;
  qualification: string;
  experience: string;
  description: string;
  deadline: Date | string | null;
  createdAt: Date | string;
};

// --- Reusable Input Field Component ---
type FormFieldProps = {
  icon?: React.ReactNode;
  label: string;
  name: string;
  type?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: string | undefined;
  readOnly?: boolean;
};

const FormField: React.FC<FormFieldProps> = ({
  icon,
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  readOnly = false,
}) => (
  <div className="mb-4">
    <label className="flex items-center text-base font-semibold text-blue-950 dark:text-amber-100 mb-2">
      {icon}
      <span className="ml-2">{label}</span>
    </label>
    {type === "textarea" ? (
      <textarea
        name={name}
        rows={4}
        value={value as string}
        onChange={onChange}
        className="p-3 block w-full border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 bg-gray-50 transition"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value as string}
        onChange={onChange}
        readOnly={readOnly}
        className={`p-3 block w-full border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 bg-gray-50 transition ${
          readOnly ? "cursor-not-allowed bg-gray-200" : ""
        }`}
      />
    )}
    {error && (
      <motion.p
        className="text-red-500 text-xs mt-1"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {error}
      </motion.p>
    )}
  </div>
);

// --- Job Application Form Component ---
type JobApplicationFormProps = {
  positionName: string;
  onClose: () => void;
};

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({
  positionName,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: positionName,
    coverLetter: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResume(e.target.files?.[0] ?? null);
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim())
      tempErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      tempErrors.email = "Email is not valid";
    }
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    if (!resume) tempErrors.resume = "Resume is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", { ...formData, resume: resume?.name });
      setSuccess(true);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: positionName,
        coverLetter: "",
      });
      setResume(null);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <motion.div
        className="text-center p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="mb-6">
          <svg
            className="w-16 h-16 text-green-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-600 mb-4">
          Application Submitted!
        </h3>
        <p className="text-gray-700 mb-6">
          Thank you for your application. We/&apos;ll review it and get back to
          you soon.
        </p>
        <button
          onClick={onClose}
          className="mt-4 py-2 px-6 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          Close
        </button>
      </motion.div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-950 dark:text-amber-100">
          Job Application
        </h2>
        <button
          onClick={onClose}
          className="text-blue-950 dark:text-amber-100 hover:text-red-500"
          aria-label="Close application form"
        >
          <X size={24} />
        </button>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <FormField
          icon={
            <Briefcase
              className="text-blue-950 dark:text-amber-100"
              size={18}
            />
          }
          label="Position Applying For"
          name="position"
          value={formData.position}
          onChange={handleChange}
          readOnly={true}
          error={undefined}
        />

        <FormField
          icon={
            <User className="text-blue-950 dark:text-amber-100" size={18} />
          }
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        <FormField
          icon={
            <Mail className="text-blue-950 dark:text-amber-100" size={18} />
          }
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FormField
          icon={
            <Phone className="text-blue-950 dark:text-amber-100" size={18} />
          }
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <FormField
          icon={
            <FileText className="text-blue-950 dark:text-amber-100" size={18} />
          }
          label="Cover Letter (Optional)"
          name="coverLetter"
          type="textarea"
          value={formData.coverLetter}
          onChange={handleChange}
        />

        <div className="mb-6">
          <label className="flex gap-2 items-center text-base font-semibold text-blue-950 dark:text-amber-100 mb-2">
            <FileText className="text-blue-950 dark:text-amber-100" size={18} />
            Upload Resume (PDF, DOC)
          </label>
          <div className="relative">
            <input
              type="file"
              id="resume-upload"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              required
            />
            <label
              htmlFor="resume-upload"
              className="block py-2 px-4 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
            >
              {resume ? resume.name : "Choose a file..."}
            </label>
          </div>
          {errors.resume && (
            <motion.p
              className="text-red-500 text-xs mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.resume}
            </motion.p>
          )}
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-6 bg-blue-950 text-amber-400 dark:text-blue-950 dark:bg-amber-400 font-bold rounded-full hover:bg-blue-800 dark:hover:bg-amber-300 dark:hover:text-amber-900 hover:text-amber-100 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Submit Application"
          )}
        </motion.button>
      </form>
    </div>
  );
};

// --- Modal Component ---
type ApplicationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  vacancy: Vacancy | null;
};

const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  vacancy,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-amber-100/50 dark:bg-blue-950/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ backdropFilter: "blur(10px)" }}
        >
          <motion.div
            className="bg-amber-100 dark:bg-blue-950 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {vacancy && (
              <JobApplicationForm
                positionName={vacancy.position}
                onClose={onClose}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Loading Skeleton Component ---
const VacancySkeleton = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-6 border border-gray-200 animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-3/4"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="h-5 w-5 bg-gray-200 rounded-full mt-1"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
    <div className="space-y-3">
      <div className="h-5 bg-gray-200 rounded w-1/4"></div>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
      ))}
    </div>
    <div className="h-10 bg-gray-200 rounded-full w-32 ml-auto"></div>
  </div>
);

// --- Main Vacancy Post Page ---
export default function VacancyPost() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);

  useEffect(() => {
    // simulate loading
    const t = setTimeout(() => {
      setVacancies(mockVacancies as Vacancy[]);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  const handleOpenModal = (vacancy: Vacancy) => {
    setSelectedVacancy(vacancy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVacancy(null);
  };

  if (loading) {
    return (
      <div className="space-y-6 p-4">
        {[...Array(2)].map((_, i) => (
          <VacancySkeleton key={i} />
        ))}
      </div>
    );
  }

  if (vacancies.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-96 rounded-3xl bg-gradient-to-br from-blue-50 to-white text-center px-6 mt-4">
        <svg
          className="w-16 h-16 text-red-500 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-2xl font-semibold text-blue-950 dark:text-amber-100 mb-2">
          No Vacancies Available
        </h1>
        <p className="text-blue-950 dark:text-amber-100 max-w-md">
          We&apos;re not hiring at the moment, but we&apos;re always growing 🌱.
          Check back later or follow us on social media to stay updated!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4">
      {vacancies.map((vacancy) => (
        <motion.div
          key={vacancy.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto p-6 bg-amber-100 dark:bg-gray-800 shadow-lg rounded-2xl space-y-6 border border-gray-200"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-blue-950 dark:text-amber-100 mb-4">
            {vacancy.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div className="flex items-start gap-3">
              <Briefcase className="text-blue-600 mt-1" />
              <div>
                <p className="font-semibold text-blue-950 dark:text-amber-100">
                  Position
                </p>
                <p className="text-blue-950 dark:text-amber-100">
                  {vacancy.position}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <GraduationCap className="text-green-600 mt-1" />
              <div>
                <p className="font-semibold text-blue-950 dark:text-amber-100">
                  Qualification
                </p>
                <p className="text-blue-950 dark:text-amber-100">
                  {vacancy.qualification}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Briefcase className="text-orange-600 mt-1" />
              <div>
                <p className="font-semibold text-blue-950 dark:text-amber-100">
                  Experience
                </p>
                <p className="text-blue-950 dark:text-amber-100">
                  {vacancy.experience}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CalendarDays className="text-red-600 mt-1" />
              <div>
                <p className="font-semibold text-blue-950 dark:text-amber-100">
                  Deadline
                </p>
                <p className="text-blue-950 dark:text-amber-100">
                  {vacancy.deadline
                    ? new Date(vacancy.deadline).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>

          <div className="text-gray-800 mt-4">
            <h2 className="text-xl font-semibold mb-2 text-blue-950 dark:text-amber-100">
              Job Description
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-blue-950 dark:text-amber-100">
              {vacancy.description}
            </p>
          </div>

          <div className="pt-4 text-right">
            <motion.button
              onClick={() => handleOpenModal(vacancy)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-2 px-6 bg-amber-400 text-blue-950 hover:text-amber-100 hover:bg-yellow-600 font-bold rounded-full transition-all duration-300"
            >
              Apply Now
            </motion.button>
          </div>
        </motion.div>
      ))}

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        vacancy={selectedVacancy}
      />
    </div>
  );
}
