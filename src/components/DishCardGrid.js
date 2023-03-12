import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import DishCards from './DishCards';
import RecipeDrawer from './RecipeDrawer';

export default function DishCardsGrid(props) {
    const { dishes } = props;
    const [open, setOpen] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const handleCardClick = (recipe) => {
        setSelectedRecipe(recipe);
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setSelectedRecipe(null);
    };

    return (
        <>
            <Grid container spacing={5} sx={{ mx: 2, pl: 35 }}>
                {dishes.map((dish, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <DishCards dish={dish} onClick={() => handleCardClick(dish)} />
                    </Grid>
                ))}
            </Grid>
            {selectedRecipe && (
                <RecipeDrawer recipe={selectedRecipe} open={open} onClose={handleDrawerClose} />
            )}
        </>
    );
}
