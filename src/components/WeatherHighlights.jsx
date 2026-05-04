import React from "react";
import { useWeather } from "../hooks/useWeather";

export default function WeatherHighlights({ weather }) {
  if (!weather) return null;

  const getLocalTime = (timestamp, timezone) => {
    const date = new Date((timestamp + timezone) * 1000); 
    return date.toUTCString().slice(17, 22); // HH:MM
  };
  const sunrise = getLocalTime(weather.sys.sunrise, weather.timezone);
  const card =
    "border border-white/10 bg-white/10 backdrop-blur-4xl rounded-2xl m-1";

  return (
    <div>
      <div className="border border-white/20 rounded-2xl px-4 backdrop-blur-xs text-white">
        <p className="font-normal pt-3">Today's Highlights</p>
        <div className="flex gap-1 py-2">
          <div className="card">
            <span className="flex flex-col gap-2 p-3">
              <i class="fa-solid fa-temperature-low"></i>
              <p>{weather.main.temp}°</p>
              <p className="font-normal text-xs">Temp</p>
            </span>
          </div>
          <div className="card">
            <span className="flex flex-col gap-2 p-3">
              <i class="fa-solid fa-cloud-sun-rain"></i>
              <p>{weather.rain?.["1h"] ?? 0}</p>
              <p className="font-normal text-xs">Precipitation </p>
            </span>
          </div>
          <div className="card">
            <span className="flex flex-col gap-2 p-3">
              <i class="fa-solid fa-wind"></i>
              <p>{weather.wind.speed}</p>
              <p className="font-normal text-xs">Wind</p>
            </span>
          </div>
          <div className="card">
            <span className="flex flex-col gap-2 p-3">
              <i class="fa-solid fa-cloud-sun"></i>
              <p>{sunrise}</p>
              <p className="font-normal text-xs">Sunrise</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
