import {TMovie} from "../Types/Movie";


type TMovieDetailProps = {
    movie: TMovie
}

const movieDetail = (props: TMovieDetailProps) => {
    return (
        <h1>{props.movie.title}</h1>
    )
}

export default movieDetail;