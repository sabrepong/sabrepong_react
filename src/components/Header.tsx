import * as React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.PureComponent {
    render() {
        return (
            <header
                className="spark-header spark-header--condensed spark-header--visible spark-header--overflow-checked">
                <nav className="spark-header__nav" role="navigation">
                    <span className="spark-header__logo"><i
                        className="spark-logo spark-logo--sabre spark-logo--sm">Sabre</i>
                    </span>
                    <Link to='/' className="spark-header__title">SabrePong™</Link>
                    <div className="spark-menu spark-header__menu" role="menu">
                        <div className="spark-menu__header">
                            <button className="spark-menu__toggle" title="Hide Navigation">
                                <i className="spark-icon-close"/>
                            </button>
                            <span className="spark-menu__title"/>
                        </div>
                        <ul className="spark-menu__list spark-header__list spark-header__list--overflow">
                            <li className="spark-menu__list-item" role="menuitem">
                                <a
                                    href="https://www.sabrepong.leaguerepublic.com"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className="spark-menu__list-link">Ladder</a>
                            </li>
                            <li className="spark-menu__list-item" role="menuitem">
                                <a
                                    href="https://pl.wikipedia.org/wiki/Tenis_sto%C5%82owy"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className="spark-menu__list-link">Rules</a>
                            </li>
                            <li className="spark-menu__list-item" role="menuitem">
                                <Link
                                     to='/contact'
                                     className='spark-menu__list-link'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}