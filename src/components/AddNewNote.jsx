import { useState } from "react";
import { useNotesDispatch } from "../context/NotesContext";

//* 1: function AddNewNote({onAddNote}) {

// ? 2:
function AddNewNote() {
  const dispatch = useNotesDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //! const [notes, setNotes] = useState([]);
  //! lifting state up: برای اینکه کامپوننت سیبلینگ هم باید به این اطلاعات دسترسی داشته باشد انتقال میدهیم به پدر
  // ! برای نمایش در لیست نوت ها

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    if (!title || !description) return;

    const newNote = {
      // title:title,
      title,
      // description:description,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    // console.log(newNote);

    //* 1: onAddNote(newNote);
    //  3:
    dispatch({ type: "add", payload: newNote });

    setTitle("");
    setDescription("");
  };

  //   const handleChange = (e) => {
  //     console.log(e.target.value);
  //     setTitle(e.target.value);
  //   };

  return (
    <div className="add-new-note">
      <h2>Add Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          //   onChange={handleChange}
          className="text-field"
          type="text"
          placeholder="note title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-field"
          type="text"
          placeholder="note description"
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
