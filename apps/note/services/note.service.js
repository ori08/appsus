import { utilService } from "../../../js/services/util.service.js"

const KEY = 'notesDB'
let notes = []
export const noteService = {
    query,
    getById,
    addNote,
    removeNote,
    colorPicker,
    editNote,
    _loadFromStorage
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

function _createNote(title, txt, url = null, yt = null, backgroundColor = 'transparent') {

    return {
        id: utilService.makeId(),
        type: 'text',
        isPinned: false,
        info: {
            title,
            txt,
            url,
            yt,
        },
        style: {
            backgroundColor
        },
        todos: []
    }
}

function editNote(noteId, title, txt, url, yt) {
    let notes = _loadFromStorage()

    notes.map(note => {
        if (note.id === noteId) {
            if (title) note.info.title = title
            if (txt) note.info.txt = txt
            if (url) note.info.url = url
            if (yt) {
                if (yt.includes('youtube')) {
                    const embed = yt.split('=')
                    note.info.yt = 'https://www.youtube.com/embed/' + embed[1]
                }
            }

        }
    })
    _saveToStorage(notes)
    let selectedNote
    notes.map(note => {
        if (note.id === noteId) selectedNote = note
    })
    return Promise.resolve(selectedNote)
}

// return {
//     id: utilService.makeId(),
//     type: 'text',
//     isPinned: false,
//     info: {
//         title,
//         txt,
//         url,
//     },
//     style: {
//         backgroundColor
//     },
//     todos: []
// }
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
    const noteTest = []
    let name
    let value



    console.log(ev)
    // for (var i = 0; i < ev.target.length - 1; i++) {
    //     console.log('Target:' + i, ev.target[i].value)
    // }
    // for (var i = 0; i < ev.target.length - 1; i++) {
    //     {
    //         if (ev.target[i].value.includes('youtube')) {
    //             const embed = ev.target[i].value.split('=')
    //             note.push(embed[1])
    //         }
    //         if (ev.target[i].value !== '') {
    //             name = ev.target[i].name
    //             value = ev.target[i].value
    //             console.log('THIS IS THE TEST: ', { [name]: value })
    //             note.push(value)
    //             noteTest.push({ [name]: value })
    //         }

    //     }
    // }

    let title = ev.target[0].value ? ev.target[0].value : null
    let txt = ev.target[1].value ? ev.target[1].value : null
    let url = ev.target[2].value ? ev.target[2].value : null
    let yt = ev.target[3].value ? ev.target[3].value : null
    if (ev.target[3].value.includes('youtube')) {
        const embed = ev.target[3].value.split('=')
        yt = 'https://www.youtube.com/embed/' + embed[1]
    }

    console.log('NEW NOTE:', note)
    console.log('NEW TEST NOTE:', noteTest)
    notes.push(_createNote(title, txt, url, yt))
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
