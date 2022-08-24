import { utilService } from "../../../js/services/util.service.js"

const KEY = 'notesDB'

export const noteService = {
    query,
    getById,
}

export function query(filterBy) {

    let notes = loadFromStorage()
    if (!notes) {
        notes = _createNotes()
        saveToStorage(notes)
    }

    if (filterBy) {
        return console.log('nada')
    }
    return Promise.resolve(notes)
}

// function _createNote(type, txt, url = '', title = 'title', backgroundColor = 'transparent') {

//     return {
//         id: utilService.makeId(),
//         type,
//         isPinned: false,
//         info: {
//             title,
//             txt,
//             url
//         },
//         style: {
//             backgroundColor
//         },
//         todos: []
//     }
// }

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

const expNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
    },
    {
        id: "n102",
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
        id: "n103",
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
