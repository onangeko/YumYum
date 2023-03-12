import React from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
import RecipeChip from "./RecipeChip";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import NutritionTable from "./NutritionTable";
import {Button} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: '50vw',
        [theme.breakpoints.up('md')]: {
            width: '25vw',
        },
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
    },
    image: {
        width: '100%',
        height: '400px',
        objectFit: 'cover',
        marginBottom: theme.spacing(2),
    },
    instructionTitle: {
        marginTop: theme.spacing(3),
    },
    instructionStep: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    summary: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    saveButton: {
        marginTop: theme.spacing(2),
    },
}));


export default function RecipeDrawer(props) {
    const { recipe, open, onClose } = props;
    const classes = useStyles();

    const handleSave = async () => {
        const savedRecipes = await localStorage.getItem('savedRecipes');
        if (Array.isArray(savedRecipes)) {
            if (savedRecipes.some(r => r.id === recipe.id)) {
                alert('Recipe already saved!');
                return;
            }
            savedRecipes.push(recipe);
            await localStorage.setItem('savedRecipes', savedRecipes);
            onClose(); // close the drawer
        } else {
            await localStorage.setItem('savedRecipes', [recipe]);
            onClose(); // close the drawer
        }
    };


    return (
        <Drawer anchor="right" open={open} onClose={onClose} className={classes.drawer}>
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
            </IconButton>
            <div className={classes.summary} dangerouslySetInnerHTML={{ __html: recipe.summary }}></div>
            <div style={{ backgroundImage: `url(${recipe.image})`, backgroundSize: 'cover',minHeight: '400px', height: '400px', backgroundColor: 'red' }}></div>
            <div className={classes.title}>
                <Typography variant="h6">{recipe.title}</Typography>
                <div>
                    <Typography variant="subtitle1">Prep Time: {recipe.preparationMinutes} mins</Typography>
                    <Typography variant="subtitle1">Cook Time: {recipe.readyInMinutes - recipe.preparationMinutes} mins</Typography>
                    <Typography variant="subtitle1">Total Time: {recipe.readyInMinutes} mins</Typography>
                </div>
            </div>
            <List>
                <ListItem>
                    <ListItemText primary="Servings" secondary={recipe.servings} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText/>
                    {recipe.vegan && <RecipeChip label="Vegan" color="#6AB04C" />}
                    {recipe.vegetarian && <RecipeChip label="Vegetarian" color="#6AB04C" />}
                    {recipe.glutenFree && <RecipeChip label="Gluten Free" color="#6AB04C" />}
                    {recipe.sustainable && <RecipeChip label="Sustainable" color="#6AB04C" />}
                    {recipe.dairyFree && <RecipeChip label="Dairy Free" color="#6AB04C" />}
                    {recipe.cheap && <RecipeChip label="Cheap" color="#6AB04C" />}
                    {recipe.cuisines && recipe.cuisines.length > 0 && (
                        <div className={classes.tags}>
                            {recipe.cuisines.map((cuisine, index) => (
                                <RecipeChip key={index} label={cuisine} className={classes.tag} />
                            ))}
                        </div>
                    )}
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Ingredients" />
                </ListItem>
                {recipe.extendedIngredients.map((ingredient, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={ingredient.name} secondary={`${ingredient.amount} ${ingredient.unit}`} />
                    </ListItem>
                ))}
                <Divider />
                <ListItem>
                    <ListItemText primary="Instructions" className={classes.instructionTitle} />
                </ListItem>
                {recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0 ? (
                    recipe.analyzedInstructions[0].steps.map((step) => (
                        <ListItem key={step.number} className={classes.instructionStep}>
                            <ListItemText primary={`${step.number}. ${step.step}`} />
                        </ListItem>
                    ))
                ) : (
                    <ListItem>
                        <ListItemText primary="No instructions available" />
                    </ListItem>
                )}
                <Divider />
                <ListItem>
                    <ListItemText primary="Nutrition Facts" className={classes.instructionTitle} />
                </ListItem>
                <NutritionTable nutrients={recipe.nutrition.nutrients} />
            </List>
            <Button variant="contained" onClick={handleSave}>Save Recipe</Button>
        </Drawer>
    );
}
