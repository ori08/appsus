import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const mailService = {
    getById,
    query,
    getVendors,
    save,
    _loadFromStorage,
}

const KEY = 'mailsDB'

const defaultMails = {
    admin: {
        id: utilService.makeId(),
        username: 'Admin',
        massage: 'Im so glad you decide to try out MailBaba \n here few tips to get you up and running fast',
        pics: [],
        isRead: false,
        date: getCurrDate()
    },
    supportTeam: {
        id: utilService.makeId(),
        username: 'Support Team:',
        massage: 'Hi, Dani from MailBaba support team \n Thanks for chosen MailBaba \n Im here for any technical problem. \n U are welcome',
        pics: [],
        isRead: false,
        date: getCurrDate()
    },
    Spam: {
        id: utilService.makeId(),
        username: 'Spam',
        massage: ' Your package is pending: \n, we came across a package from a recent month pending for you',
        pics: [],
        isRead: false,
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
    const mail = mails.find(book => mailId === book.id)
    return Promise.resolve(mail)
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

function _createMail() {
    return {
        id: utilService.makeId(),
        username: null,
        massage: null,
        pics: [],
        isRead: false,
        date: null
    }
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

function _saveToStorage(mails) {
    storageService.saveToStorage(KEY, mails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}