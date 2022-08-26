export class NoteEditor extends React.Component {

    state = {
        note: this.props.note
    }

    render() {
        return <form className="note-editor" onSubmit={() => {
            document.querySelector('.note-editor').reset()
            document.querySelector('.note-editor').style.display = 'none'
        }}>
            <input className="note-txt-input2" type="text" name="title" placeholder="Title" />
            <textarea className="txtarea2" name="txt" placeholder="Take a note..."></textarea>
            <input className="img-url2" type="text" placeholder="Add img URL..." name="url" />
            <input className="yt-url2" type="text" placeholder="Add Youtube URL..." name="yt" />
            <button style={{ display: "none" }}>Add</button>
            <div className="form-controls2 flex">
                <img className="note-icon" src="assets/img/icons/upload-img.svg" alt="" onClick={toggleImg} />
                <img className="note-icon" src="assets/img/icons/checklist.svg" alt="" onClick={
                    toggleDarken} />
                <img className="note-icon youtube" src="assets/img/icons/youtube.svg" alt="" onClick={toggleYt} />
            </div>
        </form>
    }
}

function toggleDarken() {
    const dark = document.querySelector('.darken')
    if (dark.style.backgroundColor === 'rgba(0, 0, 0, 0)')
        dark.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    else
        dark.style.backgroundColor = 'rgba(0, 0, 0, 0)'
}
function toggleImg() {
    const txt = document.querySelector('.txtarea2')
    const img = document.querySelector('.img-url2')
    const yt = document.querySelector('.yt-url2')
    txt.style.display = 'block'
    img.style.display = 'block'
    yt.style.display = 'none'
}
function toggleYt() {
    const txt = document.querySelector('.txtarea2')
    const img = document.querySelector('.img-url2')
    const yt = document.querySelector('.yt-url2')
    txt.style.display = 'block'
    img.style.display = 'none'
    yt.style.display = 'block'
}