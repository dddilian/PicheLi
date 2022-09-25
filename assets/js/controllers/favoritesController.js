function renderFavorites() {
    console.log("Рендерираме favorites page");

    showLoadingDiv(favoritesPageEl);

    countriesManager.getAllCountries()
        .then(countries => {

            let favoriteCountries = countries.filter(country => userManager.currentUser.favoriteLocations.includes(country.name.common));

            printCountriesCards(favoriteCountries, favoritesPageEl);

        }).catch(err => {
            console.log(err);
        }).finally(() => {
            // removeLoadingDiv();
        })
};