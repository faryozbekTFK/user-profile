import axios from "axios";

interface UserInterface {
    name: string;
    email: string;
    bio: string;
}

const baseURL = 'http://localhost:3005'

export const axiosPublic = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getUser = async () => {
    const response = await axiosPublic.get('/profile');
    return response?.data
}

export const editUser = async (user: UserInterface) => {
    const response = await axiosPublic.put('/profile', user);
    console.log(response);

}