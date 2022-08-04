import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "components/services/getMoviesAndInfo";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {
        (async function getReviewsInfo() {
            const reviewsInfo = await getReviews(movieId);
            setReviews(reviewsInfo);
        })();
    }, [movieId])

    return (
        <ul>
            {reviews.map(({ id, author, content }) => {
                return (
                    <li key={id}>
                        <h3>Author: {author}</h3>
                        <p>{content}</p>
                    </li>
                )
            })}
        </ul>
    );
};

export default Reviews;