
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
            .then(console.log('adding notes'))
    }

    // onSetFilter = (filterBy) => {
    //     this.setState({ filterBy }, this.loadNotes)
    // }


    render() {
        const {notes,selectedNote}=this.state
        return (
            <section>
                <CreateNote/>
                <NoteList notes={notes} />
            </section>

        )
    }
}
