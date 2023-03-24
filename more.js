let weather0 = {
    "apiKey0": "5a3a7ec0bb14b84569fdad54505491ff",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=5a3a7ec0bb14b84569fdad54505491ff"
        )
            .then((response) => response.json())
            .then((data) => this.displayweather(data))
      
    },
    displayweather: function (data) {
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(temp, humidity, speed)
        document.querySelector(".temp0").innerText = temp + "°C";
        document.querySelector(".humidity0").innerText = humidity + "%";
        document.querySelector(".wind0").innerText = speed + " km/h";

    },
    
};

let weather1 = {
    "apiKey0": "5a3a7ec0bb14b84569fdad54505491ff",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=5a3a7ec0bb14b84569fdad54505491ff"
        )
            .then((response) => response.json())
            .then((data) => this.displayweather(data))
      
    },
    displayweather: function (data) {
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(temp, humidity, speed)
        document.querySelector(".temp1").innerText = temp + "°C";
        document.querySelector(".humidity1").innerText = humidity + "%";
        document.querySelector(".wind1").innerText = speed + " km/h";

    },
    
};

let weather2 = {
    "apiKey0": "5a3a7ec0bb14b84569fdad54505491ff",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric&appid=5a3a7ec0bb14b84569fdad54505491ff"
        )
            .then((response) => response.json())
            .then((data) => this.displayweather(data))
      
    },
    displayweather: function (data) {
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(temp, humidity, speed)
        document.querySelector(".temp2").innerText = temp + "°C";
        document.querySelector(".humidity2").innerText = humidity + "%";
        document.querySelector(".wind2").innerText = speed + " km/h";

    },
    
};

let weather3 = {
    "apiKey0": "5a3a7ec0bb14b84569fdad54505491ff",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=chennai&units=metric&appid=5a3a7ec0bb14b84569fdad54505491ff"
        )
            .then((response) => response.json())
            .then((data) => this.displayweather(data))
      
    },
    displayweather: function (data) {
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(temp, humidity, speed)
        document.querySelector(".temp3").innerText = temp + "°C";
        document.querySelector(".humidity3").innerText = humidity + "%";
        document.querySelector(".wind3").innerText = speed + " km/h";

    },
    
};

let weather4 = {
    "apiKey0": "5a3a7ec0bb14b84569fdad54505491ff",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=hyderabad&units=metric&appid=5a3a7ec0bb14b84569fdad54505491ff"
        )
            .then((response) => response.json())
            .then((data) => this.displayweather(data))
      
    },
    displayweather: function (data) {
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(temp, humidity, speed)
        document.querySelector(".temp4").innerText = temp + "°C";
        document.querySelector(".humidity4").innerText = humidity + "%";
        document.querySelector(".wind4").innerText = speed + " km/h";

    },
    
};

let weather5 = {
    "apiKey0": "5a3a7ec0bb14b84569fdad54505491ff",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=metric&appid=5a3a7ec0bb14b84569fdad54505491ff"
        )
            .then((response) => response.json())
            .then((data) => this.displayweather(data))
      
    },
    displayweather: function (data) {
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(temp, humidity, speed)
        document.querySelector(".temp5").innerText = temp + "°C";
        document.querySelector(".humidity5").innerText = humidity + "%";
        document.querySelector(".wind5").innerText = speed + " km/h";

    },
    
};


let weather6 = {
    "apiKey0": "5a3a7ec0bb14b84569fdad54505491ff",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=dubai&units=metric&appid=5a3a7ec0bb14b84569fdad54505491ff"
        )
            .then((response) => response.json())
            .then((data) => this.displayweather(data))
      
    },
    displayweather: function (data) {
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(temp, humidity, speed)
        document.querySelector(".temp6").innerText = temp + "°C";
        document.querySelector(".humidity6").innerText = humidity + "%";
        document.querySelector(".wind6").innerText = speed + " km/h";

    },
    
};

let weather7 = {
    "apiKey0": "5a3a7ec0bb14b84569fdad54505491ff",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=5a3a7ec0bb14b84569fdad54505491ff"
        )
            .then((response) => response.json())
            .then((data) => this.displayweather(data))
      
    },
    displayweather: function (data) {
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(temp, humidity, speed)
        document.querySelector(".temp7").innerText = temp + "°C";
        document.querySelector(".humidity7").innerText = humidity + "%";
        document.querySelector(".wind7").innerText = speed + " km/h";

    },
    
};

let weather8 = {
    "apiKey0": "5a3a7ec0bb14b84569fdad54505491ff",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=5a3a7ec0bb14b84569fdad54505491ff"
        )
            .then((response) => response.json())
            .then((data) => this.displayweather(data))
      
    },
    displayweather: function (data) {
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(temp, humidity, speed)
        document.querySelector(".temp8").innerText = temp + "°C";
        document.querySelector(".humidity8").innerText = humidity + "%";
        document.querySelector(".wind8").innerText = speed + " km/h";

    },
    
};

let weather9 = {
    "apiKey0": "5a3a7ec0bb14b84569fdad54505491ff",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=shanghai&units=metric&appid=5a3a7ec0bb14b84569fdad54505491ff"
        )
            .then((response) => response.json())
            .then((data) => this.displayweather(data))
      
    },
    displayweather: function (data) {
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(temp, humidity, speed)
        document.querySelector(".temp9").innerText = temp + "°C";
        document.querySelector(".humidity9").innerText = humidity + "%";
        document.querySelector(".wind9").innerText = speed + " km/h";

    },
    
};

weather0.fetchWeather();
weather1.fetchWeather();
weather2.fetchWeather();
weather3.fetchWeather();
weather4.fetchWeather();
weather5.fetchWeather();
weather6.fetchWeather();
weather7.fetchWeather();
weather8.fetchWeather();
weather9.fetchWeather();


