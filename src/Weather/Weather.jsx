import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import cloud from '../assets/cloud.jpg'

const url = 'https://open-weather13.p.rapidapi.com/city';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '472197bcb0msh72d701c74f491a8p1b9576jsnfb78f78d5552',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

const Weather = () => {
    const [weatherData, setWeatherData] = useState({});
    const {city} = useParams();
    const navigate = useNavigate();
    console.log(city);

    useEffect(()=>{
        const getWeather = async()=>{
            try{
                const response = await fetch(`https://open-weather13.p.rapidapi.com/city/${city}`,options);
                const data = await response.json();
                if(!response.ok) {
                    throw new Error("Something went wrong")
                }
                console.log(data);
                setWeatherData(data);
            }
            catch(err){
                console.log(err.message)
            }
        }
        getWeather()
    },[])

  return (
    <div>
        <button onClick={()=>navigate("/")} className="text-violet-700 text-base hover:underline"> &larr; Go to Home</button>
        <div className= "h-96 w-2/4 mx-auto my-auto bg-slate-200 opacity-40 rounded-2xl flex items-center">
            <div className="h-40 w-52 flex justify-center items-center">
                <img src={cloud} alt={city}/>
            </div>
            <div className="">
                
            </div>
        </div>
    </div>
  )
}

export default Weather 