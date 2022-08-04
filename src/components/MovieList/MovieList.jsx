import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
    return (
        movies.map(({ id, title }) => {
          return  <li key={id}><Link to={`movies/${id}`}>{title}</Link></li>
        })
    )
}

export default MovieList;