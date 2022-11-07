import {useEffect, useState} from "react";
import {getMovies} from "../services/Movie-service";
import {TMovie} from "../Types/Movie";
import Movie from "./Movie";

const MoviesList = () => {

    const [movies, setMovies] = useState<TMovie[]>([])
    const [movie, setMovie] = useState<TMovie | null>(null);

    useEffect(() => {
        fetchMovies();
    },[])

    const fetchMovies = async () => {
        const moviesData = await getMovies();
        setMovies(moviesData);
    }

     function onSelectMovie(movie: TMovie) {
         setMovie(movie)

    }

    return (
        <>
            {
                movies.map(({id, title, poster, releaseDate, voteAverage, backdrop }) => (
                    <Movie id={id} title={title}
                           poster={poster}
                           releaseDate={releaseDate}
                           voteAverage={voteAverage}
                           backdrop={backdrop}
                           key={id}
                           onClick={onSelectMovie} />
                ))
            }
        </>
    )
}

export default MoviesList