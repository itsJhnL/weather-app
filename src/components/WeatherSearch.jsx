import React, { useState } from "react";

export default function WeatherSearch({ fetchWeather }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;

    fetchWeather(city);
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-white/20 rounded-2xl px-4 backdrop-blur-xs"
    >
      <i className="fa-solid fa-location-dot text-white"></i>

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-5 text-white outline-none bg-transparent"
        type="text"
        placeholder="Search Location..."
      />
    </form>
  );
}
