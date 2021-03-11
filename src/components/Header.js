import React from 'react'

function Header(props) {
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="https://icons-for-free.com/iconfiles/png/512/add+to+cart+cart+shopping+cart+shopping+cart+icon+icon-1320073116171330767.png" />
            </div>
        </div>
    )
}

export default Header
