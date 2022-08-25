import { utilService } from '../../../js/services/util.service.js'
import { storageService } from '../../../js/services/storage.service'

export const mailService = {
    getById,
    query,
    getVendors,
    save,
    _loadFromStorage,
    addNewMail,
    filterBy,
    markAsSelected
}

const KEY = 'mailsDB'
const myMail = "orielgrabli@gmail.com"

const defaultMails = {
    admin: {
        id: utilService.makeId(),
        from: 'Admin@gmail.com',
        username: 'Admin',
        subject: 'Welcome',
        massage: 'Im so glad you decide to try out MailBaba \n here few tips to get you up and running fast',
        pics: [],
        isRead: false,
        isStarrad: false,
        isRemoved: false,
        isSelected: false,
        date: getCurrDate()
    },
    supportTeam: {
        id: utilService.makeId(),
        from: 'Support@gmail.com',
        username: 'Support Team:',
        subject: 'support',
        massage: 'Hi, Dani from MailBaba support team \n Thanks for chosen MailBaba \n Im here for any technical problem. \n U are welcome',
        pics: [],
        isRead: false,
        isStarrad: false,
        isRemoved: false,
        isSelected: false,
        date: getCurrDate()
    },
    Spam: {
        id: utilService.makeId(),
        from: 'market@gmail.com',
        username: 'Spam',
        subject: 'Package from California',
        massage: ' Your package is pending: \n, we came across a package from a recent month pending for you',
        pics: [],
        isRead: false,
        isStarrad: false,
        isRemoved: false,
        isSelected: false,
        date: getCurrDate()
    }
}

function getCurrDate() {
    const date = new Date().toISOString().substring(0, 10).split('-');
    const dateFormat = `${date[2]}.${date[1]}.${date[0]}`
    return dateFormat
}

var gVendors = ['education', 'roman', 'music', 'philosophy', 'crime']

function query(filterBy) {

    let mails = _loadFromStorage()
    if (!mails) {
        mails = _createMails()
        _saveToStorage(mails)
    }

    // if (filterBy) {

    //     let { type, minPrice, maxPrice } = filterBy
    //     if (!minPrice) minPrice = 0;
    //     if (!maxPrice) maxPrice = Infinity
    //     books = books.filter(book => (
    //         book.type.includes(type) &&
    //         book.price >= minPrice &&
    //         book.price <= maxPrice
    //     ))
    // }

    return Promise.resolve(mails)
}

function getById(mailId) {
    if (!mailId) return Promise.resolve(null)
    const mails = _loadFromStorage()
    const mail = mails.find(mail => mailId === mail.id)
    return Promise.resolve(mail)
}


function filterBy(filterBy) {
    let mails = _loadFromStorage()
    var filterMails = []

    switch (filterBy) {
        case 'sent': {
            mails.map(mail => {
                if (mail.from === myMail) filterMails.push(mail)
            })
            return Promise.resolve(filterMails)
        }
            break
        case 'all': {
            return Promise.resolve(mails)
        }
            break
        case 'starred': {
            mails.map(mail => {
                if (mail.isStarrad) filterMails.push(mail)
            })
            return Promise.resolve(filterMails)
        }
            break
    }
}

function remove(mailId) {
    let mails = _loadFromStorage()
    mails = mails.filter(mail => mail.id !== mailId)
    _saveToStorage(mails)
    return Promise.resolve()
}

function save(mail) {
    if (mail.id) return _update(mail)
    else return _add(mail)
}

function _update(mailToUpdate) {
    let mails = _loadFromStorage()
    mails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail)
    _saveToStorage(mails)
    return Promise.resolve(mailToUpdate)
}

function getVendors() {
    return gVendors
}

function _createMail(username, subject, massage) {
    var mail = {
        id: utilService.makeId(),
        from: myMail,
        username,
        massage,
        subject,
        pics: [],
        isRead: false,
        isStarrad: false,
        isRemoved: false,
        isSelected: false,
        date: null
    }

    return mail
}

function _createMails() {
    const mails = []
    for (let i = 0; i < 3; i++) {
        switch (i) {
            case 0: mails.push(defaultMails.admin)
                break
            case 1: mails.push(defaultMails.supportTeam)
                break
            case 2: mails.push(defaultMails.Spam)
                break
        }
    }
    return mails
}

function addNewMail(ev) {
    ev.preventDefault()
    let mails = _loadFromStorage()
    const username = ev.target[0].value
    const subject = ev.target[1].value
    const massage = ev.target[2].value
    const mail = _createMail(username, subject, massage)
    mails.unshift(mail)
    _saveToStorage(mails)
    // return Promise.resolve(mails)
}

function markAsSelected(mailId) {
    let mails = _loadFromStorage()
    let markedMail = null
    mails.map(mail => {
        if (mail.id === mailId) {
            console.log(mail.isStarrad);
            if (mail.isStarrad) mail.isStarrad = false
            else mail.isStarrad = true
            markedMail = mail
        }
    })
    _saveToStorage(mails)
    return Promise.resolve(markedMail)
}


function _saveToStorage(mails) {
    saveToStorage(KEY, mails)
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