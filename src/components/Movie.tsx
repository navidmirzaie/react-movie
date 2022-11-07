import {TMovie} from "../Types/Movie";

const Movie = ({id, title, poster, releaseDate, voteAverage, backdrop}: TMovie) => {

    const coverImage = `${process.env.REACT_APP_POSTERURL}/${poster}`;

    const releasedDate = () => {
        const parsedDate = Date.parse(releaseDate);
        return new Date(parsedDate).toLocaleString('nl-NL', {day: '2-digit', month:'2-digit', year:'2-digit'});
    }

    function handleClick() {
        const movie = { id, title, releaseDate, poster, voteAverage, backdrop };
        return movie;
    }

    return (
        <>
            <div className="flex rounded-b-md flex-col relative" id={id.toString()} onClick={handleClick}>
                <div className="flex flex-col gap-2 hover:cursor-pointer w-[12rem]">
                    <img src={coverImage} className="rounded-md" loading="lazy" alt="" title=""/>
                    <div className="relative flex flex-col p-5">
                        <h5 className="font-bold text-sm">{title}</h5>
                        <span className="text-xs">{releasedDate()}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie