import React, {FC} from 'react';
import './Navbar.scss';

interface Navbar {
    items: any;
    active: boolean;
    setActive: (bool: boolean) => void;
}

const Navbar: FC<Navbar> = ({items, active, setActive}) => {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
        <div className={active ? 'blur active' : 'blur'}/>
        <div className={active ? 'menu__content active' : 'menu__content'} onClick={e => e.stopPropagation()}>
            <ul>
                {items.map((item: {
                    id: number; href: string; value: string; icon: string; 
                }) => 
                    <li className='menu__item' key={item.id}>
                        <div className={!active ? 'image__wrapper active' : 'image__wrapper'}>
                            <img className='image' alt={item.value} src={item.icon}/>
                        </div>
                        <a className={active ? 'menu__text active' : 'menu__text'} href={item.href} >{item.value}</a>
                    </li>
                )}
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar