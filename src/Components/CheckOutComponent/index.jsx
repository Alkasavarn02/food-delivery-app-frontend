import CheckOutItem from "../CheckOutItemComponent";
import styles from "./checkout.module.css";
import mapPin from "../../assets/MapPin.png";
import RightArrow from "../../assets/ArrowRight.png"
import Line from "../lineComponent";
import CustomButton from "../ButtonComponent";
import ImageAndLabelComponent from "../ImageAndLabelComponent";
import { CompanyImg } from "../../Constants/company";
import { useEffect, useState } from "react";
import { getUser } from "../../services/api";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {

    const navigate = useNavigate()

    const [userData,setUserData] = useState({}) 

    useEffect(()=>{
        getUser()
        .then((res)=>{
            setUserData(res?.data?.data)
        })
    },[])

    const totalPrice = userData?.cart?.reduce((acc,cum) => {
        return acc + Number(cum?.price)
    },0)

    const onHandleClick = () => {
        setTimeout(()=>{
            navigate("/addresspage")
        },500)
    }


    return (
        <div className={`d-flex flex-column ${styles['checkout-page']}`}>
            <div className={`d-flex ${styles['section-1']}`}>
                <div className={styles['left-section']}>
                    <CheckOutItem itemList={userData?.cart}/>
                </div>
                <div className={`d-flex flex-column ${styles['right-section']}`}>
                    <div className={`d-flex align-center ${styles['delivery-section']}`}>
                        <div className={`d-flex align-center justify-content-center ${styles['delivery-left-section']}`}>
                            <div className={`d-flex ${styles['tracking-img-container']}`}>
                                <img src={mapPin} alt="map-pin-icon" />
                            </div>
                            <div className={`d-flex flex-column ${styles['delivery-text']}`}>
                                <p className={styles['delivery-text']}>Delivery Address</p>
                                <p className={styles['delivery-address-text']}>45, Green Street, Sector 12...</p>
                            </div>
                        </div>
                        <div className={`d-flex ${styles['right-arrow-img']}`} onClick={onHandleClick}>
                            <img src={RightArrow} alt="right-arrow" />
                        </div>
                    </div>
                    <Line classes={`${styles['line']}`}/>
                    <div className={`d-flex ${styles['item-list']}`}>
                        <p>Items</p>
                        <p>₹{totalPrice}</p>
                    </div>
                    <div className={`d-flex ${styles['item-list']}`}>
                        <p>Sales Tax</p>
                        <p>₹10</p>
                    </div>
                    <Line classes={`${styles['line']}`}/>
                    <div className={`d-flex ${styles['total-list']}`}>
                        <p>Subtotal ({userData?.cart?.length} items)</p>
                        <p className={styles['total']}>₹{totalPrice+10}</p>
                    </div>
                    <CustomButton title={"Choose Payment Method"} classes={`${styles['btn']}`} onClick={()=>{
                        setTimeout(()=>{
                            navigate("/payment")
                        },1000)
                    }}/>
                </div>
            </div>
            <ImageAndLabelComponent
                    label1={"Popular Restaurants"}
                    label2={"Popular Restaurants"}
                    imgList={CompanyImg}
                    classes={`${styles['company-img-list']}`}
                    uppersectionClasses={`${styles['food-upper-section']}`}
                    scroll={`${styles['scroll']}`}
                    imgContainer={`${styles['img-container']}`}
                />
        </div>
    )
}

export default CheckOut;