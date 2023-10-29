import { ReactComponent as Avatar } from '../assets/images/avatar.svg';
import { ReactComponent as Search } from '../assets/images/search.svg';
import { ReactComponent as Question } from '../assets/images/question.svg';
import { ReactComponent as Information } from '../assets/images/information.svg';
import { ReactComponent as Payment } from '../assets/images/card.svg';
import styles from './Main.module.scss';
import { Link, Outlet } from 'react-router-dom';

export const Main = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.user}>
                <div className={styles.avatar}>
                    <Avatar width="100%" height="100%" viewBox="0 0 49 49" />
                </div>
                <div>
                    <div className={styles.name}>Имя пользователя</div>
                    <div className={styles.name}>Позиция</div>
                </div>
                <div className={styles.link}>
                    @telegrambot
                </div>
            </div>
            <div className={styles.search}>
                <input placeholder="Найти" />
                <div className={styles.searchIcon}>
                    <Search width="100%" height="100%" viewBox="0 0 19 19" />
                </div>
            </div>
            <div className={styles.info}>
                <Link to="./questions">
                    <div>
                        <Question />
                    </div>
                    <div className={styles.text}>
                        <div>Частые</div>
                        <div>вопросы</div>
                    </div>
                </Link>
                <Link to="./about">
                    <div>
                        <Information  />
                    </div>
                    <div className={styles.text}>О нас</div>
                </Link>
                <button>
                    <div><Payment /></div>
                    <div className={styles.text}>Оплата</div>
                </button>
            </div>
            <Outlet />
        </div>
    );
}