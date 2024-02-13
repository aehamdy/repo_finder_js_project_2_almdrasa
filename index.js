/*
    [x] Create function => performSearch(searchInput, usersInputElement)
    [x] Call performSearch inside button eventlistener
    -performSearch Implementation:
         * fetch data from url
        * if OK then show data in the page
        * if not, show error message
*/

import {searchInput, buttonElement, cardsElement, usersInputElement } from "./scripts/elements.js";
import performSearch from "./scripts/performSearch.js";

buttonElement.addEventListener("click", (e) => {
    e.preventDefault();
    performSearch(searchInput.value, usersInputElement.checked);
});