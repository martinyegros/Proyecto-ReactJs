import { useState } from "react";
import { MenuList } from "../MenuList/MenuList";
import { Link } from "react-router-dom";

export const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleOpen = () => {
        setShowMenu(true)
    }
    const handleClose = () => {
        setShowMenu(false)
    }

    return (
        <div className={showMenu ? "menu-active" : ""}>
            <Link onClick={handleOpen} className="navbar-link" href={MenuList}>PRODUCTOS</Link>

            <div className="menu-back" onClick={handleClose}>
                <MenuList close={handleClose}/>
            </div>
        </div>
    )
}