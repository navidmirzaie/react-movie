import {useEffect, useRef, useState} from "react";
import Movie from "./Movie";
import Modal from  './Modal';
import {MovieType} from "../Types/Movie";
const MoviesList = () => {

    const [movies, setMovies] = useState<MovieType[]>([])
    const [_, setMovie] = useState<MovieType | null>(null);
    const dialogRef = useRef(null)

    useEffect(() => {
        getMovies()
    },[])

    async function getMovies() {
        const endpoint = `${process.env.REACT_APP_APIURL}${process.env.REACT_APP_POPULAR}?api_key=${process.env.REACT_APP_APIKEY}`
        const request = await fetch(endpoint);
        const response = await request.json();

        setMovies(response.results)
    }

     function onSelectMovie(movie: MovieType) {
         setMovie(movie)
    }

    return (
        <>
            {
                movies.map(({id, title, poster_path, release_date, vote_average }: MovieType) => (
                    <Movie id={id} title={title}
                           poster_path={poster_path}
                           release_date={release_date}
                           vote_average={vote_average}
                           key={id}
                           onSelectMovie={onSelectMovie} />
                ))
            }

           {/*


           vraag: 1 - Hier wil ik een modal toevoegen met daarin <MovieDetail> maar ik krijg telkens een error.
           In de <Modal> heb ik forwardRef gebruikt om vervolgens beschikking te hebben tot de Modal element.
           Ik wil de Modal namelijk hier openen wanneer er op een film is geklikt (onSelectMovie).

           vraag: 2 - Is Modal hier in deze component wel juist qua architectuur? hoort deze bijvoorbeeld niet in Movie component zelf?

            <Modal ref={dialogRef}>
                <MovieDetail id={} poster_path={} release_date={}/>
            </Modal>*/}

        </>
    )
}

export default MoviesList