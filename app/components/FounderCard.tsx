import Image from "next/image";
import type { StaticImageData } from "next/image";

interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string | StaticImageData;
}

interface FounderCardProps {
  founder: Founder;
}

interface FounderCardProps {
  founder: Founder;
}

export default function FounderCard({ founder }: FounderCardProps) {
  return (
    <div className="bg-amber-100 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-48 w-full md:w-48 object-contain"
            src={founder.image}
            alt={founder.name}
            width={192}
            height={192}
            loading="lazy"
            quality={90}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-amber-400 font-semibold">
            {founder.role}
          </div>
          <h3 className="mt-2 text-blue-950 dark:text-amber-50 text-xl font-semibold">
            {founder.name}
          </h3>
          <p className="mt-2 text-blue-950 dark:text-amber-50">{founder.bio}</p>
        </div>
      </div>
    </div>
  );
}
