const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
// console.log(movieLists)
arrows.forEach((arrow,i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if(itemNumber - (4 + clickCounter) >= 0) {
            // console.log(movieLists[i])
             // movieLists[i].style.backgroundColor = "black"
            movieLists[i].style.transform = `translateX(${
              movieLists[i].computedStyleMap().get("transform")[0].x.value - 270}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)"
            clickCounter = 0; 
        }        
    });
    // console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value)
    console.log(movieLists[i].querySelectorAll("img").length);
});

// const arrows = document.querySelectorAll(".arrow");
// const movieLists = document.querySelectorAll(".movie-list");

// arrows.forEach((arrow, i) => {
//   const itemNumber = movieLists[i].querySelectorAll("img").length;
//   let clickCounter = 0;
//   arrow.addEventListener("click", () => {
//     const ratio = Math.floor(window.innerWidth / 270);
//     clickCounter++;
//     if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
//       movieLists[i].style.transform = `translateX(${
//         movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
//       }px)`;
//     } else {
//       movieLists[i].style.transform = "translateX(0)";
//       clickCounter = 0;
//     }
//   });