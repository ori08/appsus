const { Link } = ReactRouterDOM
import { MailInfo } from "./mail-info"
export function MailList({ mail: mail }) {

    return <Link to={"/mail/info/" + mail.id}>
        <article >
            <div className="mailLink">
                <div className="padding">
                    <h5 className="username">{mail.username}</h5>
                    <p className="massage">{mail.massage}</p>
                    <p className="date">{mail.date}</p>
                </div>
            </div>
        </article>
    </Link>
}