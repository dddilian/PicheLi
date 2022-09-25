class User {

    constructor(username, password, favoriteLocations = []) {
        this.username = username;
        this.password = password;
        this.favoriteLocations = favoriteLocations;
    }


    addToFavorites(countryName) {
        if (!this.countryIsInFavorites(countryName)) { //ако локацията не е вече в любими
            this.favoriteLocations.push(countryName);
        }
    }

    removeFromFavorites(countryName) {
        let idxOfCountry = this.favoriteLocations.indexOf(countryName);
        this.favoriteLocations.splice(idxOfCountry, 1);
    }

    countryIsInFavorites(countryName) {
        return this.favoriteLocations.some(name => name === countryName);
    }


}