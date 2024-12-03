import styles from "./count.module.css"

const CountSection = ({count,text}) => {
    return (
        <div className={`d-flex flex-column ${styles['count-section']}`}>
            <p className={styles['para-1']}>{count}</p>
            <p className={styles['para-2']}>{text}</p>
        </div>
    )
}

export default CountSection;