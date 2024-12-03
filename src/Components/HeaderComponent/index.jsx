import { memo, useContext } from "react";
import styles from "./header.module.css";
import StarIcon from "../../assets/star.png";
import LocationIcon from "../../assets/Location.png";
import MyCartImage from "../../assets/mycart.png";
import OrderLogo from "../../assets/LOGO.png";
import Menu from "../../assets/Menu.png"
import { AppContext } from "../../Context/appcontext";

const Header = ({onHandleMyCart}) => {

    const {userInfo} = useContext(AppContext)
    console.log("header",userInfo)


    return (
        <div className={`d-flex flex-column ${styles['header-section']}` }>
            <div className={`d-flex justify-between ${styles['desktop-header']}`}>
                <div className={`d-flex justify-center align-center ${styles['star-icon']}`}>
                    <div className={styles['star-location-icon']}>
                        <img src={StarIcon} alt="star-Icon" />
                    </div>
                    <p>
                        Get 5% Off your first order, <span className={`${styles['promo-code-text']}`}>Promo: ORDER5</span>
                    </p>
                </div>
                <div className={`d-flex justify-center align-center ${styles['location-icon']}`}>
                    <div className={styles['star-location-icon']}>
                        <img src={LocationIcon} alt="location-Icon" />
                    </div>
                    <p>
                        {"currentAddress"}<span className={styles['change-location-text']}>Change Location</span>
                    </p>
                </div>
                <div className={styles['mycart-img']} style={{cursor:"pointer"}} onClick={onHandleMyCart} >
                    <img src={MyCartImage} alt="My Cart Section" />
                </div>
            </div>
            <div className={`d-flex flex-column ${styles['mobile-header']}`}>
                <div className={`d-flex justify-between align-center ${styles['upper-section']}`}>
                    <div className={styles['order-logo']}>
                        <img src={OrderLogo} alt="orderlogo" />
                    </div>
                    <div className={styles['menu-logo']}>
                        <img src={Menu} alt="menuLogo" />
                    </div>
                </div>
                {
                    ""
                }
            </div>
        </div>
    )
}

export default memo(Header)