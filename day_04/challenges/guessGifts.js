const wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

const presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

const guessGifts = (arr1, arr2) => {
    let guesses = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i].size == arr2[j].size && arr1[i].clatters == arr2[j].clatters && arr1[i].weight == arr2[j].weight) {
                guesses.push(arr1[i].name);
            }
        }
    } return guesses;
}

console.log(guessGifts(wishlist, presents)); // must return ["Toy Car", "Mini Puzzle"]