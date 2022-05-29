import styles from  './InputNote.module.css';

const InputNote = () => {
    return (
    <div className='InputNote'>
        <div className={styles.heading}>
            <input type="text" />
        </div>
        <div className={styles.content}>
            <textarea>Content...</textarea>
        </div>
    </div>
    )
}

export default InputNote;