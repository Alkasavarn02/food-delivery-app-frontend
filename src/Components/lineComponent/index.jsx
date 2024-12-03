import styles from "./line.module.css"

const Line = ({classes}) => {
    return (
        <div className={`${styles['line']} ${classes || ""}`}></div>
    )
}

export default Line;