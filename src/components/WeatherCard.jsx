const weatherCard = ({ weather }) => {
  const icon = weather.weather[0].icon;
  return (
    <>
      <div className="">
        <div className="flex justify-between text-white py-2">
          <span className="flex items-center gap-2 text-xl">
            <i class="fa-solid fa-location-dot"></i>
            <p>
              {weather.name}, {weather.sys.country}
            </p>
          </span>
          <a href="#">
            <i class="fa-solid fa-ellipsis"></i>
          </a>
        </div>
        <span className="flex items-center gap-10 text-5xl text-white font-normal">
          {weather.main.temp}°C
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather icon"
          />
        </span>
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-lg text-white">
              {weather.weather[0].description}
            </p>
          </div>
          <span className="flex items-center justify-between gap-2 text-white">
            <i class="fa-solid fa-droplet"></i>
            <div>
              <p className="font-normal text-xs">Humidity</p>
              <p>{weather.main.humidity}%</p>
            </div>
            <i class="fa-solid fa-wind"></i>
            <div>
               <p className="font-normal text-xs">Wind</p>
              <p>{weather.main.humidity}%</p>
            </div>
            <i class="fa-solid fa-sun"></i>
            <div>
              <p className="font-normal text-xs">UV Index</p>
              <p>{weather.main.humidity}%</p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default weatherCard;
