import { MailEditor } from "../views/mail-editor"

const { Link } = ReactRouterDOM

export class MailSideBar extends React.Component {

    render() {
        return <section >
            <div className="side-bar-contect">

                <div className="flex compose">
                    <div className="compose-btn">
                        <img className="mail-icon" src="assets/pics/asset 12.png" />
                        <Link to="/mail/edit"><button>Compose</button></Link>
                    </div>
                </div>


                <div className="side-bar-padding">

                    <div className="flex sidebar-icons">
                        <img className="compose-icon" src="assets/pics/asset 13.png" />
                        <button>Inbox</button>
                    </div>

                    <div className="flex sidebar-icons">
                        <img className="mail-icon" src="assets/pics/asset 27.png" />
                        <button>Starred</button>
                    </div>

                    <div className="flex sidebar-icons">
                        <img className="mail-icon" src="assets/pics/asset 63.png" />
                        <button>Sent</button>
                    </div>

                    <div className="flex sidebar-icons">
                        <img className="mail-icon" src="assets/pics/asset 30.png" />
                        <button>Trash</button>
                    </div>
                </div>
            </div>
        </section>
    }
}