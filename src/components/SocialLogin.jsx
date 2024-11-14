import React from 'react';
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className='flex flex-col gap-3 py-3'>
                <button className='btn text-blue-400'><FaGoogle /> Login with Google</button>
                <button className='btn'><FaGithub />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;