import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Header.css';

import siteLogo from '../assets/images/lootzone-logo.png';

function Header() {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const categoriesRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
                setIsCategoriesOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [categoriesRef]);

    const toggleCategories = () => {
        setIsCategoriesOpen(!isCategoriesOpen);
    };

    const telegramChannelUrl = "https://t.me/lootzoneua_bot"; 

    return (
        <header className="app-header">
            <div className="header-main-row">
                <div className="header-left-spacer"></div>

                <div className="logo-area-center">
                    <Link to="/" className="logo-link">
                        <div className="main-logo-elements">
                            <div className="loot-text-container">
                                <span className="site-title-part loot-text-back">Loot</span>
                                <span className="site-title-part loot-text-front">Loot</span>
                            </div>

                            <img
                                src={siteLogo}
                                alt="LootZone Logo"
                                className="site-logo-inline"
                                style={{ height: '60px' }}
                            />

                            <div className="zone-text-container">
                                <span className="site-title-part zone-text-back">Zone</span>
                                <span className="site-title-part zone-text-front">Zone</span>
                            </div>
                        </div>

                        <span className="site-slogan">Залутай мрію</span>
                    </Link>
                </div>

                <div className="header-actions">
                    <div className="categories-dropdown-container" ref={categoriesRef}>
                        <button className="header-button" onClick={toggleCategories}>
                            Категорії <span className="arrow">{isCategoriesOpen ? '▲' : '▼'}</span>
                        </button>
                        {isCategoriesOpen && (
                            <div className="categories-dropdown-menu">
                                <Link to="/gadgets" className="dropdown-item" onClick={toggleCategories}>Гаджети</Link>
                                <Link to="/accounts" className="dropdown-item" onClick={toggleCategories}>Акаунти</Link>
                            </div>
                        )}
                    </div>
                    <a
                        href={telegramChannelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header-button help-button"
                    >
                        Допомога
                    </a>
                </div>
            </div>

            <div className="header-bottom-line"></div>
        </header>
    );
}

export default Header;
