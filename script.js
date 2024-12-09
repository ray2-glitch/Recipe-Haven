
const recipes = {
    breakfast: [
        {
            title: "Pancakes",
            description: "Fluffy pancakes topped with syrup and fresh berries.",
            steps: [
                "1. In a bowl, whisk together flour, baking powder, sugar, and salt.",
                "2. In another bowl, whisk together milk, eggs, and melted butter.",
                "3. Pour the wet ingredients into the dry ingredients and stir until just combined.",
                "4. Heat a non-stick pan over medium heat and pour in batter.",
                "5. Cook until bubbles appear on the surface, then flip and cook the other side.",
                "6. Serve with syrup and fresh berries."
            ],
            image: "images/pexels-ash-craig-122861-376464.jpg"
        },
        {
            title: "Omelette",
            description: "Fluffy omelette with cheese, ham, and vegetables.",
            steps: [
                "1. Crack the eggs into a bowl, add salt and pepper, and whisk well.",
                "2. Heat a pan over medium heat and add a little oil.",
                "3. Pour in the egg mixture and let it set slightly.",
                "4. Add cheese, ham, and diced vegetables of choice.",
                "5. Fold the omelette in half and cook until the cheese is melted.",
                "6. Serve immediately."
            ],
            image: "images/pexels-damla-selen-demir-429137893-27569479.jpg"
        },
        {
            title: "Oatmeal",
            description: "Warm oats cooked to perfection, topped with honey and fruits.",
            steps: [
                "1. Bring water or milk to a boil in a medium saucepan.",
                "2. Stir in oats, reduce heat to low.",
                "3. Simmer uncovered over low heat, stirring occasionally for 25-30 minutes.",
                "4. Once thickened, remove from heat and stir in honey.",
                "5. Top with your favorite fruits such as berries or bananas.",
                "6. Serve warm."
            ],
            image: "images/pexels-foodie-factor-162291-543730.jpg"
        },
        {
            title: "Smoothie Bowl",
            description: "A refreshing smoothie bowl topped with granola and fresh fruits.",
            steps: [
                "1. Blend frozen fruits, yogurt, and a little milk until smooth.",
                "2. Pour the smoothie into a bowl.",
                "3. Top with granola, chia seeds, and fresh fruits.",
                "4. Drizzle with honey if desired.",
                "5. Serve immediately."
            ],
            image: "images/pexels-mdsnmdsnmdsn-2173774.jpg"
        },
        {
            title: "Avocado Toast",
            description: "Toasted bread topped with mashed avocado, salt, and pepper.",
            steps: [
                "1. Toast the bread until golden brown.",
                "2. Mash the avocado with salt, pepper, and lemon juice.",
                "3. Spread the avocado mixture onto the toast.",
                "4. Top with additional toppings like tomatoes or eggs.",
                "5. Serve immediately."
            ],
            image: "images/pexels-fotios-photos-1321942.jpg"
        },
        {
            title: "French Toast",
            description: "Golden brown French toast served with maple syrup.",
            steps: [
                "1. Beat eggs, milk, and cinnamon in a bowl.",
                "2. Dip bread slices in the egg mixture.",
                "3. Cook the bread slices in a pan over medium heat until golden brown.",
                "4. Serve with maple syrup and fresh berries."
            ],
            image: "images/pexels-solodsha-8106476.jpg"
        },
        {
            title: "Breakfast Burrito",
            description: "A tortilla filled with scrambled eggs, cheese, and bacon.",
            steps: [
                "1. Cook bacon until crispy.",
                "2. Scramble eggs in a pan.",
                "3. Place the eggs, bacon, and cheese in a tortilla.",
                "4. Roll the tortilla and cook it on the pan until crispy."
            ],
            image: "images/pexels-polina-tankilevitch-5848083.jpg"
        },
        {
            title: "Yogurt Parfait",
            description: "Layers of yogurt, granola, and fresh berries.",
            steps: [
                "1. Add a layer of yogurt to a glass.",
                "2. Add a layer of granola.",
                "3. Add a layer of fresh berries.",
                "4. Repeat layers and serve."
            ],
            image: "images/pexels-pixabay-414262.jpg"
        },
        {
            title: "Bagel with Cream Cheese",
            description: "Toasted bagel served with cream cheese and smoked salmon.",
            steps: [
                "1. Toast the bagel halves.",
                "2. Spread cream cheese on each half.",
                "3. Top with smoked salmon and capers.",
                "4. Serve immediately."
            ],
            image: "images/pexels-rdne-6529627.jpg"
        },
        {
            title: "Scrambled Eggs",
            description: "Fluffy scrambled eggs with herbs.",
            steps: [
                "1. Whisk eggs with salt, pepper, and a splash of milk.",
                "2. Cook in a non-stick pan over low heat, stirring gently.",
                "3. Garnish with fresh herbs and serve."
            ],
            image: "images/pexels-bp-1396861-2739268.jpg"
        }
    ],

    lunch: [
        {
            title: "Chicken Wrap",
            description: "Grilled chicken with lettuce, tomato, and avocado in a tortilla.",
            steps: [
                "1. Grill the chicken until fully cooked.",
                "2. Slice the chicken and prepare the vegetables.",
                "3. Warm the tortilla and place the chicken and vegetables inside.",
                "4. Fold the wrap and serve."
            ],
            image: "images/Buffalo-Chicken-Wrap-3.jpg"
        },
        {
            title: "Caesar Salad",
            description: "Crisp romaine with Caesar dressing, croutons, and Parmesan.",
            steps: [
                "1. Chop the romaine lettuce and place it in a bowl.",
                "2. Add croutons and grated Parmesan cheese.",
                "3. Drizzle with Caesar dressing and toss to coat.",
                "4. Serve immediately."
            ],
            image: "images/Caesar-Salad.jpg"
        },
        {
            title: "Grilled Cheese Sandwich",
            description: "A classic grilled cheese with melted cheese and buttery toasted bread.",
            steps: [
                "1. Butter one side of each bread slice.",
                "2. Place cheese between the bread slices, butter side out.",
                "3. Cook on a skillet over medium heat until golden brown on both sides."
            ],
            image: "images/grilled cheese sandwich.jpg"
        },
        {
            title: "Quinoa Salad",
            description: "A refreshing salad with quinoa, fresh vegetables, and a light vinaigrette.",
            steps: [
                "1. Cook quinoa according to package instructions.",
                "2. Chop the vegetables and mix with the cooked quinoa.",
                "3. Drizzle with vinaigrette and toss to combine.",
                "4. Serve chilled."
            ],
            image: "images/quoino salad.jpg"
        },
        {
            title: "Club Sandwich",
            description: "A stacked sandwich with turkey, bacon, lettuce, and tomato.",
            steps: [
                "1. Toast the bread slices.",
                "2. Layer turkey, bacon, lettuce, and tomato between the bread.",
                "3. Secure with toothpicks and slice in half."
            ],
            image: "images/club sandwich.jpg"
        },
        {
            title: "Burrito Bowl",
            description: "A bowl filled with rice, beans, chicken, and toppings.",
            steps: [
                "1. Cook rice and beans.",
                "2. Grill chicken and slice.",
                "3. Layer rice, beans, chicken, and your choice of toppings in a bowl."
            ],
            image: "images/burrito bowl.jpg"
        },
        {
            title: "Tomato Soup",
            description: "A warm and comforting bowl of creamy tomato soup.",
            steps: [
                "1. Heat olive oil in a pot and sauté onions and garlic.",
                "2. Add tomatoes and broth, then simmer.",
                "3. Blend until smooth and add cream.",
                "4. Serve hot with a side of bread."
            ],
            image: "images/tomato soup.jpg"
        },
        {
            title: "Chicken Salad",
            description: "Mixed greens topped with grilled chicken and a balsamic glaze.",
            steps: [
                "1. Grill chicken and slice.",
                "2. Toss mixed greens in a bowl.",
                "3. Add chicken and drizzle with balsamic glaze."
            ],
            image: "images/chicken salad.jpg"
        },
        {
            title: "Falafel Wrap",
            description: "Falafel balls wrapped in a pita with fresh vegetables.",
            steps: [
                "1. Prepare falafel balls according to instructions.",
                "2. Warm the pita and add falafel and vegetables.",
                "3. Add sauce and fold the pita."
            ],
            image: "images/fallafel wrap.jpg"
        },
        {
            title: "Veggie Burger",
            description: "A burger patty made from vegetables and grains, served on a bun.",
            steps: [
                "1. Cook the veggie patty according to package instructions.",
                "2. Toast the burger bun.",
                "3. Assemble the burger with your choice of toppings."
            ],
            image: "images/veggie burger.jpg"
        }
    ],
    dinner: [
        {
            title: "Spaghetti Bolognese",
            description: "Rich meat sauce served over spaghetti with Parmesan.",
            steps: [
                "1. Cook the spaghetti according to package instructions.",
                "2. In a pan, sauté onions, garlic, and ground beef.",
                "3. Add tomato sauce and let it simmer.",
                "4. Serve the sauce over the cooked spaghetti and sprinkle with Parmesan."
            ],
            image: "images/spaghetti boloagnese.jpg"
        },
        {
            title: "Grilled Salmon",
            description: "Grilled salmon with lemon and herb butter served with vegetables.",
            steps: [
                "1. Season the salmon with salt, pepper, and herbs.",
                "2. Grill the salmon skin-side down for a few minutes.",
                "3. Flip and cook the other side until done.",
                "4. Serve with lemon and a side of vegetables."
            ],
            image: "images/grilled salmon.jpg"
        },
        {
            title: "Pasta Primavera",
            description: "Pasta tossed with fresh vegetables and a light garlic sauce.",
            steps: [
                "1. Cook the pasta according to package instructions.",
                "2. Sauté vegetables in olive oil with garlic.",
                "3. Toss the cooked pasta with the vegetables.",
                "4. Serve with grated Parmesan cheese."
            ],
            image: "images/pasta-primavera.jpg"
        },
        {
            title: "Beef Stir-Fry",
            description: "Thinly sliced beef with mixed vegetables in a savory stir-fry sauce.",
            steps: [
                "1. Slice the beef thinly and marinate it.",
                "2. Stir-fry the beef in a hot pan with oil.",
                "3. Add vegetables and stir-fry sauce.",
                "4. Serve with rice."
            ],
            image: "images/beef stir fry.jpg"
        },
        {
            title: "Chicken Alfredo",
            description: "Pasta in a creamy Alfredo sauce with grilled chicken.",
            steps: [
                "1. Cook pasta according to package instructions.",
                "2. Grill chicken and slice.",
                "3. Make the Alfredo sauce by combining cream, butter, and Parmesan.",
                "4. Toss pasta with the sauce and add the chicken."
            ],
            image: "images/chicken alfredo.jpg"
        },
        {
            title: "Vegetable Curry",
            description: "A spicy vegetable curry served with rice or naan.",
            steps: [
                "1. Cook onions, garlic, and ginger in a pot.",
                "2. Add spices and vegetables.",
                "3. Simmer with coconut milk until vegetables are tender.",
                "4. Serve with rice or naan."
            ],
            image: "images/vegie curry.jpg"
        },
        {
            title: "Steak with Garlic Butter",
            description: "Grilled steak topped with garlic butter and served with potatoes.",
            steps: [
                "1. Season the steak with salt and pepper.",
                "2. Grill the steak to your desired doneness.",
                "3. Melt garlic butter over the steak.",
                "4. Serve with roasted potatoes."
            ],
            image: "images/steak with garlic butter.jpg"
        },
        {
            title: "Tacos",
            description: "Soft tortillas filled with seasoned beef, cheese, and lettuce.",
            steps: [
                "1. Cook the beef with taco seasoning.",
                "2. Warm the tortillas.",
                "3. Assemble tacos with beef, cheese, and lettuce."
            ],
            image: "images/tacos.jpg"
        },
        {
            title: "Shrimp Scampi",
            description: "Garlic butter shrimp served over pasta.",
            steps: [
                "1. Cook the pasta according to package instructions.",
                "2. Sauté shrimp in garlic butter.",
                "3. Toss the pasta with the shrimp and add lemon juice."
            ],
            image: "images/shrimp scampi.jpg"
        },
        {
            title: "BBQ Ribs",
            description: "Slow-cooked ribs with barbecue sauce.",
            steps: [
                "1. Season the ribs and slow-cook them in the oven.",
                "2. Brush with BBQ sauce and grill until caramelized.",
                "3. Serve with a side of coleslaw."
            ],
            image: "images/bbq ribs.jpg"
        }
    ]
};


function showRecipes(mealType) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = ""; // Clear existing recipes

    recipes[mealType].forEach((recipe) => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>${recipe.description}</p>
            <div class="recipe-steps">
                ${recipe.steps.map(step => `<p>${step}</p>`).join('')}
            </div>
            <button class="heart-btn" onclick="bookmarkRecipe('${recipe.title}')">&#9829;</button>
        `;
        recipeList.appendChild(card);
    });

    recipeList.style.display = "block"; 
}


let bookmarkedRecipes = [];
function bookmarkRecipe(recipeTitle) {
    if (!bookmarkedRecipes.includes(recipeTitle)) {
        bookmarkedRecipes.push(recipeTitle);
        alert(`${recipeTitle} has been bookmarked.`);
    } else {
        alert(`${recipeTitle} is already bookmarked.`);
    }
}


function showBookmarkedRecipes() {
    const bookmarkList = document.getElementById("bookmark-list");
    bookmarkList.innerHTML = "";

    bookmarkedRecipes.forEach((title) => {
        const listItem = document.createElement("li");
        listItem.textContent = title;
        bookmarkList.appendChild(listItem);
    });

    bookmarkList.style.display = "block";
}


function toggleSearch() {
    const searchInput = document.getElementById("search-input");
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block";
        searchInput.focus(); // Focus the input when shown
    } else {
        searchInput.style.display = "none";
        searchInput.value = ""; 
        showRecipes('breakfast'); 
    }
}


document.getElementById("search-input").addEventListener("input", (e) => {
    const query = e.target.value;
    if (query) {
        searchRecipes(query);
    } else {
        showRecipes('breakfast'); // Default to breakfast
    }

});


