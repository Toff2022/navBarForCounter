import React from "react";
// import { useState } from "react";

const NavLink = (props) => {

// const [active, setActive] = useState(false)

//Отслеживание нажатия
const handleClick = () => {
    // setActive((prevState) => !prevState)
    props.onActiveChange(props.id)
}
//Создание стиля
const getClasses = ( ) => {
    let classes = "nav-link"
    return (classes += props.active ? 'active' : '')
}

    return ( 
        <div>
          
            <li className={ getClasses() } onClick={ handleClick } >
        <a href={ props.link}>{props.text}</a>
            </li>
    </div>
    
    )
}

export default NavLink