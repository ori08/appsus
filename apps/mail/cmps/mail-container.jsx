import { MailList } from './mail-list.jsx';
export function MailContainer({ mails, onRemoveMail, hideMain }) {

    return <section className="mail-list-container" >

        {mails.map(mail =>
            <MailList
                key={mail.id}
                mail={mail} onRemoveMail={onRemoveMail}
                hideMain={hideMain} />)}

    </section>
}