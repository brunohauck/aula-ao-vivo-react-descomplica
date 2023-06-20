import axios from "axios";

const url = "http://localhost:3004/users"

export const getAllUsers = async () => {
    return await axios.get(`${url}`) 
}
export const addUser = async (name, email, phone) => {
    const userData = {
        name: name,
        email: email,
        phone: phone
    };
    console.log(url)
    return await axios.post(url,userData)
}