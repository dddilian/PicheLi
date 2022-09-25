function renderHome() {
    console.log("Рендерираме home page");

    showLoadingDiv(homePageEl);

    countriesManager.getAllCountries()
        .then(countries => {
            
            printCountriesCards(countries, homePageEl);

        }).catch(err => {
            console.log(err);
        }).finally(() => {
            // removeLoadingDiv(homePageEl);
        })

};