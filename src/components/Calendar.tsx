export default function Calendar() {
  const daysOfTheWeek = [
    {
      day: "Monday",
      initial: "M",
    },
    {
      day: "Tuesday",
      initial: "T",
    },
    {
      day: "Wednesday",
      initial: "W",
    },
    {
      day: "Thursday",
      initial: "T",
    },
    {
      day: "Friday",
      initial: "F",
    },
    {
      day: "Saturday",
      initial: "S",
    },
    {
      day: "Sunday",
      initial: "S",
    },
  ];

  // Get today's day of the week
  const today = new Date();
  const todayDayName = today.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="my-4 flex items-center justify-between space-x-2 land-phone:justify-center">
      {daysOfTheWeek.map((day, index) => (
        <div
          key={index}
          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all duration-200 ${
            day.day === todayDayName
              ? "bg-tertiary-gray text-gray-500 ring-2 ring-secondary-purple ring-offset-2"
              : "bg-tertiary-gray text-gray-500"
          }`}
        >
          {day.initial}
        </div>
      ))}
    </div>
  );
}
