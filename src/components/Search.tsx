import {Fragment} from "react";

const Search = () => {
    return (
        <div className="container bg-indigo-100 pt-5 pr-8 pl-8 pb-5 flex flex-col">
            <h3 className="text-6xl font-bold">Welcome</h3>
            <p className="font-medium">Explore the best movies, tv shows and people</p>
            <div className="search-wrapper">
                <input type="search" name="search" className="search-input" placeholder="Search for a movie, tv show, person..."/>
                <button className="search-button">Search</button>
            </div>
        </div>
)
}

export default Search;