// to load the data depending on the choice

function loadFood(data) {
    //get the containers
    const itemsContainer = document.querySelector('.item-container');
    const itemsTemplate = document.querySelector('.item-template');
    //The checkboxes
    
    // diets
    const isVegan = document.querySelector('#vegan').checked;
    const isVegetarian = document.querySelector('#vegetarian').checked;
    const isGlutenFree = document.querySelector('#gluten-free').checked;
    const isHalal = document.querySelector('#halal').checked;

    //allergies
    const containsNuts = document.querySelector('#nuts').checked;
    const containsDairy = document.querySelector('#dairy').checked;
    const containsFish = document.querySelector('#fish').checked;
    const containsSoy = document.querySelector('#soy').checked;

    //items
    const isDring = document.querySelector('#drink').checked;
    const isMainDish = document.querySelector('#main-dish').checked;
    const isSideDish = document.querySelector('#side-dish').checked;
    const isDessert = document.querySelector('#dessert').checked;

    //loading data
    
    for (let i = 0; i < data.length; i++) {
        const food = data[i];
        const clone = itemsTemplate.content.cloneNode(true);
        clone.querySelector('.food-title').textContent = food.foodTitle;
        clone.querySelector('.food-image').src = food.foodImage;
        clone.querySelector('.food-description').textContent = food.foodDescription;
        clone.querySelector('.food-location').textContent = food.foodLocation;
        clone.querySelector('.provider-name').textContent = food.providerName
        //load the data if the criteria is met
        
        //diets
        if (isVegan && food.dietOptions.vegan) {
            itemsContainer.appendChild(clone);
        }
        if (isVegetarian && food.dietOptions.vegetarian) {
            itemsContainer.appendChild(clone);
        }
        if (isGlutenFree && food.dietOptions.glutenFree) {
            itemsContainer.appendChild(clone);
        }
        if (isHalal && food.dietOptions.halal) {
            itemsContainer.appendChild(clone);
        }

        //allergies
        if (containsNuts && food.allergies.nuts) {
            itemsContainer.appendChild(clone);
        }
        if (containsDairy && food.allergies.dairy) {
            itemsContainer.appendChild(clone);
        }
        if (containsFish && food.allergies.fish) {
            itemsContainer.appendChild(clone);
        }
        if (containsSoy && food.allergies.soy) {
            itemsContainer.appendChild(clone);
        }

        //items
        if (isDring && food.items.drink) {
            itemsContainer.appendChild(clone);
        }
        if (isMainDish && food.items.mainDish) {
            itemsContainer.appendChild(clone);
        }
        if (isSideDish && food.items.sideDish) {
            itemsContainer.appendChild(clone);
        }
        if (isDessert && food.items.dessert) {
            itemsContainer.appendChild(clone);
        }
    }
    
};
window.addEventListener('DOMContentLoaded', loadFood);

function unloadFood() {
    
    //get the containers
    const itemsContainer = document.querySelector('.item-container');
    itemsContainer.innerHTML = '';
}
    