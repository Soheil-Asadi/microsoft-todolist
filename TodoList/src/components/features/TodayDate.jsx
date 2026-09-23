export default function TodayDate() {
    const today = new Date();
  
    const weekday = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(today);
  
    const day = today.getDate();
  
    const month = new Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(today);
  
    return (
      <p className="text-gray-500">
        {weekday}, {day} {month}
      </p>
    );
  }