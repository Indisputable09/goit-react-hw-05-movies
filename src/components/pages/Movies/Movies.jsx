import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getMovieBySearch } from "components/services/getMoviesAndInfo";

const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('movies')) ?? []);
    const location = useLocation();

    useEffect(() => {
        if (!searchQuery) {
            return;
        }
        (async function getMovies() {
            const response = await getMovieBySearch(searchQuery);
            localStorage.setItem('movies', JSON.stringify(response));
            setMovies(response);
        })();
    }, [searchQuery]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target.query.value;
        setSearchQuery(inputValue);
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="query" placeholder="Movie search"/>
            <button type="submit">Search</button>
            {movies.length !== 0 && <ul>
                {movies.map(({id, title}) => {
                return (
                    <li key={id}><Link to={`${id}`} state={{ from: location }}>{title}</Link></li>
                )
            })}
            </ul>}
        </form>
    )
};

export default Movies;