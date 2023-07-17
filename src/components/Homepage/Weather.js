import React, { useState, useEffect } from "react";
import { WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';
import { FiInfo } from 'react-icons/fi';
import "./Weather.css";

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        getCurrentWeather();
    }, []);

    const getCurrentWeather = async () => {
        try {
            if (searchQuery) {
                // Fetch weather data based on search query
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=c743e897ce5b7dc65494d5d4083e4190`
                );
                handleResponse(response);
            } else {
                // Fetch weather data based on current location
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        const response = await fetch(
                            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=c743e897ce5b7dc65494d5d4083e4190`
                        );
                        handleResponse(response);
                    },
                    () => setError("Failed to fetch weather data.")
                );
            }
        } catch (error) {
            setError("Failed to fetch weather data.");
        }
    };

    const handleResponse = async (response) => {
        if (response.ok) {
            const data = await response.json();
            setWeatherData(data);
            setError("");
        } else {
            setError("Failed to fetch weather data.");
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        getCurrentWeather();
    };

    return (
        <>
            <div className="weather-container">
                <h2 className="header-container">Weather</h2>
                <form className="weather-form" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Enter city name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>

                {error && <p className="error-message">{error}</p>}

                {weatherData && (
                    <div className="weather-data">
                        <h2>{weatherData.name}</h2>
                        <div className="weather-info">
                            <div className="info-item">
                                <WiThermometer className="icon" />
                                <p>Temperature: {weatherData.main.temp}°C</p>
                            </div>
                            <div className="info-item">
                                <FiInfo className="icon" />
                                <p>Description: {weatherData.weather[0].description}</p>
                            </div>
                            <div className="info-item">
                                <WiHumidity className="icon" />
                                <p>Humidity: {weatherData.main.humidity}%</p>
                            </div>
                            <div className="info-item">
                                <WiStrongWind className="icon" />
                                <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                            </div>
                            <div className="info-item">
                                <WiThermometer className="icon" />
                                <p>Feels Like: {weatherData.main.feels_like}°C</p>
                            </div>
                            <div className="info-item">
                                <FiInfo className="icon" />
                                <p>Precipitation: {weatherData.weather[0].main}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Weather;
