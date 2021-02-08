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
        food.innerHTML = `<img src="${foodElements.strMealThumb}" onclick = "getSingleMale('${foodElements.idMeal}')">
        <h2 onclick = "getSingleMale('${foodElements.idMeal}')">${foodElements.strMeal}</h2>`;
        foods.appendChild(food);
      });
    })

});

const getSingleMale = (singleMale) =>{
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${singleMale}`)
  .then(res => res.json())
  .then(data => displayDetais(data.meals[0]))
}
 const displayDetais = (category) => {
    const foodsDetails = document.getElementById("foods-details");
  document.getElementById("foods-details").innerHTML = "";
    document.getElementById("foods-details").style.display = "block";
  const foodDetail = document.createElement("div")
  foodDetail.innerHTML = `<img src="${category.strMealThumb}">
    <h2>${category.strMeal} </h2>

    <h2>Catagories:${category.strCategory} </h2>
    
    <h4>${category.strIngredient1}</h4>
    <h4>${category.strIngredient2}</h4>
    <h4>${category.strIngredient3}</h4>
    <h4>${category.strIngredient4}</h4>
    <h4>${category.strIngredient5}</h4>
    <h4>${category.strIngredient6}</h4>
    <h4>${category.strIngredient7}</h4>
    <h4>${category.strIngredient8}</h4>
    <h4>${category.strIngredient9}</h4>
    <h4>${category.strIngredient10}</h4>`;
  foodsDetails.appendChild(foodDetail);
}