// handleChange = (ev) => {
//     console.log('EVVVVVVVVV',ev)
// }
import { noteService } from "../services/note.service.js"

function handleChange(ev) {
    console.log(ev.target.name)
}

export function CreateNote({ note, addNewCar }) {
    return (
        <div>
            <form className="note-form" onSubmit={noteService.addNote}>
                <input className="note-txt-input" required type="text" name="title" placeholder="Title"
                />
                <textarea name="txt" placeholder="Take a note..."></textarea>
                {/* <button onClick={noteService.addNote}>Add</button> */}
            </form>
        </div>
    )
}