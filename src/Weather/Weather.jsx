import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import sun from "../assets/sun.svg";
// const KEY = "ea0ec28f12d74928b6371112231908"

const Weather = () => {
    const [weatherData, setWeatherData] = useState({}); 
    const {city} = useParams();  
    const navigate = useNavigate();
    
    const getWeather = async()=>{
        try{
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=ea0ec28f12d74928b6371112231908&q=${city}&aqi=no`);
            const data = await response.json();
            if(response.ok) {
                setWeatherData(data);
            }
            else{
                throw new Error("Something went wrong") 
            }
        }
        catch(err){
            throw new Error(err.message);
        }
    }

    useEffect(()=>{
        getWeather()
    },[])
    
    if(!weatherData.location || !weatherData.current) return <p>Loading...</p>
    const {location : {name}, current : {condition : {text}, temp_c}} = weatherData;

  return (
    <div>
        <button onClick={()=>navigate("-1")} className="text-base bg-violet-600 rounded-full text-white h-12 w-36 mt-5 ml-4">&larr; Go to Home</button>
        <div className= "h-96 w-2/4 mx-auto my-auto bg-slate-200 opacity-40 rounded-2xl flex items-center justify-evenly">
            <div className="h-40 w-52 flex justify-center items-center">
                <img src={sun} alt={name} />
            </div>
            <div className="w-96 h-60 flex flex-col mt-5">
                <h3 className="text-2xl text-black font-bold opacity-100">Today</h3>
                <h2 className="text-5xl font-bold">{name}</h2>
                <div className="mt-3 text-lg">
                    <h3 className="text-xl">Temperature : {temp_c}&#176;C</h3>
                    <h3>{text}</h3>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Weather