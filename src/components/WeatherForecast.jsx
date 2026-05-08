import React from "react";

export default function WeatherHighlights() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="border border-white/20 rounded-2xl px-4 backdrop-blur-xs text-white">
      <p className="font-normal pt-3">7-Day Forecast</p>

      <div className="flex flex-col items-center justify-between gap-3 py-3">
        {days.map((item, index) => (
          <span key={index} className="flex items-center justify-between w-100 gap-1">
            <p>{item}</p>
            <i class="fa-solid fa-sun"></i>
          </span>
        ))}
      </div>
    </div>
  );
}