let emojiContainer = document.getElementById("emoji-container");
let searchField = document.getElementById("search");

function filterEmojis(value) {
    let filteredData = emojiList.filter(e => {
        if (e.description.indexOf(value) != -1) {
            return true;
        }

        if (e.aliases.some(e => e.startsWith(value))) {
            return true;
        }
        if (e.tags.some(e => e.startsWith(value))) {
            return true;
        }
    })
    displayEmoji(filteredData);
}

function displayEmoji(emojiList) {
    emojiContainer.innerHTML = "";
    emojiList.forEach(e => {
        let newRow = document.createElement("tr");
        let newEmoji = document.createElement("span");
        let newAlias = document.createElement("td");
        let newDescription = document.createElement("td");


        newEmoji.classList.add("emoji");
        newAlias.classList.add("alias");
        newDescription.classList.add("desc");

        newEmoji.innerText = e.emoji;
        let aliases = e.aliases.join(", ");
        newAlias.innerText = aliases.replaceAll("_", " ");
        newDescription.innerText = e.description;

        newRow.append(newEmoji);
        newRow.append(newAlias);
        newRow.append(newDescription);

        newRow.classList.add("row");

        emojiContainer.append(newRow);
    })
}

window.addEventListener("load", () => { displayEmoji(emojiList) });

searchField.addEventListener('keyup', (e) => {
    let value = e.target.value;
    console.log(e);
    filterEmojis(value)
})