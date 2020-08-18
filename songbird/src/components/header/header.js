import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div className="header mt-4">
            <div className="header__logo__score">
                <h3 className="header__logo">SongBird</h3>
                <span className="header__score">Score: 0</span>
            </div>

            <div className="header__list mt-3 mb-3">
                <span className="header__item">Разминка</span>
                <span className="header__item">Воробьиные</span>
                <span className="header__item">Лесные птицы</span>
                <span className="header__item">Певчие птицы</span>
                <span className="header__item">Хищные птицы</span>
                <span className="header__item">Морские птицы</span>
            </div>
        </div>
    )
}

export default Header;
