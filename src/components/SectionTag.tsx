interface SectionTagProps {
    title: string
}

export default function SectionTag({title}: SectionTagProps) {
  return (
    <div className="my-3 border-l-4 border-secondary-purple pl-4">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
  );
}
