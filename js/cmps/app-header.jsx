const { Link, NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <img className="burger-icon" src="assets/pics/asset 73.svg" />
            <img className="logo" src="assets/pics/asset 1.png" />
        </Link>
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/notes">Notes</NavLink>
        </nav>
    </header>
}
