import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import RecipeDrawer from './RecipeDrawer';
import Api from '../api/Api';
import {useTheme} from "@mui/material/styles";

export default function DishCard(props) {
    const { dish } = props;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [recipe, setRecipe] = React.useState(null);

    const handleCardClick = async () => {
        const data = await Api.getRecipeInfo(dish.id);
        setRecipe(data);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setRecipe(null);
    }

    return (
        <React.Fragment>
            <Card sx={{ width: 250,backgroundColor: theme.palette.primary.main }} onClick={handleCardClick}>
                <CardMedia
                    component="img"
                    height="200"
                    image={dish.image}
                    alt={dish.title}
                    sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '1rem' }}>
                        {dish.title}
                    </Typography>
                </CardContent>
            </Card>
            {recipe && <RecipeDrawer recipe={recipe} open={open} onClose={handleClose} />}
        </React.Fragment>
    );
}
