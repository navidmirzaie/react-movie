import { ResponseMovie } from "../Types/ResponseMovie";
import { TMovie } from "../Types/Movie";


const normalizeMovie = (responseMovie: ResponseMovie): TMovie => {
    return {
        id: responseMovie.id,
        title: responseMovie.title,
        poster: responseMovie.poster_path,
        releaseDate: responseMovie.release_date,
        voteAverage: responseMovie.vote_average,
        backdrop: responseMovie.backdrop_path
    }
}

export const getMovies = async() => {
    const env = process.env;
    const endpoint = `${env.REACT_APP_APIURL}${env.REACT_APP_POPULAR}?api_key=${env.REACT_APP_APIKEY}`
    const request = await fetch(endpoint);
    const response = await request.json();
    return response.results.map(function(movie: ResponseMovie) {
        return normalizeMovie(movie)
    })
}
