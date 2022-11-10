import React, {useState} from "react"


const NavBar = () => {

    const [open, setOpen] = useState(false)
    const [menuItems, setMenuItems] = useState([
        'Главная',
        'Блог',
        'Контакты',
    ])
    const handleMenuClick = () => {
        setOpen((prevState) => !prevState)
    }
    const handleItemClick =(id) => {
        console.log()
    }

    return(
        <div>
            <button className="btn btn-sm btn-primary"
                    onClick={handleMenuClick}
            >
                меню
            </button>
            {open &&(
                <ul className="list-group">
                    {menuItems.map((item) =>{
                        
                    })}
                </ul>
            )}
        </div>
    )
}
export default NavBar