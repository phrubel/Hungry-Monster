// Search Button Event Handler
document.getElementById("search-button").addEventListener("click", () => {
  document.getElementById("food-input").value;
});

// call api
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
 .then(response=>response.json())
  .then(data => displayFood(data));

// Display Food
const displayFood = (foods) => {
  const foodsDiv = document.getElementById("foods");
  foods.forEach(food => {
    const foodDiv = document.createElement("div");
    foodDiv.className = "food";
    const foodsInfo = `<h4>${strMeal.name} </h4>`;
    foodDiv.innerHtml = foodsInfo;
    foodsDiv.appendChild(foodDiv);
  });
};

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
//   .then((response) => response.json())
//   .then(data=>{
//       console.log(data);
//   })

// fetch('https://restcountries.eu/rest/v2/all')
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// });
