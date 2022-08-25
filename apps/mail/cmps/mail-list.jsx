const { Link } = ReactRouterDOM
import { MailInfo } from "./mail-info"
import { mailService } from "../services/mail.service.js"

export class MailList extends React.Component {

    state = {
        mail: this.props.mail
    }

    mark = (mailID, type) => {
        mailService.markAsSelected(mailID, type).then(mail => {
            this.setState({ mail: mail })
        })
    }


    render() {

        const { mail } = this.state
        const { onRemoveMail } = this.props

        var iconsImg = {
            selected: 'assets/pics/asset 21.png',
            starrad: 'assets/pics/asset 27.png',
            importent: 'assets/pics/asset 28.png'
        }

        // const defaultColor = ""
        // const selectedColor = "rgb(211,227,253)"


        if (mail.isStarrad) iconsImg.starrad = 'assets/pics/star-colord.png'
        if (mail.isSelected) iconsImg.selected = 'assets/pics/selected-box.png'
        return <article  >
            <div className="flex mails" >

                <div className="mail-link-icons">
                    <img className="mail-icon" onClick={() => this.mark(mail.id, 'selected')} src={iconsImg.selected} />
                    <img className="mail-icon" onClick={() => this.mark(mail.id, 'starrad')} src={iconsImg.starrad} />
                    <img className="mail-icon" onClick={() => this.mark(mail.id, 'important')} src="assets/pics/asset 28.png" />
                </div>
                <div className="flex mailLink" >
                    <Link className="mail-link-cotext" to={"/mail/info/" + mail.id}>
                        <h5 className="username">{mail.username}</h5>
                        <p className="massage">{mail.massage}</p>
                        <p className="date">{mail.date}</p>
                    </Link>
                    <img className="mail-icon" onClick={() => onRemoveMail(mail.id)} src="assets/pics/asset 30.png" />
                </div>

            </div>
        </article>
    }
}