import { utilService } from "../../../js/services/util.service.js"

const KEY = 'notesDB'
let notes = []
export const noteService = {
    query,
    getById,
    addNote,
    removeNote,
    colorPicker
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

function _createNote(title, txt, url = '', backgroundColor = 'transparent', yt = '') {

    return {
        id: utilService.makeId(),
        type: 'text',
        isPinned: false,
        info: {
            title,
            txt,
            url,
        },
        style: {
            backgroundColor
        },
        todos: []
    }
}

function colorPicker(noteId, color) {
    let notes = _loadFromStorage()
    var selectedNote = null
    notes.map(note => {
        if (note.id === noteId) {
            selectedNote = note
            return note.style.backgroundColor = color
        }
    })
    _saveToStorage(notes)
    return Promise.resolve(selectedNote)
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
    let name
    let value

    for (var i = 0; i < ev.target.length; i++) {
        {
            if (ev.target[i].value.includes('youtube')) {
                const embed = ev.target[i].value.split('=')
                note.push(embed[1])
            }
            if (ev.target[i].value) {
                name = ev.target[i].name
                value = ev.target[i].value
            }
            if (value) {
                console.log('Name: ', name)
                console.log('Value: ', value)
                note.push(value)
            }
        }
    }
    console.log('NEW NOTE:', note)
    notes.push(_createNote(note[0], note[1], note[2] ? note[2] : null))
    console.log('notes', notes)

    saveToStorage(KEY, notes)
    return Promise.resolve()

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
            title: "Code4Life👨‍💻👨‍💻👨‍💻"
        },
        style: {
            backgroundColor: "lavender"
        }
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        info: {
            url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/DD91/production/_125912765_nasas-webb-reveals-cosmic-cliffs-glittering-landscape-of-star-birth_52211883534_o.png",
            txt: 'theres supposed to be an img here!',
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "orange"
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
            ],
        },
        style: {
            backgroundColor: "grey"
        }
    }
]
