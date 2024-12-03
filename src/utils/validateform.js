const validateName = /^[a-zA-Z0-9_]+$/;
const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const minLength = 8;
const passwordvalidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
const phoneRegex = /^[6-9]\d{9}$/;

function validateForm(userData,formtype){

    const err = {};

    if (formtype === "registration"){
        if(!userData?.userName){
            err.userName = "Name is required*"
        } else if(userData?.userName.length < 4){
            err.name = "Name must be greater than or equal to 4*"
        } else if(!validateName.test(userData?.userName)){
            err.userName = "Name can only contain letters, numbers, and underscores*"
        }

        if(!userData?.phoneNo){
            err.phoneNo = "PhoneNo. is required*"
        } else if(userData?.phoneNo.length < 10 ){
            err.phoneNo = `Phone No. must be 10 digit number*`
        } else if(!phoneRegex.test(userData?.phoneNo)){
            err.phoneNo = "Phone No. must be valid 10 digit number*"
        }
    }

    if(!userData?.email){
        err.email = "Email is required*"
    } else if(!emailValidation.test(userData?.email)){
        err.email = "Please enter a valid email address*"
    }
    
    if(!userData?.password){
        err.password = "Password is required*"
    } else if(userData?.password.length < minLength){
        err.password = `Password must be greater than ${minLength}*`
    } else if(!passwordvalidation.test(userData?.password)){
        err.password = "Password must be at least one uppercase letter, one lowercase letter, one number, and one special character*"
    }

    const isValid = Object.keys(err).length === 0;
    return {err,isValid}
}

export default validateForm;