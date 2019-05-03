import React from 'react';
import './Result.css'
const Result = props => {
    const { date, city, sunrise, sunset, temp,
        pressure, wind, err } = props.weather
    let content = null;
    if (!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <>
                <h3>Wyniki wyszukiwania dla <em>{city}</em> </h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Aktualna temperatura: <em>{temp} &#176;C</em></h4>
                <h4>Wschód słońca dzisiaj o {sunriseTime}</h4>
                <h4>Zachód słońca dzisiaj o {sunsetTime}</h4>
                <h4>Aktualna siłą wiatru: {wind} m/s</h4>
                <h4>Aktualne ciśnienie: {pressure} hPa</h4>
            </>
        )
    }

    return (
        <div className="result">
            {err ? `Nie mam w bazie ${city}` : content}
        </div>
    );
}

export default Result;