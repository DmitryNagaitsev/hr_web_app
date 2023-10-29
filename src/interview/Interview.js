import { useCallback, useState } from 'react';
import { ReactComponent as Chevron } from '../assets/images/chevron.svg';
import { ReactComponent as Next } from '../assets/images/next.svg';
import { Link } from 'react-router-dom';
import styles from './Interview.module.scss';

const tg = window.Telegram.WebApp;

export const Interview = () => {
    const [subject, setSubject] = useState('python');
    const [position, setPosition] = useState('junior');

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    }

    const onChangePosition = (e) => {
        setPosition(e.target.value);
    }

    const onSendData = useCallback(async () => {
        await fetch('https://rich-donuts-marry.loca.lt/backend/load_questions',  {
            method: "post",
            headers: new Headers({
                "Bypass-Tunnel-Reminder": "true",
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ 
                user_id: '507524540' || tg.initDataUnsafe.user.id,
                subject,
                position,
            })
          });
    }, [subject, position]);

    return (
        <div className={styles.interviewContainer}>
            <Link to={'/main/actions'} style={{ marginLeft: 'auto' }}>
                <span className={styles.backLink}>&lt;&nbsp;</span>
                <span className={styles.backLink}>Назад</span>
            </Link>

            <div className={styles.selectContainer}>
                <select value={subject} onChange={onChangeSubject} className={styles.select}>
                    <option value={'python'}>Python</option>
                    <option value={'ml'}>ML</option>
                    <option value={'big_data'}>Big data</option>
                </select>
                <div className={styles.chevronIcon}>
                    <Chevron width="100%" height="100%" viewBox="0 0 24 24" />
                </div>
            </div>

            <div className={styles.selectContainer}>
                <select value={position} onChange={onChangePosition} className={styles.select}>
                    <option value={'junior'}>Junior</option>
                    <option value={'middle'}>Middle</option>
                    <option value={'senior'}>Senior</option>
                </select>
                <div className={styles.chevronIcon}>
                    <Chevron width="100%" height="100%" viewBox="0 0 24 24" />
                </div>
            </div>

            <button className={styles.interview} onClick={onSendData}>
                <div className={styles.text}>Пройти собеседование</div>
                <div>
                    <Next />
                </div>
            </button>
        </div>
    )
}