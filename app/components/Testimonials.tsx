import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-amber-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4 text-amber-400">
        <Quote className="rotate-180" />
        <Quote className="ml-auto" />
      </div>
      <p className="text-lg italic mb-6 text-blue-950 dark:text-amber-50">
        &quot;{testimonial.quote}&quot;
      </p>
      <div className="flex items-center">
        <div>
          <p className="font-semibold text-blue-950 dark:text-amber-50">
            {testimonial.author}
          </p>
          <p className="text-sm text-blue-950 dark:text-amber-50">
            {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
