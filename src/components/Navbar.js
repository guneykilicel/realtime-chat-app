import React from "react";

const Navbar = () => {
    return(
        <div className='navbar'>
            <span className="logo">Lama Chat</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
                <span>Jhon</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar