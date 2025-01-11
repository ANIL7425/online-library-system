
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import initialState from "../redux/intialState";
import Search from "./Search";
import { Link } from "react-router-dom";
function Browsebooks()
{
    const {category}=useParams();
    console.log(category);
    const items=useSelector((state)=>state.books.books);
    const filterd=category? items.filter((book) =>(book.category === category)):items;
    return(
        <>
        <Search />
        <br />
        <br />
        <h1 className="flex justify-center items-center text-red-400 font-bold">{category}</h1>
        <div className="flex flex-row justify-center items-center flex-wrap">           
        {filterd.map((book,index)=>(
            <div className="m-14 border-2 rounded-md p-3">
                <img src={book.img_url} className="w-64 h-64" width={300} height={300}/>
                <h3 className="mt-3 font-bold text-red-400">{book.title}</h3>
                <h2 className="mb-5">{book.author} </h2>
                <Link to={`bookdetails/${book.id}`} 
                className="px-6 mt-7 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
                    view</Link>
             
                
            </div>
            
        ))}
        </div>
        </>
    )
}
export default Browsebooks;