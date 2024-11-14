
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// {
//     "category_id": "01",
//     "category_name": "Breaking News"
//   },

const LeftNavbar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className="font-semibold">All Category ({categories.length})</h2>
            <div className="flex flex-col gap-4 mt-4">
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`} key={category.category_id} className="btn bg-transparent border-none shadow-none">{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;