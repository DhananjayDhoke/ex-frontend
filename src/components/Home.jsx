import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="landing-page bg-blue-200 h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Ed-Tech Website!</h1>
        <p className="text-xl mb-8">Learn and have fun with interactive lessons, videos, quizzes, and games!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/chapterselection">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Mathematics</h2>
            <p>Explore the world of numbers, shapes, and problem-solving with our engaging math lessons concepts through exciting experiments and demonstrations..</p>
          </div>
          </Link>
          <Link to="/chapterselection">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Science</h2>
            <p>Discover the wonders of nature, the universe, and scientific concepts through exciting experiments and demonstrations.</p>
          </div>
          </Link>
          {/* Add more subject cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
