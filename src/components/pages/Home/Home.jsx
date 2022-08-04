import { fetchTrendingToday } from "components/services/getTrendingToday";

(async function test() {
    const response = await fetchTrendingToday();
    console.log("~ response", response)
})()
const Home = () => {
    return (
        <>
        <h2>Trending today</h2>
        </>
    )
};

export default Home;