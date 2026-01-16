interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-amber-100 dark:bg-blue-950 shadow-md rounded-xl p-6 hover:shadow-xl transition">
      <div className="mb-4 text-amber-400">{icon}</div>
      <h3 className="text-xl text-blue-950 dark:text-amber-100 font-semibold mb-2">
        {title}
      </h3>
      <p className="text-sm text-blue-950 dark:text-amber-100">{description}</p>
    </div>
  );
}
