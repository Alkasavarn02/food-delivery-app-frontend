import styles from "./instructioncard.module.css"

const InstructionCard = ({headertext, img, alt, footertext}) => {
    return (
        <div className={`d-flex flex-column align-center justify-center ${styles['card-section']}`}>
            <p className={styles['header-para']}>{headertext}</p>
            <div className={styles['card-img']}>
                <img src={img} alt={alt} />
            </div>
            <p className={styles['lower-para']}>{footertext}</p>
        </div>
    )
}

export default InstructionCard;