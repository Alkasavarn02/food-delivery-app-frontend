import { memo } from "react";
import styles from "./section1.module.css";
import footerOrderLogo from "../../../assets/LOGO2.png";
import storeIcon from "../../../assets/storeIcon.png"

const Section1 = () => {
    return (
        <div className={`${styles['section-1']}`}>
            <div className={`${styles['footer-order-logo']} ${styles['margin-bottom-15']}`}>
                <img src={footerOrderLogo} alt="footerOrderLogo" />
            </div>
            <div className={`${styles['store-icon']} ${styles['margin-bottom-15']} ${styles['width-285']}`}>
                <img src={storeIcon} alt="storeIconLogo" />
            </div>
            <p className={`${styles['company-text']} ${styles['margin-bottom-15']} ${styles['width-285']}`}>Company # 490039-445, Registered with House of companies.</p>
        </div>
    )
}

export default memo(Section1);