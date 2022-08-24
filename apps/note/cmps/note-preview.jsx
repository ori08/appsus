
export function NotePreview({ note }) {
    console.log('preview note:',note)
    return <article className="note-preview">
        <h1 className='note-title'>title</h1>
        <p className='note-txt'>note text</p>
        <div className='note-controls'>control icons</div>
    </article>
}