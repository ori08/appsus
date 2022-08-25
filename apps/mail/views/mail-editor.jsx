import { mailService } from "../services/mail.service.js"
import { utilService } from '../../../js/services/util.service.js'
import { MailIndex } from "./mail-index.jsx"
import { onAddMail } from "./mail-index.jsx"

export class MailEditor extends React.Component {

    state = {
        mail: {
            id: utilService.makeId(),
            username: null,
            massage: null,
            pics: [],
            isRead: false,
            date: null
        }
    }




    render() {
        return <section >
            <form className="flex column " onSubmit={() => onAddMail(event)}>
                <div className="flex">
                    <h1>To</h1>
                    <input type="mail" />
                </div>
                <div className="flex">
                    <h1>Subject</h1>
                    <input type="text" />
                </div>
                <textarea name="" id="" cols="100" rows="20"></textarea>
                <button className="send-btn">send</button>
            </form>
        </section >
    }
}

