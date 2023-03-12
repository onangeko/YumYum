import React, { useState } from 'react';

export default function MealPlanner() {
    const [meals, setMeals] = useState([]);

    const addMeal = (meal) => {
        setMeals([...meals, meal]);
    };

    const deleteMeal = (index) => {
        setMeals(meals.filter((_, i) => i !== index));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const meal = {
            name: event.target.elements.name.value,
            ingredients: event.target.elements.ingredients.value,
            instructions: event.target.elements.instructions.value,
        };
        addMeal(meal);
        event.target.reset();
    };

    return (
        <div>
            <h2>Meal Planner</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Ingredients:
                    <textarea name="ingredients" />
                </label>
                <br />
                <label>
                    Instructions:
                    <textarea name="instructions" />
                </label>
                <br />
                <button type="submit">Add Meal</button>
            </form>
            <ul>
                {meals.map((meal, index) => (
                    <li key={index}>
                        <button onClick={() => deleteMeal(index)}>X</button>
                        <h3>{meal.name}</h3>
                        <p>{meal.ingredients}</p>
                        <p>{meal.instructions}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

