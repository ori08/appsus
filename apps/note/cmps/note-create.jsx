
import { noteService } from "../services/note.service.js"

// function handleChange(ev) {
//     console.log(ev.target.name)
// }

export function CreateNote({ note, onAddNote }) {

    return (
        <div>

            <form className="note-form" onSubmit={() => {
                onAddNote(event)
                document.querySelector('.note-form').reset()
                console.log(event.target['url'].value)
            }}>
                <input className="note-txt-input" required type="text" name="title"
                    placeholder="Title" />
                    
                <textarea name="txt" placeholder="Take a note..."></textarea>
                <input type="text" placeholder="Add img URL..." name="url" />
                <input type="text" placeholder="Add Youtube URL..." name="url" />
                <div className="flex space-between">
                    <button>Add</button>
                    <div>
                        <img className="note-icon" src="assets/img/icons/upload-img.svg" alt="" />
                        <img className="note-icon" src="assets/img/icons/checklist.svg" alt="" />
                    </div>
                </div>
            </form>
        </div>
    )
}