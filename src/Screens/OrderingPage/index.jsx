import Header from "../../Components/HeaderComponent";
import NavBar from "../../Components/NavBarComponent";
import styles from "./ordering.module.css";
import leftarrow from "../../assets/arrow-left.png";
import CheckOut from "../../Components/CheckOutComponent";
import FooterComponent from "../../Components/FooterComponent";
import AddAddress from "../../Components/AddAdressComponent";
import OrderConfirmation from "../../Components/OrderConfirmation";
import ProfilePage from "../../Components/ProfilePage";
import PaymentUI from "../../Components/PaymentUI";

const screens = {
    'addressPage': <AddAddress/>,
    "OrderConfirmation": <OrderConfirmation/>,
    "profilepage":<ProfilePage/>,
    "payment":<PaymentUI/>
}

const OrderingPage = ({screen,title}) => {
    return (
        <div className={`d-flex flex-column ${styles['order-page']}`}>
            <div className={`d-flex flex-column ${styles['main-section']}`}>
                <div className={`d-flex flex-column ${styles['main-screen-section']}`}>
                    <Header/>
                    <NavBar/>
                    <div className={`d-flex align-center ${styles['title-section']}`}>
                        <div className={styles['backArrowImg']}>
                            <img src={leftarrow} alt="leftArrow" />
                        </div>
                        <p className={styles['title-text']}>{title}</p>
                    </div>
                    {
                        screen ? screens[screen] : <CheckOut/>
                    }
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}

export default OrderingPage;