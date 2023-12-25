import { useNotes } from "../context/NotesContext";

//* function NoteHeader({notes, sortBy, onSort }) {

function NoteHeader({ sortBy, onSort }) {
  const notes = useNotes();
  return (
    <div className="note-header">
      <h1>My Notes({notes.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option className="sort-view" value="All">
          ✔️All Notes
        </option>
        <option className="sort-view" value="latest">
          ✔️Sort based on latest notes
        </option>
        <option className="sort-view" value="earliest">
          ✔️Sort based on earliest notes
        </option>
        <option className="sort-view" value="completed">
          ✔️Sort based on completed notes
        </option>
      </select>
    </div>
  );
}

export default NoteHeader;
