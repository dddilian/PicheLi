let router = (function () {

    class Router {


        handleHashChange() {

            let hash = location.hash.slice(1);

            if (hash === "") {
                location.hash = "#home";
            }

            //Криене и показване на бутони, в зависимост от това дали има юзър
            if (userManager.currentUser) {
                logoutNavLink.style.display = "inline";
                registerNavLink.style.display = "none";
                loginNavLink.style.display = "none";

                //searchForm.style.display = "flex";
                searchForm.classList.add("d-flex");
            } else {
                logoutNavLink.style.display = "none";
                registerNavLink.style.display = "inline";
                loginNavLink.style.display = "inline";

                searchForm.style.display = "none"; //или да се закоментира това и да се откоментира това в styles
                searchForm.classList.remove("d-flex");
            }

            switch (hash) {

                case "home":

                    if (!userManager.currentUser) { //guard - нелогнат юзър не може да достъпи home
                        location.hash = "#login";
                    }

                    homePageEl.style.display = "flex";
                    favoritesPageEl.style.display = "none";
                    detailsPageEl.style.display = "none";
                    loginPageEl.style.display = "none";
                    registerPageEl.style.display = "none";

                    errorPageEl.style.display = "none";
                    errorPageEl.classList.remove("d-flex");
                    renderHome();
                    break;

                case "favorites":

                    if (!userManager.currentUser) { //guard - нелогнат юзър не може да достъпи favorites
                        location.hash = "#login";
                    }

                    // homePageEl.classList.remove("d-flex"); //в случай, че ползваме класа на Bootstrap d-flex
                    homePageEl.style.display = "none";
                    favoritesPageEl.style.display = "flex";
                    detailsPageEl.style.display = "none";
                    loginPageEl.style.display = "none";
                    registerPageEl.style.display = "none";

                    errorPageEl.style.display = "none";
                    errorPageEl.classList.remove("d-flex");

                    searchForm.style.display = "none"; //или да се закоментира това и да се откоментира това в styles
                    searchForm.classList.remove("d-flex");
                    renderFavorites();
                    break;

                case "details":

                    if (!userManager.currentUser) { //guard - нелогнат юзър не може да достъпи details
                        location.hash = "#login";
                    }

                    homePageEl.style.display = "none";
                    favoritesPageEl.style.display = "none";
                    detailsPageEl.style.display = "flex";
                    loginPageEl.style.display = "none";
                    registerPageEl.style.display = "none";

                    errorPageEl.style.display = "none";
                    errorPageEl.classList.remove("d-flex");

                    searchForm.style.display = "none"; //или да се закоментира това и да се откоментира това в styles
                    searchForm.classList.remove("d-flex");
                    break;

                case "login":

                    if (userManager.currentUser) { //guard - логнат юзър не може да достъпи login
                        location.hash = "#home";
                    }

                    homePageEl.style.display = "none";
                    favoritesPageEl.style.display = "none";
                    detailsPageEl.style.display = "none";
                    loginPageEl.style.display = "flex";
                    registerPageEl.style.display = "none";

                    errorPageEl.style.display = "none";
                    errorPageEl.classList.remove("d-flex");
                    break;

                case "register":
                    if (userManager.currentUser) { //guard - логнат юзър не може да достъпи register
                        location.hash = "#home";
                    }
                    homePageEl.style.display = "none";
                    favoritesPageEl.style.display = "none";
                    detailsPageEl.style.display = "none";
                    loginPageEl.style.display = "none";
                    registerPageEl.style.display = "flex";

                    errorPageEl.style.display = "none";
                    errorPageEl.classList.remove("d-flex");
                    break;

                default:
                    homePageEl.style.display = "none";
                    favoritesPageEl.style.display = "none";
                    detailsPageEl.style.display = "none";
                    loginPageEl.style.display = "none";
                    registerPageEl.style.display = "none";
                    errorPageEl.style.display = "flex";
                    errorPageEl.classList.add("d-flex");

                    searchForm.style.display = "none"; //или да се закоментира това и да се откоментира това в styles
                    searchForm.classList.remove("d-flex");

                    break;
            }

        }


    }



    return new Router();
})()