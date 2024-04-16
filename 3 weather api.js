async function getApiData()
{
   try{
    let search=document.getElementById("search").value
    // console.log(search);
    let weatherData= await fetch(`http://api.weatherapi.com/v1/current.json?key=283eed24e3d14a1c8a9162805241502&q=${search}&aqi=no`)
    weatherData=await weatherData.json();
    // console.log(weatherData);

    

    let name=document.getElementById("name")
    name.innerHTML=`Name:  <span>${weatherData.location.name}</span>`

    let region=document.getElementById("region")
    region.innerHTML=`Region:  <span>${weatherData.location.region}</span>`

    let country=document.getElementById("country")
    country.innerHTML=`Country:  <span>${weatherData.location.country}</span>`

    let time=document.getElementById("time")
    time.innerHTML=`Local Data/Time:  <span>${weatherData.location.localtime}</span>`


    let tempLogo=document.getElementById("tempLogo") 
    tempLogo.classList.add("tempLogo")
    tempLogo.innerHTML=`<img src="${weatherData.current.condition.icon}" alt="" id="logo">`

    let condition=document.getElementById("condition")
      condition.innerText=`${weatherData.current.condition.text}`

    let temp=document.getElementById("temp")
    temp.innerHTML=`${weatherData.current.temp_c}<sup>o</sup>C / ${weatherData.current.temp_f}<sup>o</sup>F`



    let windData=document.getElementById("windData")
    windData.innerText=`${weatherData.current.wind_kph} Kmph`

    let humidityData=document.getElementById("humidityData")
    humidityData.innerText=`${weatherData.current.humidity} `

    let visibilityData=document.getElementById("visibilityData")
    visibilityData.innerText=`${weatherData.current.vis_km} Km`

    let pressureData=document.getElementById("pressureData")
    pressureData.innerText=`${weatherData.current.pressure_mb} mb`
   }

   catch(err){

   }
    
}   