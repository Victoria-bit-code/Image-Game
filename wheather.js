async function weather() {
    let w = mySearch.value
    let key = "03b045c714fc2d8807187b7f0aef934c";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${key}`;
    let response = await fetch(url);
    let convert = await response.json();
    console.log(convert);
    count.innerText = convert.main.temp;
 }