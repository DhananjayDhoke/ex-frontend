import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ChapterPage = () => {
  
  const [chapter, setChapter] = useState({})
  const {id} = useParams();
  console.log(chapter.quiz)
  useEffect(()=>{
     axios.get(`https://light-knickers-crow.cyclic.app/chapter/getchapter/${id}`).then((res)=>setChapter(res.data)) 
  },[])
  return (
    <div className="chapter-page bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">{chapter.chapterTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Chapter Content</h3>
            <p className="text-gray-600">{chapter.content}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Chapter Video</h3>
            <div className="aspect-w-16 aspect-h-9">
            <iframe width="560"
             height="315" 
             src={chapter.videoUrl}
              frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md mt-8">
          <h3 className="text-xl font-semibold mb-4">Quiz</h3>
          {chapter!== undefined && <Quiz questions={chapter.quiz}></Quiz>}
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md mt-8">
          <h3 className="text-xl font-semibold mb-4">Games</h3>
          {/* Render the educational games components */}
        </div>
      </div>
    </div>
  );
};

const Quiz = ({ questions }) => {
  console.log(questions)
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerSelection = (questionIndex, selectedOption) => {
    setUserAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = selectedOption;
      return updatedAnswers;
    });
  };

  const handleSubmitQuiz = () => {
    let correctAnswers = 0;

    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    // Display the number of correct answers
    alert(`Correct Answers: ${correctAnswers}`);
  };

  return (
    <div>
      {questions!==undefined && questions.map((question, index) => (
        <div key={index} className="my-4">
          <h4 className="font-semibold mb-2">{question.question}</h4>
          <div className="ml-4">
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center mb-2">
                <input
                  type="radio"
                  id={`option-${index}-${optionIndex}`}
                  name={`question-${index}`}
                  value={option}
                  checked={userAnswers[index] === option}
                  onChange={() => handleAnswerSelection(index, option)}
                  className="mr-2"
                />
                <label htmlFor={`option-${index}-${optionIndex}`}>{option}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmitQuiz}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Submit Quiz
      </button>
    </div>
  );
};



export default ChapterPage;
