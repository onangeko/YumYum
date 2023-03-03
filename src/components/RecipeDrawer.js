import React from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function RecipeDrawer(props) {
    const { recipe, open, onClose } = props;

    return (
        <Drawer anchor="right" open={open} onClose={onClose} sx={{ width: '100%', maxWidth: 400 }}>
            <Typography variant="h6" sx={{ mt: 2 }}>
                {recipe.title}
            </Typography>
            <List sx={{ mt: 2, height: '100%', overflow: 'auto' }}>
                <ListItem>
                    <ListItemText primary="Servings" secondary={recipe.servings} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Ready in Minutes" secondary={recipe.readyInMinutes} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Ingredients" />
                </ListItem>
                {recipe.extendedIngredients.map((ingredient,index) => (
                    <ListItem key={index}>
                        <ListItemText primary={ingredient.name} secondary={`${ingredient.amount} ${ingredient.unit}`} />
                    </ListItem>
                ))}
                <Divider />
                <ListItem>
                    <ListItemText primary="Instructions" />
                </ListItem>
                <ListItem>
                    <ListItemText primary={recipe.instructions} />
                </ListItem>
            </List>
        </Drawer>
    );
}
