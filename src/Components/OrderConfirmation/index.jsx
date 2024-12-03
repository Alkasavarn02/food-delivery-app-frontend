import styles from "./order.module.css";
import placedIcon from "../../assets/PlacedIcon.png"
import CustomButton from "../ButtonComponent";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Context/appcontext";
import { deleteCartItems, getUser } from "../../services/api";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {

    const {userInfo,setUserInfo} = useContext(AppContext);

    const navigate = useNavigate()
    
    useEffect(()=>{
        getUser()
        .then((res)=>(
            setUserInfo(res?.data?.data)
        ))
    },[])

    const oncheckOut = ()=>{
        deleteCartItems()
        .then((res)=>{
            setUserInfo(res?.data?.data)
            navigate("/homepage")
        })
    }

    return (
        <div className={`d-flex flex-column align-center justify-center ${styles['order-container']}`}>
            <div className={`d-flex flex-column justify-center align-center ${styles['upper-section']}`}>
                <div className={styles['order-placed-img']}>
                    <img src={placedIcon} alt="placed-icon-img" />
                </div>
                <p className={`${styles['order-placed-text']}`}>Order Placed Successfully</p>
                <p className={`${styles['order-confirm-text']}`}>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
            </div>
            <div className={`d-flex flex-column align-center justify-center ${styles['lower-section']}`}>
                {
                    userInfo?.cart?.map((eachItem,index) => {
                        return(
                            <p key={index}>{eachItem?.name}</p>
                        )
                    })
                }
                <CustomButton title={"Back to Home"} classes={`${styles['btn']}`} onClick={oncheckOut}/>
            </div>
        </div>
    );
};

export default OrderConfirmation;
