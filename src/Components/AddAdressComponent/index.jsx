import styles from "./address.module.css";
import plusIcon from "../../assets/plusIcon.png";
import { useState } from "react";
import CustomModal from "../CustomModal";
import PopUpModal from "../../PopUpModal";

const AddAddress = ({userInfo=[],setUserInfo}) => {

    const [showModal,setShowModal] = useState(false)
   
    const onAddAddress = () => {
        setShowModal(true)
    }
    
    return (
        <div className={`d-flex ${styles['add-address-section']}`}>
            <div className={`d-flex flex-column justify-center align-center ${styles['add-address-icon']}`}>
                <div className={styles['plusicon']}  style={{cursor:"pointer"}} onClick={onAddAddress}>
                    <img src={plusIcon} alt="plusIcon" />
                </div>
                <p>
                    Add Address
                </p>
            </div>
            {
                userInfo?.address?.map((eachAddress,index)=>{
                    return(
                        <div 
                            className={`d-flex flex-column ${styles['address-section']}`}
                            key={eachAddress?._id}
                            onClick={(e)=>{console.log(e.target.name)}}
                        >
                            <div className={`d-flex align-center ${styles['header-section']}`}>
                                <p className={styles['para-1']}>{userInfo?.userName}</p>
                                {
                                    index === 0 ? <p className={styles['default-text']}>Default</p> : null
                                }
                            </div>
                            <p className={styles['para-2']}>{eachAddress?.fullAddress}</p>
                            <p className={styles['para-3']}>Phone Number: {eachAddress?.phoneNo}</p>
                            <p className={styles['para-4']} style={{cursor:"pointer"}}>Edit | Remove</p>
                        </div>
                    )
                })
            }
            {
                showModal && 
                <CustomModal>
                    <PopUpModal userInfo={userInfo} setUserInfo={setUserInfo} setShowModal={setShowModal}/>
                </CustomModal>
            }
        </div>
    )
}

export default AddAddress;
