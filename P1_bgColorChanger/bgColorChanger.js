const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.id === "black") {
      body.style.backgroundColor = "#363636";
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = "#DC2F2F";
    }
    if (e.target.id === "orange") {
      body.style.backgroundColor = "#FF894C";
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = "#F8F8F8";
    }
  });
});

//             ***** Method 2 *****

// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");

// const colors = {
//   black: "#363636",
//   red: "#DC2F2F",
//   orange: "#FF894C",
//   white: "#F8F8F8",
// };

// buttons.forEach((button) => {
//   button.addEventListener("click", function (e) {
//     body.style.backgroundColor = colors[e.target.id];
//   });
// });
