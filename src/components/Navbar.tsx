import React, {FC, useState} from 'react';
import './Navbar.scss';
import home from "./icons/home.svg";
import categories from "./icons/categories.svg";
import subscription from "./icons/subscription.svg";
import hat_mylesson from "./icons/hat_mylesson.svg";
import watch_later from "./icons/watch_later.svg";


const Navbar: FC = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const items = [
    {id: 1, value: 'Home', href: '/home', icon: home},
    {id: 2, value: 'Categories', href: '/categories', icon: categories},
    {id: 3, value: 'Subscription', href: '/subscription', icon: subscription},
    {id: 4, value: 'My lessons', href: '/my_lessons', icon: hat_mylesson},
    {id: 5, value: 'Watch later', href: '/watch_later', icon: watch_later},
  ]
  return (
    <div className={isMenuActive ? 'menu active' : 'menu'} onClick={() => setIsMenuActive(false)}>
        <div className={isMenuActive ? 'blur active' : 'blur'}/>
        <div className={isMenuActive ? 'menu__content active' : 'menu__content'} onClick={e => e.stopPropagation()}>
            <div className="burger-btn" onClick={() => setIsMenuActive(!isMenuActive)}>
        <span/>
      </div>
            <ul>
                {items.map((item: {
                    id: number; href: string; value: string; icon: string; 
                }) => 
                    <li className='menu__item' key={item.id}>
                        <div className={!isMenuActive ? 'image__wrapper active' : 'image__wrapper'}>
                            <img className='image' alt={item.value} src={item.icon}/>
                        </div>
                        <a className={isMenuActive ? 'menu__text active' : 'menu__text'} href={item.href} >{item.value}</a>
                    </li>
                )}
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar