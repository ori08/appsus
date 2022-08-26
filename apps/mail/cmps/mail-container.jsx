import { MailList } from './mail-list.jsx';
export function MailContainer({ mails, onRemoveMail }) {

    return <section className="mail-list-container" >

        {mails.map(mail =>
            <MailList
                key={mail.id}
                mail={mail} onRemoveMail={onRemoveMail} />)}

    </section>
}