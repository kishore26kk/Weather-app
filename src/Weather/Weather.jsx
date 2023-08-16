import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import cloud from '../assets/cloudsm.svg';
import sun from '../assets/sun.svg'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '472197bcb0msh72d701c74f491a8p1b9576jsnfb78f78d5552',
		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
	}
};

const Weather = () => {
    const [weatherData, setWeatherData] = useState({});
    const {city} = useParams();  
    const navigate = useNavigate();
    const kelvin = weatherData?.main?.temp;
    const celsius = (kelvin - 273.15);
    const weather  = weatherData.weather ? weatherData.weather[0].main : "";
    useEffect(()=>{
        const getWeather = async()=>{
            try{
                const response = await fetch(`https://weather-api99.p.rapidapi.com/weather?city=${city}`,options);
                const data = await response.json();
                if(!response.ok) {
                    throw new Error("Something went wrong")
                }
                setWeatherData(data);
            }
            catch(err){
                throw new Error(err.message);
            }
        }
        getWeather()
    },[city])

  return (
    <div>
        <button onClick={()=>navigate("/")} className="text-base bg-violet-600 rounded-full text-white h-12 w-36 mt-5 ml-4">&larr; Go to Home</button>
        <div className= "h-96 w-2/4 mx-auto my-auto bg-slate-200 opacity-40 rounded-2xl flex items-center justify-evenly">
            <div className="h-40 w-52 flex justify-center items-center">
                {weather === "Clouds" && <img src={cloud} alt={city} />}
                {weather === "Sunny" && <img src={sun} alt={city} />}
            </div>
            <div className="w-96 h-60 flex flex-col mt-5">
                <h3 className="text-2xl text-black font-bold opacity-100">Today</h3>
                <h2 className="text-5xl font-bold">{weatherData.name}</h2>
                <div className="mt-3 text-lg">
                    <h3 className="text-xl">Temperature : {celsius.toFixed(2)}&#176;C</h3>
                    <h3>{weather}</h3>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Weather 