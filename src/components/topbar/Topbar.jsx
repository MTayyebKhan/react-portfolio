import "./topbar.scss"

function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro">LEFT</a>
                </div>
                <h1>center</h1>
                <div className="right">
                    RIGHT
                </div>
            </div>
        </div>
    )
}

export default Topbar
