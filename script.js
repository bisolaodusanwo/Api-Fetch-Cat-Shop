//fetching from cat api
let catData;

async function getCat() {
  //here using the try and catch
  
  try {
    //fetching from cat api
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10" //endpoint
    );
    //here is converting response to json
    catData = await response.json();
    updateUi();
    //setting the results gotten from the cat api to data
    console.log(catData, "catData");
    // return results;
  } catch (error) {
    //here is catching error
    console.log(error, "error");
  }
}

getCat();
console.log(catData, "data");

const catContainer = document.querySelector(".catContainer");

const updateUi = () => {
  for (let cat of catData) {
    const catImage = cat.url;
    const catName = cat.id;
    const cardBody = document.createElement("div");
    cardBody.classList.add("cat-card");
    console.log(cat, "cat here");
    cardBody.innerHTML = `
<img
src="${catImage}"
alt=""
/>
<div class="cat-card-content">
<div>
  <p>Name:</p>
  <p>${catName}</p>   
</div>
<div>
  <p>Age:</p>
  <p>1.5</p>
</div>
<div>
  <p>Breed:</p>
  <p>Tabby</p>
</div>
<div>
  <p>Color:</p>
  <p>Honey brown</p>
</div>
</div>
`;

    catContainer.appendChild(cardBody);
  }
};