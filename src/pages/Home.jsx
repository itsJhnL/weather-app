import React, { useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import WeatherSearch from "../components/WeatherSearch";
import WeatherHighlights from "../components/WeatherHighlights";
import WeatherForecast from "../components/WeatherForecast";
import { useWeather } from "../hooks/useWeather";

export default function Home() {
  const { weather, loading, error, fetchWeather } = useWeather();

  useEffect(() => {
    fetchWeather("Cabanatuan");
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-default text-2xl font-normal">Good Morning,</span>
          <h1 className="text-default text-4xl font-semibold">Explorer</h1>
          <p className="text-default text-sm">Let's check the weather today.</p>

          <div className="border border-white/20 rounded-2xl p-4 backdrop-blur-xs">
            {loading && <p className="text-center text-white/50 px-10">Loading...</p>}
            {error && <p className="text-white/50">{error}</p>}
            {weather && <WeatherCard weather={weather} />}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* 🔥 pass function here */}
          <WeatherSearch fetchWeather={fetchWeather} />

          {<WeatherHighlights weather={weather} />}
          {<WeatherForecast weather={weather} />}
        </div>
      </div>
    </div>
  );
}