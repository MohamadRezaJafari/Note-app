import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NotesContext";

// 3: finally with Context & Reducer:

function App() {
  const [sortBy, setSortBy] = useState("All");

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;

// ---------------------------------------------------------------------------

// 1: with state
// 2: with useReducer

// ? 2:
//? function notesReducer(notes, action) {
//?   switch (action.type) {
//?     case "add": {
//?       return [...notes, action.payload];
//?     }
//?     case "delete": {
//?       return notes.filter((n) => n.id !== action.payload);
//?     }
//?     case "complete": {
//?       return notes.map((note) =>
//?         note.id === action.payload
//?           ? { ...note, completed: !note.completed }
//?           : note
//?       );
//?     }
//?     default: {
//?       throw new Error("unknown action" + action.type);
//?     }
//?   }
//? }

// function App() {
//   const [sortBy, setSortBy] = useState("All");

// * 1:
//* const [notes, setNotes] = useState([]);

// ? 2: create useReducer hook:
//? const [notes, dispatch] = useReducer(notesReducer, []);

// Add Note:
//! const handleAddNote = (newNote) => {

//* 1: setNotes((prevNotes) => [...prevNotes, newNote]);

//? 2: dispatch({ type: "add", payload: newNote });

//! };

// Delete Note:
//! const handleDeleteNote = (id) => {

//* روش اول روش معمولی
//* 1: const filteredNotes = notes.filter((n) => n.id !== id);
//* 1: setNotes(filteredNotes);

// * روش دوم روش حرفه ای
// * استیت به مقدار قبلی وابسته است
//* 1:  setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));

//? 2: dispatch({ type: "delete", payload: id });

//! };

// Complete Note:
//! const handleCompleteNote = (e) => {
// console.log(e.target.value); =>آیدی نوت را به ما میدهد

// روش اول
//اون آیدی نوتی که با آیدی نوتی که کاربر انتخاب کرده برابر بود
// آبجکت را مستقیم برگردان در کنارش پراپرتی کامپلیتشو برعکس بکن نات بکن در غیر اینصورت خودشو ریترن کن

//* 1: const noteId = Number(e.target.value);

//* 1: const newNotes = notes.map((note) =>
//* 1:   note.id === noteId ? { ...note, completed: !note.completed } : note
//* 1: );
//* 1: setNotes(newNotes);

//  روش دوم
//* 1: setNotes((prevNotes) =>
//* 1:   prevNotes.map((note) =>
//* 1:     note.id === noteId ? { ...note, completed: !note.completed } : note
//* 1:   )
//* 1: );

//? 2: const noteId = Number(e.target.value);
//? 2: dispatch({ type: "complete", payload: noteId });

//! };

//   return (
//       <div className="container">
//         <NoteHeader notes={notes} sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
//         <div className="note-app">
//           <AddNewNote onAddNote={handleAddNote} />
//           <div className="note-container">
//             <NoteStatus notes={notes}/>
//             <NoteList
//             notes={notes}
//             onDeleteNote={handleDeleteNote}
//             onCompleteNote={handleCompleteNote}
//             sortBy={sortBy}
//             />
//           </div>
//         </div>
//       </div>
//   );
// }

// export default App;
