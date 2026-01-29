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
    <div className="bg-blue-950/50 shadow-md rounded-xl p-6 hover:shadow-xl transition">
      <div className="mb-4 text-blue-500">{icon}</div>
      <h3 className="text-xl text-blue-100 font-semibold mb-2">{title}</h3>
      <p className="text-sm text-blue-200">{description}</p>
    </div>
  );
}
