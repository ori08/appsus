import { utilService } from "../../../js/services/util.service.js"

const KEY = 'notesDB'
let notes = []
export const noteService = {
    query,
    getById,
    addNote
}

export function query(filterBy) {
    notes = _loadFromStorage()
    if (!notes) {
        notes = _createNotes()
        _saveToStorage(notes)
    }

    if (filterBy) {
        return console.log('nada')
    }

    return Promise.resolve(notes)
}

function _createNote(title, txt, backgroundColor = 'transparent') {

    return {
        id: utilService.makeId(),
        type: 'text',
        isPinned: false,
        info: {
            title,
            txt,
            url: ''
        },
        style: {
            backgroundColor
        },
        todos: []
    }
}

function _createNotes() {
    const notes = []
    for (let i = 0; i < expNotes.length; i++) {
        notes.push(expNotes[i])
    }
    return notes
}

function _saveToStorage(notes) {
    saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return loadFromStorage(KEY)
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

function getById(noteId) {
    if (!noteId) return Promise.resolve(null)
    const notes = _loadFromStorage()
    const note = notes.find(note => noteId === note.id)
    return Promise.resolve(note)
}

function addNote(ev) {
    ev.preventDefault()

    const note = []
    const newNote = []
    let name
    let value

    for (var i = 0; i < ev.target.length; i++) {
        if (ev.target[i].value) {
            console.log(ev.target[i].value)
            name = ev.target[i].name
            value = ev.target[i].value
            note.push([name] = value)
        }
    }
    console.log('NEW NOTE:', note)
    notes.push(_createNote(note[0], note[1]))
    console.log('notes', notes)

    saveToStorage(KEY, notes)


    // const value = ev.target.value
    // const mail = _createMail(username, subject, massage)
    // mails.unshift(mail)
    // _saveToStorage(mails)
    // return Promise.resolve(mails)
}

function removeNote(noteId) {
    let notes = _loadFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

const expNotes = [
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!",
            title: "Code4Life"
        },
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        info: {
            url: "http://some-img/me",
            txt: 'theres supposed to be an img here!',
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#00d"
        }
    },

    {
        id: utilService.makeId(),
        type: "note-todos",
        info: {
            txt: "Driving liscence",
            title: "My Info",
            label: "Get my stuff together",
            todos: [
                {
                    doneAt: null
                },
                {
                    txt: "Coding power",
                    doneAt: 187111111
                }
            ]
        }
    }
]
