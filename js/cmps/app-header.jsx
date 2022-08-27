import { eventBusService } from "../services/event-bus.service.js";
const { Link, NavLink, withRouter } = ReactRouterDOM
var sidebarMode = false
export function AppHeader() {

    return <header className="app-header">

        <div className="logo-conatiner flex">
            <img className="burger-icon" onClick={() => toogleSideBar()} src="assets/pics/asset 73.svg" />
            <h1 className="logo">AppsUs</h1>
        </div>

        {/* <div className="search-icon-conatiner"> <img className="email-search-icon " src='assets/pics/asset 79.svg' /></div> */}
        <input className="email-search-input" onChange={() => onSearch(event)} type="text" placeholder="🔍 Search in mail" />

        <nav>
            <p onClick={() => navigateTo('')}>Home</p>
            <p onClick={() => navigateTo('about')} >About</p>
            <p onClick={() => navigateTo('mail')}>Mail</p>
            <p onClick={() => navigateTo('notes')}>Notes</p>
        </nav>
        <div className="addion-app"></div>
    </header>
}


function navigateTo(location) {
    window.location.href = `index.html#/${location}`
    sidebarMode = false
}

function onSearch(ev) {
    var value = ev.target.value
    eventBusService.emit('s', value)
}

export function toogleSideBar() {
    var location = window.location.href
    var idx = location.indexOf('index.html')
    var currLocation = location.substring(idx, location.length)

    console.log("sidebar :" + sidebarMode + " " + window.innerWidth);

    if (!sidebarMode) {
        if (currLocation === 'index.html#/mail') {
            document.querySelector('.mail-list-container ').style.display = "none"
            document.querySelector('.mail-side-bar').style.display = "flex"
        }
        else {
            document.querySelector('.mail-info-container').style.display = "none"
            document.querySelector('.mail-side-bar').style.display = "flex"
        }
    }
    else {
        if (currLocation === 'index.html#/mail') {
            document.querySelector('.mail-list-container ').style.display = "flex"
            document.querySelector('.mail-side-bar').style.display = "none"
        }
        else {
            document.querySelector('.mail-info-container').style.display = "flex"
            document.querySelector('.mail-side-bar').style.display = "none"
        }
    }
    sidebarMode = !sidebarMode
}
