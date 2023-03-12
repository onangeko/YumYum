import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Button } from '@mui/material';

export default function SavedRecipes(props) {
    const { recipes, onDelete } = props;

    return (
        <div>
            {recipes.map((recipe) => (
                <Card key={recipe.id} sx={{ maxWidth: 345, marginBottom: 2 }}>
                    <CardHeader title={recipe.title} />
                    <CardContent>
                        <img src={recipe.image} alt={recipe.title} style={{ width: '100%' }} />
                        <p>{recipe.summary}</p>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => onDelete(recipe.id)}>Delete</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}
