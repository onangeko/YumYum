import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar';
import Api from '../api/Api';
import DishCardsGrid from "./DishCardGrid";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Logo from "./Logo";
import MealPlanner from "./MealPlanner";
import {Avatar, Badge} from "@mui/material";

const drawerWidth = 240;

function ResponsiveDrawer(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dishes, setDishes] = useState([]);
    const [selectedPage, setSelectedPage] = useState('home');
    const [savedRecipes, setSavedRecipes] = useState([]);
    const [mealPlan, setMealPlan] = useState([]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSearchSubmit = async (query) => {
        const data = await Api.searchRecipes(query);
        console.log(data); // do something with the response data
        setDishes(data.results);
    };

    const handleSavedRecipesClick = async () => {
        setSelectedPage('savedRecipes');
        const savedRecipes = await localStorage.getItem('savedRecipes') || [];
        setSavedRecipes(savedRecipes);
    };

    const handleMealPlannerClick = () => {
        setSelectedPage('mealPlanner');
    };

    const handleMealPlanClick = async () => {
        setSelectedPage('mealPlan');
    };

    const handleAddToMealPlan = (recipe) => {
        setMealPlan([...mealPlan, recipe]);
    };

    const handleClearMealPlan = () => {
        setMealPlan([]);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {['Home', 'Saved Recipe', 'Meal Planner'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => handleDrawerToggle(text)}>
                            <ListItemIcon>
                                {index % 3 === 0 ? <HomeIcon/> : index % 3 === 1 ? <RamenDiningIcon/> : <MenuBookIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    let logo = Logo;
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        YUM YUM
                    </Typography>
                    <IconButton color="inherit">
                        <Avatar alt="User Avatar" src="/images/avatar.jpg" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', marginTop: '70px' }}>
                <Toolbar />
                {selectedPage === 'home' ? (
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 3 }}>
                        <SearchBar onSearch={handleSearchSubmit} />
                    </Box>
                ) : (
                    <Box sx={{ flexGrow: 1 }} />
                )}
                {selectedPage === 'home' && (
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                        <DishCardsGrid dishes={dishes} />
                    </Box>
                )}
                {selectedPage === 'savedRecipes' && (
                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                        <Typography variant="h4" sx={{ marginLeft: 2 }}>Saved Recipes</Typography>
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 3 }}>
                            {savedRecipes.length > 0 ? (
                                <DishCardsGrid dishes={savedRecipes} />
                            ) : (
                                <Typography variant="h6">No saved recipes yet.</Typography>
                            )}
                        </Box>
                    </Box>
                )}
                {selectedPage === 'mealPlanner' && (
                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                        <Typography variant="h4" sx={{ marginLeft: 2 }}>Meal Planner</Typography>
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 3 }}>
                            <MealPlanner />
                        </Box>
                    </Box>
                )}
            </Box>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

    ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;