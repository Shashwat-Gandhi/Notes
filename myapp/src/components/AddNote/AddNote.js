import { useState } from 'react';

import plusButtonImage from '../../assets/images/plus_button_1.jpg';
import styles from './AddNote.module.css';

const AddNote = () => {
    
    const addNote = (e) => {
        // double click
        if(e.details == 2) {
            console.log("delete the objeccyt");
        }
    }
    return (
    <>
    <img src={plusButtonImage} onClick={(e) => addNote(e)}/>
    </>
    )
}

export default AddNote;