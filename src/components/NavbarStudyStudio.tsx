import React, {FC, useState} from 'react';
import classNames from 'classnames';
import './NavbarStudyStudio.scss';
import NavbarStudyStudioSVGSelector from './NavbarStudyStudioSVGSelector';

const NavbarStudy: FC = () => {
    const EMPTY_BUTTON_ID = 0;
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [menuType, setMenuType] = useState('study');
    const [buttonPressed, setButtonPressed] = useState(EMPTY_BUTTON_ID);
    const items = [
    {id: 1, value: 'Menu', href: '#!', icon: 'menu', place: 'openclose'},
    {id: 2, value: 'Close', href: '#!', icon: 'close', place: 'openclose'},
    {id: 3, value: 'Home', href: '#!', icon: 'home', place: 'study'},
    {id: 4, value: 'Categories', href: '#!', icon: 'categories', place: 'study'},
    {id: 5, value: 'Subscription', href: '#!', icon: 'subscription', place: 'study'},
    {id: 6, value: 'My lessons', href: '#!', icon: 'hat_mylesson', place: 'study'},
    {id: 7, value: 'Watch later', href: '#!', icon: 'watch_later', place: 'study'},
    {id: 8, value: 'My lesson', href: '#!', icon: 'my_lesson', place: 'studio'},
    {id: 9, value: 'Management', href: '#!', icon: 'management', place: 'studio'},
  ]

let imageWrapperCN = classNames('image__wrapper', !isMenuActive ? 'image__wrapper--active' : '');
let svgItemCN = classNames('svg__item', isMenuActive ? 'svg__item--active' : '');
let menuTextCN = classNames('menu__text', isMenuActive ? 'menu__text--active' : '');
let blurCN = classNames(isMenuActive ? 'blur--active' : 'blur');
let menuContentCN = classNames(isMenuActive ? 'menu__content--active' : 'menu__content');

  return (
    <div className= 'menu' onClick={() => setIsMenuActive(false)}>
        <div className={blurCN}/>
        <div className={menuContentCN} onClick={e => e.stopPropagation()}>
            <ul className="menu__inner">
                {
                    !isMenuActive ? 
                    <div className='menu__item' onClick={() => setIsMenuActive(!isMenuActive)}>
                        <div className='image__wrapper image__wrapper--active'>
                            <div className='svg svg__menu'>
                                <NavbarStudyStudioSVGSelector icon='menu'/>
                            </div>
                        </div>
                    </div> :
                    <div className='menu__item' onClick={() => setIsMenuActive(!isMenuActive)}>
                        <div className='image__wrapper image__wrapper--active'>
                            <div className='svg'>
                                <NavbarStudyStudioSVGSelector icon='close'/>
                            </div>
                        </div>
                    </div>
                }
                {items.map((item: {
                        id: number; href: string; value: string; icon: string; place: string; 
                    }) => (item.place === menuType) && 
                        <li className={'menu__item'} 
                            key={item.id} 
                            onClick={() => 
                            (item.id !== buttonPressed) && 
                            setButtonPressed(item.id)}
                        >
                            <a className='menu__item-inner'  href={item.href}>
                                <span className={`${imageWrapperCN} ${item.id === buttonPressed ? 'image__wrapper--selected' : ''}`}>
                                    <div className={`${svgItemCN} ${item.id === buttonPressed ? 'svg__item--selected' : ''}`}>
                                        <NavbarStudyStudioSVGSelector icon={item.icon}/>
                                    </div>
                                </span>
                                <span className={`${menuTextCN} ${item.id === buttonPressed ? 'menu__text--selected' : ''}`}>
                                    {item.value}
                                </span>
                            </a>
                        </li>
                    ) 
                }
            </ul>
        </div>
    </div>
  )
}

export default NavbarStudy;