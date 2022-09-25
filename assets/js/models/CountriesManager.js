let countriesManager = (function () {


    class CountriesManager {

        constructor() {
            this.allCountries = [];
        }

        getAllCountries() {

            return getRes(`https://restcountries.com/v3.1/all`)
                .then(data => {
                    return data;
                }).catch(err => {
                    console.log(err);
                })
        }

        searchCountryByName(countryName) {

            let url = `https://restcountries.com/v3.1/name/${countryName}`;

            if (!countryName) {
                url = "https://restcountries.com/v3.1/all";
            }

            return getRes(url)
                .then(data => {
                    return data;
                }).catch(err => {
                    console.log(err);
                })
        }

        getForecast(latitude, longitude) {
            console.log(latitude, longitude);

            return getRes(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`)
                .then(data => {
                    return data;
                }).catch(err => {
                    console.log(err);
                })
        }

    }

    return new CountriesManager();

})();