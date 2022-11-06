import React from 'react'
import {ReactComponent as Menu} from './icons/menu.svg';
import {ReactComponent as Close} from './icons/close.svg';
import {ReactComponent as My_lesson} from './icons/my_lesson.svg';
import {ReactComponent as Management} from './icons/management.svg';

type Props = {
    icon: string;
}

const NavbarStudioSVGSelector = ({ icon }: Props) => {
    switch (icon) {
        case 'menu':
            return (
                <Menu />
            );
        case 'close':
            return ( 
                <Close/>
            );
        case 'my_lesson':
            return ( 
                <My_lesson/>
            );
        case 'management':
            return ( 
                <Management/>
            );
        default:
            return <svg></svg>
    }
}

export default NavbarStudioSVGSelector;