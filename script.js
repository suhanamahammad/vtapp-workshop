// Workshop popup

function closePopup() {
    document.getElementById("workshopPopup").style.display = "none";
}


// Cottage game

function findObject() {

    const objects = [
        "🌸 You found a magical flower!",
        "🦋 A butterfly landed on your hand!",
        "📖 You found an old history book!",
        "🍰 You found a freshly baked cake!",
        "🗝️ You discovered a mysterious key!",
        "🫖 You found a tiny tea set!",
        "🐈 A cottage cat appeared!"
    ];

    const randomNumber =
        Math.floor(Math.random() * objects.length);

    document.getElementById("gameResult").textContent =
        objects[randomNumber];
}