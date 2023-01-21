const input=document.getElementById("input")
const maincontainerlower=document.getElementById("maincontainerlower")

async function searchme() {
    const responce= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
    console.log(responce);
    const data=await responce.json()
    console.log(data);
    maincontainerlower.innerHTML=`
        <div class="maincontainerlowerupper">
        <h3>Weather of ${input.value}</h3>
        </div>
        <div class="maincontainerlowerupperfirst">
        <h4>Sky condition: ${data.weather[0].description}</h4>
        </div>
        <div class="maincontainerlowerlowerfirst">
        <h4>Temperature : ${data.main.temp} C</h4>
        </div>
        <div class="maincontainerlowerlower">
        <h4>Wind Speed: ${data.wind.speed} km/h</h4>
        </div>
        <div class="maincontainerlowerlower">
        </div>
    `

}