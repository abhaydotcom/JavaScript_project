const apikey=  `b8dbb6e322482ebe2ba16d493b949acb`;


   async function weather(input){
       const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apikey}`);

       const data=await res.json();
       updateweather(data);
       console.log(data);
    }
    
    const cityEle=document.querySelector(".city");
    const tempEle=document.querySelector(".temp");
    const windspeed=document.querySelector(".windspeed");
    const humidity=document.querySelector(".humidity");
    const visibility=document.querySelector(".visibility");
    const discription=document.querySelector(".tempdes");
    const date=document.querySelector(".date");
    const descriptionIcon = document.querySelector(".description i");



    function updateweather(data){
        cityEle.textContent=`${data.name}`;
        tempEle.textContent=`${Math.round(data.main.temp)}°`;
        windspeed.textContent=`${Math.round(data.wind.speed)} km/h`;
        humidity.textContent=`${data.main.humidity}%`;
        visibility.textContent=`${data.visibility/1000} km`
        discription.textContent=data.weather[0].description;
        const currdate=new Date();
        date.textContent=currdate.toDateString();
        const weatherIconName = getWeatherIconName(data.weather[0].main);
         descriptionIcon.innerHTML = `<i class="material-icons">${weatherIconName}</i>`;

    }
    const form=document.querySelector(".searchForm");
    const inputbox=document.querySelector(".searchtype");
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const input=inputbox.value;
        if(input!=''){
            weather(input);
            inputbox.value='';
        }
    })

    function getWeatherIconName(weatherCondition) {
        const iconMap = {
            Clear: "wb_sunny",
            Clouds: "wb_cloudy",
            Rain: "umbrella",
            Thunderstorm: "flash_on",
            Drizzle: "grain",
            Snow: "ac_unit",
            Mist: "cloud",
            Smoke: "cloud",
            Haze: "cloud",
            Fog: "cloud",
        };
        return iconMap[weatherCondition] || "help";
}