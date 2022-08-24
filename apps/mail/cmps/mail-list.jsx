const { Link } = ReactRouterDOM
import { MailInfo } from "./mail-info"
export function MailList({ mail: mail }) {

    return <Link to={"/mail/info/" + mail.id}>
        <article >
            <div className="mailLink">
                <div className="padding">
                    <img className="mail-icon" src="assets/pics/asset 21.png" />
                    <img className="mail-icon" src="assets/pics/asset 27.png" />
                    <img className="mail-icon" src="assets/pics/asset 28.png" />
                    <h5 className="username">{mail.username}</h5>
                    <p className="massage">{mail.massage}</p>
                    <p className="date">{mail.date}</p>
                </div>
            </div>
        </article>
    </Link>
}