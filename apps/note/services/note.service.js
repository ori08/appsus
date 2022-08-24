import { utilService } from "../../../js/services/util.service.js"

const KEY = 'notesDB'
let notes = []
export const noteService = {
    query,
    getById,
    addNote
}

export function query(filterBy) {

    notes = loadFromStorage()
    if (!notes) {
        notes = _createNotes()
        saveToStorage(KEY, notes)
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
        console.log(expNotes[i])
        notes.push(expNotes[i])
    }
    return notes
}

// function _saveToStorage(notes) {
//     storageService.saveToStorage(KEY, notes)
// }

// function _loadFromStorage() {
//     return storageService.loadFromStorage(KEY)
// }

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
    console.log('notes', notes)
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
    notes.push(_createNote(note[0],note[1]))
    console.log('notes', notes)


    // const value = ev.target.value
    // const mail = _createMail(username, subject, massage)
    // mails.unshift(mail)
    // _saveToStorage(mails)
    // return Promise.resolve(mails)
}

const expNotes = [
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        info: {
            url: "http://some-img/me",
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
            label: "Get my stuff together",
            todos: [
                {
                    txt: "Driving liscence",
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
