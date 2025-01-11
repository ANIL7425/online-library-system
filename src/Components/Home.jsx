import {Link} from "react-router-dom"
import initialState from "../redux/intialState";
import { useSelector } from "react-redux";
function Home()
{
    const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy"];
    const books=useSelector((store)=>store.books.books);
    const filter=books.filter((book)=>book.rating>=4.8);
    console.log(filter);

    
    return(
        <>
           <section className="relative bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 h-64 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?books,library')` }}></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to the Online Library</h1>
          <p className="text-lg">Discover a world of knowledge, inspiration, and adventure.</p>
        </div>
      </section>
        <section className="mb-16 mt-5">
            <h3 className="text-4xl font-bold flex justify-center items-center mb-3">categories</h3>
            <div className="flex flex-row justify-center items-center">
                {categories.map((item)=>(
                    <Link to={`browse-books/${item}`} className="m-3 p-4 bg-blue-100">{item}</Link>
                ))}
                </div>
           {/* Top Star Books Section */}
        <div className="mt-12">
          <h1 className="text-3xl font-semibold text-center mb-6">Top Star Books</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 flex justify-center items-center">
            {filter.map((book) => (
              <div
                key={book.id}
                className="border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 bg-white"
              >
                <img
                  src={book.img_url}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-600">Author: {book.author}</p>
                <p className="text-yellow-500 font-semibold">Rating: {book.rating} ⭐</p>
              </div>
            ))}
          </div>
          {filter.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No books with a rating above 4.8.</p>
          )}
        </div>
           
        </section>
   </>
    )
}


export default Home;