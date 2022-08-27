
import { mailService } from '../services/mail.service.js';
import { MailSideBar } from './side-bar.jsx';
import { AdditionalApp } from '../cmps/additional-app.jsx';


export class MailInfo extends React.Component {

    state = {
        mail: null,
        ShowUp: false
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const { mailId } = this.props.match.params
        mailService.getById(mailId)
            .then(mail => {
                console.log(mail);
                this.setState(mail = { mail })
            })
    }

    // toogleReply = () => {

    // }

    render() {
        const { mail } = this.state
        if (!mail) return

        var linkFrom = 'info'

        return <section >

            <div className="flex">
                {<div className="mail-side-bar">
                    <MailSideBar linkfrom={linkFrom} />
                </div>}

                <div className="mail-info-container">

                    <div className="tool-bar">
                        <img className="compose-icon" src="assets/pics/asset 29.png" />
                        <img className="mail-icon" src="assets/pics/asset 17.png" />
                        <img className="mail-icon" src="assets/pics/asset 30.png" />
                        <img className="mail-icon" src="assets/pics/asset 34.png" />
                        <img className="mail-icon" src="assets/pics/asset 32.png" />
                        <img className="mail-icon" src="assets/pics/asset 16.png" />
                    </div>

                    <div className="padding-mail-info">
                        <h1>Sent From: {mail.username} </h1>
                        <h4>Subject: {mail.subject}</h4>
                        <p>{mail.massage}</p>
                    </div>

                    {/* <button onClick={() => this.toogleReply()}>reply</button> */}
                </div>
                {/* <ReplyEditor /> */}
                {/* <div className="additional-app">
                    <AdditionalApp />
                </div> */}
            </div>

        </section>
    }
}



function replyEditor() {



}