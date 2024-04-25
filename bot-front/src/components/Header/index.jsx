import React from 'react';
import { useTelegram } from '../../hooks/useTelegram.ts';
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