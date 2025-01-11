import { Link } from "react-router-dom";

function Navbar()
{
    return(
        <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-lg font-bold">Online Library</h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/browse-books" className="text-white">Browse Books</Link>
          <Link to="/add-book" className="text-white">Add Book</Link>
          <Link to="/search" className="text-white">search</Link>
        </div>
      </div>
    </nav>
    )
}
export default Navbar;