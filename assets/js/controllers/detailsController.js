function renderDetails(lat, long, countryName, flagSrc) {

    showLoadingDiv(detailsPageEl);

    countriesManager.getForecast(lat, long)
        .then(data => {

            let nextSixHoursData = data.properties.timeseries.slice(0, 6);
            printForecast(nextSixHoursData, countryName, flagSrc);

        }).catch(err => {
            console.log(err);
        }).finally(() => {
            //
        })


}

function printForecast(forecastData, countryName, flagSrc) {
    detailsPageEl.innerHTML = "";

    let dataContainer = document.createElement("div");
    dataContainer.classList.add("dataContainer");

    let countryNameH2 = document.createElement("h2");
    countryNameH2.innerText = countryName;

    let flagImage = document.createElement("img");
    flagImage.src = flagSrc;

    dataContainer.append(countryNameH2, flagImage);


    console.log(forecastData);
    forecastData.forEach(timeOfDay => {

        let hour = new Date(timeOfDay.time);
        let temperature = timeOfDay.data.instant.details.air_temperature;

        console.log(hour, temperature);

        let newP = document.createElement("p");
        newP.innerHTML = `<b>Hour:</b> ${hour} => <b>Temperature:</b> ${temperature} &#8451`;
        dataContainer.append(newP);

    })


    detailsPageEl.append(dataContainer);






}




// {
//     "time": "2022-09-25T21:00:00Z",
//     "data": {
//         "instant": {
//             "details": {
//                 "air_pressure_at_sea_level": 1003.4,
//                 "air_temperature": 28.4,
//                 "cloud_area_fraction": 100,
//                 "relative_humidity": 80.3,
//                 "wind_from_direction": 197.2,
//                 "wind_speed": 10.1
//             }
//         },
//         "next_12_hours": {
//             "summary": {
//                 "symbol_code": "cloudy"
//             }
//         },
//         "next_1_hours": {
//             "summary": {
//                 "symbol_code": "partlycloudy_night"
//             },
//             "details": {
//                 "precipitation_amount": 0
//             }
//         },
//         "next_6_hours": {
//             "summary": {
//                 "symbol_code": "cloudy"
//             },
//             "details": {
//                 "precipitation_amount": 0.2
//             }
//         }
//     }
// }