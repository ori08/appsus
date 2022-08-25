// handleChange = (ev) => {
//     console.log('EVVVVVVVVV',ev)
// }
import { noteService } from "../services/note.service.js"

function handleChange(ev) {
    console.log(ev.target.name)
}

export function CreateNote({ note }) {
    return (
        <div>
            <form className="note-form" onSubmit={noteService.addNote}>
                <input className="note-txt-input" required type="text" name="title"
                    placeholder="Title" />
                <textarea name="txt" placeholder="Take a note...">
                </textarea>
                <div className="note-controls flex">

                    <img className="note-icon" src="assets/img/icons/checklist.svg" alt="" />
                    <img className="note-icon" src="assets/img/icons/color-palette.svg" alt="" />

                    <label for="img">
                        <img className="note-icon" src="assets/img/icons/upload-img.svg" alt="" />
                    </label>
                    <input type="file" id="img" name="img" accept="image/*" style={{ display: "none" }} onChange={() => { console.log(event.target.files[0]) }}></input>


                    <input type="color" list="colors" style={{ display: "none" }} />
                    <datalist id="colors">
                        <option>#add8e6</option>
                        <option>#f08080</option>
                        <option>#fafad2</option>
                        <option>#90ee90</option>
                        <option>#20b2aa</option>
                        <option>#ffa07a</option>
                    </datalist>
                    <button>Add</button>

                </div>
            </form>
        </div>
    )
}
