import './FinalNote.module.css'
import InputNote from '../InputNote/InputNote';
import FixedNote from '../FixedNote/FixedNote';
import { useState } from 'react';
import styles from './FinalNote.module.css';


const FinalNote = (props) => {
    const [state,setState] = useState(props.state);
    const [editButtonText, setEditButtonText] = useState()
    const deleteNote = () => {
        console.log('delete note')
    }
   
    return (
    <div className={styles.note} >
        {state == 'Fixed State' && (
            <button className={styles.editButton} 
                    onClick={()=>setState('Input State')}>Edit</button>
        )}
        {state == 'Input State' && (
            <button className={styles.confirmButton}
                    onClick={()=>setState('Fixed State')}>Confirm</button>
        )}
        <button className={styles.deleteButton}
                onClick={()=>deleteNote()}>X</button>
        {(state == 'Fixed State') && (
            <FixedNote 
                heading={props.heading} 
                content={props.content} 
            />
        )} 
        {(state == 'Input State') && (
            <InputNote 
                heading={props.heading} 
                content={props.content} 
                />
        )}
    </div>
    )
}

export default FinalNote;