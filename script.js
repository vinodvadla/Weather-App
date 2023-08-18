
async function logData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=69ab268133de13c580f0629dd3ce6d6b`);
    let data = await response.json();
    console.log(data);
    let tempe = document.getElementById("temp");
    if(data.code=="404"){
        // document.querySelector(".weatherIcon").style.display="none";
        // document.querySelector(".details").style.display="none";
        // document.querySelector(".weather").style.display="none";
        // let div=document.createElement("div");
        // div.className="invalid";
        // div.innerHTML="Please Enter A Valid City"
        // document.appendChild(div);
    }
    else{
        // document.querySelector(".weatherIcon").style.display="block";
        // document.querySelector(".details").style.display="block";
        // document.querySelector(".weather").style.display="block";
    tempe.innerHTML = Math.round(data.main.temp) + "°C";
    let img = document.getElementById("img");
    if (data.weather[0].main == "Mist") {
        img.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        img.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Rain") {
        img.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Snow") {
        img.src = "images/snow.png";
    }
    else if (data.weather[0].main == "Clear") {
        img.src = "images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
        img.src = "images/clouds.png";
    }
    document.getElementById("wind").innerHTML=data.wind.speed+"Kmph";
    document.getElementById("humidity").innerHTML=data.main.humidity+"%"
}

}

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let input = document.getElementById("city");
    let val = input.value;
    logData(val);
    let CITY = document.getElementById("CITY");
    CITY.innerHTML = val;
})