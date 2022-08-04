import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchTrendingToday } from "components/services/getTrendingToday";

const Home = () => {
    const [movies, setMovies] = useState([]);
    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log("~ searchParams", searchParams)

    useEffect(() => {
        (async function getMovies() {
            const response = await fetchTrendingToday();
            setMovies(response);
        })();
    }, [])
    

    return (
        <>
            <h2>Trending today</h2>
            <ul>
                {movies.map(({id, title}) => {
                    return (
                        <li key={id}><Link to={`movies/${id}`}>{title}</Link></li>
                    )
                })}
            </ul>
        </>
    )
};

export default Home;