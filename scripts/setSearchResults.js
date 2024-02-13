import { cardsElement } from "./elements.js";

const setSearchResult = (data) => {
    let result = "";

    data.map((item) => {
        result += `
        <article class="card">
            <img class="img" loading="lazy" src="${item.avatar_url}"/>
            <h2 class="name"> ${item.login}</h2>
        </article>
        `;
    });

    cardsElement.innerHTML = result;
}

export default setSearchResult;