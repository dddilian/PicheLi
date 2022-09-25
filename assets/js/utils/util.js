function getRes(url, options = {}) {

    return fetch(url, options)
        .then(res => {
            //ако статуса е в неуспешния диапазон - 4xx - 5xx, хвърли тази грешка, за да може после да се влезе в catch
            if (!res.ok) {
                throw new Error("HTTP error " + res.status);
            }
            return res.json();
        })
};


function printCountriesCards(countries, container) {

    container.innerHTML = ""; //зачистваме всеки контейнер, преди да го напълним

    console.log(countries);

    countries.forEach(country => {

        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.style.width = "18rem";


        let cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top");
        cardImg.src = country.flags.png;

        let cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add("card-body", "d-flex", "flex-column", "align-items-center");

        let cardH5 = document.createElement("h5");
        cardH5.classList.add("card-title");
        cardH5.innerText = country.name.common;

        let cardP = document.createElement("p");
        cardP.classList.add("card-text");
        cardP.innerText = country.capital;

        cardBodyDiv.append(cardH5, cardP);

        let cardButtonsDiv = document.createElement("div");
        cardButtonsDiv.classList.add("d-flex", "align-items-center", "justify-content-between");

        let forecastButton = document.createElement("button");
        forecastButton.classList.add("btn", "btn-primary", "p-2", "m-2")
        forecastButton.innerText = "Check forecast";
        forecastButton.id = `${country.latlng[0]} ${country.latlng[1]}`; //координатите на страната - стринг, който трябва да се раздели по спейс

        let favoritesButton = document.createElement("button");
        favoritesButton.classList.add("btn", "btn-primary", "p-2", "m-2");

        //логика текст add to favorites/remove from favorites бутони 
        if (userManager.currentUser.countryIsInFavorites(country.name.common)) {
            favoritesButton.innerText = "Remove from favorites";
        } else {
            favoritesButton.innerText = "Add to favorites";
        }


        favoritesButton.id = country.name.common;

        forecastButton.addEventListener("click", function (e) {
            // console.log(e.target.id.split(" "));
            let [lat, long] = e.target.id.split(" ");

            renderDetails(lat, long, country.name.common, country.flags.png);
            location.hash = "#details";
        })

        //логика какво да става в зависимост от това дали страната е в любими или не
        favoritesButton.addEventListener("click", function (e) {

            if (userManager.currentUser.countryIsInFavorites(country.name.common)) { //ако страната вече е лайкната, махни я от лайкнати
                userManager.currentUser.removeFromFavorites(country.name.common);
                favoritesButton.innerText = "Add to favorites";

                if (location.hash === "#favorites") {
                    e.target.parentElement.parentElement.remove();
                }

            } else {
                userManager.currentUser.addToFavorites(country.name.common);
                favoritesButton.innerText = "Remove from favorites";
            }
            userManager.updateUser(userManager.currentUser); //ъпдейтни юзъра, каквото и да е ставало
        });

        cardButtonsDiv.append(forecastButton, favoritesButton);

        cardDiv.append(cardImg, cardBodyDiv, cardButtonsDiv);

        container.append(cardDiv);


    });

};


function showLoadingDiv(container) {
    let loadingDiv = document.createElement("div");
    loadingDiv.id = "loadingDiv";
    loadingDiv.innerText = "Loading...";
    container.append(loadingDiv);
}

function removeLoadingDiv(container) {
    let loadingDiv = document.getElementById("loadingDiv");
    container.remove(loadingDiv);
}