import { memo, useContext, useEffect} from "react"
import Header from "../../Components/HeaderComponent"
import styles from "./homepage.module.css"
import NavBar from "../../Components/NavBarComponent"
import InputWithButton from "../../Components/InputWithButton"
import girlEating from "../../assets/girleatingImage.png"
import girlwithnoodles from "../../assets/girlwithnoodles.png"
import Card from "../../Components/Card"
import TrackingIcon from "../../assets/Tracking.png"
import TickBox from "../../assets/Tick Box.png"
import One from "../../assets/1.png"
import Two from "../../assets/2.png"
import Three from "../../assets/3.png"
import ImageAndLabel from "../../Components/ImageAndLabelComponent"
import foodPlatter from "../../assets/foodPlatter.png"
import { FoodImg } from "../../Constants/foodImg"
import { CompanyImg } from "../../Constants/company"
import OrderLogo from "../../assets/LOGO.png"
import storeIcon from "../../assets/storeIcon.png"
import PeopleImg from "../../assets/friendsLaughing1.png"
import { chefImg } from "../../Constants/extraBanner"
import CustomButton from "../../Components/ButtonComponent"
import InstructionCard from "../../Components/InstructionCard"
import OrderPlaced from "../../assets/orderfood.png"
import food from "../../assets/food.png"
import Order from "../../assets/order.png"
import CountSection from "../../Components/CountComponent"
import Line from "../../Components/lineComponent"
import Footer from "../../Components/FooterComponent"
import { getUser } from "../../services/api"
import { AppContext } from "../../Context/appcontext"

const labelList = [
    {
        id:"1",
        lebel:"Vegan",
        classes:"others"
    },
    {
        id:"2",
        lebel:"Sushi",
        classes:"others"
    },
    {
        id:"3",
        lebel:"Pizza & Fast food",
        classes:"pizzaandfastfood"
    },
    {
        id:"4",
        lebel:"others",
        classes:"others"
    },
]

const imgList = [
    {
        id:"1",
        label:foodPlatter,
        popup:"-40%",
        type:"Restaurant",
        text:"Chef Burgers London",
        classes:"restaurant-class"
    },
    {
        id:"2",
        label:foodPlatter,
        popup:'-20%',
        type:"Restaurant",
        text:"Grand Ai Cafe London",
        classes:"restaurant-class"
    },
    {
        id:"3",
        label:foodPlatter,
        popup:'-17%',
        type:"Restaurant",
        text:"Butterbrot Caf’e London",
        classes:"restaurant-class"
    },
]

const labelList2 = [
    {
        id:"1",
        lebel:"Frequent Questions",
        classes:"frequentquestion"
    },
    {
        id:"2",
        lebel:"Who we are?"
    },
    {
        id:"3",
        lebel:"Partner Program"
    },
    {
        id:"4",
        lebel:"Help & Support"
    }
]

const HomePage = ({screen}) => {

    const {setUserInfo} = useContext(AppContext);

    useEffect(()=>{
        getUser()
        .then((res)=>{
            setUserInfo(res?.data?.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    return (
        <div className={`${styles['homepage']}`}>
            <div className={`d-flex flex-column ${styles['homepage-section']}`}>
                <Header/>
                <NavBar screen={screen}/>
                <div className={`d-flex ${styles['banner-img']}`}>
                    <div className={`d-flex flex-column align-center justify-center ${styles['left-section']}`}>
                        <div className={`${styles['left-section-text']}`}>
                            <p className={`${styles['para-1']}`}>Order Restaurant food, takeaway and groceries.</p>
                            <p className={`${styles['h1-text-1']}`}>Feast Your Senses,</p>
                            <p className={`${styles['h1-text-2']}`}>Fast and Fresh</p>
                            <p className={`${styles['label']}`}>Enter a postcode to see what we deliver</p>
                            <InputWithButton
                                classes={`${styles['input-section']}`}
                                title={"Search"}
                                placeholder="e.g. EC4R 3TE"
                            />
                        </div>
                    </div>
                    <div className={`d-flex ${styles['right-section']}`}>
                        <div className={styles['right-section-div']}>
                            <div className={styles['girls-with-noodles-img']}>
                                <img src={girlwithnoodles} alt="girlwithnoodlesImg"/>
                            </div>
                            <Card
                                countImg={One}
                                countNo={'1'}
                                OrderProgressText="We’ve Received your order!"
                                img={TrackingIcon}
                                OrderResponse="Awaiting Restaurant acceptance "
                                classes={`${styles['card-position-1']}`}
                                alt="TrackingIcon"
                            />
                            <Card
                                countImg={Two}
                                countNo={'2'}
                                OrderProgressText="Order Accepted!"
                                img={TickBox}
                                OrderResponse="Your order will be delivered shortly"
                                classes={`${styles['card-position-2']}`}
                                alt="TickBoxIcon"
                            />
                            <Card
                                countImg={Three}
                                countNo={'3'}
                                OrderProgressText="Your rider's nearby"
                                img={TrackingIcon}
                                OrderResponse="They are almost there - get ready!"
                                classes={`${styles['card-position-3']}`}
                                alt="partyproper-icon"
                            />
                        </div>
                    </div>
                    <div className={styles['girl-banner-img']}>
                        <img src={girlEating} alt="girlEatingImg" />
                    </div>
                </div>
                <ImageAndLabel
                    label1={"Up to -40% 🎊 Order.uk exclusive deals"}
                    label2={"Up to -40% Discount Offers 🎊"}
                    labelList={labelList}
                    imgList={imgList}
                    popupClasses={`${styles['discount-type']}`}
                    uppersectionClasses={`${styles['food-upper-section']}`}
                    scroll={`${styles['scroll']}`}
                    imgContainer={`${styles['restaurant-container']}`}
                    classes={`${styles['food-each-img']}`}
                />
                <ImageAndLabel
                    label1={"Order.uk Popular Categories 🤩"}
                    label2={"Order.uk Popular Categories 🤩"}
                    imgList={FoodImg}
                    classes={`${styles['food-img-list']}`}
                    uppersectionClasses={`${styles['food-upper-section']}`}
                    gridColumn={`${styles['grid-column']}`}
                    bgcolor={`${styles['bg-color']}`}
                    margintop={`${styles['margin-top']}`}
                />
                <ImageAndLabel
                    label1={"Popular Restaurants"}
                    label2={"Popular Restaurants"}
                    imgList={CompanyImg}
                    classes={`${styles['company-img-list']}`}
                    uppersectionClasses={`${styles['food-upper-section']}`}
                    scroll={`${styles['scroll']}`}
                    imgContainer={`${styles['img-container']}`}
                />
                <div className={`d-flex ${styles['order-app']}`}>
                    <div className={`d-flex flex-column align-center ${styles['order-left-section']}`}>
                        <div className={`d-flex align-center justify-center ${styles['section-1']}`}>
                            <div className={styles['icon-section']}>
                                <img src={OrderLogo} alt="orderlogoIcon" />
                            </div>
                            <p>ing is more</p>
                        </div>
                        <p className={`${styles['personalised-text']}`}><span>Personalised</span> & Instant</p>
                        <p className={`${styles['instruction-text']}`}>Download the Order.uk app for faster ordering</p>
                        <div className={`${styles['store-icon']}`}>
                            <img src={storeIcon} alt="storeIcon" />
                        </div>
                    </div>
                    <div className={styles['people-img']}>
                        <img src={PeopleImg} alt="peopleImg" />
                    </div>
                </div>
                <ImageAndLabel
                    imgList={chefImg}
                    popupClasses={`${styles['popup']}`}
                    gridColumn={styles['chef-banner']}
                    classes={styles['chef-bg']}
                />
                <div className={`d-flex flex-column ${styles['card-section']}`}>
                    <div className={styles['card-label']}>
                        <ImageAndLabel
                            label1={"Know more about us!"}
                            labelList={labelList2}
                            labelistclasses={`${styles['label-list-class']}`}
                            uppersectionClasses={`${styles['upper-section']}`}
                        />
                    </div>
                    <div className={`d-flex ${styles['cards-section']}`}>
                        <div className={`${styles['left-para-section']}`}>
                            <p className={styles['card-mobile-header']}>Know more about us!</p>
                            <CustomButton title={"How does Order.UK work?"} classes={`${styles['card-btn']}`}/>
                            <p>What payment methods are accepted?</p>
                            <p>Can I track my order in real-time?</p>
                            <p>Are there any special discounts orpromotions available?</p>
                            <p>Is Order.UK available in my area?</p>
                        </div>
                        <div className={`d-flex flex-column ${styles['cards-element-section']}`}>
                            <div className={`d-flex ${styles['card-element']}`}>
                                <InstructionCard
                                    headertext={"Place an Order!"}
                                    img={OrderPlaced}
                                    footertext={"Place order through our website or Mobile app"}
                                    alt={"orderplacedIcon"}/>
                                <InstructionCard 
                                    headertext={"Track Progress"}
                                    img={food}
                                    footertext={"Your can track your order status with delivery time"}
                                    alt={"trackOrderIcon"}/>
                                <InstructionCard
                                    headertext={"Place an Order!"}
                                    img={Order}
                                    footertext={"Receive your order at alighting fast speed!"}
                                    alt={"OrderDeliverdIcon"}/>
                            </div>
                            <p className={`${styles['footer-para']}`}>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
                        </div>
                    </div>
                </div>
                <div className={`d-flex ${styles['count-section']}`}>
                    <CountSection count={'546+'} text={"Registered Riders"}/>
                    <Line classes={`${styles['line']}`}/>
                    <CountSection count={"789,900+"} text={"Orders Delivered"}/>
                    <Line classes={`${styles['line']}`}/>
                    <CountSection count={"690+"} text={"Restaurants Partnered"}/>
                    <Line classes={`${styles['line']}`}/>
                    <CountSection count={"17,457+"} text={"Food items"}/>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default memo(HomePage)


