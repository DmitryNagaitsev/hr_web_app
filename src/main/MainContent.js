import styles from './MainContent.module.scss';
import { ReactComponent as Training } from '../assets/images/training.svg';
import { ReactComponent as Next } from '../assets/images/next.svg';
import { Link } from "react-router-dom";

export const MainContent = () => {
    return (
        <div className={styles.content}>
            <Link className={styles.statistics} to="./statistics">
                <div className={styles.text}>Статистика</div>
                <div className={styles.icon} style={{ width: '160px', height: '87px', top: '45px', right: '16px' }}>
                    <svg viewBox="41.813 59.102 195.155 106.4" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="paint0_linear_1_217" x1="118.79" y1="45.8851" x2="119.261" y2="103.32" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, 1, 20.60022, 55.777512)">
                            <stop stopColor="#2A7BFF"/>
                            <stop offset="1" stopColor="#95B9F3" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_1_217" x1="118.79" y1="45.8851" x2="119.032" y2="87.0484" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, 1, 20.60022, 55.777512)">
                            <stop stopColor="#2A7BFF"/>
                            <stop offset="1" stopColor="#95B9F3" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_1_217" x1="118.79" y1="3.32495" x2="118.79" y2="109.725" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, 1, 20.60022, 55.777512)">
                            <stop stopColor="#537EE7"/>
                            <stop offset="1" stopColor="#2400FF" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                        <path d="M 41.813 165.502 L 236.968 165.502" stroke="#132C47"/>
                        <path d="M 41.813 138.902 L 236.968 138.902" stroke="#132C47"/>
                        <path d="M 41.813 112.302 L 236.968 112.302" stroke="#132C47"/>
                        <path d="M 41.813 85.702 L 236.968 85.702" stroke="#132C47"/>
                        <path d="M 41.813 59.102 L 236.968 59.102" stroke="#132C47"/>
                        <path d="M 90.602 59.102 L 90.602 165.502" stroke="#132C47"/>
                        <path d="M 139.39 59.102 L 139.39 165.502" stroke="#132C47"/>
                        <path d="M 188.179 59.102 L 188.179 165.502" stroke="#132C47"/>
                        <path d="M 41.813 147.414 L 90.602 101.662 L 139.39 129.326 L 188.179 103.79 L 236.968 146.35 L 236.968 165.502 L 188.179 165.502 L 139.39 165.502 L 90.602 165.502 L 41.813 165.502 L 41.813 147.414 Z" fill="url(#paint0_linear_1_217)"/>
                        <path d="M 41.813 147.414 L 90.602 101.662 L 139.39 129.326 L 188.179 103.79 L 236.968 146.35" fill="url(#paint1_linear_1_217)"/>
                        <path d="M 41.813 111.238 L 90.602 143.158 L 139.39 98.47 L 188.179 59.102 L 236.968 71.87 L 236.968 165.502 L 188.179 165.502 L 139.39 165.502 L 90.602 165.502 L 41.813 165.502 L 41.813 111.238 Z" fill="url(#paint2_linear_1_217)"/>
                    </svg>
                </div>
            </Link>
            <button className={styles.training}>
                <div className={styles.text}>Тренировка</div>
                <div className={styles.icon}>
                    <Training />
                </div>
            </button>
            <Link className={styles.interview} to={'/main/interview'}>
                <div className={styles.text}>Пройти собеседование</div>
                <div>
                    <Next />
                </div>
            </Link>
        </div>
    );
}