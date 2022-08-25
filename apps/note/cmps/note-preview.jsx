import { noteService } from "../services/note.service.js"
// style={{ backgroundColor: note.style.backgroundColor }}


export class NotePreview extends React.Component {

    state = {
        note: this.props.note
    }

    onColorPicker = (color) => {
        const { note } = this.state
        noteService.colorPicker(note.id, color).then(note => {
            return Promise.resolve(this.setState({ note: note })).then(
                document.querySelector(`.${note.id}`).style.display = "none"
            )
        })
    }

    onRemove = (note) => {
        const { onRemoveNote } = this.props
        onRemoveNote(note.id)
    }

    showColorModal = () => {
        const { note } = this.state
        var el = document.querySelector(`.${note.id}`)
        console.log(el);
        if (el.style.display === "none") el.style.display = 'flex'
        else el.style.display = "none"

    }

    render() {

        var isColorBtnClick = false
        var display = 'flex'
        const color = "red"

        const { note } = this.state
        console.log(note);
        return <article className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>
            <h1 className='note-title'>{note.info.title}</h1>
            <p className='note-txt'>{note.info.txt}</p>
            <div className='note-controls flex' >
                <img className="note-icon" onClick={() => this.showColorModal()} src="assets/img/icons/color-palette.svg" alt="" />
                <img className="note-icon" src="assets/img/icons/trash-can.svg" alt="" onClick={() => this.onRemove(note)} />

            </div>
            <div className={note.id} style={{ display: 'none' }}>
                <button className="btn-color" onClick={() => this.onColorPicker('#add8e6')} style={{ backgroundColor: "#add8e6" }} value="#add8e6"></button>
                <button className="btn-color" onClick={() => this.onColorPicker('#f08080')} style={{ backgroundColor: "#f08080" }} value="#f08080"> </button>
                <button className="btn-color" onClick={() => this.onColorPicker('#fafad2')} style={{ backgroundColor: "#fafad2" }} value="#fafad2"> </button>
                <button className="btn-color" onClick={() => this.onColorPicker('#90ee90')} style={{ backgroundColor: "#90ee90" }} value="#90ee90"> </button>
                <button className="btn-color" onClick={() => this.onColorPicker('#ffa07a')} style={{ backgroundColor: "#ffa07a" }} value="#ffa07a"> </button>
            </div>
        </article>
    }
}