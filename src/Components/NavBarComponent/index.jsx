import { memo } from "react";
import styles from "./navbar.module.css";
import orderLogo from "../../assets/LOGO.png";
import userIcon from "../../assets/User.png";
import { useNavigate } from "react-router-dom";

const navBarItems = [
    {
        id:"1",
        title:"Browse Menu"
    },
    {
        id:"2",
        title:"Special Offers",
    },
    {
        id:"3",
        title:"Restaurants",
        classes:"res-btn"
    },
    {
        id:"4",
        title:"Track Order"
    },
]

const NavBar = ({screen ,userInfo}) => {

    const navigate = useNavigate()

    const onLoginSignUp = ()=>{
        setTimeout(()=>{
            navigate("/login")
        },1000)
    }
    console.log(userInfo)

    return (
        <div className={`d-flex justify-between align-center ${styles['nav-bar']}`}>
            <div className={styles['order-logo']}>
                <img src={orderLogo} alt="order-logo" />
            </div>
            <p className={screen === "home" ? styles['home-btn'] : null }>Home</p>
            {
                navBarItems?.map((item)=>{
                    return <p key={item?.id} className={screen === "restaurant" ? styles[item?.classes] :null}>{item?.title}</p>
                })
            }
            <div className={`d-flex justify-center align-center ${styles['login-signup-text']}`}>
                <div className={styles['user-icon-img']}>
                    <img src={userIcon} alt="userIcon" />
                </div>
                <p
                    onClick={userInfo?.userName?.trim() ? () => navigate("/profilepage") : onLoginSignUp}
                    style={{cursor: "pointer"}}
                >{ userInfo && userInfo?.userName?.trim() ? `Hey ${userInfo?.userName}` : 'Login/Signup'}</p>
            </div>
        </div>
    )
}

export default memo(NavBar);