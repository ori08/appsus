import { MailEditor } from "../views/mail-editor"

const { Link } = ReactRouterDOM

export class MailSideBar extends React.Component {

    render() {
        return <section >
            <div className="side-bar-contect">
                <Link to="/mail/edit"><button>New Mail</button></Link>
                <button>Inbox</button>
                <button>Starred</button>
                <button>Sent</button>
                <button>Trash</button>
            </div>
        </section>
    }
}