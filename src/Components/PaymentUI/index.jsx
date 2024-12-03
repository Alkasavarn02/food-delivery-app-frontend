import styles from "./payment.module.css";
import wallet from "../../assets/Wallet.png";
import ArrowRight from "../../assets/ArrowRight.png"
import Line from "../lineComponent";
import M from "../../assets/M.png"
import P from "../../assets/P.png"
import S from "../../assets/S.png"
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/appcontext";
import CustomButton from "../ButtonComponent";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/api";

const img = {
    MasteroKard : M,
    Paypal : P,
    Stripe : S
}

const Payment = ({value,totalPrice}) => {

    return(
        <div className={`d-flex align-center ${styles['payment-container']}`}>
            <div className={`d-flex align-center ${styles['left-payment-section']}`}>
                <div className={styles['img-icon']}>
                    <img src={value ? img[value] : wallet} alt="payment-icon" />
                </div>
                <div className={styles['payment-text']}>
                    <p className={styles['wallet-text']}>{value ? value : "Wallet"}</p>
                    <p className={styles['balance-text']}>Available balance: ₹{totalPrice? totalPrice+100 : 300}</p>
                </div>
            </div>
            <div className={styles['forward-arrow']}>
                <img src={ArrowRight} alt="forward-arrow-icon" />
            </div>
        </div>
    )
}

const radioBtn = [
    {
        id:"1",
        img:M,
        text:"MasteroKard",
        type:"radio",
        value:"MasteroKard"
    },
    {
        id:"2",
        img:P,
        text:"Paypal",
        type:"radio",
        value:"Paypal"
    },
    {
        id:"3",
        img:S,
        text:"Stripe",
        type:"radio",
        value:"Stripe"
    },

]

const PaymentUI = () => {

    const [selected, setSelected] = useState(""); 

    const {userInfo,setUserInfo} = useContext(AppContext);

    const navigate = useNavigate()

    const handleClick = (value) => {
        setSelected(value); 
    };

    useEffect(()=>{
        getUser()
        .then((res)=>{
            setUserInfo(res?.data?.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const totalPrice = userInfo?.cart?.length > 0 ? userInfo?.cart?.reduce((acc,cum)=>{
        return acc + Number(cum?.price)
    },0) : 500

    
    return (
        <div className={`d-flex ${styles['payment-section']}`}>
            <div className={`d-flex flex-column ${styles['left-section']}`}>
                <Payment value={selected} totalPrice={totalPrice}/>
                <Line classes={styles['line']}/>
                <div className={styles['radio-container']}>
                    {
                        radioBtn?.map((eachbtn)=>{
                            return (
                                <label className={styles['radio-option']} key={eachbtn?.id}>
                                    <div className={styles['icon']}>
                                        <img src={eachbtn?.img} alt={eachbtn?.value} />
                                    </div>
                                    <span className={styles['text']}>{eachbtn?.value}</span>
                                    <input
                                        type={eachbtn?.type}
                                        name={eachbtn?.name}
                                        value={eachbtn?.value}
                                        checked={selected === eachbtn?.value}
                                        onClick={() => handleClick(eachbtn?.value)}
                                    />
                                    <span className={styles['custom-radio']}></span>
                                </label>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`d-flex ${styles['right-section']}`}>
                <div className={`d-flex flex-column ${styles['right-section-conatiner']}`}>
                    <div className={`d-flex ${styles['upper-text']}`}>
                        <p className={styles['amount-payed']}>Amount to be payed</p>
                        <p className={styles['total-price']}>₹{totalPrice}</p>
                    </div>
                    <Line classes={styles['line']}/>
                    <CustomButton title={"Proceed Payment"} classes={styles['payment-btn']} onClick={()=>navigate("/orderconfirmation")}/>
                </div>
            </div>
        </div>
    )
}

export default PaymentUI;