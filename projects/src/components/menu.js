import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import logo from '../assets/logo.png';
import user from '../assets/userImg.png';

// Ссылки должны быть Link (реакт роутер), но так как тут ничего нет сделал просто через спан.
// Так же можно кинуть на логотоп ссыылку на главную. Меню сделал через HOC. 

const trigger = (
    <span>
      <img src={user} alt="My Profile" className="header-dropdown-avatar"/> 
    </span>
)

export default function Menu(props) {
    return (
        <div>
            <header>
                <nav className="header">
                    <img src={logo} alt="Cloud Git" className="header-logo"/>
                    <div className="header-links">
                        <span className="header-links-link">projects</span>
                        <span className="header-links-link">settings</span>
                    </div>
                    <span className="header-dropdown">
                        <Dropdown inline trigger={trigger}>
                            <Dropdown.Menu>
                                <Dropdown.Item text='Edit' />
                                <Dropdown.Item text='Log Out' />
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>
                </nav>
            </header>
            {props.children}
        </div>
    )
}
