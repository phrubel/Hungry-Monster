// Search Button Handler
document.getElementById("search-button").addEventListener("click", () => {
  const foodInput = document.getElementById("food-input").value;

  // Api Call
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodInput}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("foods").innerHTML = "";
      document.getElementById("foods-details").innerHTML = "";
      const foods = document.getElementById("foods");
      data.meals.forEach((foodElements) => {
        const food = document.createElement("div")
        food.innerHTML = `<img src="${foodElements.strMealThumb}" onClick="getFoodsDetails(${foodElements.idmeal})">
        <h2 onClick="getFoodsDetails(${foodElements.idmeal})">${foodElements.strMeal}</h2>`;
        foods.appendChild(food);
      });
    })

    // Error handling
    .catch((error) => {
      console.log(error);
      document.getElementById("foods").innerHTML = "";
      document.getElementById("foods-details").innerHTML = "";
      const foods = document.getElementById("foods");
      const wrong = document.createElement("h3");
      wrong.innerHTML = `Something Wrong....please try again!!!!`;
      foods.appendChild(wrong);
    });
});

// food details Click handler
const getFoodsDetails = (lookupFoodId) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${lookupFoodId}`)
    .then((response) => response.json())
    .then((data) => {
      const foodsDetails = document.getElementById("foods-details");
      document.getElementById("foods-details").innerHTML = "";
        document.getElementById("foods-details").style.display = "block";
      const foodDetail = document.createElement("div")
      foodDetail.innerHTML = `<img src="${data.meals[0].strMealThumb}">
        <h2>${data.meals[0].strMeal} </h2>

        <h2>Catagories:${data.meals[0].strCategory} </h2>
        
        <h4>${data.meals[0].strIngredient1}</h4>
        <h4>${data.meals[0].strIngredient2}</h4>
        <h4>${data.meals[0].strIngredient3}</h4>
        <h4>${data.meals[0].strIngredient4}</h4>
        <h4>${data.meals[0].strIngredient5}</h4>
        <h4>${data.meals[0].strIngredient6}</h4>
        <h4>${data.meals[0].strIngredient7}</h4>
        <h4>${data.meals[0].strIngredient8}</h4>
        <h4>${data.meals[0].strIngredient9}</h4>
        <h4>${data.meals[0].strIngredient10}</h4>`;
      foodsDetails.appendChild(foodDetail);
    });
};
