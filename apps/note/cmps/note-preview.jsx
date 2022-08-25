import { noteService } from "../services/note.service.js"

export function NotePreview({ note, onRemoveNote }) {
    const color = "red"


    return (<article className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>
        <h1 className='note-title'>{note.info.title}</h1>
        <p className='note-txt'>{note.info.txt}</p>
        <div className='note-controls flex'>
            <img className="note-icon" src="assets/img/icons/color-palette.svg" alt="" />
            <img className="note-icon" src="assets/img/icons/trash-can.svg" alt="" onClick={() => onRemoveNote(note.id)} />
            <input type="color"/>
            {/* <datalist id="mycolors">
                    <option>#FF0000</option>
                    <option>#00FF00</option>
                    <option>#0000FF</option>
                </datalist> */}
        </div>
    </article>
    )
}

// function onColorPicker(note) {
//     document.querySelector(`.${note.id}`).click()
//     // el.click()
//     // console.log(el);
//     noteService.colorPicker(note.id)

// }