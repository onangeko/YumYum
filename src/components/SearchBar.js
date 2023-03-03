import React, { useState } from 'react';
import { styled, alpha } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import {makeStyles} from "@mui/styles";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
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
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const useStyles = makeStyles((theme) => ({
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
        marginLeft: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
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
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
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
                <Button
                    type="submit"
                    className={classes.button}
                    variant="contained"
                    disableElevation
                >
                    Submit
                </Button>
            </Search>
        </form>
    );
}

export default SearchBar;
