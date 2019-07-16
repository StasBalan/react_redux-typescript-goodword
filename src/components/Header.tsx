import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface HeaderState {
    title: string;
    route: string;
}

interface MenuInterface {
    menu: HeaderState[]
}

class Header extends Component<{}, MenuInterface> {

    state: MenuInterface = {
        menu: [
            {title: 'Home', route: '/'},
            {title: 'Settings', route: '/settings'},
            {title: 'Cards', route: '/cards'},
            {title: 'Favorites', route: '/favorites'}            
        ]
    }

    render() {
        const { menu } = this.state;

        const elementsHeader = menu.map((el, index) => {
            return(
                <li key={index} className='header__item header-item'>
                    <Link className='header-item__link' to={el.route}>{el.title}</Link>    
                </li>
            );
        });

        return(
            <div className='header'>
                <h3 className='header__title'>GOODWORD</h3>
                <ul className='header__menu'>
                    {elementsHeader}
                </ul>
            </div>
        );
    }
}

export default Header;