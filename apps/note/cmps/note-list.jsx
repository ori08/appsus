import { NotePreview } from "./note-preview.jsx"

const { Link } = ReactRouterDOM

export function NoteList({ notes }) {

    return <Link to={"/notes/"}>

        <article >
            {notes.map(note => <NotePreview note={note} key={note.id} />)}
        </article>
    </Link>
}