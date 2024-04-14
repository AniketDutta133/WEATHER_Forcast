import logo from './logo.svg';
import './index.css';

import clear_icon from "./components/Assets/clear.png"
import cloud_icon from "./components/Assets/cloud.png"
import drizzle_icon from "./components/Assets/drizzle.png"
import humidity_icon from "./components/Assets/humidity.png"
import rain_icon from "./components/Assets/rain.png"
import search_icon from "./components/Assets/search.png"
import snow_icon from "./components/Assets/snow.png"
import wind_icon from "./components/Assets/wind.png"


function WeatherApp() {

  

  return (
   
    <div className="App w-[607px] h-[689px] m-auto mt-[45px] rounded items-center bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="main flex justify-center pt-20 gap-3 ">
      <input className="cityinput w-[300px] h-12 rounded-lg border-black pl-2 text-gray-600 font-bold text-sm" type="text" placeholder='Search' />
      <div  className="icon  w-9 h-12 flex justify-center items-center bg-white rounded-xl hover:bg-slate-300 " > 
        <img  src={search_icon} alt="search" />

      </div>
    </div>
    <div className="weather_image mt-7 flex justify-center">
      <img src={cloud_icon} alt="loding" />
    </div>
    <div className="temp flex justify-center text-white text-3xl font-bold">24ºC</div>
    <div className="weather_location flex justify-center text-white text-3xl font-bold">London</div>
    <div className="datacontainer mt-12  text-white flex justify-center">
      <div className="element1  m-10 flex items-center gap-3">
        <img src={humidity_icon} alt="" className='icon1' />
        <div className="data font-semibold text-xl ">
          <div className="humidity_perchentage">64%</div>
          <div className="text font-semibold text-xl">Humidity</div>
        </div>
      </div>
      <div className="element m-20 flex items-center gap-3">
        <img src={wind_icon} alt="" className='icon1 mt-2' />
        <div className="data font-semibold text-xl">
          <div className="wind_rate">20 km/h</div>
          <div className="text text-lg">Wind Speed</div>
        </div>
      </div>
    </div>
  </div>
  
  );
}


export default WeatherApp;
