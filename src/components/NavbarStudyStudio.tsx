import React, {FC, useState} from 'react';
import './NavbarStudyStudio.scss';
import NavbarStudyStudioSVGSelector from './NavbarStudyStudioSVGSelector';

const NavbarStudy: FC = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isButtonPressed, setIsButtonPressed] = useState(0);
    const items = [
    {id: 1, value: 'Menu', href: '#!', icon: 'menu'},
    {id: 2, value: 'Close', href: '#!', icon: 'close'},
    {id: 3, value: 'Home', href: '#!', icon: 'home'},
    {id: 4, value: 'Categories', href: '#!', icon: 'categories'},
    {id: 5, value: 'Subscription', href: '#!', icon: 'subscription'},
    {id: 6, value: 'My lessons', href: '#!', icon: 'hat_mylesson'},
    {id: 7, value: 'Watch later', href: '#!', icon: 'watch_later'},
    {id: 8, value: 'My lesson', href: '#!', icon: 'my_lesson'},
    {id: 9, value: 'Management', href: '#!', icon: 'management'},
  ]

  let imageWrapper = !isMenuActive ? 'image__wrapper--active' : '';
let svgItem = isMenuActive ? 'svg__item--active' : '';
let menuText = isMenuActive ? 'menu__text--active' : '';

  return (
    <div className= 'menu' onClick={() => setIsMenuActive(false)}>
        <div className={isMenuActive ? 'blur--active' : 'blur'}/>
        <div className={isMenuActive ? 'menu__content--active' : 'menu__content'} onClick={e => e.stopPropagation()}>
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
                        id: number; href: string; value: string; icon: string; 
                    }) => item.icon !== 'menu' && item.icon !== 'close' ? 
                        <li className={'menu__item'} key={item.id} onClick={() =>
                            item.id !== isButtonPressed ? 
                            setIsButtonPressed(item.id) : 
                            setIsButtonPressed(isButtonPressed)
                        }>
                            <a className='menu__item-inner'  href={item.href}>
                                <span className={`image__wrapper ${imageWrapper} ${item.id === isButtonPressed ? 'image__wrapper--selected' : ''}`}>
                                    <div className={`svg__item ${svgItem} ${item.id === isButtonPressed ? 'svg__item--selected' : ''}`}>
                                        <NavbarStudyStudioSVGSelector icon={item.icon}/>
                                    </div>
                                </span>
                                <span className={`menu__text ${menuText} ${item.id === isButtonPressed ? 'menu__text--selected' : ''}`}>
                                    {item.value}
                                </span>
                            </a>
                        </li>
                        :
                        null
                    ) 
                }
            </ul>
        </div>
    </div>
  )
}

export default NavbarStudy;