import { memo } from "react";
import OrderLogo from "../../assets/LOGO.png";
import styles from "./card.module.css";
 
const Card = ({countImg, countNo, OrderProgressText, img, OrderResponse, alt, classes}) => {
    return  (
        <div className={`d-flex flex-column ${styles['card-section']} ${classes || ""}`}>
            <div className={`d-flex ${styles['notification-count-container']}`}>
                <div className={styles['notification-count-img']}>
                    <img src={countImg} alt={countNo} />
                </div>
            </div>
            <div className={`d-flex flex-column ${styles['card-main-section']}`}>
                <div className={`d-flex ${styles['header-section']}`}>
                    <div className={styles['order-logo-icon']}>
                        <img src={OrderLogo} alt="orderlogonIcon" />
                    </div>
                    <p className={styles['now-text']}>now</p>
                </div>
                <div className={`d-flex ${styles['order-section']}`}>
                    <p className={styles['order-progress-text']}>{OrderProgressText}</p>
                    <div className={`${styles['order-progress-icon']}`}>
                        <img src={img} alt={alt} />
                    </div>
                </div>
                <p className={styles['order-response-text']}>{OrderResponse}</p>
            </div>
        </div>
    )
}

export default memo(Card);