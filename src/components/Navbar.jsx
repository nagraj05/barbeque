import { Link } from "react-router-dom";
export default function Navbar() {
    return (
      <div className="flex justify-between items-center px-10 py-6 text-white bg-gray-800">
        <h1 className="text-xl font-bold font-poppins">The Food website</h1>
        <ul className="flex space-x-8 font-bold font-poppins cursor-pointer">
          <li className="hover:text-red-500"><Link to="/">Home</Link></li>
          <li className="hover:text-red-500"><Link to="/menu">Menu</Link></li>
          <li className="hover:text-red-500"><Link to="/reviews">Reviews</Link></li>
        </ul>
        <div className=" flex items-center space-x-5 font-bold font-poppins">
          <button>Sign In</button>
          <button className="border p-2 rounded border-white hover:bg-white hover:text-black hover:duration-300">
            Register
          </button>
        </div>
      </div>
    );
  }
  