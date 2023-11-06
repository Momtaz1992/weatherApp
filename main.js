/* const apiKey="f46866bac7314acc03034766ec8a8927";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getData(city){   
       const response = await fetch(apiUrl + city + `&appid=${apiKey}`);   
       if(response.status ==404){
              document.querySelector(".error").style.display = "block";
              document.querySelector(".weather").style.display = "none";
       }else{
              const data = await response.json() 

       document.querySelector(".city").innerHTML = data.name;
       document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
       document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
       document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

       if(data.weather[0].main == "Clouds"){
              weatherIcon.src = "./images/clouds.png";
       }else if(data.weather[0].main == "Clear"){
              weatherIcon.src = "./images/clear.png";
       }else if(data.weather[0].main == "Rain"){
              weatherIcon.src = "./images/rain.png";
       }else if(data.weather[0].main == "Drizzle"){
              weatherIcon.src = "./images/drizzle.png";
       }else if(data.weather[0].main == "Mist"){
              weatherIcon.src = "./images/mist.png";
       }

       document.querySelector(".weather").style.display = "block";
       document.querySelector(".error").style.display = "none";
       }                                                                                  
}
searchBtn.addEventListener("click", ()=>{
       getData(searchBox.value);
})
 */

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const apiKey = "f46866bac7314acc03034766ec8a8927";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search .btnSearch");
const error = document.querySelector(".error");
const img = document.querySelector(".weather-icon");
const clear = document.querySelector(".btnClear");

async function getData(city){
       const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
       if(response.status == 404){
              error.style.display = "block";
              document.querySelector(".weather").style.display = "none";
       }else {
              const data = await response.json();

       document.querySelector(".city").innerHTML = data.name;
       document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
       document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
       document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

       if(data.weather[0].main == "Clouds"){
              img.src = "./images/clouds.png";
       }else if(data.weather[0].main == "Clear"){
              img.src = "./images/clear.png";
       }else if(data.weather[0].main == "Rain"){
              img.src = "./images/rain.png";
       }else if(data.weather[0].main == "Drizzle"){
              img.src = "./images/drizzle.png";
       }else if(data.weather[0].main == "Mist"){
              img.src = "./images/mist.png";
       }
       error.style.display="none";
       document.querySelector(".weather").style.display = "block"
       clear.addEventListener(("click",()=>{
              searchBox.value = "";
       }))
       }
}
searchBtn.addEventListener(("click"),()=>{
       getData(searchBox.value);
})
clear.addEventListener("click", () => {
       searchBox.value = "";
       document.querySelector(".weather").style.display = "none";});

