let tempC = document.getElementById('tempC')
let tempF = document.getElementById('tempF')
let feelsLikeC = document.getElementById('feels-likeC')
let feelsLikeF = document.getElementById('feels-likeF')
let minTemp = document.getElementById('min_temp')
let maxTemp = document.getElementById('max_temp')
let cityName = document.getElementById("city-name")
let condition = document.getElementById('condition')
let humidity = document.getElementById('humidity')
let wind = document.getElementById('wind')
let winddegree = document.getElementById('winddegree')
let conditionImage = document.getElementById('condition-img')
let region = document.getElementById('region')
let city = "gujranwala";

let upperCaseFletter = (variable)=>{
    let fletter = variable[0].toUpperCase();
    let rletter = variable.slice(1);
    rletter = rletter.toLowerCase();
    variable = fletter+rletter;
    return variable;
    }


document.getElementById('btn-search').addEventListener('click' , ()=>{
    city = document.getElementById('search').value
    document.getElementById('search').value = ""
	getWeather(city)
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cd5be48b38msh804c03773c683c9p1dce6bjsn494b46d75180',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityName.innerHTML = upperCaseFletter(city)
	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+ city, options)
	.then(response => response.json())
	.then((response) =>{
        region.innerHTML = `${response.location.region}, ${response.location.country}`
		tempC.innerHTML = response.current.temp_c;
		tempF.innerHTML = response.current.temp_f;
		feelsLikeC.innerHTML = response.current.feelslike_c
		feelsLikeF.innerHTML = response.current.feelslike_f
		condition.innerHTML = response.current.condition.text
		conditionImage.innerHTML = `<img src="${response.current.condition.icon}">`
		humidity.innerHTML = response.current.humidity
		wind.innerHTML = response.current.wind_kph
		winddegree.innerHTML = response.current.wind_dir+ " & " + response.current.wind_degree
		console.log(response)})
	.catch(err => console.error(err));
}

getWeather(city)
