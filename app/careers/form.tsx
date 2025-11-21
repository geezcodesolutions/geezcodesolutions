import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiFileText,
} from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Position {
  id: string | number;
  job_title?: string;
}

const JobApplicationForm = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    phone: string;
    position: string;
    coverLetter: string;
    resume: File | null;
  }>({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resume: null,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successModal, setSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for positions
  const [positions, setPositions] = useState<Position[]>([]);
  const [positionsLoading, setPositionsLoading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await fetch(`${API_URL}/api/vacancy-positions`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch positions");
        const data = await res.json();
        setPositions(data.data || []);
      } catch {
        setPositions([]);
      } finally {
        setPositionsLoading(false);
      }
    };
    fetchPositions();
  }, [API_URL, API_TOKEN]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      resume: e.target.files ? e.target.files[0] : null,
    });
  };

  const validateForm = () => {
    const formErrors: { [key: string]: string } = {};
    if (!formData.fullName) formErrors.fullName = "Full Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.position) formErrors.position = "Position is required";
    if (!formData.resume) formErrors.resume = "Resume upload is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    // API_URL and API_TOKEN are already declared at the top of the component

    try {
      // 1. First upload the resume file
      const resumeFormData = new FormData();
      if (formData.resume) {
        resumeFormData.append("files", formData.resume);
      }

      // const uploadRes = await fetch(`${API_URL}/api/upload`, {
      //   method: "POST",
      //   body: resumeFormData,
      // });
      const uploadRes = await fetch(`${API_URL}/api/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: resumeFormData,
      });

      if (!uploadRes.ok) {
        throw new Error("Failed to upload resume");
      }

      const uploadData = await uploadRes.json();
      const uploadedFileId = uploadData[0]?.id;

      const jobApplicationData = {
        data: {
          full_name: formData.fullName,
          email: formData.email,
          phone: 1,
          position: formData.position,
          letter: formData.coverLetter,
          resume: [uploadedFileId], // <-- Strapi expects an array for media fields
        },
      };

      const response = await fetch(`${API_URL}/api/vacancies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`, // Add if endpoint is protected
        },
        body: JSON.stringify(jobApplicationData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setSuccessModal(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        coverLetter: "",
        resume: null,
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        "There was a problem submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSuccessModal(false), 4000);
    }
  };

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
      />
      <motion.div
        className="bg-white bg-opacity-20 backdrop-blur-lg border-white border-opacity-20 border-4 rounded-3xl drop-shadow-2xl p-10 w-full max-w-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-10">
          Job Application Form
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <FormField
            icon={<FiUser />}
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <FormField
            icon={<FiMail />}
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <FormField
            icon={<FiPhone />}
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          {/* Position Dropdown */}
          <div>
            <label className="flex items-center text-base font-semibold text-white mb-2">
              <FiBriefcase />
              <span className="ml-2">Position Applying For</span>
            </label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="p-3 block w-full border border-PrimaryGreen rounded-xl focus:ring-4 focus:ring-PrimaryGreen bg-PrimaryGreen text-w bg-opacity-20"
              disabled={positionsLoading}
            >
              <option value="">Select a position</option>
              {positions.map((pos) => (
                <option
                  className="bg-PrimaryGreen"
                  key={pos.id}
                  value={pos.job_title || pos.id}
                >
                  {pos.job_title || pos.id}
                </option>
              ))}
            </select>
            {errors.position && (
              <motion.p
                className="text-PrimaryBrown text-xs mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errors.position}
              </motion.p>
            )}
          </div>
          <FormField
            icon={<FiFileText />}
            label="Cover Letter"
            name="coverLetter"
            type="textarea"
            value={formData.coverLetter}
            onChange={handleChange}
            error={errors.coverLetter ?? ""}
          />
          <div>
            <label className="flex items-center text-base font-semibold text-white mb-2">
              <FiFileText className="mr-2" /> Upload Resume
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="block w-full text-sm text-w font-semibold file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-white file:text-w"
            />
            {errors.resume && (
              <motion.p
                className="text-PrimaryBrown text-xs mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errors.resume}
              </motion.p>
            )}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-6 bg-gold text-primary hover:text-white hover:bg-yellow-600 font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </motion.button>
        </form>

        {successModal && (
          <motion.div
            className="fixed inset-0 bg-SecondaryGreen bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white text-PrimaryGreen p-8 rounded-xl max-w-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <h3 className="text-xl font-bold mb-4">Application Submitted!</h3>
              <p>
                Thank you for your application. We&apos;ll review it and get
                back to you soon.
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

// Reusable Input Field Component
interface FormFieldProps {
  icon: React.ReactNode;
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
}

const FormField = ({
  icon,
  label,
  name,
  type = "text",
  value,
  onChange,
  error = "",
}: FormFieldProps) => (
  <div>
    <label className="flex items-center text-base font-semibold text-white mb-2">
      {icon}
      <span className="ml-2">{label}</span>
    </label>
    {type === "textarea" ? (
      <textarea
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        className="p-3 block w-full border border-PrimaryGreen rounded-xl focus:ring-4 focus:ring-PrimaryGreen bg-PrimaryGreen text-w bg-opacity-20"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="p-3 block w-full border border-PrimaryGreen rounded-xl focus:ring-4 focus:ring-PrimaryGreen bg-PrimaryGreen text-w bg-opacity-20"
      />
    )}
    {error && (
      <motion.p
        className="text-PrimaryBrown text-xs mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {error}
      </motion.p>
    )}
  </div>
);

export default JobApplicationForm;
