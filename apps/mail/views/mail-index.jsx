
import { mailService } from '../services/mail.service.js';
import { MailContainer } from '../cmps/mail-container.jsx';
import { MailSideBar } from '../cmps/side-bar.jsx';
import { AdditionalApp } from '../cmps/additional-app.jsx';

const { Link } = ReactRouterDOM
export class MailIndex extends React.Component {
    state = {
        mails: [],
        filterBy: null
    }

    componentDidMount() {
        console.log('this.props', this.props);
        this.loadMails()
    }

    loadMails = () => {
        mailService.query(this.state.filterBy)
            .then((mails) => this.setState({ mails }))
    }


    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadMails)
    }


    onGoBack = () => {
        this.props.history.push('/mail')
    }

    render() {
        const { mails } = this.state

        return <section className="mail-app">
            <div className="flex">
                <div className="mail-side-bar">
                    <MailSideBar />
                </div>
                <div className="mail-list-container">
                    <MailContainer mails={mails} />
                </div>
                <div className="additional-app">
                    <AdditionalApp />
                </div>
            </div>
        </section>
    }
}

function onAddMail(ev) {
    ev.preventDefault()
    mailService.addNewMail(ev).then(
        location.reload()
    )

}

export { onAddMail }