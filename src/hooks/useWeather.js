import React from "react";
import { useState } from "react";
import { getWeatherByCity } from "../api/weatherApi";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);

      const res = await getWeatherByCity(city);
      setWeather(res.data);
    } catch (err) {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, fetchWeather };
};
