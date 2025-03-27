async function getweather() {
    
const city=document.getElementById("search").value
var apikey="f7cff86ae350859a2650e8148bec39df";
var apiurl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
try{
    const response=await fetch(apiurl);
    if(!response.ok)
    {
        throw new Error("city not found");
    }
    const data=await response.json()
    displayWeather(data)
}catch(error){
    document.getElementById("weatherdetails").innerHTML="Error:"+ error.message;
}
}
function displayWeather(data){
    const details=`
    <p>City:${data.name}</p>
     <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather:${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>`;
    document.getElementById("weatherdetails").innerHTML=details;
}