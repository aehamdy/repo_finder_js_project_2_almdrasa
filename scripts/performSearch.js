import setSearchResult from "./setSearchResults.js";

const USERS_API = "https://api.github.com/search/users?q=";
// const USERS_API = "https://api.github.com/search/users?q=apple+org";

const performSearch = (searchTerm, isUserSelected) => {
    const typeQuery = isUserSelected ? "+type:user" : "+type:org";

    fetch(`${USERS_API}${searchTerm}${typeQuery}`)
        .then((result) => result.json())
        .then((response) => setSearchResult(response.items));
};

export default performSearch;