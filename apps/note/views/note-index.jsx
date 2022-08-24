
import { noteService } from "../services/note.service.js"

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
        const {notes,selecteNote}=this.state
        return (
            <section>
                <div>note app</div>
                <NoteIndex notes={notes} />
            </section>

        )
    }
}
