import { useNotes, useNotesDispatch } from "../context/NotesContext";

//* function NoteList({ notes ,onDeleteNote ,onCompleteNote, sortBy}) {

function NoteList({ sortBy }) {
  const notes = useNotes();

  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy === "completed") sortedNotes = notes.filter((n) => n.completed);

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        //* <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} onCompleteNote={onCompleteNote}/>
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;

//* function NoteItem({ note ,onDeleteNote ,onCompleteNote}) {

function NoteItem({ note }) {
  const dispatch = useNotesDispatch();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button
            //* 1: onClick={() => onDeleteNote(note.id)}
            // 3:
            onClick={() => dispatch({ type: "delete", payload: note.id })}
          >
            ✖️
          </button>
          <input
            type="checkbox"
            name={note.title}
            id={note.id}
            value={note.id}
            checked={note.completed}
            // *داخل اینپوت ها بدون اینکه چیزی پاس بدهیم خودش ولیو را پاس میدهد که آیدی نوت میباشد
            //* 1: onChange={onCompleteNote}
            // 3:
            onChange={(e) => {
              const noteId = Number(e.target.value);
              // console.log(e.target.value);
              dispatch({ type: "complete", payload: noteId });
            }}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
