import { MailEditor } from "../views/mail-editor"

const { Link } = ReactRouterDOM

const defaltColor = "rgb(246, 248, 252)"
const selectedBtnColor = 'rgb(211, 227, 253)'


export class MailSideBar extends React.Component {

    state = {
        sidebarIcons:
            [{
                imgSrc: 'assets/pics/asset 13.png',
                btnName: "Inbox",
                filterBy: "all",
                color: selectedBtnColor
            },
            {
                imgSrc: 'assets/pics/asset 27.png',
                btnName: "Starred",
                filterBy: "starred",
                color: defaltColor
            },
            {
                imgSrc: 'assets/pics/asset 63.png',
                btnName: "Sent",
                filterBy: "sent",
                color: defaltColor
            },
            {
                imgSrc: 'assets/pics/asset 30.png',
                btnName: "Trash",
                filterBy: "trash",
                color: defaltColor
            }]
    }



    markSelected = (filterType, iconName) => {
        const { onFilterBy } = this.props
        var { sidebarIcons } = this.state
        sidebarIcons.map(icon => {
            if (icon.btnName === iconName) return icon.color = selectedBtnColor
            else icon.color = defaltColor
        })
        onFilterBy(filterType)
    }


    render() {
        const { onFilterBy } = this.props
        const { sidebarIcons } = this.state
        const { listen } = this.props
        var styleTag = ''

        return <section >
            <div className="side-bar-contect">

                <div className="flex compose">
                    <div className="compose-btn">
                        <img className="mail-icon" src="assets/pics/asset 12.png" />
                        <button onClick={listen}>Compose</button>
                    </div>
                </div>

                <div className="side-bar-padding">
                    {sidebarIcons.map(icon => {
                        return <div className="flex sidebar-icons" style={{ backgroundColor: icon.color }} key={icon.btnName}>
                            <img className="mail-icon" src={icon.imgSrc} />
                            <button onClick={() => this.markSelected(icon.filterBy, icon.btnName)}>{icon.btnName}</button>
                        </div>
                    })}

                </div>
            </div>
        </section>
    }
}