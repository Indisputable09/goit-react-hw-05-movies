import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <h1>Error. Page couldn't be found</h1>
            <Link to='/'>Go home</Link>
        </>
    )
};

export default Error;