import { Link } from "react-router-dom";

const subjects = [
    {
      id: 1,
      name: "Mathematics",
      chapters: [
        {
          id: 11,
          title: "Introduction to Numbers",
        },
        {
          id: 12,
          title: "Basic of Geometry",
        },
        // Add more chapters as needed
      ],
    },
    {
      id: 2,
      name: "Science",
      chapters: [
        {
          id: 21,
          title: "Introduction to Plants",
        },
        {
          id: 22,
          title: "Forces and Motion",
        },
        // Add more chapters as needed
      ],
    },
    // Add more subjects as needed
  ];
  
const ChapterSelectionPage = () => {


  return (
    <div className="chapter-selection-page bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Select a Subject and Chapter</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <div
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              key={subject.id}
            >
              <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
              <ul className="text-gray-600">
                {subject.chapters.map((chapter) => (
                  
                  <Link to={`/chapter/${chapter.id}`}
                    className="py-1 hover:text-blue-500 transition duration-300 block"
                    key={chapter.id}
                    
                  >
                    {chapter.title}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterSelectionPage;
