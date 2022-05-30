import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { changeState } from '../../redux/reducers/noteReducer';

import styles from './FixedNote.module.css';

const FixedNote = (props) => {
    const [heading, setHeading] = useState("");
    const noteState = useSelector((state) => state);
    const dispatch = useDispatch();

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


export default FixedNote;