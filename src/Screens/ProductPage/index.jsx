import Header from "../../Components/HeaderComponent";
import NavBar from "../../Components/NavBarComponent";
import styles from "./productpage.module.css";
import OrderCompleted from "../../assets/OrderCompleted.png";
import Motorcross from "../../assets/Motocross.png";
import rating from "../../assets/rating.png";
import Clock from "../../assets/Clock.png"
import ImageAndLabel from "../../Components/ImageAndLabelComponent";
import Search from "../../assets/SearchMore.png";
import GirlWithPhone from "../../assets/girlwithPhone.png";
import GirlLaughing from "../../assets/girlLaughing.png";
import Icream from "../../assets/icream.png";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetails, getUser } from "../../services/api";
import Footer from "../../Components/FooterComponent";
import { CompanyImg } from "../../Constants/company";
import DeliveryTracking from "../../assets/Trackingblack.png";
import IdVerified from "../../assets/IDVerified.png";
import CategoryComponent from "../../Components/CardProductComponent"
import Basket from "../../Components/BasketComponent";
import { AppContext } from "../../Context/appcontext";
import Line from "../../Components/lineComponent";
import TimeSpan from "../../assets/TimeSpan.png";
import Star from "../../assets/stargroup.png";
import reviewProfile from "../../assets/reviewProfile.png"
import beautifyDate from "../../helper";
import LeftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/RightArrow.png"

const navlist = [
    {
        id:"1",
        title:"Offers",
        classes:"offers"
    },
    {
        id:"2",
        title:"Burgers",
    },
    {
        id:"3",
        title:"Fries",
    },
    {
        id:"4",
        title:"Snacks",
    },
    {
        id:"5",
        title:"Salads",
    },
    {
        id:"6",
        title:"Cold drinks",
    },
    {
        id:"7",
        title:"Happy Meal®",
    },
    {
        id:"8",
        title:"Desserts",
    },
    {
        id:"9",
        title:"Hot drinks",
    },
    {
        id:"10",
        title:"Sauces",
    },
    {
        id:"11",
        title:"Orbit®",
    },
]         


const ProductPage = ({screen}) => {
    
    const [restaurantType,setRestaurantType] = useState({})
    const [customerReview,setCustomerReview] = useState([])
    const {userInfo,setUserInfo} = useContext(AppContext)
    const [showCart,setShowCart] = useState(false)
    const [start,setStart] = useState(0)

    const {restaurant} = useParams()
    
    useEffect(()=>{
        getRestaurantDetails(restaurant)
        .then((res)=>{
            localStorage.setItem("restaurant",JSON.stringify(res?.data?.data))
            setRestaurantType(res?.data?.data)
        })
    },[restaurant])

    useEffect(()=>{
        getUser()
        .then((res) => {
            setUserInfo(res?.data?.data)
        })
        .catch((err)=>{
            alert("you have to login first to proceed further")
        })
    },[])


    const category = []
    restaurantType[0]?.products?.map((product)=>{
        if(!category.includes(product?.category)){
            category.push(product?.category)
        }
        return category
    })

    const imgList = [
        {
            id:"1",
            label:GirlWithPhone,
            popup:"-20%",
            text: "First Order Discount",
            type:restaurantType?.[0]?.name === "McDonald’s London" ? "Mc Donald's East London" : restaurantType?.[0]?.name ,
            classes:"restaurant-offer"
        },
        {
            id:"2",
            label:GirlLaughing,
            popup:'-20%',
            type:restaurantType?.[0]?.name === "McDonald’s London" ? "Mc Donald's East London" : restaurantType?.[0]?.name,
            text: "Vegan Discount",
            classes:"restaurant-offer"
        },
        {
            id:"3",
            label:Icream,
            popup:'-100%',
            type:restaurantType?.[0]?.name === "McDonald’s London" ? "Mc Donald's East London" : restaurantType?.[0]?.name,
            text:"Free ice Cream Offer",
            classes:"restaurant-offer"
        },
    ]

    useEffect(() => {
        if (userInfo?.cart?.length === 0) {
            setShowCart(false);
        }else {
            setShowCart(true)
        }
    }, [userInfo?.cart]);

    useEffect(() => {
        if (restaurantType?.[0]?.Customer) {
            setCustomerReview(restaurantType[0].Customer.slice(start, start+3));
        }
    }, [restaurantType,start])

    const onLeftClick = () => {
        if (start > 0) {
            setStart((prev) => prev - 3);
        }
    };

    const onRightClick = () => {
        if (start + 3 < restaurantType[0]?.Customer?.length) {
            setStart((prev) => prev + 3);
        }
    };
    
    return (
        <div className={`d-flex flex-column ${styles['product-page']}`}>
            <div className={`d-flex flex-column ${styles['section-1']}`}>
                <Header/>
                <NavBar screen={screen} userInfo={userInfo}/>
                <div className={`d-flex ${styles['banner-container']}`}>
                    <div className={`d-flex flex-column ${styles['banner-left-section']}`}>
                        <p className={styles['para-1']}>I'm lovin' it!</p>
                        <p className={styles['para-2']}>
                            {restaurantType?.[0]?.name === "McDonald’s London" ? "Mc Donald's East London" : restaurantType?.[0]?.name}
                        </p>
                        <div className={`d-flex align-center ${styles['btn-section']}`}>
                            <div className={`d-flex align-center ${styles['btn-with-icon']}`}>
                                <div className={styles['btn-icon']}>
                                    <img src={OrderCompleted} alt="order-completed" />
                                </div>
                                <p>Minimum Order: 12 GBP</p>
                            </div>
                            <div className={`d-flex align-center ${styles['btn-with-icon']}`}>
                                <div className={styles['btn-icon']}>
                                    <img src={Motorcross} alt="motor-cross" />
                                </div>
                                <p>Minimum Order: 12 GBP</p>
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex align-center justify-center ${styles['banner-right-section']}`}>
                        <div className={styles['food-img-conatiner']}>
                            <img src={restaurantType[0]?.Image} alt='food-logo' />
                        </div>
                        <div className={styles['rating-div']}>
                            <img src={rating} alt="rating-icon"/>
                        </div>
                    </div>
                    <div className={`d-flex align-center ${styles['time-section']}`}>
                        <div className={styles['clock-img']}>
                            <img src={Clock} alt="time-remainder" />
                        </div>
                        <p>Open until 3:00 AM</p>
                    </div>
                </div>
                <div className={`d-flex ${styles['offers-text']}`}>
                    <ImageAndLabel label1={`All Offers from ${restaurantType?.[0]?.name === "McDonald’s London" ? "Mc Donald's East London" : restaurantType?.[0]?.name}`}/>
                    <div className={`d-flex ${styles['search-box']}`}>
                        <div className={styles['search-icon']}>
                            <img src={Search} alt="search-symbol" />
                        </div>
                        <input type="text" placeholder="Search from menu..." name="categories" />
                    </div>
                </div>    
            </div>
            <div className={`d-flex align-center ${styles['section-2']}`}>
                {
                    navlist?.map((item)=>{
                        return <p key={item?.id} className={styles[item?.classes]}>{item?.title}</p>
                    })
                }
            </div>
            <div className={`d-flex flex-column ${styles['section-3']}`}>
                <ImageAndLabel
                    imgList={imgList}
                    popupClasses={`${styles['discount-type']}`}
                />

                <div className="d-flex">
                    <div className={`${styles['product-cart-section']}`}>
                        {
                            category ?
                            category?.map((eachCategories)=>(
                                <CategoryComponent
                                    key={eachCategories}
                                    categorykey={eachCategories}
                                    categoryName={eachCategories}
                                    products={
                                        restaurantType[0]?.products?.filter((eachProduct) => {
                                            return eachProduct?.category === eachCategories
                                        })
                                    }/>
                            ))
                            : <p>Data not Available</p>
                        }
                    </div>
                    <div className={`${styles['item-added-section']}`}>
                        {
                            showCart && <Basket/>
                        }
                    </div>
                </div>

                <div className={`d-flex ${styles['additional-details']}`}>
                    <div className={`d-flex flex-column ${styles['delivery-info']}`}>
                        <div className={`d-flex align-center ${styles['header-details']}`}>
                            <div className={`${styles['header-icon']}`}>
                                <img src={DeliveryTracking} alt="delivery-tracking-icon" />
                            </div>
                            <p>Delivery information</p>
                        </div>
                        <div className={`d-flex flex-column ${styles['delivery-information']}`}>
                            {
                                restaurantType?.[0]?.deliveryInformation?.map((item) => {
                                    return <p key={item?.day}><span>{item?.day}</span>:{item?.timing}</p>
                                })
                            }
                            <p><span>Estimated time until delivery</span>:{restaurantType?.[0]?.estimatedTime}</p>
                        </div>
                    </div>
                    <div className={`d-flex flex-column ${styles['message-info']}`}>
                        <div className={`d-flex align-center ${styles['header-details']}`}>
                            <div className={`${styles['header-icon']}`}>
                                <img src={IdVerified} alt="id-verfied-icon" />
                            </div>
                            <p>Contact information</p>
                        </div>
                        <p className={`${styles['message-text']}`}>{restaurantType?.[0]?.message}</p>
                        <p className={styles['phone-heading']}>Phone Number</p>
                        <p className={styles['phone']}>{restaurantType?.[0]?.phoneNo}</p>
                        <p className={styles['website-heading']}>Website</p>
                        <p className={styles['website']}>{restaurantType?.[0]?.website}</p>
                    </div>
                    <div className={`d-flex flex-column ${styles['operational-info']}`}>
                        <div className={`d-flex align-center ${styles['header-details']}`}>
                            <div className={`${styles['header-icon']}`}>
                                <img src={Clock} alt="clock-tracking-icon" />
                            </div>
                            <p>Operational information</p>
                        </div>
                        <div className={`d-flex flex-column ${styles['delivery-information']}`}>
                            {
                                restaurantType?.[0]?.deliveryInformation?.map((item) => {
                                    return <p key={item?.day}><span>{item?.day}</span>:{item?.timing}</p>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={`d-flex flex-column ${styles['section-4']}`}>
                <div className={`d-flex ${styles['pagination-icon']}`}>
                    <div className={`${styles['left-pagination-icon']}`} style={{cursor:"pointer"}} onClick={onLeftClick}>
                        <img src={LeftArrow} alt="leftArrow" />
                    </div>
                    <div className={`d-flex ${styles['right-pagination-icon']}`} style={{cursor:"pointer"}} onClick={onRightClick}>
                        <img src={RightArrow} alt="rightArrow" />
                    </div>
                </div>
                <div className={`d-flex ${styles['customer-review-list']}`}>
                    {
                        customerReview?.map((eachReview)=>{
                            return (
                                <div className={`d-flex flex-column ${styles['customer-review']}`} key={eachReview?._id}>
                                    <div className={`d-flex align-center ${styles['upper-cutomer-details']}`}>
                                        <div className={`d-flex align-center ${styles['review-right-Section']}`}>
                                            <div className={styles['profile-img']}>
                                                <img src={reviewProfile} alt="profile-img" />
                                            </div>
                                            <Line classes={styles['review-line']}/>
                                            <div>
                                                <p className={styles['reviewr']}>{eachReview?.User?.userName}</p>
                                                <p className={styles['reviewr-country']}>{eachReview?.User?.country}</p>
                                            </div>
                                        </div>
                                        <div className={`d-flex flex-column ${styles['review-left-Section']}`}>
                                            <div className={styles['star-img']}>
                                                <img src={Star} alt="star-img" />
                                            </div>
                                            <div className={`d-flex align-center ${styles['Date-section']}`}>
                                                <div className={styles['clock-img']}>
                                                    <img src={TimeSpan} alt="clock-icon" />
                                                </div>
                                                <p>{beautifyDate(eachReview.createdAt.split("T")[0])}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={styles['review-text']}>{eachReview?.reviewText}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`${styles['section-5']}`}>
                <ImageAndLabel
                    label1={"Popular Restaurants"}
                    label2={"Popular Restaurants"}
                    imgList={CompanyImg}
                    classes={`${styles['company-img-list']}`}
                    uppersectionClasses={`${styles['food-upper-section']}`}
                    scroll={`${styles['scroll']}`}
                    imgContainer={`${styles['img-container']}`}
                />
            </div>
            <Footer/>
        </div>
    )
}

export default ProductPage;