
export function NotePreview({ note, onSelectedBook }) {
    return <article className="note-preview">
        <h1 className='note-title'>{note.info.title}</h1>
        <p className='note-txt'>{note.info.txt}</p>
        <div className='note-controls flex'>
            <img className="note-icon" src="assets/img/icons/color-palette.svg" alt="" />
            <img className="note-icon" src="assets/img/icons/trash-can.svg" alt="" onClick={()=> onSelectedBook(note.id)}/>
        </div>
    </article>
}