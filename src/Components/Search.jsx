import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Search() {
  const [search, setSearch] = useState(""); 
  const [filteredBooks, setFilteredBooks] = useState([]);
  const items = useSelector((state) => state.books.books);  
  function handleSearch() {
    if (search.trim() === "") {
     
      setFilteredBooks([]);
      alert("Please enter a book name to search.");
      return;
    }

    const filteredData = items.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBooks(filteredData); 
  }
  return (
    <div className="p-4">
        <h1 className="text-red-400">Serach here for all books....</h1>
      <div className="flex items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Enter the book name"
          className="p-2 border rounded w-1/2 focus:outline-none focus:ring focus:ring-blue-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </div>    
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="p-4 border rounded shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={book.img_url}
                alt={book.title}
                className="w-40 h-40  rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600 mb-3">by {book.author}</p>
              <Link to={`bookdetails/${book.id}`} 
                className="px-6 mt-7 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 m-3">
                view
                </Link>
                <Link to="/browse-books">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
                  Back to Search
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No books found.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
