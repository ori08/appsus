
import { mailService } from '../services/mail.service.js';
import { MailSideBar } from './side-bar.jsx';
import { AdditionalApp } from '../cmps/additional-app.jsx';
export class MailInfo extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const { mailId } = this.props.match.params
        mailService.getById(mailId)
            .then(mail => {
                console.log(mail);
                // if (!mail) return this.onGoBack()
                this.setState(mail = { mail })
            })
    }


    render() {
        console.log(this.state);
        const { mail } = this.state
        if (!mail) return
        console.log(mail.username)
        // if (!mail) return ''
        return <section >
            <div className="flex">
                <div className="mail-side-bar">
                    <MailSideBar />
                </div>
                <div className="mail-info-container">
                    <h1>Sent From: {mail.username} </h1>
                    <h4>Subject: {mail.subject}</h4>
                    <p>{mail.massage}</p>
                </div>
                <div className="additional-app">
                    <AdditionalApp />
                </div>
            </div>
        </section>
    }
}