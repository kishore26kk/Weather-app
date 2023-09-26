import { useNavigate, useParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react";
import sun from "../assets/sun.svg";
import cloudy from "../assets/cloudy.png"
import cloudsm from "../assets/cloudsm.svg";
import cloud from "../assets/Cloud_1_solid.svg";
import Spinner from "../ui/Spinner";

const API_KEY = "ea0ec28f12d74928b6371112231908"

const Weather = () => {
    const [weatherData, setWeatherData] = useState({}); 
    const {city} = useParams();  
    const navigate = useNavigate();

    const getWeather = useCallback(async() => {
        try{
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
            const data = await response.json();
            if(response.ok) {
                setWeatherData(data);
            }
            else{
                throw new Error("Something went wrong") 
            }
        }
        catch(err){
            console.log(err.message);
        } 
    },[]);

    useEffect(()=>{
        getWeather()
    },[city,getWeather])
    
    if(!weatherData.location || !weatherData.current) return <Spinner />
    const {location : {name, country}, current : {condition : {text, icon}, humidity, wind_kph, temp_c}} = weatherData;
 
  return (
    <div>
        <button onClick={()=>navigate("/")} className="text-base bg-violet-600 rounded-full text-white h-12 w-36 mt-5 ml-4 hover:bg-violet-500">&larr; Go to Home</button>
        <div className= "h-96 w-2/4 mx-auto my-auto bg-slate-200 opacity-40 rounded-2xl flex items-center justify-evenly shadow-2xl">
            <div className="h-40 w-52 flex justify-center items-center">
                {text === "Partly cloudy" && <img src={cloudy} alt={name} />}
                {text === "Clear" && <img src={cloudsm} alt={name} />}
                {text === "Sunny" && <img src={sun} alt={name} />}
                {/* {text === "mist" && <img src={} alt={name}/>} */}
                {text === "Cloudy" && <img src={cloud} alt={name} />}
            </div>
            <div className="w-96 h-60 flex flex-col">
                <h3 className="text-2xl text-black font-bold opacity-100">Today</h3>
                <h2 className="text-5xl font-bold">{name}</h2>
                <div className="mt-3 text-lg">
                    <h3 className="text-xl">Temperature : {temp_c}&#176;C</h3>
                    <div className="flex my-2">
                        <h2>{text}</h2>
                        <img src={icon} alt="icon" className="h-8"/>
                    </div>   
                    <h3 className="text-lg mt-1">{country}</h3>
                    <h3 className="mt-1">Humidity : {humidity}</h3>
                    <h3 className="mt-1">Wind Speed : {wind_kph}</h3>
                </div> 
            </div>
        </div> 
    </div>
  )
}

export default Weather