import { eventBusService } from "../services/event-bus.service.js";
const { Link, NavLink, withRouter } = ReactRouterDOM
<<<<<<< HEAD
var sidebarMode = false
=======

>>>>>>> 04ff25c7094df5dc8bb2b9207155fd8f8f3971bc
export function AppHeader() {

    function toggleBento() {
        const grid = document.querySelector('.grid')
        if (grid.style.display == 'none')
            grid.style.display = 'grid'
        else
            grid.style.display = 'none'
    }
<<<<<<< HEAD


    return <header className="app-header">

        <div className="logo-conatiner flex">
            <img className="burger-icon" onClick={() => toogleSideBar()} src="assets/pics/asset 73.svg" />
            <h1 className="logo">AppsUs</h1>
        </div>

        {/* <div className="search-icon-conatiner"> <img className="email-search-icon " src='assets/pics/asset 79.svg' /></div> */}
        <input className="email-search-input" onChange={() => onSearch(event)} type="text" placeholder="🔍 Search in mail" />


        {/* <div className="nav">
            <p onClick={() => navigateTo('')}>Home</p>
            <p onClick={() => navigateTo('about')} >About</p>
            <p onClick={() => navigateTo('mail')}>Mail</p>
            <p onClick={() => navigateTo('notes')}>Notes</p>
        </div> */}

        <nav className="nav">
=======
    return <header className="app-header">
        <Link to="/">
            <div className="flex">
                <h1 className="logo note-logo">AppsUs</h1>
            </div>
        </Link>
        <nav>
>>>>>>> 04ff25c7094df5dc8bb2b9207155fd8f8f3971bc
            <div className="apps-modal grid flex align-center" style={{ display: 'none' }}>
                <i class="fa-solid fa-book bento-icon" title="Books"></i>
                <NavLink className="note-nav" to="/mail"><i class="fa-solid fa-at bento-icon" title="Email">
                </i></NavLink>
                <NavLink className="note-nav" to="/notes"><i class="fa-solid fa-note-sticky bento-icon" title="Keep">
                </i></NavLink>
                <NavLink className="note-nav" to="/about"><i class="fa-solid fa-info bento-icon" title="About">
                </i></NavLink>
                <NavLink className="note-nav" exact to="/"><i class="fa-solid fa-house bento-icon" title="Home">
                </i></NavLink>
                <i class="fa-brands fa-trello bento-icon" title="Trello"></i>
            </div>
            <img className="apps-icons" src="/assets/img/icons/appss.svg" alt="" onClick={toggleBento} />
        </nav>
<<<<<<< HEAD


        <div className="addion-app"></div>
=======
>>>>>>> 04ff25c7094df5dc8bb2b9207155fd8f8f3971bc
    </header>
}

{/* <NavLink exact to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/mail">Mail</NavLink>
<NavLink to="/notes">Notes</NavLink> */}
function navigateTo(location) {
    window.location.href = `index.html#/${location}`
    sidebarMode = false
}

function onSearch(ev) {
    var value = ev.target.value
    eventBusService.emit('s', value)
}

function toogleSideBar() {
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
