import { useEffect, useState } from 'react';

import styles from './Note.module.css';

const Note = (props) => {
    const [heading, setHeading] = useState("");

    useEffect(() => {
        setHeading(props.heading);
    }, [props])
    return (
        <div className={styles.note}>
            <div className={styles.heading}>
                {props.heading}
            </div>
            <hr/>
            <div className={styles.content}>
                {props.content}
            </div>
        </div>
    )
}


export default Note;