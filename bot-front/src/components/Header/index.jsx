import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button';
import './Header.css';

const tg = window.Telegram.WebApp;

const Header = ()=>{
    const {user, onClose} = useTelegram();

    return <div className='header'>
        <Button onClick={onClose}>Close</Button>
        <span>
            {user?.username}
        </span>
    </div>
}

export default Header;