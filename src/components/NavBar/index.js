import React from "react";


function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item active ">Clicky Game! </li>
                <li className="nav-item active ">{props.result} </li>
                <li className="nav-item active">
                    Score: {props.score} | Top Score: {props.topScore}{" "}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;