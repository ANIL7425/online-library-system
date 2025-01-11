import { useParams } from "react-router-dom";
import initialState from "../redux/intialState";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Bookdetail()
{
    const {id}=useParams();
    const books=useSelector((store)=>store.books.books);
    const book = books.find((book) => book.id === parseInt(id));
    console.log(book);
    return(     
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
        <div className="flex flex-col md:flex-row">         
          <div className="w-full md:w-1/3">
            <img
              src={book.img_url}
              alt={book.title}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{book.title}</h1>
              <h2 className="text-xl text-gray-600 mb-6">by {book.author}</h2>
              <p className="text-gray-700 mb-4">{book.description}</p>
              <div className="flex items-center space-x-2 mt-4">
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-lg text-gray-800 font-semibold">{book.rating}</span>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/browse-books">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
                  Back to Browse
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Bookdetail;