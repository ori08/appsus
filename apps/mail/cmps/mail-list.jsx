const { Link } = ReactRouterDOM
import { MailInfo } from "./mail-info"
import { mailService } from "../services/mail.service.js"

export class MailList extends React.Component {

    state = {
        mail: this.props.mail
    }

    mark = (mailID) => {
        mailService.markAsSelected(mailID).then(mail => {
            this.setState({ mail: mail })
        })
    }


    render() {
        const { mail } = this.state

        var iconsImg = {
            selected: 'assets/pics/asset 21.png',
            starrad: 'assets/pics/asset 27.png',
            importent: 'assets/pics/asset 28.png'
        }
        if (mail.isStarrad) iconsImg.starrad = 'assets/pics/star-colord.png'
        return <article >
            <div className="flex" >

                <div className="mail-link-icons">
                    <img className="mail-icon" src={iconsImg.selected} />
                    <img className="mail-icon" onClick={() => this.mark(mail.id)} src={iconsImg.starrad} />
                    <img className="mail-icon" src="assets/pics/asset 28.png" />
                </div>
                <div className="flex mailLink">
                    <Link className="mail-link-cotext" to={"/mail/info/" + mail.id}>
                        <h5 className="username">{mail.username}</h5>
                        <p className="massage">{mail.massage}</p>
                        <p className="date">{mail.date}</p>
                    </Link>
                </div>
            </div>
        </article>
    }
}