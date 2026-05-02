import React from "react";

export default function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-normal">Good Morning</span>
            <h1 className="text-4xl font-semibold">Explorer</h1>
            <p className="text-sm font-normal">Let'check the weather today.</p>

            <div className="border border-white/70 p-5 backdrop-blur-xs ">
              <div>
                <span>San Francisco, CA</span>
                <span>18*C Cloudy</span>
                <div>
                  <span>
                    <img src="" alt="" />
                    <div>
                      <p>Humidity</p>
                      <p>72%</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <span>Search Location</span>
            </div>
            <div>
              <span>Today's Highligh</span>
            </div>
            <div>
              <span>7-Day Forecast</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
