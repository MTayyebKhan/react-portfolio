import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"
// import MenuIcon from '@material-ui/icons/Menu';

function Topbar({ menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
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
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
