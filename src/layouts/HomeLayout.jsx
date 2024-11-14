import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <Header></Header>

            <section className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </section>
            <nav className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>

            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                <aside className="left col-span-3">Left Navbar</aside>
                <section className="center col-span-6">Main Content</section>
                <aside className="right col-span-3">Right Navbar</aside>
            </main>
        </div>
    );
};

export default HomeLayout;