export default function Calendar() {
  const daysOfTheWeek = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="my-4 flex items-center justify-between space-x-2 land-phone:justify-center">
      {daysOfTheWeek.map((day, index) => (
        <div
          key={index}
          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all duration-200 ${
            index === 6
              ? "bg-tertiary-gray text-gray-500 ring-2 ring-secondary-purple ring-offset-2"
              : "bg-tertiary-gray text-gray-500"
          }`}
        >
          {day}
        </div>
      ))}
    </div>
  );
}
