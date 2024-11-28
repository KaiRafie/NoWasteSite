//get the container & the template
const itemsTemplate = document.querySelector('.item-template');
const itemsContainer = document.querySelector('.item-container');

// to load the data depending on the choice

function loadFood(data) {
    //The checkboxes

    // diets
    const isVegan = document.querySelector('#vegan').checked;
    const isVegetarian = document.querySelector('#vegetarian').checked;
    const isGlutenFree = document.querySelector('#gluten-free').checked;
    const isHalal = document.querySelector('#halal').checked;

    //items
    const isDrink = document.querySelector('#drink').checked;
    const isMainDish = document.querySelector('#main-dish').checked;
    const isSideDish = document.querySelector('#side-dish').checked;
    const isDessert = document.querySelector('#dessert').checked;

    //unload data
    unloadFood();
    //loading data

    for (let i = 0; i < data.length; i++) {
        const food = data[i];
        const clone = itemsTemplate.content.cloneNode(true);
        clone.querySelector('.food-title').textContent = food.foodTitle;
        clone.querySelector('.food-image').src = food.foodImage;
        clone.querySelector('.food-description').textContent = food.foodDescription;
        clone.querySelector('.food-location').textContent = food.foodLocation;
        clone.querySelector('.provider-name').textContent = "provider: " + food.providerName;
        //load the data if the criteria is met

        //diets
        if (isVegan && food.dietOptions.vegan) {
            // do not load the food if the food has an allergy AND the client has it as well
            loadWithNoAllergies();
        }
        if (isVegetarian && food.dietOptions.vegetarian) {
            loadWithNoAllergies();
        }
        if (isGlutenFree && food.dietOptions.glutenFree) {
            loadWithNoAllergies();
        }
        if (isHalal && food.dietOptions.halal) {
            loadWithNoAllergies();
        }

        //items
        if (isDrink && food.items.drink) {
            loadWithNoAllergies();
        }
        if (isMainDish && food.items.mainDish) {
            loadWithNoAllergies();
        }
        if (isSideDish && food.items.sideDish) {
            loadWithNoAllergies();
        }
        if (isDessert && food.items.dessert) {
            loadWithNoAllergies();
        }


        //load the item if no allergy selected is found in the item
        function loadWithNoAllergies() {
            //allergies checkboxes
            const containsNuts = document.querySelector('#nuts').checked;
            const containsDairy = document.querySelector('#dairy').checked;
            const containsFish = document.querySelector('#fish').checked;
            const containsSoy = document.querySelector('#soy').checked;
        
            if (!(food.allergies.nuts && containsNuts) &&
                !(food.allergies.dairy && containsDairy) &&
                !(food.allergies.fish && containsFish) &&
                !(food.allergies.soy && containsSoy)) {
                itemsContainer.appendChild(clone);
            }
        }
    }

};
window.addEventListener('DOMContentLoaded', loadFood);

function unloadFood() {
    //get the containers
    const itemsContainer = document.querySelector('.item-container');
    itemsContainer.innerHTML = 
        `
          <div class="item-container">
              <template class="item-template">
                  <article class="food-item">
                      <div class="food-title"></div>
                      <img src="" alt="Plate-Image" class="food-image">
                      <p class="food-description"></p>
                      <p class="food-location"></p>
                      <p class="provider-name"></p>
                  </article>
              </template>
          </div>
        `;
}

//this function loads all the items once when the client visits the website
function firstLoad(item) {
    fetch('./data/food.json')
    .then(response => response.json())
    .then( () => {
        for (let i = 0; i < item.length; i++) {
            const food = item[i];
            const clone = itemsTemplate.content.cloneNode(true);
            clone.querySelector('.food-title').textContent = food.foodTitle;
            clone.querySelector('.food-image').src = food.foodImage;
            clone.querySelector('.food-description').textContent = food.foodDescription;
            clone.querySelector('.food-location').textContent = food.foodLocation;
            clone.querySelector('.provider-name').textContent = "provider: " + food.providerName;

            itemsContainer.appendChild(clone);
        }
    })
    .catch(error => {
        console.error('Error loading the data:', error);
    });
}
