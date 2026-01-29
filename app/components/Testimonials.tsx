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
    <div className="bg-blue-950/50 p-6 rounded-xl shadow-xl">
      <div className="flex items-center mb-4 text-blue-500">
        <Quote className="rotate-180" />
        <Quote className="ml-auto" />
      </div>
      <p className="text-lg italic mb-6 text-blue-100">
        &quot;{testimonial.quote}&quot;
      </p>
      <div className="flex items-center">
        <div>
          <p className="font-semibold text-blue-200">{testimonial.author}</p>
          <p className="text-sm text-blue-300">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}
