import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";



const CategoryNews = () => {
    const { data: news } = useLoaderData();


    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <p className="text-gray-400 text-sm">{news.length} News Found in this Category</p>
            <div className="space-y-5">
                {
                    news.map(singleNews => <NewsCard news={singleNews} key={singleNews._id}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;