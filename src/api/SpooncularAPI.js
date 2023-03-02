import axios from 'axios';

const RAPIDAPI_API_KEY = 'd66c40c8b1msh921030ebe0dbe17p1d85c6jsnb2722dcda587';
const RAPIDAPI_API_HOST = 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';
const API_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch';

async function searchRecipes(query) {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'x-rapidapi-key': RAPIDAPI_API_KEY,
                'x-rapidapi-host': RAPIDAPI_API_HOST,
            },
            params: {
                query: query,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default searchRecipes;

