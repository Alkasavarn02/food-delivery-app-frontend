import { useContext, useEffect, useState } from "react";
import InputField from "../InputComponent";
import styles from "./profile.module.css";
import CustomButton from "../ButtonComponent";
import profileImage from "../../assets/profileimg.png";
import Line from "../lineComponent";
import paymentIcon from "../../assets/paymentImg.png";
import editpencil from "../../assets/editpencil.png";
import { getUser, updateUserDetails } from "../../services/api";
import { data, useNavigate } from "react-router-dom";
import CustomModal from "../CustomModal";
import EditPaymentMethod from "../../PopUpModal/EditPaymentModal";

const InputTextField = [
    {
        id:"1",
        type:"text",
        label:"Full Name",
        name:"userName",
    },
    {
        id:"2",
        type:"email",
        label:"Email Address",
        name:"email",
    },
    {
        id:"3",
        type:"text",
        label:"Gender",
        name:"gender",
    },
    {
        id:"4",
        type:"text",
        label:"Country",
        name:"country",
    },
]

const ProfilePage = ({userInfo,setUserInfo}) => {

    const [formdata,setFormData] = useState({})
    const [isEditing,setIsEditing] = useState(false)
    const [cards,setCards] = useState()
    const [selectedCard,setSelectedCard] = useState()

    const [modal,setShowModal] = useState(false)

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
    
    const onEditButton = () =>{
        setIsEditing((prev)=>!prev)
    }

    const onSave = (e) => {
        e.preventDefault()

        updateUserDetails(formdata)
        .then((res)=>{
            setUserInfo(res?.data?.data)
            setTimeout(()=>{
                navigate("/login")
            },1000)
        })
        .catch((err)=>{
            alert(err?.response?.data?.message)
        })
    }

    useEffect(() => {
        if (userInfo) {
          setCards([
            { id: 1, number: "xxxx xxxx xxxx 1234", expiration: "11/26", cvc: "123", name: userInfo.userName },
            { id: 2, number: "xxxx xxxx xxxx 6789", expiration: "12/27", cvc: "456", name: userInfo.userName },
            { id: 3, number: "xxxx xxxx xxxx 3468", expiration: "01/28", cvc: "789", name: userInfo.userName },
          ]);
        }
      }, [userInfo]);


    const onEditPencil = (card)=>{
        setSelectedCard(card)
        setShowModal(true)
    }


    return (
        <div className={`d-flex flex-column ${styles['profile-page']}`}>
            <div className={`d-flex align-center ${styles['upper-section']}`}>
                <div className={`d-flex align-center ${styles['profile-box']}`}>
                    <div className={`${styles['profile-img-icon']}`}>
                        <img src={profileImage} alt="profile-img" />
                    </div>
                    <p>{userInfo?.userName}</p>
                </div>
                <CustomButton title={isEditing ? "Save" : "Edit"} classes={styles['btn']} onClick={!isEditing? onEditButton : onSave}/>
            </div>
            <div className={`d-flex ${styles['input-profile']}`}>
                {
                    InputTextField?.map((input)=>{
                        return (
                            <InputField 
                                key={input?.id}
                                label={input?.label}
                                type={input?.type}
                                name={input?.name}
                                value={isEditing ? formdata[input.name] || "" : userInfo?.[input.name] || ""}
                                onChange={onChange}
                                classes={`${styles['input']}`}
                            />
                        )
                    })
                }
            </div>
            <Line classes={`${styles['line']}`}/>
            <p className={styles['payment-text']}>Saved Payment Methods</p>
            <div className={`d-flex ${styles['payment-list']}`}>
                {
                    cards?.map((card)=>{
                        return (
                            <div className={`d-flex align-center ${styles['payment-type']}`} key={card?.id}>
                                <div className={styles['payment-icon']}>
                                    <img src={paymentIcon} alt="payment-icon" />
                                </div>
                                <div className={`d-flex flex-column align-center${styles['payment-description']}`}>
                                    <p>{card?.number}</p>
                                    <p>{card?.name}</p>
                                </div>
                                <div className={styles['edit-icon']} style={{cursor:"pointer"}} onClick={()=>onEditPencil(card)}>
                                    <img src={editpencil} alt="pencil-icon" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>       
            {
                modal && 
                <CustomModal>
                    <EditPaymentMethod
                        setShowModal={setShowModal}
                        setSelectedCard={setSelectedCard}
                        selectedCard={selectedCard}
                        setCards={setCards}
                        cards={cards}
                    />
                </CustomModal>
            }
        </div>
    )
}

export default ProfilePage;