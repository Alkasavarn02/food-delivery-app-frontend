import axios from "axios";

export const register = async(data)=>{

    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/register`, data ,{
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
        }
    });
    return res;
}

export const login = async(data)=>{

    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/login`, data ,{
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
        }
    });
    return res;
}

export const getRestaurantDetails = async(restaurant) => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/restaurants/${restaurant}`, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        withCredentials:true,
    });
    return res;
};

export const getUser = async() => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/getUser`, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        withCredentials:true,
    });
    return res;
};

export const updateUserDetails = async(data) => {
    const res = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/v1/update-details`, data , {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        withCredentials:true,
    });
    return res;
};

export const deleteCartItems = async(data) => {
    const res = await axios.patch(`${import.meta.env.VITE_BASE_URL}/api/v1/delete-items`, data , {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        withCredentials:true,
    });
    return res;
};

export const addAddress = async(data) => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/add-address`, data , {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        withCredentials:true,
    });
    return res;
};

