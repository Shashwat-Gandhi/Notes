import styles from  './InputNote.module.css';

const InputNote = (props) => {
    return (
    <div className={styles.note}>
        <div className={styles.heading}>
            <input type="text" value={props.heading}/>
        </div>
        <div className={styles.content}>
            <textarea>{(props.content !== '' && props.content !== undefined) && ('Content')}</textarea>
        </div>
    </div>
    )
}

export default InputNote;