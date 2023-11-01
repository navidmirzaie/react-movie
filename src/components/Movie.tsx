import {TMovie} from "../Types/Movie";
import React, {useRef, useState} from "react";
import Modal from "./Modal";
import MovieDetail from "./MovieDetail";

const Movie = ({id, title, poster, releaseDate, voteAverage, backdrop}: TMovie) => {

    const coverImage = `${process.env.REACT_APP_POSTERURL}/${poster}`;
    const movieDialog = useRef<HTMLDialogElement>(null)
    const [selectedMovie, setMovie] = useState<TMovie | null>(null);

    const releasedDate = () => {
        const parsedDate = Date.parse(releaseDate);
        return new Date(parsedDate).toLocaleString('nl-NL', {day: '2-digit', month:'2-digit', year:'2-digit'});
    }

    function handleClick() {
        const selectedMovie = { id, title, releaseDate, poster, voteAverage, backdrop };
        setMovie(selectedMovie);
        movieDialog.current?.showModal();
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
            <Modal ref={movieDialog}>
                <MovieDetail movie={selectedMovie}/>
            </Modal>
        </>
    )
}

export default Movie