import React, {FC, useState} from 'react';
import './NavbarStudy.scss';
import NavbarSVGSelector from './NavbarStudySVGSelector';

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
  ]

  let image__wrapper_cs1 = !isMenuActive ? 'active' : '';
  let svg_cs1 = isMenuActive ? 'active' : '';
  let menu__text_cs1 = isMenuActive ? 'active' : '';

  return (
    <div className={isMenuActive ? 'menu active' : 'menu'} onClick={() => setIsMenuActive(false)}>
        <div className={isMenuActive ? 'blur active' : 'blur'}/>
        <div className={isMenuActive ? 'menu__content active' : 'menu__content'} onClick={e => e.stopPropagation()}>
            <div className="menu__inner">      
                <ul>
                    {
                        !isMenuActive ? 
                        <div className='menu__item' onClick={() => setIsMenuActive(!isMenuActive)}>
                            <div className='image__wrapper active'>
                                <div className='svg svg__menu'>
                                    <NavbarSVGSelector icon='menu'/>
                                </div>
                            </div>
                        </div> :
                        <div className='menu__item' onClick={() => setIsMenuActive(!isMenuActive)}>
                            <div className='image__wrapper active'>
                                <div className='svg'>
                                    <NavbarSVGSelector icon='close'/>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        items.map((item: {
                            id: number; href: string; value: string; icon: string; 
                        }) => item.icon !== 'menu' && item.icon !== 'close' ? 
                            <li className={'menu__item'} key={item.id} onClick={() =>
                                item.id !== isButtonPressed ? 
                                setIsButtonPressed(item.id) : 
                                setIsButtonPressed(isButtonPressed)
                            }>
                                <a className='menu__item-inner'  href={item.href}>
                                    <span className={`image__wrapper ${image__wrapper_cs1} ${item.id === isButtonPressed ? 'selected' : ''}`}>
                                        <div className={`svg ${svg_cs1} ${item.id === isButtonPressed ? 'selected' : ''}`}>
                                            <NavbarSVGSelector icon={item.icon}/>
                                        </div>
                                    </span>
                                    <span className={`menu__text ${menu__text_cs1} ${item.id === isButtonPressed ? 'selected' : ''}`}>
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
        
    </div>
  )
}

export default NavbarStudy;