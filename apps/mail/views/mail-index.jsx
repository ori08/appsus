
const { Link } = ReactRouterDOM
export class MailIndex extends React.Component {
    state = {
        mails: [],
        filterBy: null,

        // counter: 0
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

    render() {
        console.log(this.state)
        const { mails } = this.state
        return <section className="mail-app">
            <Link to="/mail/edit"><button>New Mail</button></Link>
            {/* <BookFilter onSetFilter={this.onSetFilter} /> */}
            <MailContainer mails={mails} />
        </section>
    }
}

