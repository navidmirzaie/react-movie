import {MovieType} from "../Types/Movie";
import Modal from "./Modal";
import {useState} from "react";


const Movie = (movie: MovieType) => {

    const [showModal, setShowModal] = useState(false)

    const coverImage = `${process.env.REACT_APP_POSTERURL}/${movie.poster_path}`;

    const releaseDate = () => {
        const parsedDate = Date.parse(movie.release_date);
        return new Date(parsedDate).toLocaleString('nl-NL', {day: '2-digit', month:'2-digit', year:'2-digit'});
    }

    function onShowModal() {
        setShowModal(true)
    }

    return (
        <>
            <div className="flex rounded-b-md flex-col relative" id={movie.id.toString()} onClick={()=> movie.onSelectMovie!(movie)}>
                <div className="flex flex-col gap-2 hover:cursor-pointer w-[12rem]">
                    <img src={coverImage} className="rounded-md" loading="lazy" alt="" title=""/>
                    <div className="relative flex flex-col p-5">
                        <h5 className="font-bold text-sm">{movie.title}</h5>
                        <span className="text-xs">{releaseDate()}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie