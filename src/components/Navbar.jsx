
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Ed-Tech</div>
        
        <ul className="flex space-x-4">
          <li>
          <Link  to="/" className="text-white hover:text-blue-200">Home</Link>

          </li>
          <li>
          <Link  to="/chapterselection" className="text-white hover:text-blue-200">
            Select Subject
          </Link>

          </li>
          <li>
            <Link  to="/login" className="text-white hover:text-blue-200">Login</Link>
          </li>
          <li>
          <Link  to="/register" className="text-white hover:text-blue-200">Sign up</Link>
            
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
