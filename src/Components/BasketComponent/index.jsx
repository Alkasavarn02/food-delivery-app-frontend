import styles from './Basket.module.css'; // CSS module for styling
import CustomButton from '../ButtonComponent';
import Share from "../../assets/share.png";
import BasketImg from "../../assets/Basket.png";
import remove from "../../assets/remove.png";
import forwardButton1 from "../../assets/ForwardButton1.png"
import forwardButton from "../../assets/ForwardButton.png"
import forwardButton3 from "../../assets/ForwardButton3.png"
import Line from '../lineComponent';
import Scooter from "../../assets/Scooter.png";
import NewStore from "../../assets/NewStore.png"
import { deleteCartItems } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../Context/appcontext';

const Basket = () => {

    const navigate = useNavigate()

    const {userInfo, setUserInfo} = useContext(AppContext)

    const productCount = {}

    const onDelete = (id) => {
        const data = {productId : id}
        deleteCartItems(data)
        .then((res)=>{
            setUserInfo(res?.data?.data)
        })
    }
    
    const oncheckout = () => {
        setTimeout(() => {
            navigate("/checkoutpage")
        }, 1000);
    }
    
    userInfo?.cart?.forEach((item) => {
        if (productCount[item._id]) {
            productCount[item._id].quantity += 1; 
        } else {
            productCount[item._id] = { ...item, quantity: 1, totalPrice: item.price }; 
        }
    });

    const totalPrice = userInfo?.cart?.reduce((acc,cum)=>{
        return acc + Number(cum?.price)
    },0)

    const uniqueProducts = Object.values(productCount);

    return (
        <div className={`d-flex flex-column ${styles.basket}`}>
            <div className={`d-flex align-center ${styles['share-section']}`}>
                <div className={styles['share-link']}>
                    <img src={Share} alt="share-img" />
                </div>
                <p>
                    Share this cart with your friends
                </p>
                <CustomButton title={"Copy Link"} classes={`${styles['copy-link']}`}/>
            </div>
            <div className={styles['cart-section']}>
                <div className={`d-flex align-center justify-center ${styles['cart-header']}`}>
                    <div className={styles['cart-img']}>
                        <img src={BasketImg} alt="basket-img" />
                    </div>
                    <p>Basket</p>
                </div>
                <div className={`d-flex flex-column ${styles['cart-details']}`}>
                    {
                        uniqueProducts && 
                        uniqueProducts?.map((eachdata)=>{
                            return (
                                <div className={`d-flex align-center ${styles['cart-items']}`} key={eachdata?._id}>
                                    <div className={`d-flex align-center ${styles['itemPrice-info']}`}>
                                        <p className={`d-flex justify-center align-center ${styles['item-quantity']}`}>{eachdata?.quantity}x</p>
                                        <div className={styles['item-decription']}>
                                            <p className={styles['price']}>₹{eachdata?.price}</p>
                                            <p>{eachdata?.name?.slice(0,20)}</p>
                                        </div>
                                    </div>
                                    <div className={styles['delete-icon']} style={{cursor:'pointer'}} onClick={()=>onDelete(eachdata?._id)}>
                                        <img src={remove} alt="remove-icon" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`d-flex flex-column ${styles['cart-additonal-details']}`}>
                    <div className={`d-flex align-center ${styles['additiona-details']}`}>
                        <p className={styles['price-heading']}>Sub Total: </p>
                        <p>₹{totalPrice}</p>
                    </div>
                    <div className={`d-flex align-center ${styles['additiona-details']}`}>
                        <p className={styles['price-heading']}>Discounts: </p>
                        <p>-₹3</p>
                    </div>
                    <div className={`d-flex align-center ${styles['additiona-details']}`}>
                        <p className={styles['price-heading']}>Delivery Fee:</p>
                        <p>₹3</p>
                    </div>
                </div>
                <div className={`d-flex flex-column ${styles['pricing-details']}`}>
                    <div className={`d-flex align-center justify-center ${styles['total-pricing']}`}>
                        <p>Total to pay</p>
                        <p className={styles['total-price']}>₹{totalPrice}</p>
                    </div>
                    <div className={`d-flex align-center ${styles['free-item-text']}`}>
                        <p>Choose your free item..</p>
                        <div className={styles['arrow-icon']}>
                            <img src={forwardButton} alt="down-arrow-icon" />
                        </div>
                    </div>
                    <div className={`d-flex align-center ${styles['free-item-text']}`}>
                        <p>Apply Coupon Code here</p>
                        <div className={styles['arrow-icon']}>
                            <img src={forwardButton1} alt="forward-arrow-icon" />
                        </div>
                    </div>
                </div>
                <div className={`d-flex flex-column ${styles['pricing-details']}`}>
                    <div className={`d-flex align-center ${styles['additional-text']}`}>
                        <div className={`d-flex flex-column align-center ${styles['additional-info-1']}`}>
                            <div className={styles['scooter-icon']}>
                                <img src={Scooter} alt="scooter-img" />
                            </div>
                            <p className={styles['para-text']}>Delivery</p>
                            <p>Starts at 17:50</p>
                        </div>
                        <Line classes={styles['line']}/>
                        <div className={`d-flex flex-column align-center ${styles['additional-info-2']}`}>
                            <div className={styles['scooter-icon']}>
                                <img src={NewStore} alt="scooter-img" />
                            </div>
                            <p className={styles['para-text']}>Collection</p>
                            <p>Starts at 17:50</p>
                        </div>
                    </div>
                    <button className={`d-flex align-center justify-center ${styles.checkoutBtn}`} onClick={oncheckout}>
                        <div className={styles['checkout-icon']}>
                            <img src={forwardButton3} alt="forward-btn" />
                        </div>
                        <p>Checkout!</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Basket;
