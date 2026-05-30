import { useState } from 'react'

import {useEffect} from 'react'
import { FaSearch } from "react-icons/fa";
import './Wheather.css'

export default function Wheather(){
   const [query,setQuery]=useState("Mumbai");
  const [data,setData]=useState();
  const [dataQuery,setDataQuery]=useState("");
  const [flag,setFlag]=useState(false);
  const [date,setDate]=useState("2026-06-29")
  let newdate=new Date()
  

  useEffect(()=>{
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=e910b58b42c3474880b111229262805&q=${query}&days=1&aqi=yes&alerts=yes`).then((data)=>data.json()).then((res)=>{
    setData(res.forecast.forecastday[0]
);
    console.log(res.forecast.forecastday
[0]);
    
    setFlag(true);
   
    
  });
},[query]);

function serach(){

  if(dataQuery===""){
    return ;
  }

  setQuery(dataQuery);
  setDataQuery("");

}




 return (
 <>
 

 
{flag && <div className="Entire-container">
<div className="card-content1"></div>
<div className="card-content2">

<div className="current-cart1"><input type="text" onChange={(e)=>setDataQuery(e.target.value)}/>
<button onClick={()=>serach()}><FaSearch/></button></div>
<div className="current-cart2">

<div style={{color:"white"}}>
  <h7>{query}</h7>
  <p>Rain Possiblity: {data.day.daily_chance_of_rain}%</p>
  <h8   className="temp"> {data.day.maxtemp_c}° C</h8>
  

</div>
<img  src={data.day.condition.icon}></img>



</div>



<div className="current-cart3">


  <div className="cart">

    <img src={data.hour[0].condition.icon}/>
    <h11>{data.hour[0].time}</h11>
    <h9>Rain : {data.hour[0].chance_of_rain
} %</h9>
    <h54>{data.hour[0].
temp_c
} C</h54>








  </div>
  <div className="cart">
       <img src={data.hour[1].condition.icon}/>
    <h11>{data.hour[1].time}</h11>
    <h9>Rain : {data.hour[1].chance_of_rain
} %</h9>
    <h54>{data.hour[1].
temp_c
} °C</h54>
  </div>
  
  <div className="cart">
       <img src={data.hour[2].condition.icon}/>
    <h11>{data.hour[2].time}</h11>
    <h9>{data.hour[2].chance_of_rain} %</h9>
    <h54>{data.hour[2].
temp_c
} °C</h54>
  </div>
  <div className="cart">
       <img src={data.hour[3].condition.icon}/>
    <h11>{data.hour[3].time}</h11>
    <h9>Rain : {data.hour[3].chance_of_rain
} %</h9>
    <h54>{data.hour[3].
temp_c
} °C</h54>
  </div>
  <div className="cart">
       <img src={data.hour[4].condition.icon}/>
    <h11>{data.hour[4].time}</h11>
    <h9>Rain : {data.hour[4].chance_of_rain
} %</h9>
    <h54>{data.hour[4].
temp_c
} °C</h54>
  </div>
  <div className="cart">
       <img src={data.hour[5].condition.icon}/>
    <h11>{data.hour[5].time}</h11>
    <h9>Rain : {data.hour[5].chance_of_rain
} %</h9>
    <h54>{data.hour[5].
temp_c
} °C</h54>
  </div>
  <div className="cart">
       <img src={data.hour[6].condition.icon}/>
    <h11>{data.hour[6].time}</h11>
    <h9>Rain : {data.hour[6].chance_of_rain
} %</h9>
    <h54>{data.hour[6].
temp_c
} °C</h54>

  </div>
  <div className="cart">
       <img src={data.hour[7].condition.icon}/>
    <h11>{data.hour[7].time}</h11>
    <h9>Rain : {data.hour[7].chance_of_rain
} %</h9>
    <h54>{data.hour[7].
temp_c
} °C</h54>

  </div>









</div>

<div className="current-cart4">

  <h89>Air Conditions</h89>
</div>

<div className="current-cart5">
  <div className="Air-cart">real feel<br/>{data.day.avgtemp_c} C</div>
<div className="Air-cart">maximum wind speed <br></br>{data.day.
maxwind_kph} km/h</div>
<div className="Air-cart">Average Humidity <br/>{data.day.
avghumidity}</div>
<div className="Air-cart">UV Index <br></br>{data.day.uv}</div>



</div>





</div>




  
</div>
}






</>
 )
}