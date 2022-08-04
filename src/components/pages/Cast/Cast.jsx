import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "components/services/getMoviesAndInfo";
import { IMG_PATH } from "../MovieDetails/MovieDetails";

const NO_IMAGE = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'

const Cast = () => {
    const [cast, setCast] = useState([]);

    const { movieId } = useParams();
    useEffect(() => {
        (async function getCastInfo() {
            const castInfo = await getCast(movieId);
            setCast(castInfo);
        })();
      
    }, [movieId])
    
    return (
        <ul>
            {cast.map(({ id, name, profile_path }) => {
                return (
                    <li key={id}>
                        <img src={profile_path ? IMG_PATH + profile_path : NO_IMAGE} alt={name} />
                        <p>{name}</p>
                    </li>
                )
            })}
        </ul>
    );
};

export default Cast;