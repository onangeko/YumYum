import React, { useState } from 'react';
import { styled, alpha } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const SearchContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    marginBottom: '16px', // Added to move button below search bar
});

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: '24px',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '4px 8px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    inputRoot: {
        color: 'inherit',
        flexGrow: 1,
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
    button: {
        borderRadius: '24px',
        marginTop: '8px',
        padding: '8px 24px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));

function SearchBar(props) {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        props.onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSearchSubmit}>
            <SearchContainer>
                <div className={classes.search}>
                    <SearchIcon />
                    <InputBase
                        placeholder="Search for a dish"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                    />
                </div>
                <Button
                    type="submit"
                    className={classes.button}
                    variant="contained"
                    disableElevation
                >
                    Let's get tasty
                </Button>
            </SearchContainer>
        </form>
    );
}

export default SearchBar;
