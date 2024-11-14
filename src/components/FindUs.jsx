import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";


const FindUs = () => {
    return (
        <div className="mt-5">
            <h2 className='font-semibold mb-3'>Find Us On</h2>
            <div className="join join-vertical flex *:bg-white">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
            </div>

        </div>
    );
};

export default FindUs;