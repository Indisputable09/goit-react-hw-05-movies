import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovieBySearch } from "components/services/getMoviesAndInfo";

const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log("~ searchParams", searchParams.get('title'));

    useEffect(() => {
        if (!searchQuery) {
            return;
        }
        (async function getMovies() {
            const response = await getMovieBySearch(searchQuery);
            setMovies(response);
        })();
        console.log("~ searchQuery", searchQuery)
    }, [searchQuery]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target.query.value;
        setSearchQuery(inputValue);
        // console.log("~ searchQuery on Submit", searchQuery)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="query" placeholder="Movie search" autoFocus='on'/>
            <button type="submit">Search</button>
            {movies.length !== 0 && <ul>
                {movies.map(({id, title}) => {
                return (
                    <li key={id}><Link to={`${id}`}>{title}</Link></li>
                )
            })}
            </ul>}
        </form>
    )
};

export default Movies;