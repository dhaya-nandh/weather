
    
const apiKey = "f7cff86ae350859a2650e8148bec39df"; // Replace with your OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var searchInput=document.querySelector(".search input")
var searchButton=document.querySelector(".search button")
var weatherimg=document.querySelector(".weather-icon")
async function checkweather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`)
    var data=await response.json();
    if(response.status == 404){
         document.querySelector(".error").style.display="block";
         document.querySelector(".weather").style.display="none";
    }
    else{
    
    var city=document.querySelector(".city").innerHTML=data.name;
    var temp=document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ " &deg;C";
    var huminity=document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
    var wind=document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";    
    if(data.weather[0].main=="Clouds"){
        weatherimg.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherimg.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist")
    {
        weatherimg.src="images/mist.png"
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherimg.src="images/rain.png"
    }
    else if(data.weather[0].main=="Snow")
    {
        weatherimg.src="images/snow.png"
    }
document.querySelector(".weather").style.display="block"; 
document.querySelector(".error").style.display="none";
}

 
}

searchButton.addEventListener("click",function(){
    checkweather(searchInput.value); 
})

