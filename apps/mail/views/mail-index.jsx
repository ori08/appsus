
import { mailService } from '../services/mail.service.js';
import { MailContainer } from '../cmps/mail-container.jsx';
import { MailSideBar } from '../cmps/side-bar.jsx';
import { AdditionalApp } from '../cmps/additional-app.jsx';
import { MailEditor } from './mail-editor.jsx';

const { Link } = ReactRouterDOM
export class MailIndex extends React.Component {
    state = {
        mails: [],
        filterBy: 'all',
        isNewMail: false,
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

    onNewMail = () => {
        this.setState({ isNewMail: true })
    }

    onFilterBy = (filterBy) => {
        this.state.filterBy = filterBy
        console.log(this.state.filterBy);
        mailService.filterBy(filterBy).then(mails => {
            this.setState(mails = { mails })
        })
    }

    onGoBack = () => {
        this.props.history.push('/mail')
    }

    onRemoveMail = (mailId) => {

        mailService.removeMail(mailId).then(this.onFilterBy(this.state.filterBy))

    }

    listen = () => {
        var { isNewMail } = this.state
        this.setState({ isNewMail: !isNewMail })
    }


    onAddMail = (ev) => {
        if (ev === 'close') {
            Promise.resolve(this.onFilterBy(this.state.filterBy)).then(this.setState({ isNewMail: false }))
        }
        else {
            ev.preventDefault()
            mailService.addNewMail(ev).then(
                Promise.resolve(this.onFilterBy(this.state.filterBy)).then(this.setState({ isNewMail: false }))
            )
        }
    }

    render() {
        var mailDisplay = "flex"
        var editorDisplay = "none"
        const { mails } = this.state
        const { isNewMail } = this.state
        if (isNewMail) mailDisplay = "none"
        else mailDisplay = "flex"


        // <div className="mail-list-container" style={{ display: mailDisplay }}>

        return <section className="mail-app">
            <div className="flex">

                <MailSideBar mails={mails} onFilterBy={this.onFilterBy} listen={this.listen} />

                <MailContainer mails={mails} onRemoveMail={this.onRemoveMail} />

                <MailEditor onAddMail={this.onAddMail} isNewMail={isNewMail} />

                <AdditionalApp />

            </div>
        </section>
    }
}

// function onAddMail(ev) {
//     ev.preventDefault()
//     mailService.addNewMail(ev).then(
//         window.location.href = 'index.html#/mail'
//     )
// }
// export { onAddMail }   
