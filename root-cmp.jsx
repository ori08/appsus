import { AppHeader } from "./js/cmps/app-header.jsx"
import { About } from "./js/views/about.jsx"
import { Home } from "./js/views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { MailEditor } from "./apps/mail/views/mail-editor.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Switch>
                <Route path="/mail/edit/:bookId?" component={MailEditor} />
                <Route path="/mail" component={MailIndex} />
                <Route path="/note" component={NoteIndex} />
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
            </Switch>
        </section>
    </Router>
}
