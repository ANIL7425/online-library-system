// src/components/AddBook.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/slice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [form, setForm] = useState({ title: "", author: "", category: "", rating: 0, description: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...form, id: Date.now() }));
    navigate("/browse-books");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <input name="author" placeholder="Author" onChange={handleChange} required />
      <input name="category" placeholder="Category" onChange={handleChange} required />
      <input name="rating" placeholder="Rating" type="number" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
