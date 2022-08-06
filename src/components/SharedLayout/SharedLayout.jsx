import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
import Loader from "components/Loader";

const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/movies'>Movies</Link>
                </nav>
                {/* <Loader/> */}
            </Header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Container>
    );
};

export default SharedLayout;