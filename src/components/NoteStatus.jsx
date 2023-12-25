import Message from "./Message";
import { useNotes } from "../context/NotesContext";

//* function NoteStatus({notes}) {

function NoteStatus() {
  const notes = useNotes();
  // derived state: //!الزاما برای اینکه دیتاهای این کامپوننت را نشان بدهیم نیازی به استیت جدید نباشد
  // *زمانیکه دیتاهای را بتوانیم از استیت ها یا پراپس های موجود محاسبشون کنیم دیگر نیاز به استیت جدید نیست
  
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const unCompletedNotes = allNotes - completedNotes;

  if (!allNotes)
    return (
      <Message>
        <h1>ℹ️</h1>
        <h2>No Notes has already been added.</h2>
        <h3>✔️ ➡️ for add note :</h3>
        <h4>Please put title and description in left side</h4>
        <h3>⬅️</h3>
      </Message>
    );

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
