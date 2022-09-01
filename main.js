const toggleSpinner = isLoading => {
    const loader = document.getElementById('loadder');
    if (isLoading) {
        loader.classList.remove('hidden')
    }
    else {
        loader.classList.add('hidden')
    }
}

const loadCocktails = async (search) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    const response = await fetch(url);
    const data = await response.json();
    showCocktails(data.drinks)
}

const showCocktails = cocktails => {
    const displayCocktails = document.getElementById('show-cocktails')
    displayCocktails.textContent = '';

    const alert = document.getElementById('alert')

    if (cocktails === null) {
        alert.classList.remove('hidden')
        toggleSpinner(false)
    }

    cocktails.forEach(cocktail => {

        const { strDrinkThumb, strImageAttribution, strDrink, strCategory, strAlcoholic, idDrink } = cocktail;

        const showCocktailDiv = document.createElement('div')
        showCocktailDiv.classList.add('mt-8', 'max-w-sm', 'bg-white', 'rounded-lg', 'shadow-lg', 'dark:bg-gray-800', 'dark:border-gray-700');
        showCocktailDiv.innerHTML = `
                    <a href="#">
                        <img class="p-8 rounded-t-lg" src="${strDrinkThumb}" alt="${strImageAttribution ? strImageAttribution : 'cocktail'}">
                    </a>
                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${strDrink}</h5>
                        </a>
                        <a href="#">
                            <h5 class="text-sm mt-2 font-semibold tracking-tight text-gray-400 dark:text-white">${strCategory}</h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>First star</title>
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Second star</title>
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Third star</title>
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Fourth star</title>
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Fifth star</title>
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <span
                                class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-xl font-bold text-gray-600 dark:text-white">${strAlcoholic}</span>    

                            <label  onclick="addToCartBtn(${idDrink})" for="my-modal" class="btn modal-button">add to cart</label>
                        </div>
                        
                    </div>
        `
        displayCocktails.appendChild(showCocktailDiv)
        alert.classList.add('hidden')
        toggleSpinner(false)
    })
}

const processClickedSearch = () => {
    const searchField = document.getElementById('base-input');
    const searchInput = searchField.value;
    loadCocktails(searchInput)
    toggleSpinner(true)
}

document.getElementById('search-btn').addEventListener('click', function () {
    processClickedSearch()
})

document.getElementById('base-input').addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        processClickedSearch()
    }
})

const addToCartBtn = async (keys) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${keys}`
    const response = await fetch(url);
    const data = await response.json();
    displayAddToCart(data.drinks[0])
}

const displayAddToCart = cart => {

    const { strDrink, strTags, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strGlass, strIBA, dateModified, strAlcoholic, strMeasure1, strMeasure2, strMeasure3 } = cart

    const displayCartModal = document.getElementById('display-cart');
    displayCartModal.innerHTML = `
                     <h3 class="font-bold text-lg">${strDrink}</h3>
                    <div class="flex justify-between">
                        <div class="badge badge-sm p-4 mt-2">
                            <h4>${strTags ? strTags : 'N/A'}</h4>
                        </div>
                        <div class="badge badge-sm p-4 mt-2">
                            <h4>${strGlass ? strGlass : 'N/A'}</h4>
                        </div>
                        <div class="badge badge-sm p-4 mt-2">
                            <h4>${strIBA ? strIBA : 'N/A'}</h4>
                        </div>
                    </div>
                    <div class="mt-6 flex flex-wrap">
                        <div class="flex items-center mr-4">
                            <input id="red-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="red-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">${strAlcoholic}</label>
                        </div>
                        <div class="flex items-center mr-4">
                            <input id="green-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="green-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">${strMeasure1}</label>
                        </div>
                        <div class="flex items-center mr-4">
                            <input checked id="purple-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="purple-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">${strMeasure2}</label>
                        </div>
                        <div class="flex items-center mr-4">
                            <input id="teal-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="teal-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teal</label>
                        </div>
                        <div class="flex items-center mr-4">
                            <input id="yellow-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="yellow-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">${strMeasure3}</label>
                        </div>
                    </div>
                    <p class="py-4">${strInstructions}</p>
                    <select class="select select-bordered w-full max-w-xs">
                        <option disabled selected>Who shot first?</option>
                        <option>${strIngredient1}</option>
                        <option>${strIngredient2}</option>
                        <option>${strIngredient3}</option>
                        <option>${strIngredient4}</option>
                     </select>
                     <div class="mt-4 text-pink-600 flex justify-between">
                            <h3>${dateModified}</h3>
                        <div>
                            <span class="countdown font-mono text-2xl">
                                <span style="--value:10;"></span>:
                                <span style="--value:24;"></span>:
                                <span style="--value:36;"></span>
                            </span>
                        </div>
                     </div>
                    <div class="modal-action">
                        <label for="my-modal" class="btn">Cheers!</label>
                    </div>
    `

}

loadCocktails('margarita')