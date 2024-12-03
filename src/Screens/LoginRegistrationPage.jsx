import BannerImg from "../assets/banner.png";
import styles from "./LoginRegistration.module.css";
import OrderLogo from "../assets/LOGO.png"
import { inputTextField } from "../Constants/inputField";
import Footer from "../Components/FooterComponent";
import CustomButton from "../Components/ButtonComponent";
import InputField from "../Components/InputComponent";
import { useEffect, useState } from "react";
import validateForm from "../utils/validateform";
import { login, register } from "../services/api";
import { useNavigate } from "react-router-dom";

function LoginRegistrationPage({screen}){

    const [userData,setUserData] = useState({});
    const [errors,setErrors] = useState(null);
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()

    const onInputChange = (e) => {
        setUserData(
            {
                ...userData,
                [e.target.name]:e.target.value
            }
        )
    }

    const onSubmit = async(e) => {
        e.preventDefault()

        const {err,isValid} = validateForm(userData,"registration");

        if(!isValid){
            setErrors({...err})
            return
        }else {
            setErrors(null)
            if(loading) return
            setLoading(true)
            try {
                const res = await register(userData);
                
                if (res.status === 201) {
                    alert("User Registered successfully");
                    setTimeout(() => {
                        navigate("/login");
                    }, 1000);
                }
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    alert(`${error.response.data.message}`);
                }else {
                    alert("Something went wrong. Please try again.");
                }
            } finally {
                setLoading(false)
            }
        }
    }

    const onLogin = async(e)=>{
        e.preventDefault()

        const {isValid,err} = validateForm(userData);

        if(!isValid){
            setErrors({...err})
            return

        } else {
            setErrors(null)
            if(loading) return;
            setLoading(true);
            
            try {
                const res = await login(userData);
                console.log(res)
                        
                if (res.status === 201) {

                    localStorage.setItem("token",`${res?.data?.token}`)
                    localStorage.setItem("user",JSON.stringify(res?.data?.data))

                    alert("Logged in Successfully");
                    setTimeout(() => {
                        navigate("/homepage")
                    }, 1000);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    alert(`${error.response.data.message}`);
                } else if(error.response && error.response.status === 404) {
                    alert(`${error.response.data.message}`);
                } else {
                    alert("Something went wrong. Please try again.");
                }
            } finally {
                setLoading(false);
            }
        }
    };

    useEffect(()=>{
        setUserData({})
        setErrors(null)
    },[screen])
    
    return (
        <>
            <div className={`${styles['main-page']}`}>
                <section className={`d-flex`}>
                    <div className={`d-flex flex-column justify-center align-center ${styles['left-section']}`}>
                        <div className={styles['order-logo']}>
                            <img src={OrderLogo} alt="OrderLogo"/>
                        </div>
                        <p className={`${styles['welcome-text']} ${styles['text-width']} ${styles['margin-top-10']}`}>Welcome  👋</p>
                        <p className={`${styles['headline-text']} ${styles['text-width']} ${styles['margin-top-10']}`}>Today is a new day. It's your day. You shape it. 
                        Sign up to start ordering.</p>
                        <form className={`${styles['form-field']} ${styles['text-width']} ${styles['margin-top-10']}`}>
                            {
                                inputTextField(screen)?.map((input) => {
                                    return (
                                        <div key={input?.id} className={styles['input-field']}>
                                            <InputField
                                                label={input?.label}
                                                type={input?.type}
                                                placeholder={input?.placeholder}
                                                name={input?.name}
                                                value={userData?.[input?.name] || ""}
                                                onChange={onInputChange}
                                            />
                                            {
                                                errors?.[input?.name]
                                                ? <p className={styles.error}>{errors?.[input?.name]}</p>
                                                : null
                                            }
                                        </div>
                                    );
                                })
                            }
                        </form>
                        <CustomButton
                            title={
                                screen === "login" ? "Sign in" : "Continue"
                            }
                            type = "submit"
                            classes={`${styles['btn']}`}
                            onClick={ screen === "login" ? onLogin : onSubmit }
                            disabled={loading}
                        />
                        {
                            screen === "login"
                            ? <p className={`${styles['asking-text']} ${styles['margin-top-10']}`}>
                                Don't you have an account? <span onClick={()=>navigate("/register")} style={{cursor: "pointer"}}>Sign up</span>
                            </p>
                            : <p className={`${styles['asking-text']} ${styles['margin-top-10']}`}>
                                Already have an account? <span onClick={()=>navigate("/login")} style={{cursor: "pointer"}}>Sign in</span>
                            </p>
                        }
                    </div>
                    <div className={styles['right-section']}>
                        <img src={BannerImg} alt="BannerImg" />
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    )
}

export default LoginRegistrationPage;