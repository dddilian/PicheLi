window.addEventListener("hashchange", router.handleHashChange);
window.addEventListener("load", router.handleHashChange);

logoutNavLink.addEventListener("click", function (e) {
    e.preventDefault();

    userManager.logout();
    //! закоментираните работи реално се управляват в рутера
    // logoutNavLink.style.display = "none";
    // registerNavLink.style.display = "inline";
    // loginNavLink.style.display = "inline";

    location.hash = "#login";

});





function search(e) {
    // console.log(e);

    showLoadingDiv(homePageEl);
    countriesManager.searchCountryByName(e.target.value)
        .then(countries => {
            printCountriesCards(countries, homePageEl);
        }).catch(err => {
            console.log(err);
        })
};


function debounce(functionToBeDebounced, time) {

    let timerId;

    return function (...params) {
        clearTimeout(timerId);
        timerId = setTimeout(functionToBeDebounced, time, ...params);
    }

};

let debouncedSearch = debounce(search, 1000);

searchInputEl.addEventListener("input", debouncedSearch);