const API_KEY = 'dd472306a0917affee278e103a917d72'
window.addEventListener('load', ()=>{
    let long;
    let lat;
    let tempDescription=document.querySelector('.temperature-description');
    let tempDegree = document.querySelector('.temperature-degree');
    let locTimezone = document.querySelector('.location-timezone');
    let metric_units = 'metric';
    let fahrenheit_units = 'imperial'
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
      
          long = position.coords.longitude;
          lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${metric_units}&appid=${API_KEY}`        
     
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const temp = data.current.temp;
                    const descr = data.current.weather[0].description;
                    const timezone = data.timezone
                     // Set DOM Elements from API
                     tempDegree.textContent = temp;
                     tempDescription.textContent = descr;
                    locTimezone.textContent = timezone;
                });
        });

     
    }

    function setIcons (icon,iconID){
        const skycons = new skycons({color: "white"});
        
    }
})