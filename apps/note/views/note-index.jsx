
import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/note-list.jsx"
import { CreateNote } from "../cmps/note-create.jsx"

export class NoteIndex extends React.Component {
    state = {
        notes: [],
        filterBy: null,
        selectedNote: null
    }

    componentDidMount() {
        this.loadNotes()
        console.log(this.state.notes)
    }

    loadNotes = () => {
        noteService.query(this.state.filterBy)
            .then((notes) => this.setState({ notes }))
    }

    onSelectedBook = (noteId) => {
        noteService.getById(noteId)
            .then(note => {
                // console.log({selectedNote})
                this.setState({ selectedNote: note })
                // noteService.getById(noteId)
                console.log(note.id)
            })
    }

    onRemoveBook = (bookId) => {
        bookService.remove(bookId)
            .then(() => {
                console.log({notes})
            })
    }
    
    // onSetFilter = (filterBy) => {
    //     this.setState({ filterBy }, this.loadNotes)
    // }



    render() {
        const { notes, selectedNote } = this.state
        return (
            <section className="main-index">
                <CreateNote />
                <NoteList notes={notes} onSelectedBook={this.onSelectedBook} />
            </section>
        )
    }
}