import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <section className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </section>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;