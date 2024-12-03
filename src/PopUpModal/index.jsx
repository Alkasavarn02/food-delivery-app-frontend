import { useEffect, useState } from "react";
import styles from "./modal.module.css";
import CustomButton from "../Components/ButtonComponent";
import AddAddressIcon from "../assets/AddAddress.png"
import { addAddress, getUser } from "../services/api";

const addAddressInputField = [
    {
        id:"1",
        type:"text",
        placeholder:"City/District",
        name:"city",
    },
    {
        id:"2",
        type:"number",
        placeholder:"Pin Code",
        name:"pinCode",
    },
    {
        id:"3",
        type:"number",
        placeholder:"Phone Number",
        name:"phoneNo",
    },
]

const PopUpModal = ({setShowModal,setUserData}) => {

    const [addressData,setAddressData] = useState({})

    const onSave = (e) => {
        e.preventDefault();
        addAddress(addressData)
        .then((res)=>{
            setShowModal(false)
            return getUser()
        })
        .then((res)=>{
            setUserData(res?.data?.data)
        })
        .catch((err)=>{
            alert(err?.response?.data?.message)
        })
    } 

    const onHandleChange = (e) => {
        setAddressData({
            ...addressData,
            [e.target.name] : e.target.value
        })
    }


    return (
        <div className={`d-flex flex-column ${styles['modal-section']}`}>
            <div className={`d-flex align-center ${styles['add-address-text']}`}>
                <div className={styles['add-address-img']}>
                    <img src={AddAddressIcon} alt="add-address-icon" />
                </div>
                <p>Add Address</p>
            </div>
            <div className={`d-flex ${styles['upper-section']}`}>
                <select id="state" className={styles['drop-down-section']} name="state" value={addressData?.state || ""} onChange={onHandleChange}>
                    <option value="state"style={{display:"none"}}>State</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Up">Up</option>
                    <option value="Rajashthan">Rajasthan</option>
                    <option value="Maharashtra">Maharashtra</option>
                </select>
                {
                    addAddressInputField?.map((eachAddress) => {
                        return (
                            <input 
                                key={eachAddress?.id} 
                                type={eachAddress?.type} 
                                placeholder={eachAddress?.placeholder}
                                name={eachAddress?.name}
                                value={addressData?.[eachAddress?.name] || ""}
                                onChange={onHandleChange}
                                className={styles['input-field']}
                            />
                        )
                    })
                }
            </div>
            <textarea
                type="text"
                placeholder="Enter Full Address"
                name="fullAddress"
                rows={8}
                value={addressData?.['fullAddress']}
                onChange={onHandleChange}
                className={styles['text-area']}
            />
            <div className={`d-flex ${styles['btn-section']}`}>
                <CustomButton title={"Save"} classes={`${styles['btn']}`} onClick={onSave}/>
            </div>
        </div>
    )
}

export default PopUpModal;