import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"
import MenuIcon from '@material-ui/icons/Menu';

function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">LOGO</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>0415507514</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>tayyeb.10@live.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <MenuIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
