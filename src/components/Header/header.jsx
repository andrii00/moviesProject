import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MovieIcon from '@mui/icons-material/Movie';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import {useSelector} from "react-redux";
import {TextField} from "@mui/material";
import {useHistory} from "react-router";
import {useState} from "react";


export default function Header() {
    const history = useHistory();
    const [inputValue, setInputValue] = useState('');
    const {movies} = useSelector(({movies}) => movies);

    const handleKeyDown = ({key, target: {value}}) => {
        if (key === 'Enter') {
            const foundMovie = movies.find(({title}) => title.toLowerCase().startsWith(value.toLowerCase()))

            setInputValue('');

            if (!foundMovie) {
                return alert('Movie not found');
            }

            history.push(`/${foundMovie.id}`)
        }
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MovieIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1}}
                        onClick={() => {
                            history.push(`/`)
                        }}
                    >
                        Movies
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        color='primary'
                        label="Seach"
                        variant="outlined"
                        onKeyDown={handleKeyDown}
                        value={inputValue}
                        onChange={({target: {value}}) => setInputValue(value)}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}