import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Statistics.module.scss';

const statistics = {
    "candidate_wanted_salary": 150_000,
    "candidate_market_salary": 160_000,
    "candidate_vacancy_match": 76,
    "Hard skills": {
      "Python": 0, 
      "Machine Learning": 0,
      "Pandas": 0,
      "NumPy": 0,
      "Pytorch": 0,
      "Natural Language Proccessing": 0,
      "Compute Vision": 0,
      "SQL": 0
    },
    "Soft skills": {
      "Speaker Skills": 89,
      "Honesty": 93,
      "Confidence": 76,
      "Openness": 95,
      "Cheerfulness": 67
    },
    "Potential": {
      "Education": 88,
      "Breadth of View": 54,
      "Current training": 63
    }
}

const tg = window.Telegram.WebApp;

export const Statistics = () => {
    const [skills, setSkills] = useState();

    useEffect(() => {
        fetch('https://rich-donuts-marry.loca.lt/backend/getskills',  {
            method: "post",
            headers: new Headers({
                "Bypass-Tunnel-Reminder": "true",
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ 
                user_id: '507524540' || tg.initDataUnsafe.user.id,
            })
        })
            .then(resp => resp.json())
            .then(skills => setSkills(skills));
    }, []);

    const polarToCartesian = useCallback((centerX, centerY, radius, angleInDegrees) => {
        var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
    
        return {
          x: centerX + (radius * Math.cos(angleInRadians)),
          y: centerY + (radius * Math.sin(angleInRadians))
        };
    }, []);

    const describeArc = useCallback((x, y, radius, spread, startAngle, endAngle) => {
        var innerStart = polarToCartesian(x, y, radius, endAngle);
        var innerEnd = polarToCartesian(x, y, radius, startAngle);
        var outerStart = polarToCartesian(x, y, radius + spread, endAngle);
        var outerEnd = polarToCartesian(x, y, radius + spread, startAngle);
  
        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
        var d = [
            "M", outerStart.x, outerStart.y,
            "A", radius + spread, radius + spread, 0, largeArcFlag, 0, outerEnd.x, outerEnd.y,
            "L", innerEnd.x, innerEnd.y, 
            "A", radius, radius, 0, largeArcFlag, 1, innerStart.x, innerStart.y, 
            "L", outerStart.x, outerStart.y, "Z"
        ].join(" ");
  
        return d;
    }, [polarToCartesian]);
  
    const [arc1, arc2] = useMemo(() => ([
        describeArc(60, 60, 50, 6, 0, 3.6 * statistics.candidate_vacancy_match),
        describeArc(60, 60, 50, 6, 3.6 * statistics.candidate_vacancy_match, 360)
    ]), [describeArc]);

    return (
        <div className={styles.skillStatistics}>
            <Link to={'/main/actions'} style={{ marginLeft: 'auto' }}>
                <span className={styles.backLink}>&lt;&nbsp;</span>
                <span className={styles.backLink}>Назад</span>
            </Link>
            <div className={styles.header}>
                <div style={{ display: "flex", flexDirection: 'column', gap: '10px'}}>
                    <div className={styles.salary}>
                        <div>Ожидаемая зарплата:</div>
                        <div>{statistics.candidate_wanted_salary}</div>
                    </div>
                    <div className={styles.salary}>
                        <div>Расчетная зарплата:</div>
                        <div>{statistics.candidate_market_salary}</div>
                    </div>
                </div>
                <div className={styles.match}>
                    <div>
                    <svg width="120" height="120">
                        <path fill="#537EE7" stroke="#537EE7" d={arc1}></path>
                        <g filter="url(#filter0_d_1_99)">
                            <path fill="none" stroke="url(#paint0_angular_1_99)" d={arc2}></path>
                        </g>
                        <defs>
                            <filter id="filter0_d_1_99" x="0" y="0" width="121" height="121" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="2"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.341176 0 0 0 0 0.666667 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_99"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_99" result="shape"/>
                            </filter>
                            <radialGradient id="paint0_angular_1_99" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(69 134.5) rotate(-94.5768) scale(131.586)">
                                <stop stop-color="#537EE7"/>
                                <stop offset="1" stop-color="#272727" stop-opacity="0"/>
                            </radialGradient>
                        </defs>
                    </svg>
                    </div>
                    <div className={styles.matchValue}>
                        <div>Шанс</div>
                        <div>отклика</div>
                        <div className={styles.percent}>{statistics.candidate_vacancy_match}%</div>
                    </div>
                </div>
            </div>
            <div className={styles.skillsContainer}>
                <div className={styles.title}>Навыки</div>
                {skills && Object.keys(skills).map(k => (
                <div key={k}>
                    <div className={styles.skillItemName}>{k}</div>
                    <div style={{ display: 'flex'}}>
                    <div className={styles.skillItemLine}>
                        <div 
                        className={`${styles.skillItemLineFill} ${(skills[k] === 100 ? styles.full : '')}`}
                        style={{ width: `${skills[k]}%`}}
                        ></div>
                        <div
                        className={`${styles.skillItemLineRemaining} ${(skills[k] === 0 ? styles.empty : '')}`}
                        style={{ width: `${100 - skills[k]}%`}}
                        ></div>
                    </div>
                    <div className={styles.skillItemValue} style={{ minWidth: '38px' }}>{Math.round(skills[k])}%</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}