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

        const elementsHeader = menu.map((el) => {
            return(
                <li>
                    <Link to={el.route}>{el.title}</Link>    
                </li>
            );
        });

        return(
            <div>
                <ul>
                    {elementsHeader}
                </ul>
            </div>
        );
    }
}

export default Header;