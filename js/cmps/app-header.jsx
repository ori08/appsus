const { Link, NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {

    return <header className="app-header-back">
        <section className="app-header main-layout">
            <Link to="/">
                <div className="flex">
                    <h1 className="logo">AppsUs</h1>
                </div>
            </Link>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/mail">Mail</NavLink>
                <NavLink to="/notes">Notes</NavLink>
            </nav>
        </section>

    </header>
}
