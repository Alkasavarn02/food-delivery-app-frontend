import InputField from "../../Components/InputComponent";
import styles from "./editPayment.module.css"
import CustomButton from "../../Components/ButtonComponent";

const EditPaymentMethod = ({setShowModal,setSelectedCard,selectedCard={},setCards,cards=[]}) => {


    const InputFormField = [
        {
            id:"1",
            type:"text",
            placeholder:"Card Number",
            value:selectedCard?.number,
            onChange: (e) => setSelectedCard({...selectedCard,number:e.target.value})
        },
        {
            id:"2",
            type:"text",
            placeholder:"Expiration",
            value:selectedCard?.expiration,
            onChange: (e) => setSelectedCard({...selectedCard,expiration:e.target.value})
        },
        {
            id:"3",
            type:"text",
            placeholder:"CVC",
            value:selectedCard?.cvc,
            onChange: (e) => setSelectedCard({...selectedCard,cvc:e.target.value})
        },
        {
            id:"4",
            type:"text",
            placeholder:"Name on Card",
            value:selectedCard?.name,
            onChange: (e) => setSelectedCard({...selectedCard,name:e.target.value})
        },
    ]

    const onCancel = () => {
        setShowModal(false)
    }

    const handleSaveChanges = () => {
            setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === selectedCard.id ? selectedCard : card
            )
            );
            setShowModal(false); // Close modal
      };

    const onRemove = () => {
        setCards(cards.filter((card)=>card!=selectedCard))
        setShowModal(false)
    }

    return (
        <div className={`d-flex flex-column ${styles['edit-payment']}`}>
            <div className={styles['upper-section']}>
                <p className={styles['edit-payment-text']}>Edit Payment Method</p>
                {
                    InputFormField?.map((eachInput)=>{
                        return (
                            <InputField
                                key={eachInput?.id}
                                label={eachInput?.placeholder}
                                type={eachInput?.type}
                                value={eachInput?.value}
                                onChange={eachInput?.onChange}
                            />
                        )
                    })
                }
            </div>
            <div className={`d-flex align-center ${styles['btn-section']}`}>
                <CustomButton title={"Remove"} classes={`${styles['remove']}`} onClick={onRemove}/>
                <div className={`d-flex ${styles['left-btn']}`}>
                    <CustomButton title={"Cancel"} classes={`${styles['cancel']}`} onClick={onCancel}/>
                    <CustomButton title={"Save Changes"} classes={`${styles['save']}`} onClick={handleSaveChanges}/>
                </div>
            </div>
        </div>
    )
}


export default EditPaymentMethod;
