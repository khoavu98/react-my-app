import { Button, Chip, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { ChangeEvent, useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";

const useStyles = makeStyles({
    moiveInput: {
        marginRight: '5px',
    },
    movieChip: {
        fontSize: '2rem',
        padding: '30px 10px',
        margin: '5px'
    }
});

const Movie = () => {
    const classes = useStyles();
    const [movie, setMovies] = useState('');
    const { movies, addMovie, deleteMovie } = useContext(MovieContext)

    const onmovieInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMovies(e.target.value);
    }

    return (
        <div>
            <Box display='flex' justifyContent={'center'} my={5}>
                <TextField label='Your favourite movie...'
                    variant='outlined'
                    className={classes.moiveInput}
                    onChange={onmovieInputChange}
                    value={movie} />
                <Button variant="contained" color='primary' onClick={(e: any) => { addMovie(movie); setMovies('') }}>
                    Add
                </Button>
            </Box>
            <Box display='flex' justifyContent={'center'} flexWrap='wrap' mx={5}>
                {movies.map(movie => (
                    <Chip key={movie.id}
                        label={movie.title} 
                        clickable color="primary"
                        className={classes.movieChip} 
                        onDelete= {deleteMovie.bind(this, movie.id)}/>
                ))}
            </Box>
        </div>

    );
}
export default Movie;