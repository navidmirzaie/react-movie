import {TMovie} from "../Types/Movie";


type TMovieDetailProps = {
    movie: TMovie | null;
}

const movieDetail = (props: TMovieDetailProps) => {

    const coverImage = `${process.env.REACT_APP_POSTERURL}/${props.movie?.poster}`;

    return (
        <div className="inner custom-bg p-10 flex flex-col lg:flex-row gap-4">
            <div className="poster w-full">
                <img src={coverImage} width="150" className="rounded-md"
                     loading="lazy" alt="" title="{{ movie.title }}"/>
            </div>
            <div className="movie-content text-white">
                <h3 className="text-gray-500 text-2xl">{props.movie?.title}</h3>
            </div>
        </div>
    )
}

export default movieDetail;