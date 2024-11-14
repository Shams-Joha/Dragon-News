
import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex items-center flex-col justify-center gap-2 py-5'>
            <div className='logo'>
                <img className='w-[300px]' src={logo}></img>
            </div>
            <h2 className='text-gray-400'>Journalism Without Fear or Favour</h2>
            <p>{
                moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
            }</p>
        </div>

    );
};

export default Header;