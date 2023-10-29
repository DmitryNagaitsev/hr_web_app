import { ReactComponent as Circles } from '../assets/images/circles.svg';
import styles from './Welcome.module.scss';
import { Link } from "react-router-dom";

export const Welcome = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                <Circles width="100%" height="100%" viewBox="0 0 366 360" />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>HR-bot</div>
                <div className={styles.subtitle}>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu
                </div>
                <div className={styles.actions}>
                    <Link className={styles.startBtn} to={'main/actions'}>Начать</Link>
                </div>
            </div>
        </div>
    );
}