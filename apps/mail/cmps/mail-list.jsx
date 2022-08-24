const { Link } = ReactRouterDOM

export function MailList({ mail: mail }) {

    return <Link to={"/mail/" + mail.id}>
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