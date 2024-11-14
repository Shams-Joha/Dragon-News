import { FaShareAlt, FaEye, FaStar } from 'react-icons/fa';

const NewsCard = (props = {}) => {
    const { news } = props || {};
    const {
        author,
        title,
        published_date,
        image_url,
        details,
        rating,
        total_view
    } = news;

    return (
        <div className="border rounded-lg shadow-lg p-4 ">
            {/* Author and Share */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h4 className="font-semibold">{author.name}</h4>
                        <p className="text-sm text-gray-500">{published_date}</p>
                    </div>
                </div>
                <FaShareAlt className="text-gray-500 cursor-pointer" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-2">{title}</h3>

            {/* Image */}
            <img
                src={image_url}
                alt={title}
                className="rounded-lg mb-4 w-full"
            />

            {/* Details */}
            <p className="text-gray-700 mb-2">{details.slice(0, 100)}... <span className="text-red-500">Read More</span></p>

            {/* Footer: Rating and Views */}
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="ml-2 text-gray-700">{rating.number}</span>
                </div>
                <div className="flex items-center text-gray-500 space-x-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
