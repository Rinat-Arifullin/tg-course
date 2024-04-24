import Button from '../Button';
import './Header.css';

const tg = window.Telegram.WebApp;

const Header = ()=>{
    const onClose = () => {
        tg.close();
    }

    return <div className='header'>
        <Button onClick={onClose}>Close</Button>
        <span>
            {tg.initDataUnsafe?.user?.username}
        </span>
    </div>
}

export default Header;