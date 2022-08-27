import { eventBusService } from "../services/event-bus.service.js";
const { Link, NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {

    return <header className="app-header">

        <div className="logo-conatiner flex">
            {/* <img className="burger-icon" src="assets/pics/asset 73.svg" /> */}
            <h1 className="logo">AppsUs</h1>
        </div>

        <div className="search-icon-conatiner"> <img className="email-search-icon " src='assets/pics/asset 79.svg' /></div>
        <input className="email-search-input" onChange={() => onSearch(event)} type="text" placeholder="Search in mail" />

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
    console.log("l");
    window.location.href = `index.html#/${location}`
}

function onSearch(ev) {
    var value = ev.target.value
    eventBusService.emit('s', value)
}

