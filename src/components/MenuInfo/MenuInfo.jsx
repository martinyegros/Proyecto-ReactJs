import { useState } from "react";
import { MenuInfoList } from "../MenuInfoList/MenuInfoList";
import { Link } from "react-router-dom";

export const MenuInfo = () => {
    const [showMenuInfo, setShowMenuInfo] = useState(false)

    const handleOpen = () => {
        setShowMenuInfo(true)
    }
    const handleClose = () => {
        setShowMenuInfo(false)
    }

    return (
        <div className={showMenuInfo ? "menu-active" : ""}>
            <Link onClick={handleOpen} className="navbar-link" href={MenuInfoList}>INFORMACIÓN</Link>

            <div className="menu-back" onClick={handleClose}>
                <MenuInfoList close={handleClose}/>
            </div>
        </div>
    )
}