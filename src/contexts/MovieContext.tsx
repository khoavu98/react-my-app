
import { v4 as uuidv4 } from 'uuid';
import { title } from 'process';
import React, { createContext, ReactNode, useState } from 'react';

interface MovieContextProps {
    children: ReactNode
}

interface Movie {
    id: string,
    title: string
}

interface MovieContexDefault {
    movies: Movie[],
    addMovie: (title: string) => void,
    deleteMovie: (id : string) => void
}

const movieContexDefaultData : MovieContexDefault = {
    movies: [],
    addMovie : (title: string) => {},
    deleteMovie: (id : string) => {}
}

export const MovieContext = createContext<MovieContexDefault>(movieContexDefaultData);

const MovieContextProvider = ({children} : MovieContextProps) => {
    const [movies, setMovies] = useState<Movie[]>(movieContexDefaultData.movies);
    const addMovie = (title: string) => {
        setMovies([...movies, {id: uuidv4(), title}])
    }

    const deleteMovie = (id : string) => {
        setMovies(movies.filter(x => x.id !== id));
    }

    const MoiveContextDynamicData : MovieContexDefault = {movies, addMovie, deleteMovie} ;
    return <MovieContext.Provider value={MoiveContextDynamicData}>
        {children}
    </MovieContext.Provider>
}

export default MovieContextProvider;

